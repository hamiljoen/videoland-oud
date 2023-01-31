import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultMenubar } from './Menubar.stories'

const testID = "Menubar-" + Math.floor(Math.random()*90000) + 10000

describe("Menubar", () => {

    it("Can render Menubar", () => {
        render(<DefaultMenubar testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})