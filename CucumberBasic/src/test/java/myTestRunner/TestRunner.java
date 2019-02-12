package myTestRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		//features = "Features",
		//features="G:/SeleniumTrial/CucumberBasic/Features/Tagging.feature",
		features="G:/SeleniumTrial/CucumberBasic/Features/Hooks.feature",
		glue="stepDefination",
		format={"pretty","html:test-output","json:json_output/cucumber.json","junit:junit_xml_output/cucumber.xml"},
		dryRun=false,
		monochrome=true,
		strict=false,
		//tags={"@SanityTest"}  //execute only Sanity test  @RegressionTest
		//tags={"@SanityTest,@RegressionTest"} //  senario which are come underexecute only sanity or reggression
		//tags={"@RegressionTest","@End2End"}  //excute scenario come under both
		//tags={"@SanityTest","@End2End"} 
		  // tags={"~@End2End"} //this will ignored End2End
		 tags={"~@End2End","~@SanityTest"} 
		)
     public class TestRunner {

}
