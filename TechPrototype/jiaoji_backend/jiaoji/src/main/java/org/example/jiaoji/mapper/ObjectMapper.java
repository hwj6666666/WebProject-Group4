package org.example.jiaoji.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.example.jiaoji.pojo.Objects;

@Mapper
public interface ObjectMapper {
    @Select("select * from object where topic_id = #{id}")
    public List<Objects> selectAllInTopic(Integer id);

    @Select("select * from object where id = #{id}")
    public List<Objects> selectById(Integer id);

    @Select("select id from object where title = #{title} and topic_id = #{topic_id}")
    public Integer selectIdByTitle(String title, Integer topic_id);

    @Insert("insert into object(id,title,topics_id,user_id,hot,picture,description) values(#{id},#{title},#{topic_id},#{user_id},#{picture},#{description})")
    public void insert(Objects object);
}
