import React from 'react'
import Accountwheel from './Accountwheel'

/// TODO: fix story entries
const AccountwheelMeta = {
    title: "organisms/Accountwheel",
    component: Accountwheel,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Accountwheel-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Accountwheel {...args} />

export const DefaultAccountwheel = Template.bind({})
DefaultAccountwheel.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default AccountwheelMeta