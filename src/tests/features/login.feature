Feature: Google Search

  Scenario: Search for Playwright
    Given I launch the browser
    When I search for "Playwright"
    Then I should see results related to "Playwright"
