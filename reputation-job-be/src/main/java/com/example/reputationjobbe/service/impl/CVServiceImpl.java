package com.example.reputationjobbe.service.impl;

import com.example.reputationjobbe.dto.ICVDto;
import com.example.reputationjobbe.repository.ICVRepository;
import com.example.reputationjobbe.service.ICVService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CVServiceImpl implements ICVService {

    @Autowired
    private ICVRepository icvRepository;

    @Override
    public Page<ICVDto> getAllCV(String name, Pageable pageable) {
        return icvRepository.getAllCV(name, pageable);
    }
}
