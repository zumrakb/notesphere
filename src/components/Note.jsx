import React from "react";

import calenderIcon from "./calenderIcon.png";
import colorIcon from "./colorIcon.svg";
import deleteIcon from "./deleteIcon.svg";

function Note(props) {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const formatter = new Intl.DateTimeFormat("en", { month: "short" });
  const currentMonth = formatter.format(currentDate);

  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    /*   <div className="note-container"> */
    <div className="note-component">
      <div className="text-content">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
      <hr />
      <div className="note-bottom">
        <div className="calender-container">
          <img src={calenderIcon} alt=" " />
          <span>
            {currentDay} {currentMonth}
          </span>
        </div>
        <div className="note-button">
          <img src={colorIcon} alt=" " />
          <button onClick={handleClick} className="delete-btn">
            <img src={deleteIcon} alt=" " />
          </button>
        </div>
      </div>
    </div>
    /*  </div> */
  );
}

export default Note;
