import cart from './components/cart.js';
import loader from './components/loader.js';
import products from './components/products.js';
import showCart from './components/showCart.js';
import showMenu from './components/showMenu.js'
import getProducts from './helpers/getProducts.js';
/*UI ELEMENTS*/ 

/* HIDDEN LOADER */
loader()
/* show menu*/
showMenu()

/* Show cart*/

showCart() 

/* end UI elements */
/* products */
const {db, printProducts} = products(await getProducts())

/* cart */

cart(db, printProducts)