package org.example.jiaoji.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.example.jiaoji.pojo.Objects;
import org.example.jiaoji.pojo.Remark;
import org.example.jiaoji.pojo.Topic;
import org.example.jiaoji.pojo.User;

import java.util.List;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface UserMapper {
    @Select("select * from user")
    public List<User> selectAll();

    @Select("select * from user where id = #{id}")
    public List<User> selectByUserId(Integer id);

    @Select("select * from topic where topic.user_id = #{id}")
    public List<Topic> selectTopicsByUserId(Integer id);

    @Select("select * from object where object.user_id = #{id}")
    public List<Objects> selectObjectsByUserId(Integer id);

    @Select("select * from remarks where remarks.user_id = #{id}")
    public List<Remark> selectRemarksByUserId(Integer id);

    @Select("select *\n" +
            "from topic\n" +
            "where topic.id in (select topic_id from fllow where fllow.user_id = #{id})")
    public List<Topic> selectFllows(Integer id);

  @Select("select id from user where email = #{email}")
  public Integer selectIdByEmail(String email);

  @Select("select id from user where email = #{email} and password = #{password}")
  public Integer selectIdByEmailAndPassword(String email, String password);


  @Update("update user set password = #{password} where id = #{id}")
  public void resetPassword(Integer id, String password);

    @Update("insert into user(email, password) values(#{email}, #{password})")
  public void insert(String email, String password);
}
