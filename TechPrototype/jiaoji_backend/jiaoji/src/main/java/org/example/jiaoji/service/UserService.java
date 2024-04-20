package org.example.jiaoji.service;

import org.example.jiaoji.mapper.UserMapper;
import org.example.jiaoji.pojo.RetType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserService {
    @Autowired
    private UserMapper userMapper;

    public RetType Login(String username, String password){
        Integer id= userMapper.selectIdByUsername(username);
        RetType retType = new RetType();
        if(id==null)
        {
            retType.setData(null);
            retType.setMsg("用户名不存在");
            retType.setOk(false);
            return retType;
        }
        id= userMapper.selectIdByUsernameAndPassword(username, password);
        if(id==null)
        {
            retType.setData(null);
            retType.setMsg("密码错误");
            retType.setOk(false);
            return retType;
        }   
            retType.setData(id);
            retType.setMsg("登录成功");
            retType.setOk(true);
            return retType;
    }
}
