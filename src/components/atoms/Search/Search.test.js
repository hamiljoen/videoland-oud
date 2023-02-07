import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultSearch } from './Search.stories'

const testID = "Search-" + Math.floor(Math.random()*90000) + 10000

describe("Search", () => {

    it("Can render Search", () => {
        render(<DefaultSearch testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})