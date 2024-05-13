package org.example.jiaoji.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;
import org.example.jiaoji.pojo.Topic;

@Mapper
public interface TopicMapper {
    @Select("select * from topic") //由于这里是用的注解，所以不需要写xml文件，但需要将原来的xml文件删除，不然会报错
    public List<Topic> selectAll();

    @Select("select * from topic where id = #{id}")
    public Topic selectById(Integer Id);

    @Select("select * from topic where class_id = #{id}")
    public List<Topic> selectByClassId(Integer id);

    @Select("select id from topic where title = #{title}")
    public Integer selectIdByTitle(String title);

    @Insert("insert into topic(class_id,user_id,title,picture,introduction,hot,public_time,base64) values(#{classId},#{userId},#{title},#{picture},#{introduction},#{hot},#{publicTime},#{base64})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    public void insert(Topic topic);


}