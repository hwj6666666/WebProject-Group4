package org.example.jiaoji.controller;

import java.util.List;

import org.example.jiaoji.pojo.Remark;
import org.example.jiaoji.pojo.RetType;
import org.example.jiaoji.pojo.User;
import org.example.jiaoji.service.RemarkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class RemarkController {
    @Autowired
    private RemarkService remarkService;

    @GetMapping("/remarks/{objectId}")
    @ResponseBody
    public ResponseEntity<List<Remark>> getRemark(@PathVariable("objectId") Integer id) {
        List<Remark> remark = remarkService.SelectByObject(id);
        return ResponseEntity.ok(remark);
    }

    @GetMapping("/remarks/changeLike/{id}/{change}/{uid}")
    public RetType changeLike(@PathVariable("id") Integer id, @PathVariable("change") Integer change, @PathVariable("uid") Integer uid) {
        return remarkService.changeLike(id, change, uid);
    }

    @GetMapping("/remarks/delete/{id}")
    public RetType delete(@PathVariable("id") Integer id) {
        return remarkService.deleteRemark(id);
    }

    @GetMapping("/getAllUser")
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(remarkService.getAllUser());
    }

    @PostMapping("/remarks")
    public Integer insert(@RequestBody Remark remark) {
        return remarkService.addRemark(remark);
    }

    @GetMapping("/remarks/getLike/{id}/{uid}")
    public ResponseEntity<Boolean> getLike(@PathVariable("id") Integer id, @PathVariable("uid") Integer uid) {
        return ResponseEntity.ok(remarkService.isLike(id, uid));
    }

}
