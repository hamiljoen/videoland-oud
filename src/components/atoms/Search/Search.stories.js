import React from 'react'
import Search from './Search'

const SearchMeta = {
    title: "atoms/Search",
    component: Search,
    argTypes: {
        testID: { table: { disable: true } },
        utilityClasses: { name: "Utility Classes" },
        exceptionType: { name: "Exception Type"}
    }
}

const testID = "Search-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Search {...args} />

export const DefaultSearch = Template.bind({})
DefaultSearch.args = {
    text: "Zoeken",
    testID: testID,
    utilityClasses: []
}

export default SearchMeta