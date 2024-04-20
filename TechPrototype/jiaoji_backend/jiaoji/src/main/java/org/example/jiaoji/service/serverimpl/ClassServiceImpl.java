package org.example.jiaoji.service.serverimpl;

import java.util.List;

import org.example.jiaoji.mapper.ClassMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.example.jiaoji.pojo.Class;
import org.example.jiaoji.service.ClassService;

@Service
public class ClassServiceImpl implements ClassService{
    @Autowired
    private ClassMapper classMapper;

    public List<Class> selectAll(){
        return classMapper.selectAll();
    }
}
