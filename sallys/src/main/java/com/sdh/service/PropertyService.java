package com.sdh.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sdh.entity.Account;
import com.sdh.entity.Address;
import com.sdh.entity.Property;
import com.sdh.repo.PropertyRepo;

@Service
public class PropertyService {
    
    @Autowired
    PropertyRepo propertyRepo;

    public Property save(Property property, Account agent) throws Exception {

        property.setDatePosted(LocalDateTime.now());
        property.setAccount(agent);

        return propertyRepo.save(property);
    }

    public Property update(Property property) {
        return propertyRepo.save(property);
    }
    public List<Property> getAll() {
        return propertyRepo.findAll();
    }

    public void delete(Integer accountId) {
        propertyRepo.deleteById(accountId);
    }

    public Property addAddress(Integer propertyId, Address address) {

        Property property = getPropertyById(propertyId);

        property.setAddress(address);

        update(property);

        return property;

    }

    public Property getPropertyById(Integer propertyId) {
        return propertyRepo.findById(propertyId).get();
    }

    public List<Property> getListedProperties() {
        return propertyRepo.getListedProperties();
    }

    public List<Property> getPurchasedProperties() {
        return propertyRepo.getPurchasedProperties();
    }
}
