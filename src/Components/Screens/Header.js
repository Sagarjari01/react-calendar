import React from "react";
import { format } from 'date-fns'
import { connect } from 'react-redux'

const Headers = (props) => {
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={()=>{props.backwadMonth(props.currentMonth)}}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>
            {format(props.currentMonth,'MM')+"-"+format(props.currentMonth,'yyyy')}
          </span>
        </div>
        <div className="col col-end" onClick={()=>{props.forwardMonth(props.currentMonth)}}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    )
}

const mapStateToProps = (state) => {
  return{
    currentMonth:state.currentMonthIs
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    // setCurrentMonth:()=>{dispatch({type:'SET_CUR_MONTH',payload:"This is Dispatching"})}
    forwardMonth:(curMon)=>{dispatch({type:"CHANGE_MON_FWD",payload:curMon})},
    backwadMonth:(curMon)=>{dispatch({type:"CHANGE_MON_BACK",payload:curMon})}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Headers) 