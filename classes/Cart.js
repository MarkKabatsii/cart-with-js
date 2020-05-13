class Cart {
    constructor(item) {
        this.item = item;
    }

    getTotal() {
        let total = 0;
        for (let key in this.item) {
            total += this.item[key]["count"] * this.item[key]["price"];
        }
        return total;
    }

    getPlus(articul) {
        this.item[articul]["count"]++;
    }

    getMinus(articul) {
        if (this.item[articul]["count"] - 1 == 0) {
            this.getDelete(articul);
        } else {
            this.item[articul]["count"]--;
        }
    }

    getDelete(articul) {
        delete this.item[articul];
    }

    render() {
        const cart = document.querySelector('.container-cart');
        const itemCart = document.createElement('div');
        itemCart.classList.add('item')
        cart.append(itemCart);
        const order = document.createElement('div');
        order.classList.add('order');
        let totalTitle = document.createElement('h3');
        totalTitle.classList.add('total-title');
        totalTitle.innerHTML = `Total : <span>$${this.getTotal().toFixed(2)}</span>`
        order.append(totalTitle);
        const btnCheckout = document.createElement('button');
        btnCheckout.classList.add('cta--add');
        btnCheckout.textContent = "Checkout"
        order.append(btnCheckout);
        const deliveryTitle = document.createElement('h3');
        deliveryTitle.classList.add('delivery-title');
        deliveryTitle.textContent = 'Delivery to your city'
        order.append(deliveryTitle);
        const deliveryText = document.createElement('p');
        deliveryText.classList.add('delivery-text');
        deliveryText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu libero" +
            " molestie, scelerisque lacus convallis, imperdiet justo.";
        order.append(deliveryText);
        const deliveryTextNext = document.createElement('p');
        deliveryTextNext.classList.add('delivery-text');
        deliveryTextNext.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu libero" +
            " molestie, scelerisque lacus convallis, imperdiet justo.";
        order.append(deliveryTextNext);
        cart.append(order);
        for (let key in this.item) {
            let cartWrapper = document.createElement('div');
            cartWrapper.setAttribute('class', "cart-wrapper");
            itemCart.append(cartWrapper)
            const img = document.createElement('img');
            img.setAttribute('src', `${this.item[key]["image"]}`)
            img.setAttribute('class', 'cart-image');
            cartWrapper.append(img);

            const goodTitle = document.createElement('h5');
            goodTitle.setAttribute('class', "good-title");
            goodTitle.textContent = this.item[key]["brand_name"];
            cartWrapper.append(goodTitle);
            const goodText = document.createElement("span");
            goodText.textContent =this.item[key]["name"];
            goodTitle.append(goodText);

            let counter = document.createElement('div');
            counter.setAttribute('class', 'counter');
            cartWrapper.append(counter);
            const goodCount = document.createElement('div');
            goodCount.setAttribute('class', 'good-count');
            counter.append(goodCount);
            const btnMinus = document.createElement('button');
            goodCount.append(btnMinus);
            btnMinus.setAttribute('class', 'minus');
            btnMinus.setAttribute('data-articul', `${key}`)
            const iMinus = document.createElement('i');
            btnMinus.append(iMinus);
            iMinus.setAttribute('class', 'material-icons')
            iMinus.classList.add('minus-icons');
            iMinus.textContent = "remove";
            const countGoods = document.createElement('div');
            countGoods.classList.add('count-goods');
            countGoods.textContent = this.item[key]["count"];
            goodCount.append(countGoods);
            const btnPlus = document.createElement('button');
            goodCount.append(btnPlus);
            btnPlus.setAttribute('class', 'plus');
            btnPlus.setAttribute('data-articul', `${key}`)
            const iPlus = document.createElement('i');
            btnPlus.append(iPlus);
            iPlus.setAttribute('class', 'material-icons')
            iPlus.classList.add('plus-icons')
            iPlus.textContent = "add";
            const goodPrice = document.createElement('div');
            goodPrice.setAttribute('class', 'good-price');
            goodPrice.textContent = `$${this.item[key]["price"]}`;
            cartWrapper.append(goodPrice);
            const btnDelete = document.createElement('button');
            btnDelete.setAttribute('class', 'delete');
            btnDelete.setAttribute('data-articul', `${key}`)
            btnDelete.textContent = "Delete";
            cartWrapper.append(btnDelete);
        }
    }
}