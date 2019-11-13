import React from 'react';
import { startOfWeek, format, addDays } from 'date-fns';

const DaysOfWeek = (props: any) => {
  const dateFormat = 'eee';
  const days = [];
  let startDate = startOfWeek(props.currentDate);

  for(let i=0; i<7; i++) {
    days.push(
      <div className="column col-center" key={i}>
        {format(addDays(startDate, i), dateFormat)}
      </div>
    )
  }

  return(
    <div className="days row">{days}</div>
  )
}

export default DaysOfWeek;
