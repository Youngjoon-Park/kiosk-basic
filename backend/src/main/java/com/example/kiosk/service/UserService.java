package com.example.kiosk.service;

import com.example.kiosk.model.User;
import com.example.kiosk.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // 모든 사용자 데이터를 가져오는 메소드
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // 특정 사용자 데이터를 ID로 가져오는 메소드
    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }
}
