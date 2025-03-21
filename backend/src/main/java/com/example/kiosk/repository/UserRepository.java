package com.example.kiosk.repository;

import com.example.kiosk.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    // JpaRepository는 기본적인 CRUD 메소드들을 제공합니다.
    // 예를 들어, findAll(), save(), findById(), delete() 등이 자동으로 제공됩니다.
}
