import './Resume.css';

import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import ResumeHeader from "./header/ResumeHeader";
import ResumeFooter from './footer/ResumeFooter';

import timelineElements from './data';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Resume() {
  const workIconStyles = { background: "#A5B583" };
  const schoolIconStyles = { background: "#B583A5" };

  return (
    <div>
      <ResumeHeader />
      <VerticalTimeline>
        {timelineElements.map((element) => {
          const isWorkIcon = element.icon === "work";
          const showButton = Boolean(element.buttonText);
          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a
                  className={`button ${isWorkIcon ? "workButton" : "schoolButton"}`}
                  target='_blank'
                  rel="noopener noreferrer"
                  href={element.buttonHref ?? '#'}
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      <ResumeFooter />
    </div>
  );
}

export default Resume;
