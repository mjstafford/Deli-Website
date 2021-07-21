package com.launchacademy.reviews.services;

import com.launchacademy.reviews.models.Items;
import com.launchacademy.reviews.repositories.ItemsRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItemService {
  private ItemsRepository itemsRepository;

  @Autowired
  public ItemService(ItemsRepository itemsRepository) {
    this.itemsRepository = itemsRepository;
  }

  public Long count() {
    return itemsRepository.count();
  }

  public void save(Items item) {
    itemsRepository.save(item);
  }

  public Iterable<Items> findByFeaturedTrue() {
    return itemsRepository.findByFeaturedTrue();
  }

  public Iterable<Items> findByFoodCategories(){
    return itemsRepository.findByFoodCategories();
  };

  public Iterable<Items> findByFoodCategoriesDrink() {
    return itemsRepository.findByFoodCategoriesDrink();
  }

  public Optional<Items> findById(Integer itemId) {
    return itemsRepository.findById(itemId);
  }
}
