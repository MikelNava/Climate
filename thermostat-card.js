class CustomThermostatCard extends HTMLElement {
  setConfig(config) {
    if (!config || !config.entity) {
      throw new Error('Error: You need to specify an entity');
    }

    this.config = config;
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
    const entityState = this.hass.states[this.config.entity];
    const currentTemperature = entityState.attributes.current_temperature;
    const targetTemperature = entityState.attributes.temperature;

    this.shadowRoot.innerHTML = `
      <style>
        /* Estilos CSS para la tarjeta */
        /* Personaliza los estilos según tus preferencias */
      </style>
      <div class="thermostat-card">
        <div class="temperature">
          <span class="label">Actual:</span>
          <span class="value">${currentTemperature}°C</span>
        </div>
        <div class="temperature">
          <span class="label">Objetivo:</span>
          <span class="value">${targetTemperature}°C</span>
        </div>
        <div class="controls">
          <button @click="${this.decreaseTemperature}">-</button>
          <button @click="${this.increaseTemperature}">+</button>
        </div>
      </div>
    `;
  }

  // Función para disminuir la temperatura objetivo
  decreaseTemperature() {
    const newTemperature = parseFloat(this.config.target_temperature) - 0.5;
    this.hass.callService('climate', 'set_temperature', {
      entity_id: this.config.entity,
      temperature: newTemperature,
    });
  }

  // Función para aumentar la temperatura objetivo
  increaseTemperature() {
    const newTemperature = parseFloat(this.config.target_temperature) + 0.5;
    this.hass.callService('climate', 'set_temperature', {
      entity_id: this.config.entity,
      temperature: newTemperature,
    });
  }

  set hass(hass) {
    this._hass = hass;
    this.render();
  }
}

customElements.define('custom-thermostat-card', CustomThermostatCard);
