import React from "react";

function Form(props) {
    //**********************Declaramos los inputs que queremos y la funcion (Mismos nombres que el Component!)**************************** */
    const { nameInput, quantityInput, priceInput, onSubmitButton } = props;

    return (
        <>
            <form onSubmit={onSubmitButton}>
                <label>
                    Producto
                </label>
                <input 
					type="text" 
					ref={nameInput} 
				/>
                <label>
                    Cantidad
                </label>
                <input 
					type="number" 
					ref={quantityInput} 
				/>
                <label>
                    Precio
                </label>
                <input 
					type="number" 
					ref={priceInput} 
				/>
                <div>
                    <input  
						type="submit" 
						value="Anotar"/>
                </div>
            </form>
        </>
    );
}
export default Form;