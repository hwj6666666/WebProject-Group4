package org.example.jiaoji.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface UserMapper {

  @Select("select id from user where email = #{email}")
  public Integer selectIdByEmail(String email);

  @Select("select id from user where email = #{email} and password = #{password}")
  public Integer selectIdByEmailAndPassword(String email, String password);


  @Update("update user set password = #{password} where id = #{id}")
  public void resetPassword(Integer id, String password);

    @Update("insert into user(email, password) values(#{email}, #{password})")
  public void insert(String email, String password);
}
