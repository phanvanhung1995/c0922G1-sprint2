package com.example.reputationjobbe.repository;

import com.example.reputationjobbe.dto.ICVDto;
import com.example.reputationjobbe.model.CV;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface ICVRepository extends JpaRepository<CV, Long> {

    @Query(value = "select `cv`.id as id, `cv`.description as description,`cv`.file_path as filePath,`cv`.name as name, `cv`.price as price, `position`.name as position\n" +
            "from `cv` \n" +
            "join `position` on `position`.id = `cv`.position_id\n" +
            "where `cv`.name like concat('%',:nameSearch,'%')", nativeQuery = true)
    Page<ICVDto> getAllCV(@Param("nameSearch") String name, Pageable pageable);
}
