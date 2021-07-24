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

describe('Technical Task for ReachPLC - D companies', () => {
  //before each test revisit the original url.
  beforeEach(() => {
    cy.visit('https://www.medicines.org.uk/emc/browse-companies')
    //& accept Cookies
    cy.get('#onetrust-accept-btn-handler').contains('Accept All Cookies').click({force: true})
    cy.get('.browse').contains('D').click()
  })
  it('Business Details for Daiichi Sankyo UK Limited', () => {

    //click on 1st Company.
    cy.get('.row').contains('Daiichi Sankyo UK Limited').click()

    //gather information about current Company.
    //This is the top level division
    cy.get('.col-md-12.company-details')
    .each(function($detail, index, $details){ //Function
      cy.wrap($detail).within(function(){

        //Get screenshot of Company Logo
        cy.get('.col-md-3').screenshot('Daiichi Sankyo UK Limited')

        //get each division from the item with the Class row
        cy.get('.row > div')
        .each(function($data, index, $divisions){
          })
        cy.log($detail.text().trim())
        cy.writeFile('./cypress/CompanyDetails/Daiichi Sankyo UK Limited.json', $detail.text().trim())

      })
    })
  })

  it('Business Details for Dermal Laboratories Limited', () => {

    //click on 3rd Company.
    cy.get('.row').contains('Dermal Laboratories Limited').click()

    //gather information about current Company.
    //This is the top level division
    cy.get('.col-md-12.company-details')
    .each(function($detail, index, $details){ //Function
      cy.wrap($detail).within(function(){

        //Get screenshot of Company Logo
        cy.get('.col-md-3').screenshot('Dermal Laboratories Limited')

        //get each division from the item with the Class row
        cy.get('.row > div')
        .each(function($data, index, $divisions){
          })
        cy.log($detail.text().trim())
        cy.writeFile('./cypress/CompanyDetails/Dermal Laboratories Limited.json', $detail.text().trim())

      })
    })
  })

    it("Business Details for Dr. Reddy's Laboratories (UK) Ltd", () => {

      //click on last Company.
      cy.get('.row').contains("Dr. Reddy's Laboratories (UK) Ltd").click()

      //gather information about current Company.
      //This is the top level division
      cy.get('.col-md-12.company-details')
      .each(function($detail, index, $details){ //Function
        cy.wrap($detail).within(function(){

          //Get screenshot of Company Logo
          cy.get('.col-md-3').screenshot("Dr. Reddy's Laboratories (UK) Ltd")

          //get each division from the item with the Class row
          cy.get('.row > div')
          .each(function($data, index, $divisions){
            })
          cy.log($detail.text().trim())
          cy.writeFile("./cypress/CompanyDetails/Dr. Reddy's Laboratories (UK) Ltd.json", $detail.text().trim())

        })
      })

  })
})
