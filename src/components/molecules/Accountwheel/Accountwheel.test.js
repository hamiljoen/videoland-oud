import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultAccountwheel } from './Accountwheel.stories'

const testID = "Accountwheel-" + Math.floor(Math.random()*90000) + 10000

describe("Accountwheel", () => {

    it("Can render Accountwheel", () => {
        render(<DefaultAccountwheel testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})