import React, { useState } /* { useState } */ from 'react';
// import dateFns from 'date-fns';
import Header from '../Header/Header';
import DaysOfWeek from '../DaysOfWeek/DaysOfWeek';

import './style.scss';
import Cells from '../Cells/Cells';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  return(
    <div className="calendar">
      <Header setCurrentDate={setCurrentDate}/>
      <DaysOfWeek currentDate={currentDate} />
      <Cells currentDate={currentDate} setSelectedDate={setSelectedDate} selectedDate={selectedDate}/>
    </div>
  )
}

export default Calendar;
