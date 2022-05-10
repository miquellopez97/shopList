import React from "react";
import { useState, useRef, useEffect, useContext } from "react";
import Form from "./Form";
import List from "./ListProducts";
import {totalMoney} from '../../assets/helper';
import shoplistContext from '../../context/shopListContext';
import classes from "../UI/Input/Input.module.css";


function Component() {

    //**********************Definir Contexto**************************** */
    const { shopListProducts, addProduct } = useContext(shoplistContext);

    //**********************Necesario para comprobar el input**************************** */
    const [prevValueInput, setPrevValueInput] = useState('');
    const [valueInput, setValueInput] = useState(null);
    const [inputIsValid, setInputIsValid] = useState(null);

    //**********************Pillar valores y meterlo al form**************************** */
    const nameInputRef = useRef();
    const quantityInputRef = useRef();
    const priceInputRef = useRef();

    //**********************State del precio total**************************** */
    const [totalPrice, settotalPrice] = useState(0);

    //**********************Que se hace al clickar el form**************************** */
    const handleLogin = (event) => {
        event.preventDefault();

        const product = {
            name: nameInputRef.current.value,
            quantity: parseInt(quantityInputRef.current.value),
            price: parseInt(priceInputRef.current.value),
        };

        addProduct(product);

        settotalPrice(totalMoney(shopListProducts));
    };

    //**********************Efecto del precio**************************** */
    useEffect(() => {
        settotalPrice(totalMoney(shopListProducts));
    }, []);

    //**********************Comprobacion del input**************************** */
    useEffect(() => {
        if (prevValueInput === valueInput) {
            return;
        }

        const timer = setTimeout(() => {
            setPrevValueInput(valueInput);
            setInputIsValid(validationFunction(valueInput));
        }, 500);

        return () => {
            clearTimeout(timer);
        }
    }, [prevValueInput, valueInput]);

    const validationFunction = (value) => {
        const regex = new RegExp("^[a-zA-z0-9]+$");
        let isValid = regex.test(value);
    
        return isValid;
    }

    return (
        <>
            <h2>Comprobar input</h2>
            <input onChange={(e) => setValueInput(e.target.value)} value={valueInput} className={inputIsValid === false ? classes.invalid : ''}/>

            <h2>Modificar Context</h2>
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
