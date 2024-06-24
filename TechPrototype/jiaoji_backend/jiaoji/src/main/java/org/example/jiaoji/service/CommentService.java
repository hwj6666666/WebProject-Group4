package org.example.jiaoji.service;

import java.util.List;

import org.example.jiaoji.pojo.Comment;
import org.example.jiaoji.pojo.RetType;

public interface CommentService {

    public Integer addComment(Comment data);

    public List<Comment> SelectByRemark(Integer remarkId);

    public RetType deleteById(Integer id);
}
