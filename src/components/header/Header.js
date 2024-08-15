import { useState } from "react";
import "./Header.css";
import { Box, Flex, Input } from "@chakra-ui/react";
import { BellIcon, SearchIcon } from "@chakra-ui/icons";

const Header = () => {
  const [search, setSearch] = useState();

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
      <Flex alignItems="center" gap="10px">
      <Box className="search" w="550px">
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
        />
      </Box>
      <BellIcon boxSize={6} ml="184px"/>
      </Flex>
    </div>
  );
};

export default Header;
