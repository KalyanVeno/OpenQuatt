#pragma once

#include <array>
#include <atomic>
#include <cstdint>
#include <string>

#include <freertos/FreeRTOS.h>
#include <freertos/semphr.h>
#include <freertos/task.h>
#include "esphome/components/switch/switch.h"
#include "esphome/core/component.h"
#include "esphome/core/preferences.h"
#include "mqtt_client.h"

namespace esphome {
namespace openquatt_usage_telemetry {

class OpenQuattUsageTelemetry : public switch_::Switch, public Component {
 public:
  void set_broker(const std::string &broker) { this->broker_ = broker; }
  void set_port(uint16_t port) { this->port_ = port; }
  void set_username(const std::string &username) { this->username_ = username; }
  void set_password(const std::string &password) { this->password_ = password; }
  void set_topic(const std::string &topic) { this->topic_ = topic; }
  void set_interval_ms(uint32_t interval_ms) { this->interval_ms_ = interval_ms; }
  void set_initial_delay_min_ms(uint32_t delay_ms) { this->initial_delay_min_ms_ = delay_ms; }
  void set_initial_delay_max_ms(uint32_t delay_ms) { this->initial_delay_max_ms_ = delay_ms; }
  void set_jitter_ms(uint32_t jitter_ms) { this->jitter_ms_ = jitter_ms; }
  void set_firmware_version(const std::string &version) { this->firmware_version_ = version; }
  void set_release_channel(const std::string &channel) { this->release_channel_ = channel; }
  void set_hardware_profile(const std::string &profile) { this->hardware_profile_ = profile; }
  void set_topology(const std::string &topology) { this->topology_ = topology; }
  void set_connection(const std::string &connection) { this->connection_ = connection; }

  void setup() override;
  void loop() override;
  void dump_config() override;
  float get_setup_priority() const override;

  bool is_configured() const { return !this->broker_.empty() && !this->topic_.empty(); }

 protected:
  void write_state(bool state) override;

  static constexpr uint32_t STORAGE_MAGIC = 0x4F515553;
  static constexpr uint16_t STORAGE_VERSION = 1;
  static constexpr uint32_t SESSION_TIMEOUT_MS = 30000;
  static constexpr uint32_t RETRY_MIN_MS = 5UL * 60UL * 1000UL;
  static constexpr uint32_t RETRY_MAX_MS = 60UL * 60UL * 1000UL;
  static constexpr uint32_t RETRY_JITTER_MS = 60UL * 1000UL;
  static constexpr uint32_t MQTT_START_TASK_STACK_SIZE = 24576;
  static constexpr int MQTT_TASK_STACK_SIZE = 12288;

  struct Storage {
    uint32_t magic;
    uint16_t version;
    uint8_t enabled;
    uint8_t installation_id_present;
    std::array<uint8_t, 16> installation_id;
  };

  static_assert(sizeof(Storage) == 24, "Usage telemetry storage layout changed unexpectedly");

  bool load_storage_(Storage *storage);
  bool save_storage_(const Storage &storage);
  bool ensure_installation_id_(Storage *storage);
  void apply_storage_(const Storage &storage);
  void schedule_initial_publish_();
  void schedule_regular_publish_();
  void schedule_retry_();
  void start_publish_session_();
  bool start_client_();
  void finish_publish_session_(bool succeeded);
  void build_payload_();
  std::string read_hardware_revision_() const;
  uint32_t random_delay_(uint32_t min_ms, uint32_t max_ms) const;
  static bool time_reached_(uint32_t now_ms, uint32_t target_ms);
  static std::string format_uuid_(const std::array<uint8_t, 16> &bytes);
  static std::string random_message_id_();
  static void start_client_task_(void *arg);
  static void mqtt_event_handler_(void *handler_args, esp_event_base_t base, int32_t event_id, void *event_data);

  std::string broker_;
  uint16_t port_{8883};
  std::string username_;
  std::string password_;
  std::string topic_;
  uint32_t interval_ms_{4UL * 60UL * 60UL * 1000UL};
  uint32_t initial_delay_min_ms_{15UL * 60UL * 1000UL};
  uint32_t initial_delay_max_ms_{60UL * 60UL * 1000UL};
  uint32_t jitter_ms_{15UL * 60UL * 1000UL};
  std::string firmware_version_;
  std::string release_channel_;
  std::string hardware_profile_;
  std::string topology_;
  std::string connection_;

  ESPPreferenceObject pref_;
  std::array<uint8_t, 16> installation_id_bytes_{};
  std::string installation_id_;
  std::string payload_;
  esp_mqtt_client_handle_t mqtt_client_{nullptr};
  SemaphoreHandle_t runtime_lock_{nullptr};
  std::atomic<bool> enabled_{false};
  std::atomic<bool> session_active_{false};
  std::atomic<bool> finishing_session_{false};
  std::atomic<bool> start_task_running_{false};
  std::atomic<bool> publish_succeeded_{false};
  std::atomic<bool> publish_failed_{false};
  std::atomic<int> pending_message_id_{-1};
  uint32_t session_started_ms_{0};
  uint32_t next_publish_ms_{0};
  uint8_t consecutive_failures_{0};
};

}  // namespace openquatt_usage_telemetry
}  // namespace esphome
