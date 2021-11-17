import React from 'react'
import {connect} from 'react-redux'
import {isSameDay} from 'date-fns'
const  Events = (props) => {
    const currentSelectedDay = props.selectedDate
    const monthEvents = props.selectedMonthEvents;
    const monthEventsRendered = monthEvents.map((event, i) => {
        return (
          <div key={event.title}>
            <ul >
              <li style={{listStyleType:"circle",marginLeft:"18px",color:"black"}}>
                {event.title}
              </li>
            </ul>
          </div>
        )
      });
      const dayEventsRendered = [];
      for (let i = 0; i < monthEventsRendered.length; i++) {
        if (isSameDay(monthEvents[i].date, currentSelectedDay)) {
          dayEventsRendered.push(monthEventsRendered[i]);
        }
      }
      return (
        <div>
          {dayEventsRendered}
        </div>
      );
}

const mapStateToProps = (state) => {
    return{
      currentMonth:state.currentMonthIs,
      selectedDate:state.selectedDate
    }
  }


export default connect(mapStateToProps)(Events)
