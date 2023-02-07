import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultEpisode } from './Episode.stories'

const testID = "Episode-" + Math.floor(Math.random()*90000) + 10000

describe("Episode", () => {

    it("Can render Episode", () => {
        render(<DefaultEpisode testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})