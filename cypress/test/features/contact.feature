Feature: Send contact message on website

  As a user of the page
  I want to send a contact message
  So check that it was sent correctly.

  @smoke
  Scenario Outline: Send contact message on Website
    Given the user is on the demoblaze contact page
    When the user sends the message with '<contactEmail>' ,'<contactName>' and '<message>'
    Then the user verify that the menu is displayed again
    Examples:
      | contactEmail   | contactName | message      |
      | test@gmail.com | QA Name     | Test Message |