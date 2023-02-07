import React from 'react'
import Kijklijst from './Kijklijst'

/// TODO: fix story entries
const KijklijstMeta = {
    title: "atoms/Kijklijst",
    component: Kijklijst,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Kijklijst-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Kijklijst {...args} />

export const DefaultKijklijst = Template.bind({})
DefaultKijklijst.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default KijklijstMeta