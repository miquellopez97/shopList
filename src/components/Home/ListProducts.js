import React from "react";
import Element from "./Element";
import {randomNum} from "../../assets/helper";


function Component(props) {


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
                    {props.shopList && props.shopList.map((el) =>
                        <Element
                            name={el.name}
                            quantity={el.quantity}
                            price={el.price}
                            key={randomNum}
                        />
                    )}
                </tbody>
            </table>
        </>
    );
}
export default Component;