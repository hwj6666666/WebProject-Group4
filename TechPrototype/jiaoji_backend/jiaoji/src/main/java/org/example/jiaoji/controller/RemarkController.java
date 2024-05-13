package org.example.jiaoji.controller;

import java.util.List;

import org.example.jiaoji.pojo.Remark;
import org.example.jiaoji.pojo.User;
import org.example.jiaoji.pojo.RetType;
import org.example.jiaoji.service.RemarkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class RemarkController {
    @Autowired
    private RemarkService remarkService;

    @CrossOrigin
    @GetMapping("/remarks/{objectId}")
    @ResponseBody
    public ResponseEntity<List<Remark>> getRemark(@PathVariable("objectId") Integer id) {
        List<Remark> remark = remarkService.SelectByObject(id);
        return ResponseEntity.ok(remark);
    }

    @CrossOrigin
    @GetMapping("/remarks/changeLike/{id}/{change}")
    public void changeLike(@PathVariable("id") Integer id, @PathVariable("change") Integer change) {
        remarkService.changeLike(id, change);
    }

    @CrossOrigin
    @GetMapping("/remarks/delete/{id}")
    public void delete(@PathVariable("id") Integer id) {
        remarkService.deleteRemark(id);
    }

    @CrossOrigin
    @GetMapping("/getAllUser")
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(remarkService.getAllUser());
    }

    @CrossOrigin
    @PostMapping("/remarks")
    public Integer insert(@RequestBody Remark remark) {
        return remarkService.addRemark(remark);
    }
}
