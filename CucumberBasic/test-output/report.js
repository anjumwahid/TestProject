$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("G:/SeleniumTrial/CucumberBasic/Features/Hooks.feature");
formatter.feature({
  "line": 1,
  "name": "Hooks in cucumber",
  "description": "",
  "id": "hooks-in-cucumber",
  "keyword": "Feature"
});
formatter.before({
  "duration": 329400,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Add new customer",
  "description": "",
  "id": "hooks-in-cucumber;add-new-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is add customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user fills the customer details",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "customer is added",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksStepDefination.user_is_add_customer_page()"
});
formatter.result({
  "duration": 143822792,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefination.user_fills_the_customer_details()"
});
formatter.result({
  "duration": 118272,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefination.customer_is_added()"
});
formatter.result({
  "duration": 119249,
  "status": "passed"
});
formatter.after({
  "duration": 90414,
  "status": "passed"
});
formatter.before({
  "duration": 140264,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Edit customer",
  "description": "",
  "id": "hooks-in-cucumber;edit-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "user is edit customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user edit contact details",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "contact details updated",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksStepDefination.user_is_edit_customer_page()"
});
formatter.result({
  "duration": 91392,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefination.user_edit_contact_details()"
});
formatter.result({
  "duration": 309851,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefination.contact_details_updated()"
});
formatter.result({
  "duration": 146617,
  "status": "passed"
});
formatter.after({
  "duration": 234099,
  "status": "passed"
});
formatter.before({
  "duration": 184249,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Delete customer",
  "description": "",
  "id": "hooks-in-cucumber;delete-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "user is on delete customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user delete customer",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "cutomer deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksStepDefination.user_is_on_delete_customer_page()"
});
formatter.result({
  "duration": 344550,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefination.user_delete_customer()"
});
formatter.result({
  "duration": 108009,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefination.cutomer_deleted()"
});
formatter.result({
  "duration": 344551,
  "status": "passed"
});
formatter.after({
  "duration": 73797,
  "status": "passed"
});
});