import React from "react";
import PropTypes from "prop-types";

// const name = {
//     firstname : "Talha"
// }
const Exression = (props) => {
    return <div>
        <h1>{props.name} {10 + 20}</h1>
        <h1>Hello {props.name} {props.marks}</h1>
    </div>
     
}

const show = (name) => {
    return name;
}

const Person = () => {
    return <h1>Hello {show("Usman")}</h1>
}

Exression.propTypes = {
    name : PropTypes.string.isRequired,
    marks : PropTypes.number
}

Exression.defaultProps = {
    name : "Abdullah",
}
// export default Person;
export default Exression;