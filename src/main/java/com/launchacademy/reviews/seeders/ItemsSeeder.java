package com.launchacademy.reviews.seeders;

import com.launchacademy.reviews.models.FoodCategories;
import com.launchacademy.reviews.models.Items;
import com.launchacademy.reviews.services.FoodCategoriesService;
import com.launchacademy.reviews.services.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ItemsSeeder {
  private ItemService itemService;
  private FoodCategoriesService foodCategoriesService;

  @Autowired
  public ItemsSeeder(ItemService itemService, FoodCategoriesService foodCategoriesService) {
    this.itemService = itemService;
    this.foodCategoriesService = foodCategoriesService;
  }

  public void seed(){
    if(itemService.count() == 0) {
      FoodCategories Drink = foodCategoriesService.findByName("Drink").get(0);
      FoodCategories Side = foodCategoriesService.findByName("Side").get(0);
      FoodCategories Sandwich = foodCategoriesService.findByName("Sandwich").get(0);
      FoodCategories Salad = foodCategoriesService.findByName("Salad").get(0);
      FoodCategories Wrap = foodCategoriesService.findByName("Wrap").get(0);
      FoodCategories Wings = foodCategoriesService.findByName("Wings").get(0);
      FoodCategories Substitute = foodCategoriesService.findByName("Substitute").get(0);

      Items item1 = new Items();
      item1.setName("Cucumber Limeade");
      item1.setDescription("Sweet, delicious, and freshly squeezed!");
      item1.setCost(3.00);
      item1.setImage("https://s3-media0.fl.yelpcdn.com/bphoto/VFg9azOVEnvpUAivF27zFw/o.jpg");
      item1.setFeatured(true);
      item1.setFoodCategories(Drink);


      Items item2 = new Items();
      item2.setName("The Conquistador Chorizo");
      item2.setDescription("Avocado, fried potatoes, poached eggs, chipotle hollandaise");
      item2.setCost(10.00);
      item2.setImage("https://s3-media0.fl.yelpcdn.com/bphoto/qOTdgtTWn-3iZIeWYz-eGA/o.jpg");
      item2.setFeatured(true);
      item2.setFoodCategories(Sandwich);

      Items item3 = new Items();
      item3.setName("Cheese Steak");
      item3.setDescription("Hand shaved flank steak, onions, provolone cheese, garlic aioli, and pickled peppers");
      item3.setCost(8.00);
      item3.setImage("https://s3-media0.fl.yelpcdn.com/bphoto/pW68rO8A_xaeXU9jvFVL0w/o.jpg");
      item3.setFoodCategories(Sandwich);

      Items item4 = new Items();
      item4.setName("The Speziato Grinder");
      item4.setDescription("Turkey, capicola, pepperoni, cheddar, swiss, lettuce, tomato, onion, crazys aioli");
      item4.setCost(8.00);
      item4.setImage("https://s3-media0.fl.yelpcdn.com/bphoto/VzrxWCvRvYkHboj0CWPtiQ/o.jpg");
      item4.setFeatured(true);
      item4.setFoodCategories(Sandwich);

      Items item5 = new Items();
      item5.setName("Ultimate grilled cheese ");
      item5.setDescription("Parmesan crusted bread, cheddar, Swiss, tomato, bacon");
      item5.setCost(6.00);
      item5.setImage("https://s3-media0.fl.yelpcdn.com/bphoto/J2RNyweHztL9ozuxB8R8fg/o.jpg");
      item5.setFoodCategories(Sandwich);

      Items item6 = new Items();
      item6.setName("Grilled chicken wrap");
      item6.setDescription("grilled chicken, bacon, avocado, tomato, lettuce, shredded cheese");
      item6.setCost(8.00);
      item6.setImage("https://s3-media0.fl.yelpcdn.com/bphoto/4ar392BXQvv47-RZfEa2nA/o.jpg");
      item6.setFoodCategories(Wrap);

      Items item7 = new Items();
      item7.setName("Wings");
      item7.setDescription("7 Wings tossed in sauce of your choice (thai curry, caribbean jerk, crazys hot sauce)");
      item7.setCost(10.00);
      item7.setImage("https://aubreyskitchen.com/wp-content/uploads/2020/03/Best-Chicken-Wing-Sauce-featured.jpg");
      item7.setFoodCategories(Wings);

      Items item8 = new Items();
      item8.setName("Waffle Fries");
      item8.setDescription("Waffle fries topped with crazy's aioli, cheddar, and bacon");
      item8.setCost(6.00);
      item8.setImage("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190528-waffle-fry-nachos-137-landscape-pf-1559240616.png?crop=0.541xw:0.811xh;0.241xw,0.102xh&resize=480:*");
      item8.setFoodCategories(Side);

      Items item9 = new Items();
      item9.setName("Southwest Vegan Salad");
      item9.setDescription("Spring mix, carrots, avocado, black bean relish, field roast, crispy strips, and chipotle vinaigrette");
      item9.setCost(9.00);
      item9.setImage("https://image.shutterstock.com/image-photo/healthy-butternut-squash-salad-beetroot-600w-1896208597.jpg");
      item9.setFoodCategories(Salad);

      Items item10 = new Items();
      item10.setName("Vegan chicken");
      item10.setDescription("Grilled vegan chicken");
      item10.setCost(2.00);
      item10.setFoodCategories(Substitute);


      itemService.save(item1);
      itemService.save(item2);
      itemService.save(item3);
      itemService.save(item4);
      itemService.save(item5);
      itemService.save(item6);
      itemService.save(item7);
      itemService.save(item8);
      itemService.save(item9);
      itemService.save(item10);

    }

  }
}
