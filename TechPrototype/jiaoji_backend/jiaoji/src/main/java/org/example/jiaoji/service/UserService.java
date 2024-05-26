package org.example.jiaoji.service;

import org.example.jiaoji.pojo.*;
import java.util.List;

public interface UserService {
    public List<User> SelectAll();

    public User SelectByUserId(Integer id);

    public List<Topic> SelectTopicsById(Integer id);

    public List<Objects> SelectObjectsById(Integer id);

    public List<Remark> SelectRemarksById(Integer id);

    public List<Topic> SelectFlllows(Integer id);

    public double getAveScore(Integer id);

    public String getHottestRemark(Integer id);

    public RetType Register(String email, String password);

    public RetType Login(String email, String password);

    public List<User> search(String keyword);
}
