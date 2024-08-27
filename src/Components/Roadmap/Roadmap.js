import "./Roadmap.css";
import timelineElements from "./timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Header from "../Header/Header";
function Roadmap() {
  return (
    <div className="Roadmap">
        <Header />
      <VerticalTimeline>
        {timelineElements.map((element) => {
          return (
            <VerticalTimelineElement
              key={element.id} // Use id as the key
              
              
              icon={
                <div className="timeline-icon">{element.id}</div> // Display the id as the icon
              }
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              <button class="button-29" role="button">{element.buttonText}</button>

            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Roadmap;