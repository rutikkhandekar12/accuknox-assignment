import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import Dashboard from "../Dashboard";
import { render } from "@testing-library/react";
import { persistor, store } from "../../../store";
import { PersistGate } from "redux-persist/integration/react";
import { ChakraProvider } from "@chakra-ui/react";

it("testing dashboard component", () => {
  const { getByText } = render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider>
          <Dashboard />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );

  expect(getByText(/CSPM Executive Dashboard/)).toBeInTheDocument();
});
