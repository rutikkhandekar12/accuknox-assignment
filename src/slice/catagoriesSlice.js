import { createSlice } from "@reduxjs/toolkit";
import data from "../data/Data.json";

const categoriesSlice = createSlice({
  name: "categoriesSlice",
  initialState: data,
  reducers: {
    addWidgets: (state, action) => {
      const { categoryName, widget } = action.payload;
      const category = state.categories.find((cat) => cat.name === categoryName);
      if (category) {
        category.widgets.push(widget);
      }
    },
    removeWidgets: (state, action) => {
      const { categoryName, widgetId } = action.payload;
      const category = state.categories.find((cat) => cat.name === categoryName);
      if (category) {
        category.widgets = category.widgets.filter(
          (widget) => widget.id !== widgetId
        );
      } else {
        console.error(`Category ${categoryName} not found`);
      }
    },
    removeUnChecked: (state, action) => {
      const { widgetId } = action.payload;

      state.categories.forEach((cat) => {
        cat.widgets = cat.widgets.filter(
          (widget) => !widgetId.includes(widget.id)
        );
      });
    }
  },
});

export const { addWidgets, removeWidgets, removeUnChecked } = categoriesSlice.actions;
export default categoriesSlice.reducer;
