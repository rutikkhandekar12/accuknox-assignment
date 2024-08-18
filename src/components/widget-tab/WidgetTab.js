import React from "react";
import CustomCheckbox from "../checkbox/Checkbox";

const WidgetTab = ({ categoryName, widgets, handleCheck }) => {
  return (
    <>
      {widgets.map((widget) => (
        <CustomCheckbox
          key={widget.id}
          categoryName={categoryName}
          widget={widget}
          widgetId={widget.id}
          handleCheck={handleCheck}
        />
      ))}
    </>
  );
};

export default WidgetTab;
