import { Box } from "@chakra-ui/react";
import Header from "./header/Header";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Categories from "./catagories/Categories";
import "./Dashboard.css";

const Dashboard = ({ setSearch, search, keyDown}) => {
  const data = useSelector((store) => store.categories.categories);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    
    if (search) {
      const filtered = data?.map((cat) => ({
        ...cat,
        widgets: cat.widgets.filter(
          (widget) =>
            widget?.name?.toLowerCase().includes(search?.toLowerCase()) ||
            widget?.text?.toLowerCase().includes(search?.toLowerCase())
        ),
      }));

      // Move categories with matching widgets to the top
      filtered.sort((a, b) => (b.widgets.length > 0) - (a.widgets.length > 0));

      setFilteredData(filtered);

    } else {
      setFilteredData(data);
    }
  }, [data, search]);

  return (
    <Box className="dashboard" border="1px" bgColor={"blue.50"} h="92%">
      <Header />
      {filteredData?.map((cat) => (
        <div className="categories-container" data-testid="categories-container">
          <Categories categoryName={cat.name} widgets={cat.widgets} />
        </div>
      ))}
    </Box>
  );
};

export default Dashboard;
