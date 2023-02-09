import React from 'react'
import Navigationbar from './Navigationbar'

/// TODO: fix story entries
const NavigationbarMeta = {
    title: "organisms/Navigationbar",
    component: Navigationbar,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Navigationbar-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Navigationbar {...args} />

export const DefaultNavigationbar = Template.bind({})
DefaultNavigationbar.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default NavigationbarMeta