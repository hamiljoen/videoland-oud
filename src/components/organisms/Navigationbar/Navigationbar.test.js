import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultNavigationbar } from './Navigationbar.stories'

const testID = "Navigationbar-" + Math.floor(Math.random()*90000) + 10000

describe("Navigationbar", () => {

    it("Can render Navigationbar", () => {
        render(<DefaultNavigationbar testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})