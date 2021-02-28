describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html')
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(($el) => {
      expect($el).to.have.value(75);
    });
  });

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(($el) => {
      expect($el).to.have.value(33);
    });
  });

  it('Volume property changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('Image changes when selecting radio button', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#sound-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });
  });

  it('Sound changes when selecting radio button', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    });
  });

  it('Volume image changes for level 0', () => {
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr(
        'src',
        './assets/media/icons/volume-level-0.svg'
      );
    });
  });

  it('Volume image changes for level 1', () => {
    cy.get('#volume-number').clear().type('20');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr(
        'src',
        './assets/media/icons/volume-level-1.svg'
      );
    });
  });

  it('Volume image changes for level 2', () => {
    cy.get('#volume-number').clear().type('44');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr(
        'src',
        './assets/media/icons/volume-level-2.svg'
      );
    });
  });

  it('Volume image changes for level 3', () => {
    cy.get('#volume-number').clear().type('77');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr(
        'src',
        './assets/media/icons/volume-level-3.svg'
      );
    });
  });

  it('Honk disabled when textbox empty', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.attr('disabled');
    });
  });

  it('Honk disabled when input is non-number', () => {
    cy.get('#volume-number').clear().type('hi');
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.attr('disabled');
    });
  });

  it('Show error when input is too high', () => {
    cy.get('#volume-number').clear().type('101');
    cy.get(':invalid').then(($el) => {
      expect($el).to.exist;
    });
  });

  it('Show error when input is too low', () => {
    cy.get('#volume-number').clear().type('-1');
    cy.get(':invalid').then(($el) => {
      expect($el).to.exist;
    });
  });
});