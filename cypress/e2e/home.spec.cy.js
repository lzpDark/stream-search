describe('template spec', () => {

  beforeEach(()=> {
    cy.visit('http://localhost:5173/')
  })

  context("navigate in header", ()=> {
    it("trends", ()=> {
      cy.getByData("data-trends").click();
      cy.location("pathname").should("equal", "/trends");
    })

    it("recent", ()=> {
      cy.getByData("data-recent").click();
      cy.location("pathname").should("equal", "/recent");
    })

    it("about", ()=> {
      cy.getByData("data-about").click();
      cy.location("pathname").should("equal", "/about");
    })
  })

  it('should load videos', () => {
     
  })
})