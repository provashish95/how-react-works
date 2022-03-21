//use local storage to manage cart data

const addToDb = id => {
    // console.log('add item', id);
    let shoppingCart;

    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    } else {
        shoppingCart = {};
    }
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));




    /*  const quantity = localStorage.getItem(id);
     if (quantity) {
         //console.log('already exits', quantity);
         const newQuantity = JSON.parse(quantity) + 1;
         localStorage.setItem(id, newQuantity);
     } else {
         localStorage.setItem(id, 1);
     } */
}

const removeCart = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteCart = () => {
    localStorage.removeItem('shopping-cart')
}

export {
    addToDb,
    removeCart,
    deleteCart
}