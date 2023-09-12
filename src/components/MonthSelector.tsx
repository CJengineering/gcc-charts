import React, { ChangeEvent} from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { createPresentationFormValue } from "../presentation/createPresentation";
import { updateMonth, updatePrevMonth } from "../useCase/formValue/formValueSlice";
import { PropsSelctor } from "../interfaces";

const MonthSelector: React.FC<PropsSelctor> = (prev) => {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];


  const dispatch = useAppDispatch();
  const presentation = useAppSelector(createPresentationFormValue);
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newMonth = parseInt(event.target.value);
    if(prev.prev){
        return  dispatch(updatePrevMonth(newMonth));
      }
      return dispatch(updateMonth(newMonth));
  };



  return (
    <div>
    
      <select
        id="monthInput"
        value={prev.prev ? presentation.prevMonth : presentation.month}
        onChange={handleChange}
      >
        {monthNames.map((name, index) => (
          <option key={index} value={index + 1}>{name}</option>
        ))}
      </select>
    
    </div>
  );
};

export default MonthSelector;
