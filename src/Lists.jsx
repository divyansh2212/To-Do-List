import React from "react";

const Lists = (props) => {

    return (<>

        <li> <button className="removeItem"
            onClick={() => {
                props.onSelect(props.id)
            }}
        > x </button> {props.value}</li>
    </>)
}

export default Lists