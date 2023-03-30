import React from 'react';
import '../css/cards.css';
import { FaCalendarWeek } from "react-icons/fa";

function Cards({targetDate, activityName}) {
  let [conter, setCounter] = React.useState(0);

  let date_1 = new Date(targetDate);
  let date_2 = new Date();
  const days = (date_1, date_2) =>{
    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
  }

  React.useEffect(
    ()=> {
      setCounter(
        days(date_1,date_2)
      )           
    },[]
  )

  return (
    <div className='card__container'>
      <h2>{activityName}</h2>
      <FaCalendarWeek className='icon' />
      <p>{conter} Day</p>
      <p>Target Date{targetDate}</p>
    </div>
  )
}

export default Cards