import React from 'react'
import Episode from './Episode'

const EpisodeMeta = {
    title: "atoms/Episode",
    component: Episode,
    argTypes: {
        testID: { table: { disable: true } },
        utilityClasses: { name: "Utility Classes" },
        exceptionType: { name: "Exception Type"}
    }
}

const testID = "Button-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Episode {...args} />

export const DefaultButton = Template.bind({})
DefaultButton.args = {
    text: "Aflevering",
    testID: testID,
    utilityClasses: []
}

export default EpisodeMeta