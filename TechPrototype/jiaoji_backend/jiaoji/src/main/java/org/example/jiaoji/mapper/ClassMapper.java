package org.example.jiaoji.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.example.jiaoji.pojo.Class;

@Mapper
public interface ClassMapper {
     
    @Select("select * from class")
    public List<Class> selectAll();
}
