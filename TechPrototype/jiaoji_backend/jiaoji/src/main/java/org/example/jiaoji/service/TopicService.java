package org.example.jiaoji.service;


import org.example.jiaoji.pojo.Topic;
import java.util.List;

public interface TopicService {

    public Integer insertTopic(Topic data);

    public List<Topic> SelectAll();

    public Topic SelectById(Integer Id);

    public  List<Topic> SelectByClassId(Integer id);

    public List<Topic> search(String keyword);
}