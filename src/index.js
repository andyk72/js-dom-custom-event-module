import "./styles.css";

import DomCustomEvent from "./dom-custom-event";
import eventWindsurfCreate, { EVENT_WINDSURF } from "./eventWindsurf";

const $dispatcher = document.getElementById("event-dispatcher");
const $dispatcher2 = document.getElementById("event-dispatcher2");
const $listener = document;

// 1. Create a Custom Event
const evt = eventWindsurfCreate({ spot: "Hyeres", knots: "25" });
// 2. Put a listener in listening
DomCustomEvent.listen(EVENT_WINDSURF, $listener);
// 3. Dispatch the event when you want
DomCustomEvent.dispatch($dispatcher, evt);

// 3a. Dispatch event by clicking on the $dispatcher element
$dispatcher.addEventListener("click", evt => {
  const spot = evt.target.getAttribute("x-data-spot");
  const knots = evt.target.getAttribute("x-data-knots");

  DomCustomEvent.dispatch(
    evt.target,
    eventWindsurfCreate({ spot: spot, knots: knots })
  );
});

// 3b. Dispatch event by clicking on another $dispatcher element
$dispatcher2.addEventListener("click", evt => {
  const spot = evt.target.getAttribute("x-data-spot");
  const knots = evt.target.getAttribute("x-data-knots");

  DomCustomEvent.dispatch(
    evt.target,
    eventWindsurfCreate({ spot: spot, knots: knots })
  );
});
