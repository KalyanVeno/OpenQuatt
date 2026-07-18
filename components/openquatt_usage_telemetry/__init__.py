import esphome.codegen as cg
import esphome.config_validation as cv
from esphome.components import switch
from esphome.components.esp32 import (
    add_idf_sdkconfig_option,
    add_idf_component,
    idf_version,
    include_builtin_idf_component,
)
from esphome.const import ENTITY_CATEGORY_CONFIG
from esphome.core import CORE


CONF_BROKER = "broker"
CONF_PORT = "port"
CONF_USERNAME = "username"
CONF_PASSWORD = "password"
CONF_TOPIC = "topic"
CONF_DEFAULT_ENABLED = "default_enabled"
CONF_INTERVAL = "interval"
CONF_INITIAL_DELAY_MIN = "initial_delay_min"
CONF_INITIAL_DELAY_MAX = "initial_delay_max"
CONF_JITTER = "jitter"
CONF_FIRMWARE_VERSION = "firmware_version"
CONF_RELEASE_CHANNEL = "release_channel"
CONF_HARDWARE_PROFILE = "hardware_profile"
CONF_TOPOLOGY = "topology"
CONF_CONNECTION = "connection"

openquatt_usage_telemetry_ns = cg.esphome_ns.namespace("openquatt_usage_telemetry")
OpenQuattUsageTelemetry = openquatt_usage_telemetry_ns.class_(
    "OpenQuattUsageTelemetry", switch.Switch, cg.Component
)


def validate_config(config):
    if config[CONF_INITIAL_DELAY_MAX] < config[CONF_INITIAL_DELAY_MIN]:
        raise cv.Invalid("initial_delay_max must be greater than or equal to initial_delay_min")
    if config[CONF_JITTER] >= config[CONF_INTERVAL]:
        raise cv.Invalid("jitter must be shorter than interval")
    if config[CONF_PASSWORD] and not config[CONF_USERNAME]:
        raise cv.Invalid("username is required when password is configured")
    return config


CONFIG_SCHEMA = cv.All(
    switch.switch_schema(
        OpenQuattUsageTelemetry,
        icon="mdi:chart-box-outline",
        entity_category=ENTITY_CATEGORY_CONFIG,
        default_restore_mode="DISABLED",
    )
    .extend(
        {
            cv.Optional(CONF_BROKER, default=""): cv.All(cv.string_strict, cv.Length(max=128)),
            cv.Optional(CONF_PORT, default=8883): cv.port,
            cv.Optional(CONF_USERNAME, default=""): cv.All(cv.string_strict, cv.Length(max=96)),
            cv.Optional(CONF_PASSWORD, default=""): cv.sensitive(
                cv.All(cv.string_strict, cv.Length(max=192))
            ),
            cv.Required(CONF_TOPIC): cv.All(cv.publish_topic, cv.Length(max=128)),
            cv.Optional(CONF_DEFAULT_ENABLED, default=True): cv.boolean,
            cv.Optional(CONF_INTERVAL, default="4h"): cv.positive_time_period_milliseconds,
            cv.Optional(CONF_INITIAL_DELAY_MIN, default="15min"): cv.positive_time_period_milliseconds,
            cv.Optional(CONF_INITIAL_DELAY_MAX, default="60min"): cv.positive_time_period_milliseconds,
            cv.Optional(CONF_JITTER, default="15min"): cv.positive_time_period_milliseconds,
            cv.Required(CONF_FIRMWARE_VERSION): cv.All(cv.string_strict, cv.Length(max=32)),
            cv.Required(CONF_RELEASE_CHANNEL): cv.All(cv.string_strict, cv.Length(max=16)),
            cv.Required(CONF_HARDWARE_PROFILE): cv.All(cv.string_strict, cv.Length(max=32)),
            cv.Required(CONF_TOPOLOGY): cv.All(cv.string_strict, cv.Length(max=16)),
            cv.Required(CONF_CONNECTION): cv.All(cv.string_strict, cv.Length(max=16)),
        }
    )
    .extend(cv.COMPONENT_SCHEMA),
    validate_config,
)


async def to_code(config):
    if CORE.is_esp32:
        if idf_version() >= cv.Version(6, 0, 0):
            add_idf_component(name="espressif/mqtt", ref="1.0.0")
        else:
            include_builtin_idf_component("mqtt")
        add_idf_sdkconfig_option("CONFIG_MBEDTLS_CERTIFICATE_BUNDLE", True)
        add_idf_sdkconfig_option("CONFIG_MBEDTLS_CERTIFICATE_BUNDLE_DEFAULT_FULL", True)

    cg.add_global(openquatt_usage_telemetry_ns.using)
    var = await switch.new_switch(config)
    await cg.register_component(var, config)

    cg.add(var.set_broker(config[CONF_BROKER]))
    cg.add(var.set_port(config[CONF_PORT]))
    cg.add(var.set_username(config[CONF_USERNAME]))
    cg.add(var.set_password(config[CONF_PASSWORD]))
    cg.add(var.set_topic(config[CONF_TOPIC]))
    cg.add(var.set_default_enabled(config[CONF_DEFAULT_ENABLED]))
    cg.add(var.set_interval_ms(config[CONF_INTERVAL].total_milliseconds))
    cg.add(var.set_initial_delay_min_ms(config[CONF_INITIAL_DELAY_MIN].total_milliseconds))
    cg.add(var.set_initial_delay_max_ms(config[CONF_INITIAL_DELAY_MAX].total_milliseconds))
    cg.add(var.set_jitter_ms(config[CONF_JITTER].total_milliseconds))
    cg.add(var.set_firmware_version(config[CONF_FIRMWARE_VERSION]))
    cg.add(var.set_release_channel(config[CONF_RELEASE_CHANNEL]))
    cg.add(var.set_hardware_profile(config[CONF_HARDWARE_PROFILE]))
    cg.add(var.set_topology(config[CONF_TOPOLOGY]))
    cg.add(var.set_connection(config[CONF_CONNECTION]))
