package org.example.jiaoji.service;

import org.example.jiaoji.mapper.UserMapper;
import org.example.jiaoji.pojo.RetType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserService {
    @Autowired
    private UserMapper userMapper;

    public RetType Register(String email, String password){
        Integer id= userMapper.selectIdByEmail(email);
        RetType retType = new RetType();
        if(id!=null)
        {
            retType.setData(id);
            retType.setMsg("密码已重置");
            retType.setOk(false);

            userMapper.resetPassword(id, password);
            return retType;
        }

        userMapper.insert(email, password);
        id= userMapper.selectIdByEmail(email);
        retType.setData(id);
        retType.setMsg("注册成功");
        retType.setOk(true);
        return retType;
    }

    public RetType Login(String email, String password){
        Integer id= userMapper.selectIdByEmail(email);
        RetType retType = new RetType();
        if(id==null)
        {
            retType.setData(null);
            retType.setMsg("邮箱未注册");
            retType.setOk(false);
            return retType;
        }
        id= userMapper.selectIdByEmailAndPassword(email, password);
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
