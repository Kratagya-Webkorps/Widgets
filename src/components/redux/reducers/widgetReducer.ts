import { Reducer } from "@reduxjs/toolkit";
import { WidgetsState, UPDATE_WIDGET } from "../../interfaces";

const initialState: WidgetsState = {
  widgets: [
    {
      id: 1,
      type: "plastic bottles",
      amount: 100,
      action: "collects",
      active: false,
      linked: true,
      selectedColor: "#2E3A8C",
    },
    {
      id: 2,
      type: "trees",
      amount: 10,
      action: "plants",
      active: false,
      linked: true,
      selectedColor: "#3B755F",
    },
    {
      id: 3,
      type: "carbon",
      amount: 100,
      action: "offsets",
      active: false,
      linked: true,
      selectedColor: "#F2EBDB",
    },
  ],
};

const widgetsReducer: Reducer<WidgetsState> = (
  state = initialState,
  action: any
) => {
  switch (action.type) {
    case UPDATE_WIDGET:
      return {
        ...state,
        widgets: state.widgets.map((widget) =>
          widget.id === action.payload.id
            ? { ...widget, ...action.payload.settings }
            : widget
        ),
      };
    default:
      return state;
  }
};

export default widgetsReducer;
