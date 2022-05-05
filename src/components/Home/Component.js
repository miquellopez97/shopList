import React from "react";
import { useState, useRef, useEffect } from "react";
import Form from "./Form";
import List from "./ListProducts";

function Component() {

    const nameInputRef = useRef();
    const quantityInputRef = useRef();
    const priceInputRef = useRef();

    const defaultData = [
        { name: 'Sopa de miso', quantity: 1, price: 3 },
        { name: 'Ramen', quantity: 1,price: 6 },
        { name: 'Wakame', quantity: 1, price: 4 },
        { name: 'Edamame', quantity: 1, price: 3 },
        { name: 'Udon', quantity: 1, price: 6 },
        { name: 'Gyoza', quantity: 1, price: 4.20 },
        { name: 'Tempura de llagostí', quantity: 1, price: 6.20 },
        { name: 'Maki salmó', quantity: 1, price: 4 },
        { name: 'Maki mango', quantity: 1, price: 4 },
        { name: 'Maki tonyina', quantity: 1, price: 4 },
        { name: 'Nigiri salmó', quantity: 1, price: 3.50 },
        { name: 'Nigiri tonyina', quantity: 1, price: 3.80 },
        { name: 'Sashimi variat', quantity: 1, price: 9 }
    ];

    const [shopList, setShopList] = useState(defaultData);

    const handleLogin = (event) => {
        event.preventDefault();

        const product = {
            name: nameInputRef.current.value,
            quantity: quantityInputRef.current.value,
            price: priceInputRef.current.value,
        };

        setShopList(prev => prev.push(product))
        console.log(product);
    };

    return (
        <>
            <h1>Home</h1>
            <Form
                nameInput={nameInputRef}
                quantityInput={quantityInputRef}
                priceInput={priceInputRef}
                onSubmitButton={handleLogin}
            />
            <List shopList={shopList} />
        </>
    );
}
export default Component;
