## Javascript dom-custom-event module

Module featuring a Custom Event manager

## API

**eventCreate(eventName, detail, options)**  
@param {String} eventName  
@param {Object} detail optional  
@param {Object} options optional  
 .bubbles {Boolean}  
 .cancelable {Boolean}

**listen(eventName, \$listener)**  
@param {String} eventName  
@param {HTMLElement} \$listener optional

**dispatch(\$dispatcher, evt)**
@param {HTMLElement} \$dispatcher
@param {CustomEvent} evt

## Usage

    // Import DomCustomEvent
    import DomCustomEvent from "./dom-custom-event";

    // Set event name, dispatcher DOM element and listener DOM element
    const eventName = 'EVT_WINDSURF';
    const $dispatcher = document.getElementById("event-dispatcher");
    const $listener = document;

    // 1. Create the event
    const evt = eventCreate(eventName, { spot: "Hyeres", knots: "25" });
    // 2. Put the listener in listening state
    DomCustomEvent.listen(eventName, $listener);
    // 3. Dispatch the event
    DomCustomEvent.dispatch($dispatcher, evt);

## Folders

src/dom-custom-content/index.js -> the module  
src/index.js -> sample usage js  
src/eventWindsurf.js -> sample usage js  
index.html -> sample usage HTML

## TODO

1. Refactor directories structure (src, dist, dist/dom-custom-event, dist/sample-usage)
2. Provide minificated version (dist/dom-custom-event/dom-custom-event-min.js)
