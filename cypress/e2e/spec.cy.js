describe('Tests the Recipe Collection app', () => {

  beforeEach(() => {
    // This ensures the viewport is wide enough for your navbar-expand-lg and d-md-block elements to be visible.
    cy.viewport(1280, 720);
    cy.visit('http://localhost:4200')
    cy.url().should('include', '/homepage')
    cy.contains('Richi\'s Rezeptsammlung')
      .should('be.visible');
    cy.contains('a.nav-link.dropdown-toggle', 'Speise-Kategorie')
      .should('be.visible')
  });

  it('Opens the About > Privacy Policy Page', () => {
    cy.contains('a.nav-link.dropdown-toggle', 'About')
      .should('be.visible')
      .click();

    cy.contains('a.dropdown-item', 'Privacy')
      .should('be.visible')
      .click();
    cy.url().should('include', '/privacy');

    cy.contains('h3', 'Privacy Policy')
      .should('be.visible')
  });


  it('Opens the About > Build Info Page', () => {
    cy.contains('a.nav-link.dropdown-toggle', 'About')
      .should('be.visible')
      .click();

    cy.contains('a.dropdown-item', 'Build Info')
      .should('be.visible')
      .click();
    cy.url().should('include', '/build');

    cy.contains('h3', 'Build Information')
      .should('be.visible')
  });


  it('The app loaded the recipes successfully i.e. > 500', () => {
    // Open the About > Build Info Page
    cy.contains('a.nav-link.dropdown-toggle', 'About')
      .should('be.visible')
      .click();
    cy.contains('a.dropdown-item', 'Build Info')
      .should('be.visible')
      .click();

    cy.url().should('include', '/build');

    cy.contains('p', 'Total Recipes:')
      .should('be.visible');

    // Get the paragraph element
    cy.contains('p', 'Total Recipes:')
      .should('be.visible') // Ensure it's visible before trying to get its text
      .invoke('text')      // Get the text content of the element
      .then((text) => {
        // The text will be something like "Total Recipes: 533"
        // Use a regular expression to extract the number
        const match = text.match(/Total Recipes:\s*(\d+)/);

        if (match && match[1]) {
          const recipeCount = parseInt(match[1], 10); // Parse the extracted string to an integer

          // Assert that the recipe count is greater than 500
          expect(recipeCount).to.be.greaterThan(500);
          cy.log(`Successfully verified: Total Recipes: ${recipeCount} > 500`);
        } else {
          // If the regex doesn't match, or the number isn't found, fail the test
          throw new Error(`Could not extract recipe count from text: "${text}"`);
        }
      });

  });


  it('Check the search works', () => {
    cy.get('input[type="search"][placeholder="Search"][aria-label="Search"].form-control')
      .should('be.visible')
      .type('lasagne');// Type "lasagne" into the input field

    cy.get('table.table tbody') // Select the tbody of the table with class "table"
      .should('be.visible') // Ensure the table body is visible
      .find('tr[app-recipe-row]') // Find all table rows within tbody that have the 'pm-tdrecipe' attribute
      .should('have.length', 1) // Assert that exactly 1 such row is found
      .within(() => {
        // Now, within that single found row, check the hyperlink
        // The hyperlink has an <a> tag and is within a <td>
        cy.get('td a') // Find the <a> tag inside a <td> within this row
          .should('have.attr', 'href', 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp137.htm') // Optional: Verify the href as well
          .should('contain.text', 'Lasagne') // Assert that the link text is "Lasagne"
          .should('be.visible') // Ensure the link itself is visible
          // Crucial step: Remove the target="_blank" attribute
          .invoke('removeAttr', 'target') // This makes the link open in the same tab
          .click(); // Now click the link

        cy.origin('https://richardeigenmann.github.io', () => {
          cy.url().should('include', '/Rcp137.htm');

          cy.contains('h1', 'Lasagne') // Assuming the recipe title is an H1 with text "Lasagne"
            .should('be.visible');
        });
      });
  });

  // TODO: Combine the two tests below into one test. The difficulty is retrieving the
  // number of recipes in the Beilagen category from the menu and using it in the assertion.
  // The treading model gets in the way.
  it('Check the Speise-Kategorie Menu has a Beilagen item with at least 50 recipes in it', () => {
    cy.contains('a.nav-link.dropdown-toggle', 'Speise-Kategorie')
      .should('be.visible')
      .click();

    cy.contains('a.dropdown-item', 'Beilagen')
      .should('be.visible')
      .within(() => {
        cy.get('.badge.rounded-pill.text-bg-primary')
          .should('be.visible')
          .invoke('text')
          .then((text) => {
            let expectedRecipeCount = parseInt(text.trim(), 10);
            cy.log('Extracted expected recipe count:', expectedRecipeCount);
            expect(expectedRecipeCount).to.be.a('number').and.not.to.be.NaN;
            expect(expectedRecipeCount).to.be.at.least(50);

            cy.contains('a.dropdown-item', 'Beilagen')
              .click();
            cy.url().should('include', '/Beilagen');
          })

      });

  });


  it('Click on the Speise-Kategorie > Beilagen Menu and assert that we get at least 50 results', () => {
    cy.contains('a.nav-link.dropdown-toggle', 'Speise-Kategorie')
      .should('be.visible')
      .click();

    cy.contains('a.dropdown-item', 'Beilagen')
      .should('be.visible')
      .click();

    cy.get('table.table tbody') // Select the tbody of the table with class "table"
      .should('be.visible') // Ensure the table body is visible
      .find('tr[app-recipe-row]') // Find all table rows within tbody that have the 'pm-tdrecipe' attribute
      .should('have.length.at.least', 50);


    cy.contains('table.table tbody tr[app-recipe-row]', 'Kohlrabi mit Kerbel-Rahmsauce') // Find the tr element that contains this text
      .should('be.visible') // Ensure this specific row is visible
      .within(() => {
        // Now, within that single found row, check the hyperlink
        // The hyperlink has an <a> tag and is within a <td>
        cy.get('td a') // Find the <a> tag inside a <td> within this row
          .should('have.attr', 'href', 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp163.htm')
          .should('contain.text', 'Kohlrabi mit Kerbel-Rahmsauce')
          .should('be.visible') // Ensure the link itself is visible
          // Crucial step: Remove the target="_blank" attribute
          .invoke('removeAttr', 'target') // This makes the link open in the same tab
          .click(); // Now click the link

        cy.origin('https://richardeigenmann.github.io', () => {
          cy.url().should('include', '/Rcp163.htm');

          cy.contains('h1', 'Kohlrabi mit Kerbel-Rahmsauce')
            .should('be.visible');

        })
      });
  });

  it('Ensure the Navigation bug doesn\'t regress', () => {
    cy.contains('a.nav-link.dropdown-toggle', 'Speise-Kategorie')
    .should('be.visible')
    .click();

  cy.contains('a.dropdown-item', 'Aus dem Ofen')
    .should('be.visible')
    .click();

  cy.get('table.table tbody') // Select the tbody of the table with class "table"
    .should('be.visible') // Ensure the table body is visible
    .find('tr[app-recipe-row]') // Find all table rows within tbody that have the 'pm-tdrecipe' attribute
    .should('have.length', 152);

  cy.get('input[type="search"][placeholder="Search"][aria-label="Search"].form-control')
    .should('be.visible')
    .type('lasagne');// Type "lasagne" into the input field

  cy.get('td a:contains("Lasagne")')
    .invoke('attr', 'href')
    .then((href) => {
       expect(href).to.equal('https://richardeigenmann.github.io/Rezeptsammlung/Rcp137.htm');
    });
  });


});
