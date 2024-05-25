package org.example.jiaoji.service.serverimpl;

import org.example.jiaoji.mapper.UserMapper;
import org.example.jiaoji.mapper.ObjectMapper;
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

    public User SelectByUserId(Integer id) {
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
    public double getAveScore(Integer id) {
        List<Remark> remarks = userMapper.selectAllRemarks(id);
        if (remarks != null && remarks.size() == 0) {
            return 0;
        }
        Integer length = remarks.size();
        double scores = 0;
        for (Remark remark : remarks) {
            scores += remark.getScore();
        }
        return scores / length;
    }

    public String getHottestRemark(Integer id) {
        List<Remark> remarks = userMapper.selectAllRemarks(id);
        Integer likes = 0;
        String hottestRemark = "";
        for (Remark remark : remarks) {
            if (remark.getLike() > likes) {
                likes = remark.getLike();
                hottestRemark = remark.getContent();
            }
        }
        return hottestRemark;
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

    public List<User> search(String keyword){
        keyword="%"+keyword+"%";
        return userMapper.search(keyword);
    }
}
