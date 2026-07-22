from esphome.components.esp32 import add_idf_sdkconfig_option
import esphome.config_validation as cv
from esphome.const import __version__ as ESPHOME_VERSION

CODEOWNERS = ["@dentra"]
SUPPORTED_ESPHOME_VERSION = "2026.7.0"


def validate_esphome_version(config):
    if ESPHOME_VERSION != SUPPORTED_ESPHOME_VERSION:
        raise cv.Invalid(
            "OpenQuatt's temporary web_server_idf override requires ESPHome "
            f"{SUPPORTED_ESPHOME_VERSION}, found {ESPHOME_VERSION}"
        )
    return config

CONFIG_SCHEMA = cv.All(
    cv.Schema({}),
    cv.only_on_esp32,
    validate_esphome_version,
)


async def to_code(config):
    # Increase the maximum supported size of headers section in HTTP request packet to be processed by the server
    add_idf_sdkconfig_option("CONFIG_HTTPD_MAX_REQ_HDR_LEN", 1024)
