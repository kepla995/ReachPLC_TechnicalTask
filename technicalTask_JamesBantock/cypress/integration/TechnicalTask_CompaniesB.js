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

describe('Technical Task for ReachPLC - B companies', () => {
  //before each test revisit the original url.

    beforeEach(() => {
      //Visit target webs
      cy.visit('https://www.medicines.org.uk/emc/browse-companies')

      //Wait for Cookies pop-up & accept
      cy.wait(2000)
      cy.get('#onetrust-accept-btn-handler').contains('Accept All Cookies').click({force: true})
      cy.get('.browse').contains('B').click()
    })

  it('Business Details for B.Braun Medical', () => {

    //click on 1st Company.
    cy.get('.row').contains('B.Braun Medical').click()

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
        .screenshot('B.Braun Medical')

        //get each division from the item with the Class row
        cy.get('.row > div')
        .each(function($data, index, $divisions){
          })
        cy.log($detail.text().trim())
        cy.writeFile('./cypress/CompanyDetails/B.Braun Medical.json', $detail.text().trim())

      })
    })
  })

  it('Business Details for Baxter Healthcare Ltd', () => {

    //click on 3rd Company.
    cy.get('.row').contains('Baxter Healthcare Ltd').click()

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
        .screenshot('Baxter Healthcare Ltd')

        //get each division from the item with the Class row
        cy.get('.row > div')
        .each(function($data, index, $divisions){
          })
        cy.log($detail.text().trim())
        cy.writeFile('./cypress/CompanyDetails/Baxter Healthcare Ltd.json', $detail.text().trim())

      })
    })
  })

    it('Business Details for Brown & Burk UK Ltd', () => {

      //click on last Company.
      cy.get('.row').contains('Brown & Burk UK Ltd').click()

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
          .screenshot('Brown & Burk UK Ltd')

          //get each division from the item with the Class row
          cy.get('.row > div')
          .each(function($data, index, $divisions){
            })
          cy.log($detail.text().trim())
          cy.writeFile('./cypress/CompanyDetails/Brown & Burk UK Ltd.json', $detail.text().trim())

        })
      })
    })
  })
