package com.launchacademy.reviews.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "items")
public class Items {
  @Id
  @SequenceGenerator(name = "items_generator", sequenceName = "items_id_seq", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "items_generator")
  @Column(nullable = false, unique = true)
  private Integer id;

  @Column
  private String name;

  @Column
  private String description;

  @Column(columnDefinition = "numeric")
  private Double cost;

  @Column
  private String image;

  @Column
  private boolean featured = false;

  @ManyToOne
  @JoinColumn(name="food_category_id")
  @JsonIgnoreProperties("items")
  private FoodCategories foodCategories;
}
