import React from 'react'
import Serieslogo from './Serieslogo'

/// TODO: fix story entries
const SerieslogoMeta = {
    title: "atoms/Serieslogo",
    component: Serieslogo,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Serieslogo-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Serieslogo {...args} />

export const DefaultSerieslogo = Template.bind({})
DefaultSerieslogo.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default SerieslogoMeta