import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { CloseIcon, SmallAddIcon } from "@chakra-ui/icons";
import Addmodel from "../../../components/add-widget/Addmodel";
import "./WidgetCard.css";
import { useDispatch } from "react-redux";
import { removeWidgets } from "../../../slice/catagoriesSlice";

const WidgetCard = ({ widgetName, widgetText, widgetId, categoryName }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const toast = useToast();

  function handleDeleteWidget(){      
      if(!widgetId){
        toast({
          title: "Something is wrong!!",
          status: "error",
          isClosable: true,
        });
        return;
      }
      dispatch(removeWidgets({categoryName, widgetId})) 
      toast({
        title: "Widget deleted successfully!",
        status: "success",
        isClosable: true,
      });
  }

  return (
    <>
      <Card className="inner-widget-card" variant="outline">
        <CardBody>
          {widgetName ? (
            <>
              <Flex justifyContent="space-between" alignItems="center">
                <Heading size="md">{widgetName}</Heading>
                <Button variant="ghost" onClick={handleDeleteWidget}>
                  <CloseIcon boxSize={3} />
                </Button>
              </Flex>
              <Text
                display="flex"
                justifyContent="center"
                alignItems="center"
                mt="40px"
              >
                {widgetText}
              </Text>
            </>
          ) : (
            <CardBody
              display="flex"
              justifyContent="center"
              alignItems="center"
              mt="30px"
            >
              <Button
                rightIcon={<SmallAddIcon />}
                colorScheme="teal"
                variant="outline"
                bgColor="white"
                color="gray"
                onClick={onOpen}
              >
                Add Widget
              </Button>
            </CardBody>
          )}
        </CardBody>
      </Card>

      <Addmodel isOpen={isOpen} onClose={onClose} categoryName={categoryName} />
    </>
  );
};

export default WidgetCard;
