import React from "react";
import Element from "./Element";
import {randomNum} from "../../assets/helper";


function Component(props) {


    return (
        <>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                {props.shopList && props.shopList.map((el) =>
                    <Element
                        name={el.name}
                        quantity={el.quantity}
                        price={el.country}
                        key={randomNum}
                    />
                )}
            </tbody>
        </>
    );
}
export default Component;