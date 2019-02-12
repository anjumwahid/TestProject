package stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class MyAccountLoginStepDefination
{  
	
	public WebDriver driver = null;
	
	@Given("^Open browser$")
	public void open_browser() throws Throwable {
		  System.setProperty("webdriver.chrome.driver", "C:\\Utility\\chromedriver.exe");
		   driver = new ChromeDriver();
		   driver.manage().window().maximize();
	  
	}
	@When("^Enter the url \"(.*?)\"$")
	public void enter_the_url(String arg1) throws Throwable {
		driver.get("http://practice.automationtesting.in/");
	   
	}

	@When("^Click My Account Menu$")
	public void click_My_Account_Menu() throws Throwable {
		driver.findElement(By.linkText("My Account")).click();
	   
	}

/*	@When("^Enter registered username and password$")
	*public void enter_registered_username_and_password() throws Throwable {
	*	driver.findElement(By.id("username")).sendKeys("anjumwahid93");
	*	driver.findElement(By.id("password")).sendKeys("$anjuman89");
	    
	}
	*/
	
	@When("^Enter registered username \"(.*?)\" and password \"(.*?)\"$")
	public void enter_registered_username_and_password(String user, String pwd ) throws Throwable {
	  driver.findElement(By.id("username")).sendKeys(user);
	  driver.findElement(By.id("password")).sendKeys(pwd);
	}
	@When("^Click on login-button$")
	public void click_on_login_button() throws Throwable {
		driver.findElement(By.name("login")).click();
	    
	}

	@Then("^User must successfully login to the web page$")
	public void user_must_successfully_login_to_the_web_page() throws Throwable {
		String capText = driver.findElement(By.xpath("//*[@id='page-36']/div/div[1]/div/p[1]/strong")).getText();
		Assert.assertEquals(true, capText.contains("anjumwahid93"));
		driver.close();
	   
	}
	
	@Then("^verify login$")
	public void verify_login() throws Throwable {
		String capText = driver.findElement(By.xpath("//*[@id='page-36']/div/div[1]/ul/li/strong")).getText();
		if(capText.contains("ERROR")) //Test for invalid user
		
		{
			Assert.assertTrue("Invalid input-Error page", true);
		
		}
		else
		{
			Assert.assertTrue(false);
		}
	}

}





