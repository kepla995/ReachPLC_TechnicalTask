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

describe('Technical Task for ReachPLC - K companies', () => {
  //before each test revisit the original url.

    beforeEach(() => {
      //Visit target webs
      cy.visit('https://www.medicines.org.uk/emc/browse-companies')

      //Wait for Cookies pop-up & accept
      cy.wait(2000)
      cy.get('#onetrust-accept-btn-handler').contains('Accept All Cookies').click({force: true})
      cy.get('.browse').contains('K').click()
    })

  it('Business Details for Karo Pharma AB', () => {

    //click on 1st Company.
    cy.get('.row').contains('Karo Pharma AB').click()

    //gather information about current Company.
    //This is the top level division
    cy.get('.col-md-12.company-details')
    .each(function($detail, index, $details){ //Function
      cy.wrap($detail).within(function(){

        //Change to better viewport size to capture screenshot
        cy.viewport(250, 768)
        cy.get('.col-md-3')
        //Get screenshot of Company Logo & Company details
        cy.get('.companyLogoWrapper').find('img')
        .screenshot('Karo Pharma AB')

        //get each division from the item with the Class row
        cy.get('.row > div')
        .each(function($data, index, $divisions){
          })
        cy.log($detail.text().trim())
        cy.writeFile('./cypress/CompanyDetails/Karo Pharma AB.json', $detail.text().trim())

      })
    })
  })

  it('Business Details for Kestrel Ophthalmics Limited', () => {

    //click on 3rd Company.
    cy.get('.row').contains('Kestrel Ophthalmics Limited').click()

    //gather information about current Company.
    //This is the top level division
    cy.get('.col-md-12.company-details')
    .each(function($detail, index, $details){ //Function
      cy.wrap($detail).within(function(){

        //Change to better viewport size to capture screenshot
        cy.viewport(250, 768)
        cy.get('.col-md-3')
        //Get screenshot of Company Logo & Company details
        cy.get('.companyLogoWrapper').find('img')
        .screenshot('Kestrel Ophthalmics Limited')

        //get each division from the item with the Class row
        cy.get('.row > div')
        .each(function($data, index, $divisions){
          })
        cy.log($detail.text().trim())
        cy.writeFile('./cypress/CompanyDetails/Kestrel Ophthalmics Limited.json', $detail.text().trim())

      })
    })
  })

    it('Business Details for Kyowa Kirin Ltd', () => {

      //click on last Company.
      cy.get('.row').contains('Kyowa Kirin Ltd').click()

      //gather information about current Company.
      //This is the top level division
      cy.get('.col-md-12.company-details')
      .each(function($detail, index, $details){ //Function
        cy.wrap($detail).within(function(){

          //Change to better viewport size to capture screenshot
          cy.viewport(250, 768)
          cy.get('.col-md-3')
          //Get screenshot of Company Logo & Company details
          cy.get('.companyLogoWrapper').find('img')
          .screenshot('Kyowa Kirin Ltd')

          //get each division from the item with the Class row
          cy.get('.row > div')
          .each(function($data, index, $divisions){
            })
          cy.log($detail.text().trim())
          cy.writeFile('./cypress/CompanyDetails/Kyowa Kirin Ltd.json', $detail.text().trim())

        })
      })
    })
  })
