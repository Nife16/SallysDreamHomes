package com.sdh.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sdh.entity.Property;

@Repository
public interface PropertyRepo extends JpaRepository<Property, Integer> {

    @Query(value="select * from propertys where is_sold = 0", nativeQuery = true)
    public List<Property> getListedProperties();

    @Query(value="select * from propertys where is_sold = 1", nativeQuery = true)
    public List<Property> getPurchasedProperties();
    
}
