import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";

  
  Given("test google", () => {
    cy.visit('google.com')
  });
  