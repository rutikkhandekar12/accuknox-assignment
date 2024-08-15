import { Box, Button, Card, CardBody, Heading, Stack, Text } from "@chakra-ui/react";
import "./WidgetCard.css";
import { SmallAddIcon } from "@chakra-ui/icons";

const WidgetCard = ({ widgetName, widgetText }) => {
  return widgetName ? (
    <Card variant="outline" w="456px" h="180px">
      <CardBody>
        <Heading size="md">{widgetName}</Heading>
        <Text className="text-widget">{widgetText}</Text>
      </CardBody>
    </Card>
  ) : (
    <Card variant="outline" w="456px" h="180px">
      <CardBody display="flex" justifyContent="center" alignItems="center">
        <Button
          rightIcon={<SmallAddIcon />}
          colorScheme="teal"
          variant="outline"
          bgColor="white"
          color="gray"
        >
          Add Widget
        </Button>
      </CardBody>
    </Card>
  );
};

export default WidgetCard;
