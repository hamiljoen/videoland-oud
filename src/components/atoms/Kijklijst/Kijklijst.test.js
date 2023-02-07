import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultKijklijst } from './Kijklijst.stories'

const testID = "Kijklijst-" + Math.floor(Math.random()*90000) + 10000

describe("Kijklijst", () => {

    it("Can render Kijklijst", () => {
        render(<DefaultKijklijst testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})