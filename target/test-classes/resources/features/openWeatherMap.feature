Feature: OpenWetherMap page

@openWthrMap
Scenario Outline: validate openWetherMap page is visible when clicking on the special offers the weather info
	Given user navigates to "<url>" website
	When user clicks on "<button>"
	Then user should abke to search weather by "<city>" and "<cityTextValue>"
	Then user should able to see "<message>" and "<messgLocator>"for entered city
	
	Examples: 
	| 						url   | 			button      	  |city|cityTextValue|           messgLocator                       |message  |
	| https://openweathermap.org/ | 			#nav-search       |#q  |ABCD         |div[class='alert alert-warning'][role='alert']|Not found|
	| https://openweathermap.org/ | 			#nav-search       |#q  |LONDON       | a                                            |LONDON   |
	
