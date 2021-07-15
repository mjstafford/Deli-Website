package com.launchacademy.reviews.repositories;

import com.launchacademy.reviews.models.Items;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemsRepository extends CrudRepository<Items, Integer> {

}
