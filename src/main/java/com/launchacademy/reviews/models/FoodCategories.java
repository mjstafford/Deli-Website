package com.launchacademy.reviews.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "food_categories")
public class FoodCategories {
  @Id
  @SequenceGenerator(name = "categories_generator", sequenceName = "food_categories_id_seq", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "categories_generator")
  @Column(nullable = false, unique = true)
  private Integer id;

  @Column
  private String name;

  @OneToMany(cascade= CascadeType.REMOVE, orphanRemoval=true, mappedBy = "foodCategories")
  @JsonIgnoreProperties("foodCategories")
  private List<Items> items;
}
