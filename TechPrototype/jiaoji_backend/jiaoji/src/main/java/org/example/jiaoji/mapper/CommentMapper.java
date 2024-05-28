package org.example.jiaoji.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.example.jiaoji.pojo.Comment;

import java.util.List;

@Mapper
public interface CommentMapper {
    @Select("select * from comments where remark_id = #{remarkId}")
    public List<Comment> selectByRemark(Integer remarkId);

    @Select("select * from comments where id = #{id}")
    public List<Comment> selectById(Integer id);

    @Insert("insert into comments(id,user_id,remark_id,content,publish_time) values (#{id},#{userId},#{remarkId},#{content},#{publishTime})")
    public void insert(Comment comment);

    @Select("select * from remarks where id = #{remarkId}")
    public Comment selectRemarkById(Integer remarkId);
}
