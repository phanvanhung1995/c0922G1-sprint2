package com.example.reputationjobbe.service;

import com.example.reputationjobbe.dto.ICVDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


public interface ICVService {
    Page<ICVDto> getAllCV(String name, Pageable pageable);
}
