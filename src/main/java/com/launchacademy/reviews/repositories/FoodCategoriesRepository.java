package com.launchacademy.reviews.repositories;

import com.launchacademy.reviews.models.FoodCategories;
import java.util.List;
import org.springframework.data.repository.CrudRepository;

public interface FoodCategoriesRepository extends CrudRepository<FoodCategories, Integer> {

  List<FoodCategories> findByName(String name);
}
