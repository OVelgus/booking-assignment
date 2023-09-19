function SelectFirstAvailableRoom() {
    cy.get('.hotel-room-info .openBooking').first().click();
}

describe('booking.cy.js', () => {
    beforeEach(() => {
        cy.visit('https://automationintesting.online/');
    })

    it('Verify placeholders for booking form', () => {
        SelectFirstAvailableRoom();
        cy.get('.hotel-room-info .room-firstname')
            .invoke('attr', 'placeholder')
            .should('contain', 'Firstname');
        cy.get('.hotel-room-info .room-lastname')
            .invoke('attr', 'placeholder')
            .should('contain', 'Lastname');
        cy.get('.hotel-room-info .room-email')
            .invoke('attr', 'placeholder')
            .should('contain', 'Email');
        cy.get('.hotel-room-info .room-phone')
            .invoke('attr', 'placeholder')
            .should('contain', 'Phone');
    })

    it('Error message when booking a room without dates ', () => {
        SelectFirstAvailableRoom();
        cy.get('.hotel-room-info .room-firstname').type('Olena');
        cy.get('.hotel-room-info .room-lastname').type('Test');
        cy.get('.hotel-room-info .room-email').type('olena@example.org')
        cy.get('.hotel-room-info .room-phone').type('123456789102')
        cy.get('.hotel-room-info .btn-outline-primary').click()
        cy.get('.hotel-room-info .alert-danger').should('be.visible');
    })
})