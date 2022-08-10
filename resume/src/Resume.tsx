import './Resume.css';

import { ReactComponent as WorkIcon } from "./work.svg"
import { ReactComponent as SchoolIcon } from "./school.svg"
import ResumeHeader from "./ResumeHeader"

import timelineElements from './data';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css"

function Resume() {
  const workIconStyles = { background: "#A5B583"};
  const schoolIconStyles = { background : "#B583A5"}; 

  return (
    <div>
      {'*/ TODO:  Parameterize Component; Start folder restructuring if needed. /*'}
      <ResumeHeader></ResumeHeader>
      <VerticalTimeline>
        {
          timelineElements.map(element => {
            const isWorkIcon = element.icon === "work"
            const showButton = 
              element.buttonText !== undefined
              && element.buttonText !== null
              && element.buttonText !== ""
            return (
              <VerticalTimelineElement
                key={element.id}
                date={element.date}
                dateClassName="date"
                iconStyle={ isWorkIcon ? workIconStyles : schoolIconStyles }
                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                >
                  <h3 className="vertical-timeline-element-title">
                    {element.title}
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    {element.location}
                  </h5>
                  <p id="description">{element.description}</p>
                  {showButton &&(
                    <a className={`button ${ isWorkIcon ? "workButton" : "schoolButton"}`}
                    href="/">
                      {element.buttonText}
                    </a>
                  )}
                </VerticalTimelineElement>
            )
          })
        }
      </VerticalTimeline>
    </div>
  );
}

export default Resume;
