package com.sdh.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sdh.entity.Address;
import com.sdh.repo.AddressRepo;

@Service
public class AddressService {
    
    @Autowired
    AddressRepo addressRepo;

    public Address save(Address address) {

        return addressRepo.save(address);
        
    }

    public Address getById(Integer addressId) {

        return addressRepo.findById(addressId).get();
        
    }

    public Address updateAddress(Address address) {
        return addressRepo.save(address);
    }

    public void deleteById(Integer addressId) {

        addressRepo.deleteById(addressId);
        
    }
}
