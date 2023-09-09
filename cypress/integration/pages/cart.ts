
export class CartProduct{
    
    btn_remove_from_cart_prd1 = '#remove-sauce-labs-backpack'
    btn_cart = '.shopping_cart_link'

    addCart(btn_add: string){
        cy.get(btn_add).click()  
    }

    removeCart(){
        cy.get(this.btn_remove_from_cart_prd1).click()
    }

    openCart(){
        cy.get(this.btn_cart).click()
    }

    assertAdd(){
        cy.get('.cart_list')
        .find('.inventory_item_name')
        .should('contain', 'Sauce Labs Backpack')
    }

    assertRemove() {
        cy.get('.cart_list')
          .find('.inventory_item_name')
          .should('exist')
          .should('not.contain', 'Sauce Labs Backpack');
      }
      


}