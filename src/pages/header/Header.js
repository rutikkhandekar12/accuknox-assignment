import { useState } from "react";
import "./Header.css";
import { Box, Flex, Input } from "@chakra-ui/react";
import { BellIcon, SearchIcon } from "@chakra-ui/icons";

const Header = ({setSearch, search, setKeyDown}) => {
  
  return (
    <div className="header">
      <p className="navbar">
        <span style={{ color: "gray" }}>Home </span>{" "}
        <span
          style={{ color: "gray", paddingLeft: "2px", paddingRight: "3px" }}
        >
          &gt;
        </span>{" "}
        <span style={{ color: "blue" }}>Dashboard V4</span>
      </p>
      <Box className="search-bell">
      <Box className="search">
        <SearchIcon
          className="search-icon"
          boxSize={5}
          color="gray.500"
          zIndex={10}
        />
        <Input
          h="32px"
          w="100%"
          placeholder="Search anything..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={(e)=>setKeyDown(e.target.value)}
        />
      </Box>
      <BellIcon boxSize={6}/>
      </Box>
    </div>
  );
};

export default Header;
