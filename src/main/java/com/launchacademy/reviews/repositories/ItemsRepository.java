package com.launchacademy.reviews.repositories;

import com.launchacademy.reviews.models.Items;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemsRepository extends CrudRepository<Items, Integer> {

  Iterable<Items> findByFeaturedTrue();

  @Query("SELECT i FROM Items i join i.foodCategories c WHERE c.id!=1")
  Iterable<Items> findByFoodCategories();

  @Query("SELECT i FROM Items i join i.foodCategories c WHERE c.id=1")
  Iterable<Items> findByFoodCategoriesDrink();
}
