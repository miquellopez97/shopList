import React from "react";

function Element(props) {
    const { name, quantity, price} = props;

    return (
        <tr>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{price}</td>
        </tr>
    );
}
export default Element;