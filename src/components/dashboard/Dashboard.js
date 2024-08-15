import { Box } from "@chakra-ui/react";
import Header from "./header/Header"
import { useState } from "react";
import { useSelector } from "react-redux";
import Categories from "./catagories/Catagories";
import "./Dashboard.css";

const Dashboard = () =>{

    const [catagories, setCatagories] = useState(["CSPM Executive Dashboard", "CWPP Dashboard", "Registry Scan"]);
    const data = useSelector((store)=> store.categories.categories);
    console.log(data);

    return (
        <Box className="dashboard" border="1px" bgColor={"blue.50"} h="92%">
           <Header/>
           {
            data?.map((cat)=>(
                <div className="categories-container">
                    <Categories categoriesName={cat.name} widgets={cat.widgets}/>
                </div>
            ))
           }
        </Box>
    )
}

export default Dashboard;