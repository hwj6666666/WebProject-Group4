package org.example.jiaoji.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

import org.example.jiaoji.pojo.RetType;
import org.example.jiaoji.pojo.Topic;
import org.example.jiaoji.service.TopicService;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin
public class TopicController {
    @Autowired
    private TopicService topicService;

    @GetMapping("/topic/{id}")
    @ResponseBody
    public ResponseEntity<List<Topic>> getTopic(@PathVariable("id") Integer id) {
        List<Topic> topic = null;
        if (id == 0) {
            topic = topicService.SelectAll();
        } else {
            topic = topicService.SelectByClassId(id);
        }
        return ResponseEntity.ok(topic);
    }

    @GetMapping("/topic/object/{id}")
    @ResponseBody
    public ResponseEntity<Topic> getOneTopic(@PathVariable("id") Integer id) {
        Topic topic = topicService.SelectById(id);
        return ResponseEntity.ok(topic);
    }

    @PostMapping("/topic")
    public RetType insert(@RequestBody Topic test) {
        return topicService.insertTopic(test);
    }

    @GetMapping("/topic/search/{keyword}")
    @ResponseBody
    public ResponseEntity<List<Topic>> search(@PathVariable("keyword") String keyword) {
        List<Topic> topic = topicService.search(keyword);
        return ResponseEntity.ok(topic);
    }

    @PostMapping("/topic/follow")
    @ResponseBody
    public RetType follow(@RequestParam Integer userId, @RequestParam Integer topicId) {
        return topicService.setFollow(topicId, userId);
    }

    @GetMapping("/topic/follow")
    @ResponseBody
    public boolean unfollow(@RequestParam Integer userId, @RequestParam Integer topicId) {
        return topicService.findFollow(topicId, userId);
    }

    @DeleteMapping("/topic/{id}")
    @ResponseBody
    public RetType delete(@PathVariable("id") Integer id) {
        return topicService.deleteTopic(id);
    }

    @GetMapping("/topic/hot")
    @ResponseBody
    public List<Topic> hotTopic() {
        return topicService.hotTopic();
    }

}