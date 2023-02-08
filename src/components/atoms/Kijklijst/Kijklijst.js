import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Kijklijst = ({ text,
                     exceptionType = "",
                     additionalClasses, testID}) => {

    const utils = ["Kijklijst", ...additionalClasses || []].join(" ")
    const exType = exceptionType ?? ""

    return(
        <button data-testid={ testID }
                data-type={exType}
                className={ utils }>
            { text }
        </button>
    )

}

/// TODO: Adjust!
const utilityClasses = [
    "x",
    "y"
]

/// TODO: Adjust
const exceptionClasses = [
    "x",
    "y"
]

Kijklijst.propTypes = {
    testID: PropTypes.string,
    exceptionType: PropTypes.oneOf(exceptionClasses),
    utilityClasses: PropTypes.arrayOf(PropTypes.oneOf(utilityClasses)),
}

export default Kijklijst