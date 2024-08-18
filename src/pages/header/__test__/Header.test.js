import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import { ChakraProvider } from "@chakra-ui/react";

it("testing header component", () => {
  const { getByText } = render(
      <ChakraProvider>
        <Header setSearch={jest.fn()} search={"widget"} setKeyDown={jest.fn()}/>
      </ChakraProvider>
  );

  expect(getByText(/Home/)).toBeInTheDocument();
});
