package org.example.jiaoji.mapper;

import org.apache.ibatis.annotations.*;
import org.example.jiaoji.pojo.Remark;

import java.util.List;

@Mapper
public interface RemarkMapper {
    @Select("select * from remarks where object_id = #{objectId}")
    public List<Remark> selectByObject(Integer objectId);

    @Select("select * from remarks where id = #{id}")
    public List<Remark> selectById(Integer id);

    @Insert("insert into remarks(id,user_id,object_id,content,`like`,score,publish_time) values (#{id},#{userId},#{objectId},#{content},#{like},#{score},#{publishTime})")
    public void insert(Remark remark);

    @Update("update remarks set `like` = #{change} + `like` where id=#{id}")
    public void update(Integer id, Integer change);

    @Delete("delete from remarks where id=#{id}")
    public void delete(Integer id);
}
