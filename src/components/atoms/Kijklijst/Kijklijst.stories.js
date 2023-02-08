import React from 'react'
import Kijklijst from './Kijklijst'

const KijklijstMeta = {
    title: "atoms/Kijklijst",
    component: Kijklijst,
    argTypes: {
        testID: { table: { disable: true } },
        utilityClasses: { name: "Utility Classes" },
        exceptionType: { name: "Exception Type"}
    }
}

const testID = "Kijklijst-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Kijklijst {...args} />

export const DefaultKijklijst = Template.bind({})
DefaultKijklijst.args = {
    text: "Kijklijst",
    testID: testID,
    utilityClasses: []
}

export default KijklijstMeta