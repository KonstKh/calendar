import React, { useState } from 'react';
import {subMonths, addMonths, format} from 'date-fns';

const Header = (props:any) => {

  const [currentDate, setCurrentDate] = useState(new Date());

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
    props.setCurrentDate(addMonths(currentDate, 1)); // TODO: move it out of here!
  }

  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
    props.setCurrentDate(subMonths(currentDate, 1)); // TODO: move it out of here!
  }

  const dateFormat = "MMMM yyyy";
  return(
    <div className="header row flex-middle">
      <div className="column col-start">
        <div className="icon" onClick={prevMonth}>chevron_left</div>
      </div>
      <div className="column col-center">
        <span>{format(currentDate, dateFormat)}</span>
      </div>
      <div className="column col-end">
        <div className="icon" onClick={nextMonth}>chevron_right</div>
      </div>
    </div>
  )
}

export default Header;
