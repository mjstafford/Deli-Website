package com.launchacademy.reviews.services;

import com.launchacademy.reviews.models.Items;
import com.launchacademy.reviews.repositories.ItemsRepository;
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
}
