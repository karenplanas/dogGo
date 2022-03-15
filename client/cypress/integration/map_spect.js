import "@testing-library/cypress/add-commands";

describe("Map", () => {
  beforeEach(() => {
    // cy.intercept("GET", { fixture: "map.json" });
    cy.visit("/");
    cy.get("[data-testid=map-btn]").click();
  });

  it("navigates the map", () => {
    cy.visit("/map");
  });
  it("renders the pet shops on the map", () => {
    cy.contains("Pet Shops").click();
  });
  it("renders the veterinary clinics  on the map", () => {
    cy.contains("veterinary clinics").click();
  });
  it("renders the groomers  on the map", () => {
    cy.contains("Groomers").click();
  });
  it("renders the name of the current shop", () => {});
});
