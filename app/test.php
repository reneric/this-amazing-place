<?php
  require "php-webdriver/lib/__init__.php";
  
  //Input capablities
  $caps = array(
    "browser" => "IE",
    "browser_version" => "8.0",
    "os" => "Windows",
    "os_version" => "7",
    "browserstack.tunnel" => "true",
    "browserstack.debug" => "true"    
  );
  
  $web_driver = new RemoteWebDriver(
    "http://ren_simmons:q2Xos04M6aj2C5JIydH4@hub.browserstack.com/wd/hub", 
    $caps);
  $web_driver->get("http://thisamazingplace.org");
  print $web_driver->getTitle();

  $element = $web_driver->findElement(WebDriverBy::name("q"));
  if($element) {
      $element->sendKeys("Browserstack");
      $element->submit();
  }
  print "\n" . $web_driver->getTitle();
  $web_driver->quit();
?>