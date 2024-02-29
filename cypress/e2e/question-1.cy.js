describe('PractiTest Test Automation', () => {
  it('Should navigate to Test Automation Management and validate quotes', () => {
    // Visit the PractiTest website
    cy.visit('https://www.practitest.com/')
    cy.wait(5000);


    // Hover over "Products" and click on "Test Automation Management"
    cy.xpath("//a[@href='/product/']").realHover('mouse')
    cy.contains('Test Automation Management').click();

    // Validate the Page Header
    cy.get('h1').should('contain', 'Orchestrate Automated and Manual Testing');

    // Validate the quote by Jiawei Wangg
    cy.contains('Jiawei Wang').should('exist');
    cy.contains('PractiTest makes the automation test activities manageable and visible. Our xBot test cases are run stably via PractiTest and have helped find many high-priority bugs efficiently.').should('exist');
  
    // Validate the quote by Mohita Prasad
    cy.contains('Mohita Prasad').should('exist');
    cy.contains('Thanks to PractiTest we have a unified approach to testing for multiple delivery units in our organiztion. We now have all the testing data and results from manual, automation and Jira inside PractiTest.').should('exist');
  })
})
