export function randomNum(){
    return Math.floor(Math.random() * 100);
}

export function totalMoney(arr){
    let value=0;
    arr.forEach(x => value += (x.price * x.quantity));
    return value.toFixed(2);
}