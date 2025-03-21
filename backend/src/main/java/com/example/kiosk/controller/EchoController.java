package com.example.kiosk.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EchoController {

    @PostMapping("/api/echo")
    public String echo(@RequestBody Message message) {
        return "보낸 메시지: " + message.getMessage(); // 백엔드에서 받은 메시지를 그대로 돌려줍니다.
    }

    // Message 클래스를 생성하여 데이터 구조를 정의합니다.
    public static class Message {
        private String message;

        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }
    }
}
