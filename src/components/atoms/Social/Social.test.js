import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultSocial } from './Social.stories'

const testID = "Social-" + Math.floor(Math.random()*90000) + 10000

describe("Social", () => {

    it("Can render Social", () => {
        render(<DefaultSocial testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})