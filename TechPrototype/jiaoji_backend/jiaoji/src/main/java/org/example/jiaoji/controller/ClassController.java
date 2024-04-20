package org.example.jiaoji.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.example.jiaoji.pojo.Class;
import org.example.jiaoji.service.ClassService;

import java.util.List;

@RestController
@CrossOrigin
public class ClassController {
    @Autowired
    private ClassService classService;

    @GetMapping("/class")
    public List<Class> getMethodName() {
        return classService.selectAll();
    }
    
}
