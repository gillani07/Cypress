
import { get } from 'lodash'
import LoginPage from '../demo/Page/Login'


beforeEach(() => {
    
  cy.viewport(1920,1080)
 // cy.fixture('data').as('data')

})

describe('Test Suite 1', () => {
    it('Login Successfully', () => {

      const lp= new LoginPage();
      lp.visitURL()
      lp.getEmailAddress().type('Mohammad@hivebuy.de');
      lp.getPassword().type('Test123!!');
      lp.getLoginButton().click();

    })
  })