//package com.launchacademy.reviews.seeders;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Component;
//
//@Component
//public class DrinkSeeder {
//  private DrinkService drinkService;
//
//  @Autowired
//  public DrinkSeeder(DrinkService drinkService) {
//    this.drinkService = drinkService;
//  }
//
//  public void seed(){
//    if(drinkService.count() == 0) {
//      Drink drink1 = new Drink();
//      drink1.setName("Coffee");
//      drink1.setDescription("Dark roasted");
//      drink1.setImgUrl("https://cdn-assets.alltrails.com/uploads/photo/image/30328785/extra_large_748839c73ca678cc22f24db1af0cebb1.jpg");
//
//      drinkService.save(drink1);
//    }
//  }
//}
