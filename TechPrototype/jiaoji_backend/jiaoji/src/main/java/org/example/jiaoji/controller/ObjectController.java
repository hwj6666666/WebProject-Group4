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
    public ResponseEntity<ResponseResult> getObject(@PathVariable("id") Integer id) {
        List<Objects> objects;
        List<Topic> topics;
        ResponseResult result = new ResponseResult();
        objects = objectService.SelectAllInTopic(id);
        topics = objectService.SelectTopicById(id);
        result.data = objects;
        result.data1 = topics;
        return ResponseEntity.ok(result);
    }

    public class ResponseResult {
        /*返回体*/
        private List<Objects> data;
        private List<Topic> data1;
    }

    @CrossOrigin
    @PostMapping("/object")
    public RetType insert(@RequestBody Objects object) {
        return objectService.InsertObject(object);
    }
}