if (localStorage.getItem('cart')) {
    const goodsCart = JSON.parse(localStorage.getItem('cart'));
    const cart = new Cart(goodsCart);

    document.querySelector('.container-cart').innerHTML = '';
    cart.render();
    document.querySelector('.container-cart').addEventListener('click', (event) => {
        if (event.target.classList.contains('plus')) {
            cart.getPlus(event.target.dataset["articul"]);
            document.querySelector('.container-cart').innerHTML = '';
            cart.render();
            localStorage.setItem('cart', JSON.stringify(cart.item));
            return true;
        } else if (event.target.classList.contains('minus')) {
            cart.getMinus(event.target.dataset["articul"]);
            document.querySelector('.container-cart').innerHTML = '';
            cart.render();
            localStorage.setItem('cart', JSON.stringify(cart.item));
            return true;
        } else if (event.target.classList.contains('delete')) {
            cart.getDelete(event.target.dataset['articul']);
            document.querySelector('.container-cart').innerHTML = '';
            cart.render();
            localStorage.setItem('cart', JSON.stringify(cart.item));
            return true;
        }
    })
}