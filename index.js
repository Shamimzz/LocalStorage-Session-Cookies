
// Click to Add Card
const AddItem = () => {
    const feildValue =  document.getElementById('input').value;
    if(!feildValue){
        return;
    }
    // display items
    displayItems(feildValue);
    // addLocalStorage
    AddItemLocalStorage(feildValue);
    // clear 
    feildValue.value = '';
}


// display card items
const displayItems = feildValue => {
    const ul =  document.getElementById('ul');
    const li = document.createElement('li');
    li.innerText = feildValue;
    ul.appendChild(li);
}


// put the Object into localStorage....
const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};
    }
    return cartObj;
}


// add product to localstorage........ 
const AddItemLocalStorage = feildValue => {
    const cart = getCart();
    if (cart[feildValue]) {
        cart[feildValue] = cart[feildValue] + 1;
    }
    else {
        cart[feildValue] = 1;
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}


// After place order localStorage will be remove.....
const placeOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
}



// display products items to ui....
const displayLocalStorageCart = () => {
    const cart = getCart();
    for (const name in cart) {
        displayItems(name);
    }
}

displayLocalStorageCart();
