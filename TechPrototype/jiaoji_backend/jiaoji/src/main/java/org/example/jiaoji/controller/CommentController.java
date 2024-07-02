package org.example.jiaoji.controller;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.example.jiaoji.pojo.Comment;
import org.example.jiaoji.pojo.RetType;
import org.example.jiaoji.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class CommentController {
    @Autowired
    private CommentService commentService;

    @PostMapping("/comments/get")
    @ResponseBody
    public ResponseEntity<List<Comment>> getComment(@RequestBody Integer[] ids) {
        List<Comment> comment = Arrays.stream(ids).map(id->commentService.SelectByRemark(id))
                .flatMap(List::stream).collect(Collectors.toList());
        return ResponseEntity.ok(comment);
    }

    @PostMapping("/comments")
    public Integer insert(@RequestBody Comment comment) {
        return commentService.addComment(comment);
    }

    @GetMapping("/comments/delete/{id}")
    public RetType delete(@PathVariable Integer id) {
        return commentService.deleteById(id);
    }

}
