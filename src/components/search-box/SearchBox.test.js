import React from "react";
import {fireEvent, render} from '@testing-library/react'
import {SearchBox} from "./SearchBox";

it('renders correctly', () => {
    const {queryByTestId, queryByPlaceholderText} = render(<SearchBox/>)
    expect(queryByTestId("search-button")).toBeTruthy()
    expect(queryByPlaceholderText('Write name of repos')).toBeTruthy()
})

describe("Input value", () => {
    it('updates on change', () => {
        const {queryByPlaceholderText} = render(<SearchBox/>)
        const searchInput = queryByPlaceholderText("Write name of repos")
        fireEvent.change(searchInput, {target: {value: "test"}})
        expect(searchInput.value).toBe("test")
    })
})

describe("Search button", () => {
    describe("With empty query", () => {
        it('Doesn\'t trigger requestSearch', () => {
            const requestSearch = jest.fn()
            const {queryByTestId} = render(<SearchBox setInput={requestSearch}/>)
            fireEvent.click(queryByTestId("search-button"))
            expect(requestSearch).not.toHaveBeenCalled()
        })

    })
})

