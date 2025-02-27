

describe('My First Test', () => {

  beforeEach(()=> {
    cy.visit('http://localhost:5173/')
  })

  it('finds the content "type"', () => {
    cy.getByData("hero-heading").contains("enjoy video")
  })

  // it.only("only test this", ()=> {
     
  // })
})