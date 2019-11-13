import React from 'react';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, format, isSameMonth, isSameDay, /* parse, */ addDays } from 'date-fns';

const Cells = (props: any) => {
  const monthStart = startOfMonth(props.currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const dateFormat = "d";
  const rows: any = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, dateFormat);
      const cloneDay = day;
      days.push(
        <div
          className={`column cell ${!isSameMonth(day, monthStart)
            ? "disabled" : isSameDay(day, props.selectedDate)
              ? "selected" : ""}`}
          key={day.toString()}
          onClick={() => onDateClick(cloneDay)}
        >
          <span className="number">{formattedDate}</span>
          <span className="bg">{formattedDate}</span>
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div className="row" key={day.toString()}> {days} </div>
    );
    days = [];
  }

  const onDateClick = (day: Date) => {
    props.setSelectedDate(day);
  }
  return (
    <div className="body">{rows}</div>
  )
}

export default Cells;
