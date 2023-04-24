package com.example.reputationjobbe.service;

import com.example.reputationjobbe.model.Account;
import org.springframework.stereotype.Service;

@Service
public interface IAccountService {
    Account findAccountByEmail(String email);
}
