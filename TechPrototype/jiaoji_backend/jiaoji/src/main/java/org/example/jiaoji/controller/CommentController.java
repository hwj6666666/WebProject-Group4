package org.example.jiaoji.controller;

import java.util.List;

import org.example.jiaoji.pojo.Comment;
import org.example.jiaoji.pojo.RetType;
import org.example.jiaoji.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class CommentController {
    @Autowired
    private CommentService commentService;

    @CrossOrigin
    @GetMapping("/comments/{remarkId}")
    @ResponseBody
    public ResponseEntity<List<Comment>> getComment(@PathVariable("remarkId") Integer id) {
        List<Comment> comment = commentService.SelectByRemark(id);
        return ResponseEntity.ok(comment);
    }

    @CrossOrigin
    @PostMapping("/comments")
    public RetType insert(Comment comment) {return commentService.addComment(comment);}
}
