package org.example.jiaoji.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.List;

import org.example.jiaoji.pojo.Topic;
import org.example.jiaoji.service.TopicService;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class TopicController {
    @Autowired
    private TopicService topicService;

    @CrossOrigin
    @GetMapping("/topic/{id}")
    @ResponseBody
    public ResponseEntity<List<Topic>> getTopic(@PathVariable("id") Integer id) {
        List<Topic> topic=null;
        if(id==0){
            topic = topicService.SelectAll();}
        else
        {
            topic = topicService.SelectByClassId(id);
        }
        return ResponseEntity.ok(topic);
    }

    @CrossOrigin
    @GetMapping("/topic/object/{id}")
    @ResponseBody
    public ResponseEntity<Topic> getOneTopic(@PathVariable("id") Integer id) {
        Topic topic = topicService.SelectById(id);
        return ResponseEntity.ok(topic);
    }


    @CrossOrigin
    @PostMapping("/topic")
    public Integer insert(@RequestBody Topic test) {
        return topicService.insertTopic(test);
    }

    @CrossOrigin
    @GetMapping("/topic/search/{keyword}")
    @ResponseBody
    public ResponseEntity<List<Topic>> search(@PathVariable("keyword") String keyword) {
        List<Topic> topic = topicService.search(keyword);
        return ResponseEntity.ok(topic);
    }
}