import { format, formatDistance, formatRelative, subDays, addMonths, subMonths } from 'date-fns'

const monthState = {
    currentMonthIs: new Date(),
    selectedDate: new Date()
}

const reducer = (state=monthState,action) =>{
    
    switch(action.type){
        case "CHANGE_MON_FWD":
            return{
                ...state,
                currentMonthIs:addMonths(action.payload,1)
            }
        case "CHANGE_MON_BACK":
            return{
                ...state,
                currentMonthIs:subMonths(action.payload,1)
            }
        case "SELECTED_DATE":
            return{
                ...state,
                selectedDate:action.payload
            }
    }
    // console.log(state)
    return state

    // console.log(state)
}

export default reducer