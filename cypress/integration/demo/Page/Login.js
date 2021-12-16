class LoginPage {
  visitURL() {
    return cy.visit("/login");
  }

  getGoogleLogin() {
    return cy.xpath(
      '//*[@id="app"]/div/div/div/div/div[2]/div/div[1]/div/div/div'
    );
  }

  getEmailAddress() {
    return cy.get("#email");
  }

  getPassword() {
    return cy.get("#password");
  }

  getForgetPassword() {
    return cy.xpath(
      '//*[@id="app"]/div/div/div/div/div[3]/div[1]/div[4]/div/div/div'
    );
  }

  getLoginButton() {
    return cy.xpath(
      '//*[@id="app"]/div/div/div/div/div[3]/div[1]/div[5]/button'
    );
  }

  getLanguage() {
    return cy.xpath('//*[@id="headlessui-listbox-button-2"]');
  }
}
export default LoginPage;
