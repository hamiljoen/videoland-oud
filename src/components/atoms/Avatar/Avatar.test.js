import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultAvatar } from './Avatar.stories'

const testID = "Avatar-" + Math.floor(Math.random()*90000) + 10000

describe("Avatar", () => {

    it("Can render Avatar", () => {
        render(<DefaultAvatar testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})