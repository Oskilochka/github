import React from "react";
import {render} from '@testing-library/react'
import {ReposBox} from "./ReposBox";

it('renders correctly', () => {
    const {queryByTestId} = render(<ReposBox/>)
    expect(queryByTestId("repos-box")).toBeTruthy()
})
