package org.example.jiaoji.service.serverimpl;

import org.example.jiaoji.mapper.UserMapper;
import org.example.jiaoji.pojo.Remark;
import org.example.jiaoji.pojo.RetType;
import org.example.jiaoji.pojo.Topic;
import org.example.jiaoji.pojo.User;
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

    public List<Integer> SelectTopicsById(Integer id) {
        return userMapper.selectTopicsByUserId(id);
    }

    public List<Integer> SelectObjectsById(Integer id) {
        return userMapper.selectObjectsByUserId(id);
    }

    public List<Integer> SelectRemarksById(Integer id) {
        return userMapper.selectRemarksByUserId(id);
    }


//    public RetType Login(String username, String password) {
//        Integer id = userMapper.selectIdByUsername(username);
//        RetType retType = new RetType();
//        if (id == null) {
//            retType.setData(null);
//            retType.setMsg("用户名不存在");
//            retType.setOk(false);
//            return retType;
//        }
//        id = userMapper.selectIdByUsernameAndPassword(username, password);
//        if (id == null) {
//            retType.setData(null);
//            retType.setMsg("密码错误");
//            retType.setOk(false);
//            return retType;
//        }
//        retType.setData(id);
//        retType.setMsg("登录成功");
//        retType.setOk(true);
//        return retType;
//    }
}
