import "@testing-library/cypress/add-commands";

describe("Map", () => {
  before(() => {
    cy.visit("/");
    cy.get("[data-testid=map-btn]").click();
    cy.visit("/map")
    cy.intercept("https://tiles.stadiamaps.com/**").as('getMap')
    cy.wait('@getMap', { timeout: 20000 })
  });

  describe("Render buttons and places", () => {
    it("renders and hide the pet shops on the map", () => {
      
      cy.contains("Hide Pet Shops").should('exist')
      cy.intercept("https://api.foursquare.com/v3/places/*").as('fetchMarkers')
      cy.wait('@fetchMarkers', { timeout: 20000 })
      cy.get("[data-testid=marker-petShop]").should('exist')
      
      cy.contains("Hide Pet Shops").click()
      cy.contains("Show Pet Shops").should('exist')
      cy.wait('@fetchMarkers', { timeout: 20000 })
      cy.get("[data-testid=marker-petShop]").should('not.exist')
    });
  
    it("renders the veterinary clinics  on the map", () => {
      cy.contains("veterinary clinics")
      cy.get("[data-testid=marker-vet]")
    });
  
    it("renders the groomers  on the map", () => {
      cy.contains("Groomers")
      cy.get("[data-testid=marker-groomer]")
    });
  })
  
});
