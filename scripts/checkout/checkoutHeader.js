import { cart } from "../../data/cart.js";

export function renderCheckoutHeader () {
    let headerHTML = '';

    let totalItemsHeader = cart.length;

    const checkoutHeaderHTML =
    `
    Checkout (<a class="return-to-home-link"
            href="amazon.html">${totalItemsHeader} items</a>)
    `

    document.querySelector('.js-checkout-header-middle-section')
        .innerHTML = checkoutHeaderHTML;
};

