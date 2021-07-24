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

describe('Technical Task for ReachPLC - A companies', () => {
  //before each test revisit the original url.
  beforeEach(() => {
    cy.visit('https://www.medicines.org.uk/emc/browse-companies')
    //& accept Cookies
    cy.get('#onetrust-accept-btn-handler').contains('Accept All Cookies').click({force: true})

  })
  it('Business Details for A. Menarini Farmaceutica Internazionale SRL', () => {

    //click on 1st business for A.
    cy.get('.row').contains('A. Menarini Farmaceutica Internazionale SRL').click()

    //gather information about current Company.
    //This is the top level division
    cy.get('.col-md-12.company-details')
    .each(function($detail, index, $details){ //Function
      cy.wrap($detail).within(function(){

        //Get screenshot of Company Logo
        cy.get('.img-responsive').screenshot('A. Menarini Farmaceutica Internazionale SRL')

        //get each division from the item with the Class row
        cy.get('.row > div')
        .each(function($data, index, $divisions){
          })
        cy.log($detail.text().trim())
        cy.writeFile('./cypress/CompanyDetails/A._Menarini_Farmaceutica_Internazionale_SRL.json', $detail.text().trim())

      })
    })
  })

  it('Business Details for Accord Healthcare Limited', () => {

    //click on 3rd business for A.
    cy.get('.row').contains('Accord Healthcare Limited').click()

    //gather information about current Company.
    //This is the top level division
    cy.get('.col-md-12.company-details')
    .each(function($detail, index, $details){ //Function
      cy.wrap($detail).within(function(){

        //Get screenshot of Company Logo
        cy.get('.col-md-3').screenshot('Accord Healthcare Limited')

        //get each division from the item with the Class row
        cy.get('.row > div')
        .each(function($data, index, $divisions){
          })
        cy.log($detail.text().trim())
        cy.writeFile('./cypress/CompanyDetails/Accord_Healthcare_Limited.json', $detail.text().trim())

      })
    })
  })

    it('Business Details for Aurobindo Pharma - Milpharm Ltd.', () => {

      //click on last business for A.
      cy.get('.row').contains('Aurobindo Pharma - Milpharm Ltd.').click()

      //gather information about current Company.
      //This is the top level division
      cy.get('.col-md-12.company-details')
      .each(function($detail, index, $details){ //Function
        cy.wrap($detail).within(function(){

          //Get screenshot of Company Logo
          cy.get('.col-md-3').screenshot('Aurobindo Pharma - Milpharm Ltd.')

          //get each division from the item with the Class row
          cy.get('.row > div')
          .each(function($data, index, $divisions){
            })
          cy.log($detail.text().trim())
          cy.writeFile('./cypress/CompanyDetails/Aurobindo_Pharma_-_Milpharm_Ltd.json', $detail.text().trim())

        })
      })

  })
})
