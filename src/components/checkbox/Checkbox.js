import React, { useState } from "react";
import { Box, Checkbox, Flex, Text } from "@chakra-ui/react";
import "./Checkbox.css";

const CustomCheckbox = ({ widget, widgetId, handleCheck }) => {
  const [isChecked, setIsChecked] = useState(true);

  function handleChange(e) {
    let checked = e.target.checked;
    setIsChecked(checked);
    handleCheck(widgetId, checked);
  }

  return (
    <Flex className="checkbox" align="center">
      <Checkbox
        size="lg"
        colorScheme="purple"
        mr="4"
        isChecked={isChecked}
        onChange={handleChange}
      />
      <Box>
        <Text fontWeight="bold">{widget.name}</Text>
      </Box>
    </Flex>
  );
};

export default CustomCheckbox;
