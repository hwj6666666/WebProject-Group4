package org.example.jiaoji.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserMapper {

    @Select("select id from user where username = #{username}")
    public Integer selectIdByUsername(String username);
    
    @Select("select id from user where username = #{username} and password = #{password}")
    public Integer selectIdByUsernameAndPassword(String username, String password);
}
