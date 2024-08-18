import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import { store } from "../../../../store";
import { ChakraProvider } from "@chakra-ui/react";
import "@testing-library/jest-dom";

it("testing dashboard header component", () => {
  const { getByText } = render(
    <Provider store={store}>
      <ChakraProvider>
        <Header />
      </ChakraProvider>
    </Provider>
  );

  expect(getByText(/Last 2 days/)).toBeInTheDocument();
});
