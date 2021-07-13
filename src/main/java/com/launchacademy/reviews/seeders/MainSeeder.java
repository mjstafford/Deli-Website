//package com.launchacademy.reviews.seeders;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.stereotype.Component;
//
//@Component
//public class MainSeeder implements CommandLineRunner {
//  private DrinkSeeder drinkSeeder;
//  private MealSeeder mealSeeder;
//  private SideSeeder sideSeeder;
//
//  @Autowired
//  public MainSeeder(DrinkSeeder drinkSeeder, MealSeeder mealSeeder, SideSeeder sideSeeder) {
//    this.drinkSeeder = drinkSeeder;
//    this.mealSeeder = mealSeeder;
//    this.sideSeeder = sideSeeder;
//  }
//
//  @Override
//  public void run(String... args) throws Exception {
//    drinksSeeder.seed();
//    mealSeeder.seed();
//    sideSeeder.seed();
//  }
//}
