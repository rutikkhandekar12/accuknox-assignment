import { ChakraProvider } from "@chakra-ui/react"
import { render } from "@testing-library/react"
import CustomCheckbox from "../Checkbox"
import "@testing-library/jest-dom"

it("testing checkbox component",()=>{

    const { getByText } = render(
        <ChakraProvider>
            <CustomCheckbox widget={{name: "widget 1"}} widgetId={"123"} handleCheck={jest.fn()}/>
        </ChakraProvider>
    ) 

    expect(getByText(/widget 1/)).toBeInTheDocument();
})