const EVENT_OPTIONS_DEFAULT = {
  bubbles: true,
  cancelable: true
};
const $EVENT_LISTENER_DEFAULT = document;

const DomCustomEvent = {
  /**
   * Creates the eventName Custom Event with detail detail property and options (bubbles and cancelable)
   * @param {String} eventName
   * @param {Object} detail optional
   *  Holds the event related data. Varies from event to event.
   * @param {Object} options optional
   *  .bubbles {Boolean}
   *  .cancelable {Boolean}
   */
  eventCreate: (eventName, detail = {}, options = EVENT_OPTIONS_DEFAULT) => {
    return new CustomEvent(eventName, {
      detail: detail,
      bubbles: options.bubbles,
      cancelable: options.cancelable
    });
  },

  /**
   * Puts $listener HTMLElement in listening state for eventName event
   * @param {String} eventName
   * @param {Function} eventHandler
   * @param {HTMLElement} $listener
   */
  listen: (eventName, eventHandler, $listener = $EVENT_LISTENER_DEFAULT) => {
    $listener.addEventListener(eventName, eventHandler);
  },

  /**
   * Have $dispatcher HTMLElement dispatch the evt CustomEvent
   * @param {HTMLElement} $dispatcher
   * @param {CustomEvent} evt
   */
  dispatch: ($dispatcher, evt) => {
    $dispatcher.dispatchEvent(evt);
  }
};

export default DomCustomEvent;

export { EVENT_OPTIONS_DEFAULT };
