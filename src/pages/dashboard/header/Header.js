import rotate from "../../../assets/refresh.png";
import menu from "../../../assets/menu.png";
import "./Header.css";
import {
  Box,
  Button,
  Image,
  Menu,
  MenuButton,
  Flex,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon, SmallAddIcon, TimeIcon } from "@chakra-ui/icons";
import DrawerExample from "../../../components/drawer/Drawer";
import React from "react";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex
      className="header-dashboard"
      align="center"
      justifyContent="space-between"
    >
      <Box className="title">
        <Heading as="h3" size="md">
          CNAPP Dashboard
        </Heading>
        <Button
          rightIcon={<SmallAddIcon />}
          className="add-widget-btn"
          colorScheme="teal"
          variant="outline"
          bgColor="white"
          color="gray"
          onClick={onOpen}
          ref={btnRef}
        >
          Add Widget
        </Button>
      </Box>
      <Box className="button-dashboard-header">
        <Button
          variant="outline"
          colorScheme="teal"
          bgColor="white"
          color="gray"
        >
          <Image src={rotate} alt="rotate-image" w="13px" />
        </Button>
        <Button
          variant="outline"
          colorScheme="teal"
          bgColor="white"
          color="gray"
        >
          <Image src={menu} alt="rotate-image" w="20px" />
        </Button>
        <Box border="2px solid #0f0f8c" borderRadius="9px">
          <Menu>
            <TimeIcon position="absolute" zIndex="100" mt="13px" ml="10px" />

            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              pl="35px"
              colorScheme="teal"
              bgColor="white"
              color="gray"
            >
              Last 2 days
            </MenuButton>
          </Menu>
        </Box>
      </Box>

      <DrawerExample isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </Flex>
  );
};

export default Header;
