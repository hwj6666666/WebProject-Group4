package org.example.jiaoji.controller;

import java.util.List;

import org.example.jiaoji.pojo.Remark;
import org.example.jiaoji.pojo.RetType;
import org.example.jiaoji.service.RemarkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RemarkController {
    @Autowired
    private RemarkService remarkService;

    @CrossOrigin
    @GetMapping("/topic/{id}/remarks")
    @ResponseBody
    public ResponseEntity<List<Remark>> getRemark(@PathVariable("id") Integer id) {
        List<Remark> remark = remarkService.SelectByObject(id);
        return ResponseEntity.ok(remark);
    }

    @CrossOrigin
    @PostMapping("/topic/{id}/remarks")
    public RetType insert(Remark remark) {return remarkService.addRemark(remark);}
}
