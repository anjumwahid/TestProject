Feature: MyAccount-login feature
    Description: This features will test a login functionality

#Simple login withoutParameters
#Scenario: Log-in with valid username and password
#Given Open the Browser
#When Enter the url "http://practice.automationtesting.in/"  
#And Click My Account Menu
#And Enter registered username and password
#And Click on login-button
#Then User must successfully login to the web page


#Simple login withoutParameters
#Scenario: Log-in with valid username and password
#Given Open the Browser
#When Enter the url "http://practice.automationtesting.in/"  
#And Click My Account Menu
#And Enter registered username "anjumwahid93" and password "$anjuman89"
#And Click on login-button
#Then User must successfully login to the web page

#Simple login withoutParameters

Scenario Outline: Log-in with valid username and password
  Given Open the Browser
  When Enter the url "http://practice.automationtesting.in/"  
  And Click My Account Menu
  And Enter registered username "<username>" and password "<password>"
  And Click on login-button
  Then verify login

   Examples:
   
    | username     |        |    password    |
    | anjumwahid93 |        |   $anjuman89   |
    | pavanoltraining |     |  Test@selenium123 |
