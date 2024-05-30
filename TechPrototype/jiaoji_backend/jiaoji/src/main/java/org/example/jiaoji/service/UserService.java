package org.example.jiaoji.service;

import org.example.jiaoji.pojo.*;
import java.util.List;
import java.util.Map;

public interface UserService {
    public List<User> SelectAll();

    public User SelectByUserId(Integer id);

    public List<Topic> SelectTopicsById(Integer id);

    public List<Objects> SelectObjectsById(Integer id);

    public List<Remark> SelectRemarksById(Integer id);

    public List<Topic> SelectFlllows(Integer id);
    public User updateUser(Integer id, User user);
    public User updatePsd(Integer id, User user);
    public Map<String, String> getObjectNameAndTopicNameById(Integer objectId);
    public RetType Register(String email, String password);

    public RetType Login(String email, String password);

    public List<User> search(String keyword);
}
