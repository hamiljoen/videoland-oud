import React from 'react'
import Search from './Search'

/// TODO: fix story entries
const SearchMeta = {
    title: "atoms/Search",
    component: Search,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Search-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Search {...args} />

export const DefaultSearch = Template.bind({})
DefaultSearch.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default SearchMeta