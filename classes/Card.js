class Card {
    constructor(item) {
        this.item = item
        this.data = {}
    }

    getCounter() {
        let counter = 0;
        for (let key in this.data) {
            counter += this.data[key]['count'];
        }
        return counter;
    }

    getAddLocalStorage(articul) {
        if (this.data[articul] !== undefined) {
            this.data[articul]['count']++;
        } else {
            this.data[articul] = this.item[articul];
            this.data[articul]['count'] = 1;
        }
        localStorage.setItem('cart', JSON.stringify(this.data));
    }

    render() {
        let out = document.querySelector('#main .container');
        for (let key in this.item) {

            let goods = document.createElement('div');
            goods.setAttribute('class', "card");
            let h2 = document.createElement('h2');
            h2.setAttribute('class', 'title');
            h2.textContent = this.item[key]["brand_name"];
            let pContext = document.createElement('p');
            pContext.classList.add("text_context");
            pContext.textContent = this.item[key]["name"];
            let goodImage = document.createElement('div');
            goodImage.setAttribute('class', "good-image");
            let img = document.createElement('img');
            img.setAttribute('src', this.item[key]["image"]);
            let price = document.createElement('p');
            price.setAttribute('class', "price");
            price.textContent = `$${this.item[key]["price"]}`;
            let button = document.createElement('button');
            button.setAttribute('class', 'cta--select');
            button.setAttribute('data-articul', `${key}`)
            button.textContent = "add to cart";
            out.append(goods);
            goods.append(goodImage);
            goodImage.append(img);
            goods.append(h2);
            goods.append(pContext)
            goods.append(price);
            goods.append(button);
        }
    }
}

