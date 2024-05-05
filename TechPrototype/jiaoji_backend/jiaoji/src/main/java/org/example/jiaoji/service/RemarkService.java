package org.example.jiaoji.service;

import org.example.jiaoji.pojo.RetType;
import org.example.jiaoji.pojo.Remark;

import java.util.List;

public interface RemarkService {

    public RetType addRemark(Remark data);

    public List<Remark> SelectByObject(Integer objectId);

    public List<Remark> SelectById(Integer id);
}
