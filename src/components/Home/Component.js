import React from "react";
import { useState, useRef, useEffect, useContext } from "react";
import Form from "./Form";
import List from "./ListProducts";
import {totalMoney} from '../../assets/helper';
import shoplistContext from '../../context/shopListContext';


function Component() {

    const { shopListProducts } = useContext(shoplistContext);

    const nameInputRef = useRef();
    const quantityInputRef = useRef();
    const priceInputRef = useRef();
    const [totalPrice, settotalPrice] = useState(0);

    const handleLogin = (event) => {
        event.preventDefault();

        const product = {
            name: nameInputRef.current.value,
            quantity: parseInt(quantityInputRef.current.value),
            price: parseInt(priceInputRef.current.value),
        };

        settotalPrice(totalMoney(shopListProducts));
    };

    useEffect(() => {
        settotalPrice(totalMoney(shopListProducts));
    }, []);

    return (
        <>
            <h1>Home</h1>
            <Form
                nameInput={nameInputRef}
                quantityInput={quantityInputRef}
                priceInput={priceInputRef}
                onSubmitButton={handleLogin}
            />
            <List totalPrice={totalPrice}/>
        </>
    );
}
export default Component;
