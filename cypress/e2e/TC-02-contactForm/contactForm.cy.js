function submitContactForm(name, email, phone, subject, description) {
    cy.get('[data-testid="ContactName"]').type(name);
    cy.get('[data-testid="ContactEmail"]').type(email);
    cy.get('[data-testid="ContactPhone"]').type(phone);
    cy.get('[data-testid="ContactSubject"]').type(subject);
    cy.get('[data-testid="ContactDescription"]').type(description);
    cy.get('#submitContact').click();
}

describe('booking.cy.js', () => {
    beforeEach(() => {
        cy.visit('https://automationintesting.online/');
    })

    it('When invalid phone number is entered shows error message', () => {
        submitContactForm(
            'Olena',
            'olena@example.org',
            'abcde123456',
            'Test123',
            'qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm'
        );
        cy.get('.contact .alert-danger').should('be.visible');
    })
    it('When valid data for all the fields is entered shows success message', () => {
        submitContactForm(
            'Olena',
            'olena@example.org',
            '12345678910',
            'Test123',
            'qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm'
        );
        cy.get('.contact').should('contain','Thanks for getting in touch');
    })
    it('When invalid email is entered shows error message ', () => {
        submitContactForm(
            'Olena',
            'olenaexample.org',
            '12345678910',
            'Test123',
            'qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm'
        );
        cy.get('.contact .alert-danger')
            .should('be.visible')
            .should('contain', 'must be a well-formed email address');
    })
    it('When a short subject is entered shows error message ', () => {
        submitContactForm(
            'Olena',
            'olena@example.org',
            '12345678910',
            'Te',
            'qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm'
        );
        cy.get('.contact .alert-danger')
            .should('be.visible')
            .should('contain', 'Subject must be between 5 and 100 characters.');
    })
})
