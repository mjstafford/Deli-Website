package com.launchacademy.reviews.seeders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class MainSeeder implements CommandLineRunner {
  private FoodCategoriesSeeder foodCategoriesSeeder;
  private ItemsSeeder itemsSeeder;

  @Autowired
  public MainSeeder(FoodCategoriesSeeder foodCategoriesSeeder, ItemsSeeder itemsSeeder) {
    this.foodCategoriesSeeder = foodCategoriesSeeder;
    this.itemsSeeder = itemsSeeder;
  }

  @Override
  public void run(String... args) throws Exception {
    foodCategoriesSeeder.seed();
    itemsSeeder.seed();
  }
}
