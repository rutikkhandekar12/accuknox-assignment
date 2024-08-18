import { Heading } from "@chakra-ui/react";
import "./Categories.css";
import WidgetCard from "../card/WidgetCard";

const Categories = ({ categoryName, widgets }) => {
  return (
    <div className="catagories">
      <Heading as="h2" size="md">
        {categoryName}
      </Heading>
      <div className="widget-container">
        {widgets?.map((widget) => (
          <div key={widget.id} className="widget-card">
            <WidgetCard widgetName={widget.name} widgetText={widget.text} widgetId={widget.id} categoryName={categoryName}/>
          </div>
        ))}
        <div className="widget-card">
          <WidgetCard categoryName={categoryName}/>
        </div>
      </div>
    </div>
  );
};

export default Categories;
