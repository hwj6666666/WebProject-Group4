package org.example.jiaoji.service;

import org.example.jiaoji.pojo.RetType;
import org.example.jiaoji.pojo.Objects;
import org.example.jiaoji.pojo.Topic;
import java.util.List;

public interface ObjectService {

    public RetType InsertObject(Objects data);

    public List<Objects> SelectAllInTopic(Integer id);

    public  List<Objects> SelectById(Integer id);

    public List<Topic> SelectTopicById(Integer id);

    public double getAveScore(Integer id);

    public String getHottestRemark(Integer id);
}
