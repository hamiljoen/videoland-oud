import React from 'react'
import Avatar from './Avatar'

/// TODO: fix story entries
const AvatarMeta = {
    title: "atoms/Avatar",
    component: Avatar,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Avatar-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Avatar {...args} />

export const DefaultAvatar = Template.bind({})
DefaultAvatar.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default AvatarMeta