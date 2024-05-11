package org.example.jiaoji.controller;

import org.example.jiaoji.pojo.Remark;
import org.example.jiaoji.pojo.Topic;
import org.example.jiaoji.pojo.User;
import org.example.jiaoji.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @CrossOrigin
    @GetMapping("/user")
    @ResponseBody
    public ResponseEntity<List<User>> getAllUser() {
        List<User> users = null;
        users = userService.SelectAll();
        return ResponseEntity.ok(users);
    }

    @CrossOrigin
    @GetMapping("/user/{id}")
    @ResponseBody
    public ResponseEntity<List<User>> getUserById(@PathVariable("id") Integer id) {
        List<User> user = null;
        if (id == 0) {
            user = userService.SelectAll();
        } else {
            user = userService.SelectByUserId(id);
        }
        return ResponseEntity.ok(user);
    }

    @CrossOrigin
    @GetMapping("/user/{id}/topics")
    @ResponseBody
    public ResponseEntity<List<Integer>> getTopicsIdById(@PathVariable("id") Integer id) {
        List<Integer> topics = null;
        topics = userService.SelectTopicsById(id);
        return ResponseEntity.ok(topics);
    }
//
//    @CrossOrigin
//    @GetMapping("/user/{id}/objects")
//    @ResponseBody
//    public ResponseEntity<List<Integer>> getObjectsIdById(@PathVariable("id") Integer id) {
//        List<Integer> object = null;
//        object = userService.SelectObjectsById(id);
//        return ResponseEntity.ok(object);
//    }
//
//    @CrossOrigin
//    @GetMapping("/user/{id}/remarks")
//    @ResponseBody
//    public ResponseEntity<List<Integer>> getRemarksIdById(@PathVariable("id") Integer id) {
//        List<Integer> remark = null;
//        remark = userService.SelectRemarksById(id);
//        return ResponseEntity.ok(remark);
//    }
}