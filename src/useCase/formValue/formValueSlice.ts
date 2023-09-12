import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type FormValueUpdate = {
    status: {
        year: number;
        month: number;
        city: string;
        prevYear: number;
        prevMonth: number;
        prevCity: string;
    }
}
export interface FormValue {
    status: {
        year: number;
        month: number;
        city: string;
        prevYear: number;
        prevMonth: number;
        prevCity: string;
    }
}

export const initialState: FormValue = {
    status:{
        year:2022,
        month: 1,
        city: 'Jeddah',
        prevYear: 1986,
        prevMonth:1,
        prevCity:'Jeddah'

    }
}

const formValueSlice = createSlice({
    name:'formValue',
    initialState,
    reducers: {
        updateYear(state, action:PayloadAction<number>){
            state.status.year = action.payload;
        },
        updateMonth(state, action:PayloadAction<number>){
            state.status.month = action.payload;
        },
        updateCity(state, action:PayloadAction<string>){
            state.status.city = action.payload;
        },
        updatePrevYear(state, action:PayloadAction<number>){
            state.status.prevYear = action.payload;
        },
        updatePrevMonth(state, action:PayloadAction<number>){
            state.status.prevMonth = action.payload;
        },
        updatePrevCity(state, action:PayloadAction<string>){
            state.status.prevCity = action.payload;
        }
    }
})

export const {  
    updateYear,
    updateMonth,
    updateCity,
    updatePrevYear,
    updatePrevMonth,
    updatePrevCity } = formValueSlice.actions;
export default formValueSlice.reducer;