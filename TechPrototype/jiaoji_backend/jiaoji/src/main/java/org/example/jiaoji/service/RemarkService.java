package org.example.jiaoji.service;

import java.util.List;

import org.example.jiaoji.pojo.Remark;
import org.example.jiaoji.pojo.RetType;

public interface RemarkService {

    public RetType addRemark(Remark data);

    public List<Remark> SelectByObject(Integer objectId);

    public List<Remark> SelectById(Integer id);

    public void changeLike(Integer id, Integer change);

    public void deleteRemark(Integer id);
}
