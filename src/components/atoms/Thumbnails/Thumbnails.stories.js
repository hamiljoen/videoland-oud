import React from 'react'
import Thumbnails from './Thumbnails'

/// TODO: fix story entries
const ThumbnailsMeta = {
    title: "atoms/Thumbnails",
    component: Thumbnails,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Thumbnails-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Thumbnails {...args} />

export const DefaultThumbnails = Template.bind({})
DefaultThumbnails.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default ThumbnailsMeta