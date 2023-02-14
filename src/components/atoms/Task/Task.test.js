import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultTask } from './Task.stories'

const testID = "Task-" + Math.floor(Math.random()*90000) + 10000

describe("Task", () => {

    it("Can render Task", () => {
        render(<DefaultTask testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})