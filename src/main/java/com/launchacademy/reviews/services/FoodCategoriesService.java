package com.launchacademy.reviews.services;

import com.launchacademy.reviews.models.FoodCategories;
import com.launchacademy.reviews.models.Items;
import com.launchacademy.reviews.repositories.FoodCategoriesRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FoodCategoriesService {
  private FoodCategoriesRepository foodCategoriesRepository;

  @Autowired
  public FoodCategoriesService(
      FoodCategoriesRepository foodCategoriesRepository) {
    this.foodCategoriesRepository = foodCategoriesRepository;
  }

  public Long count() {
    return foodCategoriesRepository.count();
  }

  public void save(FoodCategories category) {
    foodCategoriesRepository.save(category);
  }

  public List<FoodCategories> findByName(String name) {
    return foodCategoriesRepository.findByName(name);
  }

  public Iterable<FoodCategories> findAll() {
    return foodCategoriesRepository.findAll();
  }
}
