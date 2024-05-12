package org.example.jiaoji.controller;

import org.example.jiaoji.pojo.Objects;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.List;

import org.example.jiaoji.pojo.RetType;
import org.example.jiaoji.pojo.Topic;
import org.example.jiaoji.service.ObjectService;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class ObjectController {
    @Autowired
    private ObjectService objectService;

    @CrossOrigin    //解决跨域问题
    @GetMapping("/object/{id}")
    @ResponseBody
    public ResponseEntity<List<Objects>> getObject(@PathVariable("id") Integer id) {
        List<Objects> objects;
        objects = objectService.SelectAllInTopic(id);
        for (Objects object : objects) {
            object.setAveScore(objectService.getAveScore(object.getId()));
            object.setHottestRemark(objectService.getHottestRemark(object.getId()));
        }
        return ResponseEntity.ok(objects);
    }

    @CrossOrigin
    @PostMapping("/object")
    public RetType insert(@RequestBody Objects object) {
        return objectService.InsertObject(object);
    }

    @CrossOrigin    //解决跨域问题
    @GetMapping("/object/remark/{id}")
    @ResponseBody
    public ResponseEntity<List<Objects>> getObjectById(@PathVariable("id") Integer id) {
        List<Objects> objects;
        objects = objectService.SelectById(id);
        for (Objects object : objects) {
            object.setAveScore(objectService.getAveScore(object.getId()));
            object.setHottestRemark(objectService.getHottestRemark(object.getId()));
        }
        return ResponseEntity.ok(objects);
    }
}