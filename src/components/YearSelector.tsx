import React, { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { updatePrevYear, updateYear } from "../useCase/formValue/formValueSlice";

import { createPresentationFormValue } from "../presentation/createPresentation";
import { PropsSelctor } from "../interfaces";

const YearSelector: React.FC<PropsSelctor> = (prev) => {
  const dispatch = useAppDispatch();
  const presentation = useAppSelector(createPresentationFormValue);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newYear = parseInt(event.target.value);
    if(prev.prev){
      return  dispatch(updatePrevYear(newYear));
    }
    return dispatch(updateYear(newYear));
  };

  return (
    <div>
      <input
        type="number"
        id="yearInput"
        min="1973"
        max="2023"
        value={prev.prev ? presentation.prevYear : presentation.year}
        onChange={handleChange}
      />
    </div>
  );
};
export default YearSelector;
