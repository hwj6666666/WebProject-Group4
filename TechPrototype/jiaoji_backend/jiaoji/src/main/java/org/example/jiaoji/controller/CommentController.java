package org.example.jiaoji.controller;

import java.util.List;

import org.example.jiaoji.pojo.Comment;
import org.example.jiaoji.pojo.RetType;
import org.example.jiaoji.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CommentController {
    @Autowired
    private CommentService commentService;

    @CrossOrigin
    @GetMapping("/topic/{id}/remarks")
    @ResponseBody
    public ResponseEntity<List<Comment>> getComment(Integer remarkId) {
        List<Comment> comment = commentService.SelectByRemark(remarkId);
        return ResponseEntity.ok(comment);
    }

    @CrossOrigin
    @PostMapping("/topic/{id}/remarks")
    public RetType insert(Comment comment) {return commentService.addComment(comment);}
}
