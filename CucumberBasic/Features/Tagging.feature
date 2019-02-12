Feature: Tag in cucumber

@SanityTest
Scenario: Verify login
Given this is valid login test

@SanityTest @End2End
Scenario: Verify logout
Given this is  logout test

@RegressionTest
Scenario: Verify search
Given this is search test

@RegressionTest @End2End
Scenario: Verify advanced search
Given this is advanced search test

@End2End
Scenario: Verify prepaid recharge
Given this is prepaid recharge test

@End2End
Scenario: Verify postpaid recharge
Given this is postpaid recharge test