import React from 'react'
import {Button,Modal} from 'react-materialize'
import 'materialize-css'
function ForModal() {
const trigger = <Button>Open Modal</Button>;
const ButtonCLose = <Button>Close</Button>;
    return (
        <div>
            <Modal header="Modal Header" trigger={trigger} actions={ButtonCLose}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Modal>
        </div>
    )
}

export default ForModal

// addEvent() {
//     const currentSelectedDate = this.state.selectedDay;
//     let isAfterDay = moment().startOf("day").subtract(1, "d");

//     if (currentSelectedDate.isAfter(isAfterDay)) {
//       this.handleAdd();
//     } else {
//       if (confirm("Are you sure you want to add an event in the past?")) {
//         this.handleAdd();
//       } else {
//       } // end confirm past
//     } //end is in the past
//   }

// removeEvent(i) {
//     const monthEvents = this.state.selectedMonthEvents.slice();
//     const currentSelectedDate = this.state.selectedDay;

//     if (confirm("Are you sure you want to remove this event?")) {
//       let index = i;

//       if (index != -1) {
//         monthEvents.splice(index, 1);
//       } else {
//         alert("No events to remove on this day!");
//       }

//       this.setState({
//         selectedMonthEvents: monthEvents
//       });
//     }
//   }

// if (showEvents) {
//     return (
//       <section className="main-calendar">
//         <header className="calendar-header">
//           <div className="row title-header">
//             {this.renderDayLabel()}
//           </div>
//           <div className="row button-container">
//             <i
//               className="box arrow fa fa-angle-left"
//               onClick={this.showCalendar}
//             />
//             <i
//               className="box event-button fa fa-plus-square"
//               onClick={this.addEvent}
//             />
//           </div>
//         </header>
//         <Events
//           selectedMonth={this.state.selectedMonth}
//           selectedDay={this.state.selectedDay}
//           selectedMonthEvents={this.state.selectedMonthEvents}
//           removeEvent={i => this.removeEvent(i)}
//         />
//       </section>
//     );
//   } else {
//     return (
//       <section className="main-calendar">
//         <header className="calendar-header">
//           <div className="row title-header">
//             <i
//               className="box arrow fa fa-angle-left"
//               onClick={this.previous}
//             />
//             <div className="box header-text">
//             {this.renderTodayLabel()}
//             {this.renderMonthLabel()}
//             </div>
//             <i className="box arrow fa fa-angle-right" onClick={this.next} />
//           </div>
//           <DayNames />
//         </header>
//         <div className="days-container">
//           {this.renderWeeks()}
//         </div>
//       </section>
//     );
//   }

// this.state = {
//     selectedMonth: moment(),
//     selectedDay: moment().startOf("day"),
//     selectedMonthEvents: [],
//     showEvents: false
//   };

// handleAdd() {
//     const monthEvents = this.state.selectedMonthEvents;
//     const currentSelectedDate = this.state.selectedDay;

//     let newEvents = [];

//     var eventTitle = prompt("Please enter a name for your event: ");

//     switch (eventTitle) {
//       case "":
//         alert("Event name cannot be empty.");
//         break;
//       case null:
//         alert("Changed your mind? You can add one later!");
//         break;
//       default:
//         var newEvent = {
//           title: eventTitle,
//           date: currentSelectedDate,
//           dynamic: true
//         };

//         newEvents.push(newEvent);

//         for (var i = 0; i < newEvents.length; i++) {
//           monthEvents.push(newEvents[i]);
//         }

//         this.setState({
//           selectedMonthEvents: monthEvents
//         });
//         break;
//     }
//   }
