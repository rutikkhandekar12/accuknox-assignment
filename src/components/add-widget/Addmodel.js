import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  FormControl,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addWidgets } from "../../slice/catagoriesSlice";

const AddWidgetModal = ({ isOpen, onClose, categoryName }) => {
  const [widgetName, setWidgetName] = useState("");
  const [widgetDescription, setWidgetDescription] = useState("");
  const dispatch = useDispatch();
  const toast = useToast(); 

  function handleAddWidget() {
    console.log("categoryName:", categoryName);

    if (!widgetName || !widgetDescription) {
      toast({
        title: "Please fill in all the fields.",
        status: "error",
        isClosable: true,
      });
      return;
    }

    let id = Math.floor(Math.random() * 1000);
    let widget = {
      id: id,
      name: widgetName,
      text: widgetDescription,
    };

    dispatch(addWidgets({ categoryName, widget }));

    toast({
      title: "Widget added successfully!",
      status: "success",
      isClosable: true,
    });

    setWidgetName("");
    setWidgetDescription("");
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent borderRadius="lg" boxShadow="xl">
        <ModalHeader bg="teal.500" color="white" borderTopRadius="lg">
          Add New Widget
        </ModalHeader>
        <ModalCloseButton color="white" />

        <ModalBody p={6}>
          <FormControl id="widget-name">
            <FormLabel fontWeight="bold" fontSize="lg" mb={3} color="teal.700">
              Widget Name:
            </FormLabel>
            <Input
              size="lg"
              placeholder="Enter widget name"
              focusBorderColor="teal.500"
              borderColor="teal.300"
              value={widgetName}
              onChange={(e) => setWidgetName(e.target.value)}
              mb={4}
            />

            <FormLabel fontWeight="bold" fontSize="lg" mb={3} color="teal.700">
              Widget Description:
            </FormLabel>
            <Input
              size="lg"
              placeholder="Enter widget description"
              focusBorderColor="teal.500"
              borderColor="teal.300"
              value={widgetDescription} 
              onChange={(e) => setWidgetDescription(e.target.value)}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="teal" mr={3} onClick={handleAddWidget}>
            Add Widget
          </Button>
          <Button variant="outline" colorScheme="teal" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddWidgetModal;
