import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import {store} from "../../../../store"
import WidgetCard from "../WidgetCard"
import "@testing-library/jest-dom"

it("testing widgetcard component",()=>{

    const {getByText} = render(
        <Provider store={store}>
            <WidgetCard widgetName={"widget 1"} widgetText={"random test"} widgetId={"123"} categoryName={"new catagory"}/>
        </Provider>
    )

    expect(getByText(/widget 1/)).toBeInTheDocument();
})