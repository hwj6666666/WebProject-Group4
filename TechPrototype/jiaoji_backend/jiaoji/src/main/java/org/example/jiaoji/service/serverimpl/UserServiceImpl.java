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
}
