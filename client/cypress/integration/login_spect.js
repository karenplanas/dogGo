// import "@testing-library/cypress/add-commands";

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-testid=login-btn]").click();
  });

  it("renders the login page", () => {
    cy.visit("/login");
  });
  it("clicks on the login button", () => {
    cy.contains("Login with Google").click();
  });

  it("Login through Google", () => {
    const username = Cypress.env("googleSocialLoginUsername");
    const password = Cypress.env("googleSocialLoginPassword");
    const loginUrl = Cypress.env("loginUrl");
    const cookieName = Cypress.env("cookieName");
    const socialLoginOptions = {
      username,
      password,
      loginUrl,
      usernameField: "#input_username",
      passwordFiedl: "#input_password",
      passwordSubmitBtn: "#login_btn_sign",
      headless: true,
      logs: false,
      loginSelector: '[href="/auth/auth0/google-oauth2"]',
      postLoginSelector: ".account-panel",
    };

    // return cy
    //   .visit(loginUrl)
    //   .get("#identifierId")
    //   .type(username)
    //   .submit()
    //   .task("GoogleSocialLogin", socialLoginOptions)
    //   .then(({ cookies }) => {
    //     cy.clearCookies();

    //     const cookie = cookies
    //       .filter((cookie) => cookie.name === cookieName)
    //       .pop();
    //     if (cookie) {
    //       cy.setCookie(cookie.name, cookie.value, {
    //         domain: cookie.domain,
    //         expiry: cookie.expires,
    //         httpOnly: cookie.httpOnly,
    //         path: cookie.path,
    //         secure: cookie.secure,
    //       });

    //       Cypress.Cookies.defaults({
    //         preserve: cookieName,
    //       });
    //     }
    //   });
  });
});
