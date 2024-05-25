package org.example.jiaoji.service.serverimpl;

import java.util.List;

import org.example.jiaoji.mapper.TopicMapper;
import org.example.jiaoji.pojo.RetType;
import org.example.jiaoji.pojo.Topic;
import org.example.jiaoji.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TopicServiceImpl implements TopicService{
    @Autowired
    private TopicMapper topicMapper;

    public Integer insertTopic(Topic data) {
        RetType ret = new RetType();

        Integer id = topicMapper.selectIdByTitle(data.getTitle());
        if(id !=null) {
            ret.setMsg("该话题已存在");
            ret.setOk(false);
            ret.setData(null);
            return -1;
        }
        System.out.println(data);
        System.out.println("=======this is test=====");
        Topic topic = new Topic();
        topic.setTitle(data.getTitle());
        topic.setClassId(data.getClassId());
        topic.setIntroduction(data.getIntroduction());
        topic.setUserId(data.getUserId());
        topic.setHot(0);
        topic.setPicture("this is topic picture");
        topic.setPublicTime(java.time.LocalDateTime.now());
        topic.setBase64(data.getBase64());
        topicMapper.insert(topic);
        ret.setMsg("上传成功");
        ret.setOk(true);
        ret.setData(null);
        return topic.getId();
    }


    public List<Topic> SelectAll(){
        return topicMapper.selectAll();
    }
    public  List<Topic> SelectByClassId(Integer id){
        return topicMapper.selectByClassId(id);
    }


    @Override
    public Topic SelectById(Integer Id) {
        return topicMapper.selectById(Id);
    }

    @Override
    public List<Topic> search(String keyword) {
        keyword="%"+keyword+"%";
        return topicMapper.search(keyword);
    }
    
}