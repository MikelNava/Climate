"""Thermostat_card component."""

import asyncio
import logging

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant

# The domain of your integration. Should be unique and match your directory structure.
DOMAIN = "thermostat-card"

# List of platforms that your component adds support for.
PLATFORMS = []

# The logger instance for your component. Used for debugging.
_LOGGER = logging.getLogger(__name__)

# Config entry setup is not required for a card, but it's here for reference.
async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up a custom_card config entry."""
    # Your setup code for the config entry, if needed.
    return True

async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Unload a config entry."""
    # Your unload code for the config entry, if needed.
    return True

