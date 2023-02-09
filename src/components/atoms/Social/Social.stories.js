import React from 'react'
import Social from './Social'

/// TODO: fix story entries
const SocialMeta = {
    title: "atoms/Social",
    component: Social,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Social-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Social {...args} />

export const DefaultSocial = Template.bind({})
DefaultSocial.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default SocialMeta