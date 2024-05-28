package org.example.jiaoji.service.serverimpl;

import org.example.jiaoji.mapper.CommentMapper;
import org.example.jiaoji.mapper.ObjectMapper;
import org.example.jiaoji.mapper.RemarkMapper;
import org.example.jiaoji.mapper.TopicMapper;
import org.example.jiaoji.pojo.RetType;
import org.example.jiaoji.pojo.Topic;
import org.example.jiaoji.pojo.Comment;
import org.example.jiaoji.pojo.Objects;
import org.example.jiaoji.pojo.Remark;
import org.example.jiaoji.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

import java.util.List;

@Service
public class CommentServiceImpl implements CommentService {
    @Autowired
    private CommentMapper commentMapper;
    @Autowired
    private RemarkMapper remarkMapper;
    @Autowired
    private ObjectMapper objectMapper;
    @Autowired
    private TopicMapper topicMapper;

    @Transactional
    @Override
    public RetType addComment(Comment data) {
        RetType ret = new RetType();
        Comment comment = new Comment();

        comment.setId(data.getId());
        comment.setContent(data.getContent());
        comment.setUserId(data.getUserId());
        comment.setPublishTime(data.getPublishTime());
        comment.setRemarkId(data.getRemarkId());
        commentMapper.insert(comment);
        Remark remark = remarkMapper.selectById(data.getRemarkId()).get(0);
        Objects object = objectMapper.selectById(remark.getObjectId()).get(0);
        Topic topic = topicMapper.selectById(object.getTopicId());
        topicMapper.updateRemarkNum(topic.getRemarkNum() + 1, topic.getId());


        ret.setMsg("上传成功");
        ret.setOk(true);
        ret.setData(null);
        return ret;
    }

    @Override
    public List<Comment> SelectByRemark(Integer remarkId) {
        return commentMapper.selectByRemark(remarkId);
    }

    @Override
    public List<Comment> SelectById(Integer id) {
        return commentMapper.selectById(id);
    }
}
