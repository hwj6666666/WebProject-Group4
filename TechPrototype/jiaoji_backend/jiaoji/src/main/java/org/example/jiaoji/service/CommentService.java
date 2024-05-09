package org.example.jiaoji.service;

import java.util.List;

import org.example.jiaoji.pojo.Comment;
import org.example.jiaoji.pojo.RetType;

public interface CommentService {

    public RetType addComment(Comment data);

    public List<Comment> SelectByRemark(Integer remarkId);

    public List<Comment> SelectById (Integer id);
}
