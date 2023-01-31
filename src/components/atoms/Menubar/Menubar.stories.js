import React from 'react'
import Menubar from './Menubar'

/// TODO: fix story entries
const MenubarMeta = {
    title: "atoms/Menubar",
    component: Menubar,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Menubar-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Menubar {...args} />

export const DefaultMenubar = Template.bind({})
DefaultMenubar.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default MenubarMeta