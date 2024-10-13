import { useState } from "react";
import SubCard1 from "./SubCard1";

export default function NavigationCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpander = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="NavigationCard"
      onMouseEnter={toggleExpander}
      onMouseLeave={toggleExpander}
    >
      <div className="NavigationHeader">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3em"
            height="3em"
            viewBox="0 0 28 28"
          >
            <path
              fill="currentColor"
              d="M15.408 3.498a2.25 2.25 0 0 0-2.816 0l-7.75 6.217A2.25 2.25 0 0 0 4 11.47v11.28A2.25 2.25 0 0 0 6.25 25h2.5A2.25 2.25 0 0 0 11 22.75v-5.5c0-.69.56-1.25 1.25-1.25h3.5c.69 0 1.25.56 1.25 1.25v5.5A2.25 2.25 0 0 0 19.25 25h2.5A2.25 2.25 0 0 0 24 22.75V11.47a2.25 2.25 0 0 0-.842-1.755z"
            />
          </svg>
        </div>

        <div className="CardHeaderText">My Portfolio</div>

        <div className="CardExpander">
          {isExpanded && (
            <svg
              width="21"
              height="12"
              viewBox="0 0 21 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3923 11.5L6.20405e-05 -1.81705e-06L20.7847 0L10.3923 11.5Z"
                fill="#D9D9D9"
              />
            </svg>
          )}

          {!isExpanded && (
            <svg
              width="12"
              height="22"
              viewBox="0 0 12 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 11L-9.08524e-07 21.3923L0 0.607666L11.5 11Z"
                fill="#D9D9D9"
              />
            </svg>
          )}
        </div>
      </div>

      {isExpanded && (
        <div className="NavigationContent">
          <SubCard1 />
          <SubCard1 />
          <SubCard1 />
        </div>
      )}
    </div>
  );
}
