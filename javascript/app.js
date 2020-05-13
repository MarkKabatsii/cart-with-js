document.addEventListener("DOMContentLoaded", evt => {
    const card = new Card(goods);
    if (localStorage.getItem('cart') !== null) {
        const cartStorage = JSON.parse(localStorage.getItem('cart'));
        card.data = cartStorage;
        let total = 0;
        for (let key in cartStorage) {
            total += cartStorage[key]["count"]
        }
        document.querySelector('.cart-icon_count span').style.display = 'flex';
        document.querySelector('.count').innerHTML = total;
        card.render();
        document.addEventListener('click', (event) => {
            if (event.target.classList.contains('cta--select')) {
                card.getAddLocalStorage(event.target.dataset["articul"]);
                document.querySelector('.count').innerHTML = card.getCounter();
            }
        })
    } else {
        card.render();
        document.addEventListener('click', (event) => {
            if (event.target.classList.contains('cta--select')) {
                card.getAddLocalStorage(event.target.dataset["articul"]);
                if (card.getCounter() > 0) {
                    document.querySelector('.cart-icon_count span').style.display = 'flex';
                }
                document.querySelector('.count').innerHTML = card.getCounter();
            }
        });
    }
});

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    myHeader();
};

let header = document.querySelector("#header");
let sticky = header.offsetTop;

function myHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}






