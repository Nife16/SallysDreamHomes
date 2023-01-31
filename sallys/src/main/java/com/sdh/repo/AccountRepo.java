package com.sdh.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sdh.entity.Account;

@Repository
public interface AccountRepo extends JpaRepository<Account, Integer> {

    @Query(value="select * from accounts where email = ?1 && password = ?2", nativeQuery=true)
    public Account findByEmailAndPassword(String email, String password);
    
    @Query(value="select * from accounts where email = ?1", nativeQuery=true)
    public Account getByEmail(String email);
    
}
