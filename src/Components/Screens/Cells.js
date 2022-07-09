import React,{useRef, useState, useEffect} from 'react'
import { startOfMonth,endOfMonth,startOfWeek,endOfWeek,format, isSameMonth,isSameDay, addDays } from 'date-fns'
import {connect} from 'react-redux'
import {Modal,Box} from '@mui/material'
import Icon from '@mui/material/Icon';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Events from './Events';


const Cells = (props) => {

    const [selectDate, setSelectDate] = useState(new Date());
    const monthStart = startOfMonth(props.currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
  
    // Inside Modal

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };

    const [open, setOpen] = useState(false); 
    const [renderInput,setRenderInput] = useState(false)
    let [selectedMonthEvents,setSelectedMonthEvents] = useState([])
    const focusPoint = useRef(null)

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleRenderInput = () => setRenderInput(!renderInput);
    const renderDayLabel = ()=> {
      const currentSelectedDay = props.selectedDate;
      return (
        <span>
          {format(currentSelectedDay,"dd MMMM yyyy")}
        </span>
      );
    }

    useEffect(()=>{
      // console.log("change")
    },[selectedMonthEvents])
   
    const handleAdd = ()=> {
      const monthEvents = selectedMonthEvents;
      const currentSelectedDate = props.selectedDate;
      let newEvents = [];
  
      let eventTitle = focusPoint.current.value
      switch (eventTitle) {
        case "":
          alert("Event name cannot be empty.");
          break;
        default:
          let newEvent = {
            title: eventTitle,
            date: currentSelectedDate,
            dynamic: true
          };
          // console.log(newEvent)
  
          monthEvents.push(newEvent);
          // for (let i = 0; i < newEvents.length; i++) {
          //   monthEvents.push(newEvents[i]);
          // }
          
          setSelectedMonthEvents(monthEvents)
          // console.log(selectedMonthEvents);
          // console.log(selectedMonthEvents)
          break;
      }
    }

    const handleChange = (e,type) => {
      switch(type){
        case "CLICK":
          // console.log(focusPoint.current.value);
          handleAdd()
          handleClose()
        case "KEYPRESS":
          if(e.key==="Enter"){
            // console.log(focusPoint.current.value)
            handleAdd()
            handleClose()
          }
      }
    }

    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            formattedDate = format(day, "d");
            const cloneDay = day;
            days.push(
                <div
                className={`colc cell ${
                    !isSameMonth(day, monthStart)
                    ? "disabled"
                    : isSameDay(day, props.selectedDate) ? "selected" : ""
                }`}
                key={day}
                onClick={() => {props.onDateClick(cloneDay)
                  setSelectDate(cloneDay)
                  handleOpen()}}
                >
                <span className="number">{formattedDate}</span>
                </div>
            );
            day = addDays(day, 1);
        }
        rows.push(
        <div className="row" key={day}>
            {days}
        </div>
        );
        days = [];
    }
    // console.log(props.selectedDate)
    return(
        <div className="body">
          {rows}  
          {/* <Button variant="contained" onClick={handleOpen}>Contained</Button>  */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}> 
              <div className="labelHeader">{renderDayLabel()}</div>
              
              {renderInput?<div>
                <input autoFocus placeholder="Add Event" ref={focusPoint} style={{width:"90%"}} onKeyPress={(e)=>handleChange(e,"KEYPRESS")} />
                <div style={{display:"inline-block"}}><DoubleArrowIcon sx={{verticalAlign:"middle"}} onClick={(e)=>{handleChange(e,"CLICK")
                }} /></div>
              </div>:null}
              <Events selectedMonthEvents={selectedMonthEvents} />
                {/* {xyz} */}
              <div style={{display:"flex",justifyContent:"space-between",marginTop:"30%"}}>
                <ArrowBackRoundedIcon style={{cursor:"pointer"}} onClick={handleClose} />
                <Icon style={{cursor:"pointer"}} onClick={()=>{handleRenderInput()}}>add_circle</Icon>
              </div>
            </Box>
          </Modal>      
        </div>
        
    )
}


const mapStateToProps = (state) => {
    return{
      currentMonth:state.currentMonthIs,
      selectedDate:state.selectedDate
    }
  }

const mapDispatchToProps = (dispatch) => {
    return{
      onDateClick:(day)=>{dispatch({type:"SELECTED_DATE",payload:day})}
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Cells) 