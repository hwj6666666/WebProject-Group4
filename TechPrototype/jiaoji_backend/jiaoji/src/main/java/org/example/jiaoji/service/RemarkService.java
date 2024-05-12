package org.example.jiaoji.service;

import java.util.List;

import org.example.jiaoji.pojo.Remark;
import org.example.jiaoji.pojo.RetType;
import org.example.jiaoji.pojo.User;

public interface RemarkService {

    public Integer addRemark(Remark data);

    public List<Remark> SelectByObject(Integer objectId);

    public List<Remark> SelectById(Integer id);

    public void changeLike(Integer id, Integer change);

    public void deleteRemark(Integer id);

    public List<User> getAllUser();
}
