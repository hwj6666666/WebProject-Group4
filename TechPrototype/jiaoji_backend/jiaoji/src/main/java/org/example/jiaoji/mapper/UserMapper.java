package org.example.jiaoji.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.example.jiaoji.pojo.Remark;
import org.example.jiaoji.pojo.Topic;
import org.example.jiaoji.pojo.User;

import java.util.List;

@Mapper
public interface UserMapper {
    @Select("select * from user")
    public List<User> selectAll();

    @Select("select * from user where id = #{id}")
    public List<User> selectByUserId(Integer id);

    @Select("select id from topic where topic.user_id = #{id}")
    public List<Integer> selectTopicsByUserId(Integer id);

    @Select("select id from object where object.user_id = #{id}")
    public List<Integer> selectObjectsByUserId(Integer id);

    @Select("select id from remarks where remarks.user_id = #{id}")
    public List<Integer> selectRemarksByUserId(Integer id);

    @Select("select id from user where username = #{username}")
    public Integer selectIdByUsername(String username);

    @Select("select id from user where username = #{username} and password = #{password}")
    public Integer selectIdByUsernameAndPassword(String username, String password);
}
