import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultThumbnails } from './Thumbnails.stories'

const testID = "Thumbnails-" + Math.floor(Math.random()*90000) + 10000

describe("Thumbnails", () => {

    it("Can render Thumbnails", () => {
        render(<DefaultThumbnails testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})