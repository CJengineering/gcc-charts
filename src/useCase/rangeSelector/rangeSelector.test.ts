import { createPresentationRangeSelector } from "../../presentation/createPresentation";
import { store } from "../../store";
import { selectedTableValue } from "./rangeSelectorSlice";

it('should select table with the selected value of the tab', () => {
    const dispatch = store.dispatch;
  
    dispatch(selectedTableValue('year'));
  
    const presentation = createPresentationRangeSelector(store.getState());
    expect(presentation).toEqual({ status: 'by_year' });
  });
  