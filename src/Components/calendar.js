import React,{useState} from "react";
import Headers from "./Screens/Header";
import Days from "./Screens/Days";
import Cells from "./Screens/Cells";

const Calendar = () => {

    const onDateClick = day => {}
    return(
        <div>
            <Headers />
            <Days />
            <Cells />
        </div>
    )
}


export default Calendar;