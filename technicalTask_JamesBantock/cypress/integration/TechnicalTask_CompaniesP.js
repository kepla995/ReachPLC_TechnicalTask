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

describe('Technical Task for ReachPLC - P companies', () => {
  //before each test revisit the original url.

    beforeEach(() => {
      //Visit target webs
      cy.visit('https://www.medicines.org.uk/emc/browse-companies')

      //Wait for Cookies pop-up & accept
      cy.wait(2000)
      cy.get('#onetrust-accept-btn-handler').contains('Accept All Cookies').click({force: true})
      cy.get('.browse').contains('P').click()
    })

  it('Business Details for PAION UK Ltd', () => {

    //click on 1st Company.
    cy.get('.row').contains('PAION UK Ltd').click()

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
        .screenshot('PAION UK Ltd')

        //get each division from the item with the Class row
        cy.get('.row > div')
        .each(function($data, index, $divisions){
          })
        cy.log($detail.text().trim())
        cy.writeFile('./cypress/CompanyDetails/PAION UK Ltd.json', $detail.text().trim())

      })
    })
  })

  it('Business Details for Orexigen Therapeutics Ireland Limited', () => {

    //click on 3rd Company.
    cy.get('.row').contains('ParaPharm Development Limited').click()

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
        .screenshot('ParaPharm Development Limited')

        //get each division from the item with the Class row
        cy.get('.row > div')
        .each(function($data, index, $divisions){
          })
        cy.log($detail.text().trim())
        cy.writeFile('./cypress/CompanyDetails/ParaPharm Development Limited.json', $detail.text().trim())

      })
    })
  })

    it('Business Details for PTC Therapeutics Ltd', () => {

      //click on last Company.
      cy.get('.row').contains('PTC Therapeutics Ltd').click()

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
          .screenshot('PTC Therapeutics Ltd')

          //get each division from the item with the Class row
          cy.get('.row > div')
          .each(function($data, index, $divisions){
            })
          cy.log($detail.text().trim())
          cy.writeFile('./cypress/CompanyDetails/PTC Therapeutics Ltd.json', $detail.text().trim())

        })
      })
    })
  })
