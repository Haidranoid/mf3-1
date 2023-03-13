import {mount as mountProducts} from 'products/ProductsIndex';
import {mount as mountCart} from 'cart/CartIndex';

console.log('Container!')
mountProducts(document.getElementById('dev-products-dev-only'))
mountCart(document.getElementById('dev-cart-dev-only'))