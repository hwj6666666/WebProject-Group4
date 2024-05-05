package org.example.jiaoji.service.serverimpl;

import org.example.jiaoji.mapper.TopicMapper;
import org.example.jiaoji.mapper.ObjectMapper;
import org.example.jiaoji.pojo.RetType;
import org.example.jiaoji.pojo.Topic;
import org.example.jiaoji.pojo.Objects;
import org.example.jiaoji.service.ObjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ObjectServiceImpl implements ObjectService {
    @Autowired
    private TopicMapper topicMapper;
    @Autowired
    private ObjectMapper objectMapper;

    public RetType InsertObject(Objects data) {
        RetType ret = new RetType();

        Integer id = objectMapper.selectIdByTitle(data.getTitle(), data.getTopicId());
        if(id !=null) {
            ret.setMsg("该对象已存在");
            ret.setOk(false);
            ret.setData(null);
            return ret;
        }
        System.out.println(data);
        System.out.println("=======this is test=====");
        Objects object = new Objects();
        object.setTitle(data.getTitle());
        object.setId(data.getId());
        object.setDescription(data.getDescription());
        object.setUserId(data.getUserId());
        object.setPicture("this is topic picture");
        object.setTopicId(data.getTopicId());

        objectMapper.insert(object);
        ret.setMsg("上传成功");

        ret.setOk(true);
        ret.setData(null);
        return ret;
    }

    public List<Objects> SelectAllInTopic(Integer id){
        return objectMapper.selectAllInTopic(id);
    }
    public  List<Objects> SelectById(Integer id){
        return objectMapper.selectById(id);
    }
    public List<Topic> SelectTopicById(Integer id){
        return topicMapper.selectByClassId(id);
    }
}
