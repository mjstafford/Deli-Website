package com.launchacademy.reviews.apiControllers;

import com.launchacademy.reviews.models.Items;
import com.launchacademy.reviews.services.ItemService;
import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/items")
public class itemsApiV1Controller {
  private ItemService itemService;

  @Autowired
  public itemsApiV1Controller(ItemService itemService) {
    this.itemService = itemService;
  }

  @GetMapping("/featured")
  public ResponseEntity<Map<String, Iterable<Items>>> getFeaturedItems(){
    Map<String, Iterable<Items>> featuredItems = new HashMap<>();
    featuredItems.put("featured", itemService.findByFeaturedTrue());
    return new ResponseEntity<>(featuredItems, HttpStatus.OK);
  }
}
