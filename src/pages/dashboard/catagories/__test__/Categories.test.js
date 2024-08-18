import { render } from "@testing-library/react";
import Categories from "../Categories";
import "@testing-library/jest-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "../../../../store";

it("testing categories component", () => {
  const { getByText } = render(
    <Provider store={store}>
      <ChakraProvider>
        <Categories categoryName={"new category"} widgets={[]} />
      </ChakraProvider>
    </Provider>
  );

  expect(getByText(/new category/)).toBeInTheDocument();
});
