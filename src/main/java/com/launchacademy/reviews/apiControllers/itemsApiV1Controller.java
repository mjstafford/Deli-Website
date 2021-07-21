package com.launchacademy.reviews.apiControllers;

import com.launchacademy.reviews.models.Items;
import com.launchacademy.reviews.services.ItemService;
import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

  @GetMapping("/food")
  public ResponseEntity<Map<String, Iterable<Items>>> getFoodItems(){
    Map<String, Iterable<Items>> foodItems = new HashMap<>();
    foodItems.put("foodItems", itemService.findByFoodCategories());
    return new ResponseEntity<>(foodItems, HttpStatus.OK);
  }

  @GetMapping("/drinks")
  public ResponseEntity<Map<String, Iterable<Items>>> getDrinkItems(){
    Map<String, Iterable<Items>> drinkItems = new HashMap<>();
    drinkItems.put("drinkItems", itemService.findByFoodCategoriesDrink());
    return new ResponseEntity<>(drinkItems, HttpStatus.OK);
  }

  @GetMapping("/{itemId}")
  public ResponseEntity<Map<String, Items>> getItemById(@PathVariable Integer itemId){
    Map<String, Items> itemMap = new HashMap<>();
    if(itemService.findById(itemId).isPresent()){
      Items item = itemService.findById(itemId).get();
      itemMap.put("item", item);
      return new ResponseEntity<Map<String, Items>>(itemMap, HttpStatus.OK);
    } else {
      itemMap.put("item", null);
      return new ResponseEntity<Map<String, Items>>(itemMap, HttpStatus.NOT_FOUND);
    }
  }

}
