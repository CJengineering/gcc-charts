import { createPresentationFormValue } from "../../presentation/createPresentation";
import { store } from "../../store";
import { updatePrevYear, updateYear } from "./formValueSlice";

it("should give me the value of a two different years ", () => {
  const dispatch = store.dispatch;

  dispatch(updateYear(2022));
  dispatch(updatePrevYear(1998))
  const presentation = createPresentationFormValue(store.getState());
  expect(presentation.year).toEqual(2022);
  expect(presentation.prevYear).toEqual(1986);
});
