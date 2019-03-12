$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("openWeatherMap.feature");
formatter.feature({
  "line": 1,
  "name": "OpenWetherMap page",
  "description": "",
  "id": "openwethermap-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "validate openWetherMap page is visible when clicking on the special offers the weather info",
  "description": "",
  "id": "openwethermap-page;validate-openwethermap-page-is-visible-when-clicking-on-the-special-offers-the-weather-info",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@openWthrMap"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user navigates to \"\u003curl\u003e\" website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on \"\u003cbutton\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should abke to search weather by \"\u003ccity\u003e\" and \"\u003ccityTextValue\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user should able to see \"\u003cmessage\u003e\" and \"\u003cmessgLocator\u003e\"for entered city",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "openwethermap-page;validate-openwethermap-page-is-visible-when-clicking-on-the-special-offers-the-weather-info;",
  "rows": [
    {
      "cells": [
        "url",
        "button",
        "city",
        "cityTextValue",
        "messgLocator",
        "message"
      ],
      "line": 11,
      "id": "openwethermap-page;validate-openwethermap-page-is-visible-when-clicking-on-the-special-offers-the-weather-info;;1"
    },
    {
      "cells": [
        "https://openweathermap.org/",
        "#nav-search",
        "#q",
        "ABCD",
        "div[class\u003d\u0027alert alert-warning\u0027][role\u003d\u0027alert\u0027]",
        "Not found"
      ],
      "line": 12,
      "id": "openwethermap-page;validate-openwethermap-page-is-visible-when-clicking-on-the-special-offers-the-weather-info;;2"
    },
    {
      "cells": [
        "https://openweathermap.org/",
        "#nav-search",
        "#q",
        "LONDON",
        "a",
        "LONDON"
      ],
      "line": 13,
      "id": "openwethermap-page;validate-openwethermap-page-is-visible-when-clicking-on-the-special-offers-the-weather-info;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13769351700,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "validate openWetherMap page is visible when clicking on the special offers the weather info",
  "description": "",
  "id": "openwethermap-page;validate-openwethermap-page-is-visible-when-clicking-on-the-special-offers-the-weather-info;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@openWthrMap"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user navigates to \"https://openweathermap.org/\" website",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on \"#nav-search\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should abke to search weather by \"#q\" and \"ABCD\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user should able to see \"Not found\" and \"div[class\u003d\u0027alert alert-warning\u0027][role\u003d\u0027alert\u0027]\"for entered city",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://openweathermap.org/",
      "offset": 19
    }
  ],
  "location": "OpenWeatherMapSteps.user_navigates_to_website(String)"
});
formatter.result({
  "duration": 6415190100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "#nav-search",
      "offset": 16
    }
  ],
  "location": "OpenWeatherMapSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 665776500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "#q",
      "offset": 39
    },
    {
      "val": "ABCD",
      "offset": 48
    }
  ],
  "location": "OpenWeatherMapSteps.user_should_abke_to_search_weather_by_and(String,String)"
});
formatter.result({
  "duration": 4234989500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not found",
      "offset": 25
    },
    {
      "val": "div[class\u003d\u0027alert alert-warning\u0027][role\u003d\u0027alert\u0027]",
      "offset": 41
    }
  ],
  "location": "OpenWeatherMapSteps.user_should_able_to_see_and_for_entered_city(String,String)"
});
formatter.result({
  "duration": 129346200,
  "status": "passed"
});
formatter.after({
  "duration": 2445869000,
  "status": "passed"
});
formatter.before({
  "duration": 3383206500,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "validate openWetherMap page is visible when clicking on the special offers the weather info",
  "description": "",
  "id": "openwethermap-page;validate-openwethermap-page-is-visible-when-clicking-on-the-special-offers-the-weather-info;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@openWthrMap"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user navigates to \"https://openweathermap.org/\" website",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on \"#nav-search\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should abke to search weather by \"#q\" and \"LONDON\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user should able to see \"LONDON\" and \"a\"for entered city",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://openweathermap.org/",
      "offset": 19
    }
  ],
  "location": "OpenWeatherMapSteps.user_navigates_to_website(String)"
});
formatter.result({
  "duration": 5955033700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "#nav-search",
      "offset": 16
    }
  ],
  "location": "OpenWeatherMapSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 453945700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "#q",
      "offset": 39
    },
    {
      "val": "LONDON",
      "offset": 48
    }
  ],
  "location": "OpenWeatherMapSteps.user_should_abke_to_search_weather_by_and(String,String)"
});
formatter.result({
  "duration": 3436727400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LONDON",
      "offset": 25
    },
    {
      "val": "a",
      "offset": 38
    }
  ],
  "location": "OpenWeatherMapSteps.user_should_able_to_see_and_for_entered_city(String,String)"
});
formatter.result({
  "duration": 1870954600,
  "status": "passed"
});
formatter.after({
  "duration": 2620457400,
  "status": "passed"
});
});