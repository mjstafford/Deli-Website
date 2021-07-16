package com.launchacademy.reviews.seeders;

import com.launchacademy.reviews.models.FoodCategories;
import com.launchacademy.reviews.services.FoodCategoriesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class FoodCategoriesSeeder {
  private FoodCategoriesService foodCategoriesService;

  @Autowired
  public FoodCategoriesSeeder(
      FoodCategoriesService foodCategoriesService) {
    this.foodCategoriesService = foodCategoriesService;
  }

  public void seed(){
    if(foodCategoriesService.count() == 0) {
      FoodCategories category1 = new FoodCategories();
      category1.setName("Drink");

      FoodCategories category2 = new FoodCategories();
      category2.setName("Side");

      FoodCategories category3 = new FoodCategories();
      category3.setName("Sandwich");

      FoodCategories category4 = new FoodCategories();
      category4.setName("Salad");

      FoodCategories category5 = new FoodCategories();
      category5.setName("Wrap");

      FoodCategories category6 = new FoodCategories();
      category6.setName("Wings");

      FoodCategories category7 = new FoodCategories();
      category7.setName("Substitute");

      foodCategoriesService.save(category1);
      foodCategoriesService.save(category2);
      foodCategoriesService.save(category3);
      foodCategoriesService.save(category4);
      foodCategoriesService.save(category5);
      foodCategoriesService.save(category6);
      foodCategoriesService.save(category7);
    }
  }
}
