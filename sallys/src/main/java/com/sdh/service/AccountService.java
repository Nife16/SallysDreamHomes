package com.sdh.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sdh.entity.Account;
import com.sdh.entity.Property;
import com.sdh.repo.AccountRepo;

@Service
public class AccountService {
    

    @Autowired
    AccountRepo accountRepo;

    public Account save(Account account) {
        return accountRepo.save(account);
    }

    public Account update(Account account) {
        return accountRepo.save(account);
    }

    public List<Account> getAll() {
        return accountRepo.findAll();
    }

    public void delete(Integer accountId) {
        accountRepo.deleteById(accountId);
    }

    public Account signIn(Account account) throws Exception {
        Account signedInAccount = accountRepo.findByEmailAndPassword(account.getEmail(), account.getPassword());

        if(signedInAccount == null) {
            throw new Exception("Account not found");
        }

        return signedInAccount;
    }

    public Account getByEmail(String email) throws Exception {
        Account signedInAccount =  accountRepo.getByEmail(email);

        if(signedInAccount == null) {
            throw new Exception("Account not found");
        }

        return signedInAccount;
    }

    public Account buyHouse(Account account, Property property) {

        account.setProperty(property);

        return update(account);

    }

    
}
