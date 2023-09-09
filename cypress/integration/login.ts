import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"
import {CartProduct} from "./pages/cart"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let cartProduct = new CartProduct()
const btn_add_to_cart_prd1 = '#add-to-cart-sauce-labs-backpack'
const btn_add_to_cart_prd2 = '#add-to-cart-sauce-labs-bike-light'
const URL = 'https://www.saucedemo.com/'

it('Test LOGIN', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin() 
})

it('Test Sauce Demo Invalid Password', () => {
    loginPage.login(URL,'standard_user','invalidPass')
    loginPage.assertLoginFail()
})

it('Test Sauce Demo Sauce labs product backpack', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
})

it('Add to Cart Sauce Labs Backpack', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    cartProduct.addCart(btn_add_to_cart_prd1)
    cartProduct.openCart()
    cartProduct.assertAdd()
})

it('Remove from Cart Sauce Labs Backpack', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    cartProduct.addCart(btn_add_to_cart_prd1)
    cartProduct.addCart(btn_add_to_cart_prd2)
    cartProduct.openCart()
    cartProduct.removeCart()
    cartProduct.assertRemove()
})

