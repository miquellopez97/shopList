import { createContext, useEffect, useState } from "react";

const shopListContext = createContext({
    shopListProducts : [
        { id:1, name: "Sopa de miso", quantity: 1, price: 3 },
        { id:2, name: "Ramen", quantity: 1, price: 6 },
        { id:3, name: "Wakame", quantity: 1, price: 4 },
        { id:4, name: "Edamame", quantity: 2, price: 3 },
        { id:5, name: "Udon", quantity: 1, price: 6 },
        { id:6, name: "Gyoza", quantity: 1, price: 4.2 },
        { id:7, name: "Tempura de llagostí", quantity: 1, price: 6.2 },
        { id:8, name: "Maki salmó", quantity: 1, price: 4 },
        { id:9, name: "Maki mango", quantity: 1, price: 4 },
        { id:10, name: "Maki tonyina", quantity: 1, price: 4 },
        { id:11, name: "Nigiri salmó", quantity: 1, price: 3.5 },
        { id:12, name: "Nigiri tonyina", quantity: 1, price: 3.8 },
        { id:13, name: "Sashimi variat", quantity: 1, price: 9 },
    ],
    setQuantityProduct: () => {},
    addProduct: () => {}
});

export default shopListContext;

export function AuthContextProvider(props) {
    const [shopList, setShopList] = useState(shopListContext.shopListProducts);

    const setQuantityProduct = (id, bool) => {
        shopList.forEach(e => {
            if (e.id === id){
                if (bool) {
                    setShopList(e.quantity += 1);
                }
                setShopList(e.quantity -= 1);
            }
        });
    };

    const addProduct = (product) => {
        setShopList(shopList => [...shopList, product])
    };

    useEffect(() => {
        setQuantityProduct();
        addProduct();
    },[shopList, shopListContext]);
    

    const context = {
        shopList,
        setQuantityProduct,
        setShopList,
        addProduct 
    };

    

    return (
            <shopListContext.Provider value={context}>
                {props.children}
            </shopListContext.Provider>
        );
}
