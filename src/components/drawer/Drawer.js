import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Tabs,
  TabList,
  Tab,
  Text,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import WidgetTab from "../widget-tab/WidgetTab";
import { removeWidgets } from "../../slice/catagoriesSlice";

const AddWidgetDrawer = ({ isOpen, onClose, btnRef }) => {
  const data = useSelector((store) => store.categories.categories);
  const dispatch = useDispatch();
  const [checkedWidgets, setCheckedWidgets] = useState({});

  function handleCheck(widgetId, isChecked) {
    setCheckedWidgets((prev) => ({ ...prev, [widgetId]: isChecked }));
  }

  function handleConfirmDelete() {
    const uncheckedWidgetIds = Object.keys(checkedWidgets).filter(
      (widgetId) => !checkedWidgets[widgetId]
    );

    uncheckedWidgetIds.forEach((widgetId) => {
      dispatch(removeWidgets({ widgetId })); 
    });

    onClose();
  }

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
      size="lg"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader
          p="10px"
          pl="24px"
          bgColor="blue"
          color="white"
          fontSize="medium"
        >
          Add Widget
        </DrawerHeader>

        <DrawerBody>
          <Text mb="4" fontWeight="400">
            Personalize your dashboard by adding the following widgets
          </Text>

          <Tabs>
            <TabList>
              <Tab>CSPM</Tab>
              <Tab>CWPP</Tab>
              <Tab>Image</Tab>
              <Tab>Ticket</Tab>
            </TabList>

            <TabPanels>
              {data?.map((cat, index) => (
                <TabPanel key={index}>
                  <WidgetTab
                    categoryName={cat.name}
                    widgets={cat.widgets}
                    handleCheck={handleCheck}
                  />
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="purple" onClick={handleConfirmDelete}>
            Confirm
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AddWidgetDrawer;
