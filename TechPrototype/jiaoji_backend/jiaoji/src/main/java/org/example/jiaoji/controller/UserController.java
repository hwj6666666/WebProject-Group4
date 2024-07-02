package org.example.jiaoji.controller;

import org.example.jiaoji.pojo.Objects;
import org.example.jiaoji.pojo.Remark;
import org.example.jiaoji.pojo.RetType;
import org.example.jiaoji.pojo.Topic;
import org.example.jiaoji.pojo.User;
import org.example.jiaoji.service.ObjectService;
import org.example.jiaoji.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;

@RestController
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private ObjectService objectService;

    @GetMapping("/user")
    @ResponseBody
    public ResponseEntity<List<User>> getAllUser() {
        List<User> users = userService.SelectAll();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/user/{id}")
    @ResponseBody
    public ResponseEntity<User> getUserById(@PathVariable("id") Integer id) {
        User user = userService.SelectByUserId(id);
        return ResponseEntity.ok(user);
    }

    @GetMapping("/user/{id}/topics")
    @ResponseBody
    public ResponseEntity<List<Topic>> getTopicsById(@PathVariable("id") Integer id) {
        List<Topic> topics = userService.SelectTopicsById(id);
        return ResponseEntity.ok(topics);
    }

    @GetMapping("/user/{id}/objects")
    @ResponseBody
    public ResponseEntity<List<Objects>> getObjectsById(@PathVariable("id") Integer id) {
        List<Objects> objects = userService.SelectObjectsById(id);
        for (Objects object : objects) {
            object.setAveScore(objectService.getAveScore(object.getId()));
            object.setHottestRemark(objectService.getHottestRemark(object.getId()));
        }
        return ResponseEntity.ok(objects);
    }

    @GetMapping("/user/{id}/remarks")
    @ResponseBody
    public ResponseEntity<List<Remark>> getRemarksById(@PathVariable("id") Integer id) {
        List<Remark> remark = userService.SelectRemarksById(id);
        return ResponseEntity.ok(remark);
    }

    @GetMapping("/user/{id}/follows")
    @ResponseBody
    public ResponseEntity<List<Topic>> getFollows(@PathVariable("id") Integer id) {
        List<Topic> follow = userService.SelectFollows(id);
        return ResponseEntity.ok(follow);
    }

    @PutMapping("/user/{id}")
    public ResponseEntity<User> updateUser(@PathVariable("id") Integer id, @RequestBody User user) {
        User updatedUser = userService.updateUser(id, user);
//        updatedUser.setPassword("");
        if (updatedUser == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(updatedUser);
    }

    @PutMapping("/psd/{id}")
    public ResponseEntity<User> updatePsd(@PathVariable("id") Integer id, @RequestBody User user) {
        User updatedPsdUser = userService.updatePsd(id, user);
        updatedPsdUser.setPassword("");
        return ResponseEntity.ok(updatedPsdUser);
    }

    @GetMapping("/user/object/{id}/nameAndTopic")
    @ResponseBody
    public ResponseEntity<Map<String, String>> getObjectNameAndTopicNameById(@PathVariable("id") Integer id) {
        Map<String, String> result = userService.getObjectNameAndTopicNameById(id);
        if (result == null || result.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(result);
    }

    @GetMapping("user/search/{keyword}")
    public List<User> getMethodName(@PathVariable("keyword") String keyword) {
        return userService.search(keyword);
    }

    @GetMapping("user/ban/{id}")
    public RetType ban(@PathVariable("id") Integer id) {
        return userService.banUser(id);
    }

}
