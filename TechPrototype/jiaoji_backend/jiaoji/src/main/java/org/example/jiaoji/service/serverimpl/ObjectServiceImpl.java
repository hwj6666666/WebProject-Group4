package org.example.jiaoji.service.serverimpl;

import java.util.List;
import org.example.jiaoji.mapper.ObjectMapper;
import org.example.jiaoji.pojo.Objects;
import org.example.jiaoji.pojo.Remark;
import org.example.jiaoji.pojo.RetType;
import org.example.jiaoji.pojo.Topic;
import org.example.jiaoji.service.ObjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ObjectServiceImpl implements ObjectService {
  @Autowired private ObjectMapper objectMapper;

  public RetType InsertObject(Objects data) {
    RetType ret = new RetType();

    Integer id = objectMapper.selectIdByTitle(data.getTitle(), data.getTopicId());
    if (id != null) {
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
    object.setPicture(data.getPicture());

    object.setTopicId(data.getTopicId());

    objectMapper.insert(object);
    ret.setMsg("上传成功");

    ret.setOk(true);
    ret.setData(null);
    return ret;
  }

  public List<Objects> SelectAllInTopic(Integer id) {
    return objectMapper.selectAllInTopic(id);
  }

  public List<Objects> SelectById(Integer id) {
    return objectMapper.selectById(id);
  }

  public List<Topic> SelectTopicById(Integer id) {
    return objectMapper.selectTopicById(id);
  }

  public double getAveScore(Integer id) {
    List<Remark> remarks = objectMapper.selectAllRemarks(id);
    if (remarks != null && remarks.size() == 0) {
      return 0;
    }
    Integer length = remarks.size();
    double scores = 0;
    for (Remark remark : remarks) {
      scores += remark.getScore();
    }
    return scores / length;
  }

  public String getHottestRemark(Integer id) {
    List<Remark> remarks = objectMapper.selectAllRemarks(id);
    Integer likes = 0;
    String hottestRemark = "";
    for (Remark remark : remarks) {
      if (remark.getLike() > likes) {
        likes = remark.getLike();
        hottestRemark = remark.getContent();
      }
    }
    return hottestRemark;
  }
}
