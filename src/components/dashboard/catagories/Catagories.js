import { Heading } from "@chakra-ui/react";
import "./Categories.css";
import WidgetCard from "../card/WidgetCard";

const Categories = ({ categoriesName, widgets }) => {
  return (
    <div className="catagories">
      <Heading as="h2" size="md">
        {categoriesName}
      </Heading>
      <div className="widget-container">
        {widgets?.map((widget) => (
          <div key={widget.id} className="widget-card">
            <WidgetCard widgetName={widget.name} widgetText={widget.text} />
          </div>
        ))}
        <div className="widget-card">
          <WidgetCard />
        </div>
      </div>
    </div>
  );
};

export default Categories;
