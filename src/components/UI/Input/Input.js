import { useEffect, useState } from 'react';
import classes from './Input.module.css';

function Input(props) {
  const [prevPropsValue, setPrevPropsValue] = useState('');
  const [inputIsValid, setInputIsValid] = useState(null);

  useEffect(() => {
    if (prevPropsValue === props.value) {
      return;
    }
    const timer = setTimeout(() => {
      setPrevPropsValue(props.value);
      setInputIsValid(validationFunction(props.value));
    }, 500);

    return () => clearTimeout(timer);
  }, [props, prevPropsValue]);

  const validationFunction = (value) => {
    const regex = new RegExp("^[a-zA-z0-9]+$");
    let isValid = regex.test(value);

    if(isValid){
      setInputIsValid(value)
    }else if(value === ''){
      setInputIsValid(null)
      isValid = true;
    }else {
      setInputIsValid(false);
    }

    return isValid;
  }

  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        name={props.id}
        className={inputIsValid === false ? classes.invalid : classes.valid}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
}
export default Input;