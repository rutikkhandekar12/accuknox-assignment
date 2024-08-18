import { Box, Heading } from "@chakra-ui/react";
import "./Categories.css";
import WidgetCard from "../card/WidgetCard";

const Categories = ({ categoryName, widgets }) => {
  return (
    <Box className="catagories">
      <Heading as="h2" size="md">
        {categoryName}
      </Heading>
      <Box className="widget-container">
        {widgets?.map((widget) => (
          <Box key={widget.id} className="widget-card">
            <WidgetCard widgetName={widget.name} widgetText={widget.text} widgetId={widget.id} categoryName={categoryName}/>
          </Box>
        ))}
        <Box className="widget-card">
          <WidgetCard categoryName={categoryName}/>
        </Box>
      </Box>
    </Box>
  );
};

export default Categories;
