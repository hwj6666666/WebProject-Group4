package org.example.jiaoji.service.serverimpl;

import org.example.jiaoji.mapper.RemarkMapper;
import org.example.jiaoji.pojo.Remark;
import org.example.jiaoji.pojo.RetType;
import org.example.jiaoji.service.RemarkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RemarkServiceImpl implements RemarkService {
    @Autowired
    private RemarkMapper remarkMapper;

    @Override
    public RetType addRemark(Remark data) {
        RetType ret = new RetType();
//        Remark remark = new Remark();
//        remark.setId(data.getId());
//        remark.setContent(data.getContent());
//        remark.setLike(data.getLike());
//        remark.setUserId(data.getUserId());
//        remark.setObjectId(data.getObjectId());
//        remark.setPublishTime(data.getPublishTime());
//        remark.setScore(data.getScore());
//        remarkMapper.insert(remark);
        remarkMapper.insert(data);

        ret.setMsg("上传成功");
        ret.setOk(true);
        ret.setData(null);
        return ret;
    }

    @Override
    public List<Remark> SelectByObject(Integer objectId) {
        return remarkMapper.selectByObject(objectId);
    }

    @Override
    public List<Remark> SelectById(Integer id) {
        return remarkMapper.selectById(id);
    }

    @Override
    public void changeLike(Integer id, Integer change) {
        remarkMapper.update(id,change);
    }

    @Override
    public void deleteRemark(Integer id) {
        remarkMapper.delete(id);
    }
}