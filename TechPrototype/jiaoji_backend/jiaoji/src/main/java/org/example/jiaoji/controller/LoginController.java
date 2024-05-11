package org.example.jiaoji.controller;

import org.example.jiaoji.pojo.User;
import org.example.jiaoji.pojo.RetType;
import org.example.jiaoji.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class LoginController {
    
    @Autowired
    private UserService userService;

//    @PostMapping("/user/login")
//    public RetType postMethodName(@RequestBody User user) {
//        return userService.Login(user.getUsername(), user.getPassword());
//    }
    
}
