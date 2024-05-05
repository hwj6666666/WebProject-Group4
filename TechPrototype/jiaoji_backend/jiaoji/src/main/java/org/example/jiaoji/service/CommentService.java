package org.example.jiaoji.service;

import org.example.jiaoji.pojo.RetType;
import org.example.jiaoji.pojo.Comment;

import java.util.List;

public interface CommentService {

    public RetType addComment(Comment data);

    public List<Comment> SelectByRemark(Integer remarkId);

    public List<Comment> SelectById (Integer id);
}
