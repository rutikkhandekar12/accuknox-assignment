import { createSlice } from "@reduxjs/toolkit";
import data from "../data/Data.json";

const catagoriesSlice = createSlice({
  name: "catagoriesSlice",
  initialState: data,
  reducers: {
    addWidgets: (state, action) => {
      let { categoryName, widget } = action.payload;
      let category = state.categories.find((cat) => cat.name === categoryName);
      if (category) {
        category.widgets.push(widget);
      }
    },
    removeWidgets: (state, action) => {
      const { categoryName, widgetId } = action.payload;
      const category = state.categories.find(
        (cat) => cat.name === categoryName
      );
      if (category) {
        category.widgets = category.widgets.filter(
          (widget) => widgetId !== widget.id
        );
      } else {
        console.error(`Category ${categoryName} not found`);
      }
    },
  },
});

export const { addWidgets, removeWidgets } = catagoriesSlice.actions;
export default catagoriesSlice.reducer;
