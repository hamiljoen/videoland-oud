import React from 'react'
import Episode from './Episode'

/// TODO: fix story entries
const EpisodeMeta = {
    title: "atoms/Episode",
    component: Episode,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Episode-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Episode {...args} />

export const DefaultEpisode = Template.bind({})
DefaultEpisode.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default EpisodeMeta