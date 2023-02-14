import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultSerieslogo } from './Serieslogo.stories'

const testID = "Serieslogo-" + Math.floor(Math.random()*90000) + 10000

describe("Serieslogo", () => {

    it("Can render Serieslogo", () => {
        render(<DefaultSerieslogo testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})