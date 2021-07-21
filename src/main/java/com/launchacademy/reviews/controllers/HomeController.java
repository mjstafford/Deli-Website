package com.launchacademy.reviews.controllers;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
  @GetMapping(value = {"/open-wide-deli", "/open-wide-deli/food", "/open-wide-deli/drinks", "/open-wide-deli/item/{id}"})
  public String forward() {
    return "forward:/";
  }
}
