package org.example.jiaoji.service.serverimpl;

import org.example.jiaoji.mapper.UserMapper;
import org.example.jiaoji.pojo.*;
import org.example.jiaoji.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;

    public List<User> SelectAll() {
        return userMapper.selectAll();
    }

    public List<User> SelectByUserId(Integer id) {
        return userMapper.selectByUserId(id);
    }

    public List<Topic> SelectTopicsById(Integer id) {
        return userMapper.selectTopicsByUserId(id);
    }

    public List<Objects> SelectObjectsById(Integer id) {
        return userMapper.selectObjectsByUserId(id);
    }

    public List<Remark> SelectRemarksById(Integer id) {
        return userMapper.selectRemarksByUserId(id);
    }

    public List<Topic> SelectFlllows(Integer id){
        return userMapper.selectFllows(id);
    }

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
