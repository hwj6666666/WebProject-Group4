package org.example.jiaoji.service;

import org.example.jiaoji.pojo.Remark;
import org.example.jiaoji.pojo.RetType;
import org.example.jiaoji.pojo.Topic;
import org.example.jiaoji.pojo.User;

import java.util.List;

public interface UserService {

    public List<User> SelectAll();
    public List<User> SelectByUserId(Integer id);
    public List<Integer> SelectTopicsById(Integer id);
    public List<Integer> SelectObjectsById(Integer id);
    public List<Integer> SelectRemarksById(Integer id);
//    public RetType Login(String username, String password);

}
