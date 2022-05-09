import React, {useContext} from "react";
import Element from "./Element";
import shoplistContext from '../../context/shopListContext';



function Component(props) {    
    const {shopListProducts, setQuantityProduct} = useContext(shoplistContext);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {shopListProducts && shopListProducts.map((el) =>
                        <Element
                            functionSetQuantityProduct={setQuantityProduct}
                            id={el.id}
                            name={el.name}
                            quantity={el.quantity}
                            price={el.price}
                        />
                    )}
                </tbody>
            </table>
            <p>Total price: {props.totalPrice}€</p>
        </>
    );
}
export default Component;