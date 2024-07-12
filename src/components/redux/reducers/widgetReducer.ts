import { Reducer } from "@reduxjs/toolkit";
import { WidgetsState } from "../../interfaces";
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
      active: true,
      linked: false,
      selectedColor: "#F2EBDB",
    },
  ],
};
const widgetsReducer: Reducer<WidgetsState, any> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "UPDATE_ACTIVATION": {
      const { id, active } = action.payload;

      return {
        ...state,
        widgets: state.widgets.map((widget) => {
          if (active) {
            return { ...widget, active: widget.id === id };
          }
          return { ...widget, active: false };
        }),
      };
    }

    case "UPDATE_PROFILE_LINK": {
      const { id, linked } = action.payload;

      return {
        ...state,
        widgets: state.widgets.map((widget) =>
          widget.id === id ? { ...widget, linked } : widget
        ),
      };
    }

    case "UPDATE_COLOR": {
      const { id, selectedColor } = action.payload;

      return {
        ...state,
        widgets: state.widgets.map((widget) =>
          widget.id === id ? { ...widget, selectedColor } : widget
        ),
      };
    }

    default:
      return state;
  }
};

export default widgetsReducer;
