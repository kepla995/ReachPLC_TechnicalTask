/*
Using an automated testing tool of their choice preferably written in JavaScript.
Navigate to https://www.medicines.org.uk/emc/browse-companies
For each page of the company browser
Capture details about the first, the third and the last company on the page.
The details must include the company name, the logo and all contact information.
Do not capture the information about the drugs related to that company
Store the logo as an image in a folder
Add the company details to an internal data structure. Include the filename of the image file
Output the internal data structure of the company details as a JSON or XML file.
*/

describe('Technical Task for ReachPLC - E companies', () => {
  //before each test revisit the original url.
  beforeEach(() => {
    cy.visit('https://www.medicines.org.uk/emc/browse-companies')
    //& accept Cookies
    cy.get('#onetrust-accept-btn-handler').contains('Accept All Cookies').click({force: true})
    cy.get('.browse').contains('E').click()
  })
  it('Business Details for Eisai Ltd', () => {

    //click on 1st Company.
    cy.get('.row').contains('Eisai Ltd').click()

    //gather information about current Company.
    //This is the top level division
    cy.get('.col-md-12.company-details')
    .each(function($detail, index, $details){ //Function
      cy.wrap($detail).within(function(){

        //Get screenshot of Company Logo
        cy.get('.col-md-3').screenshot('Eisai Ltd')

        //get each division from the item with the Class row
        cy.get('.row > div')
        .each(function($data, index, $divisions){
          })
        cy.log($detail.text().trim())
        cy.writeFile('./cypress/CompanyDetails/Eisai Ltd.json', $detail.text().trim())

      })
    })
  })

  it('Business Details for Emergent BioSolutions UK', () => {

    //click on 3rd Company.
    cy.get('.row').contains('Emergent BioSolutions UK').click()

    //gather information about current Company.
    //This is the top level division
    cy.get('.col-md-12.company-details')
    .each(function($detail, index, $details){ //Function
      cy.wrap($detail).within(function(){

        //Get screenshot of Company Logo
        cy.get('.col-md-3').screenshot('Emergent BioSolutions UK')

        //get each division from the item with the Class row
        cy.get('.row > div')
        .each(function($data, index, $divisions){
          })
        cy.log($detail.text().trim())
        cy.writeFile('./cypress/CompanyDetails/Emergent BioSolutions UK.json', $detail.text().trim())

      })
    })
  })

    it('Business Details for Exelgyn', () => {

      //click on last Company.
      cy.get('.row').contains('Exelgyn').click()

      //gather information about current Company.
      //This is the top level division
      cy.get('.col-md-12.company-details')
      .each(function($detail, index, $details){ //Function
        cy.wrap($detail).within(function(){

          //Get screenshot of Company Logo
          cy.get('.col-md-3').screenshot('Exelgyn')

          //get each division from the item with the Class row
          cy.get('.row > div')
          .each(function($data, index, $divisions){
            })
          cy.log($detail.text().trim())
          cy.writeFile('./cypress/CompanyDetails/Exelgyn.json', $detail.text().trim())

        })
      })

  })
})