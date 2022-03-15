import "@testing-library/cypress/add-commands";

describe("Map", () => {
  beforeEach(() => {
    cy.intercept("GET", { fixture: "map.json" });
    cy.visit("/map");
  });

  it("navigates the map", () => {
    cy.visit("http://localhost:3000/map");
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
});
