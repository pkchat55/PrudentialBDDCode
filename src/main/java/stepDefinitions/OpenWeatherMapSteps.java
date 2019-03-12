package stepDefinitions;

import java.io.IOException;
import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.BasePage;
import utils.DriverFactory;

public class OpenWeatherMapSteps extends DriverFactory {
	@Given("^user navigates to \"([^\"]*)\" website$")
	public void user_navigates_to_website(String url) throws InterruptedException, IOException {
		getDriver().get(url);
	}

	@When("^user clicks on \"([^\"]*)\"$")
	public void user_clicks_on(String locator) throws InterruptedException, IOException {
		//Assert.fail();
		BasePage basePage = new BasePage();
		basePage.WaitUntilWebElementIsVisibleUsingByLocator(By.cssSelector(locator));
		getDriver().findElement(By.cssSelector(locator)).click();
		
	}

	
	
	@Then("^user should abke to search weather by \"([^\"]*)\"$")
	public void user_should_abke_to_search_weather_by(String cityLocator) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		BasePage basePage = new BasePage();
		basePage.WaitUntilWebElementIsVisibleUsingByLocator(By.cssSelector(cityLocator));
		getDriver().findElement(By.cssSelector(cityLocator)).sendKeys("Abcd");;
		
	}
	
	
	@Then("^user should abke to search weather by \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_should_abke_to_search_weather_by_and(String cityLocator, String cityValue) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		BasePage basePage = new BasePage();
		basePage.WaitUntilWebElementIsVisibleUsingByLocator(By.cssSelector(cityLocator));
		getDriver().findElement(By.cssSelector(cityLocator)).sendKeys(cityValue);
		getDriver().findElement(By.cssSelector(cityLocator)).sendKeys(Keys.ENTER);
		
		
	}

	
	@Then("^user should able to see \"([^\"]*)\" and \"([^\"]*)\"for entered city$")
	public void user_should_able_to_see_and_for_entered_city(String messgLocator, String message) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		BasePage basePage = new BasePage();
		
		if(messgLocator.equals("Not found")) {
			String weatherMesage=getDriver().findElement(By.cssSelector(message)).getText();
			System.out.println("Your Wether message for entered city is: "+weatherMesage);
			
		}
		else {
			
			List<WebElement> options=getDriver().findElements(By.cssSelector(message));
		
			for (WebElement option : options) {	
				System.out.println("All weather link info: "+option.getSize()+option.getText());
			}
			
		}
		
	}

}
