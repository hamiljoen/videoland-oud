import PropTypes from 'prop-types'

const Label = ({ label, color }) => {

    const style = {
        color: color === "muted" ? "rgba(0,0,0,0.5)" : "#000"
    }

    return(
        <div className="Label" style={ style }>{ label }</div>
    )

}

Label.propTypes = {
    label: PropTypes.string,
    color: PropTypes.oneOf(["black", "muted"])
}

export default Label