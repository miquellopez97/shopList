function Element(props) {
    const { id, functionSetQuantityProduct, name, price, quantity} = props;

    return (
        <tr>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            {<button onClick={() => {functionSetQuantityProduct(id, true)}}>+</button>}
            {<button onClick={() => {functionSetQuantityProduct(id, false)}}>-</button>}
        </tr>
    );
}
export default Element;