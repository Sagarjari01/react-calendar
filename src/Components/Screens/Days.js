import React from "react";
import { startOfWeek,addDays, format } from 'date-fns'
import {connect} from 'react-redux'

const Days = (props) => {
    const dateFormat = "EEEE";
    const days = [];
    let startDate = startOfWeek(props.currentMonth);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return (
    <div className="days row">
      {days}
    </div>
    )
}

const mapStateToProps = (state) => {
  return{
    currentMonth:state.currentMonthIs
  }
}

export default connect(mapStateToProps)(Days) 