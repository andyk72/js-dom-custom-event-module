import DomCustomEvent, { EVENT_OPTIONS_DEFAULT } from "./dom-custom-event";

const EVENT_WINDSURF = "WINDSURF";

/**
 * Returns an EVENT_WINDSURF Custom Event with detail and options
 * @param {Object} detail
 *  Holds the event related data. Varies from event to event.
 * @param {Object} options
 *  .bubbles {Boolean}
 *  .cancelable {Boolean}
 */
export default (detail = {}, options = EVENT_OPTIONS_DEFAULT) => {
  return DomCustomEvent.eventCreate(EVENT_WINDSURF, detail, options);
};

export { EVENT_WINDSURF };
