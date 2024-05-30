package org.example.jiaoji.service.serverimpl;

import org.example.jiaoji.mapper.RemarkMapper;
import org.example.jiaoji.pojo.Remark;
import org.example.jiaoji.pojo.User;
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
    public Integer addRemark(Remark data) {
        if (!remarkMapper.selectByUser(data.getUserId(), data.getObjectId()).isEmpty()) return -1;
        RetType ret = new RetType();
        remarkMapper.insert(data);

        ret.setMsg("上传成功");
        ret.setOk(true);
        ret.setData(null);
        return data.getId();
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
    public void changeLike(Integer id, Integer change, Integer uid) {
        remarkMapper.update(id,change);
        if (remarkMapper.getLikeByUid(uid,id).isEmpty()) {
            remarkMapper.insertLikes(uid,id);
        }
        else remarkMapper.updateLikeByUid(uid,id);
    }

    @Override
    public void deleteRemark(Integer id) {
        remarkMapper.delete(id);
    }

    @Override
    public List<User> getAllUser() {
        return remarkMapper.getAllUSer();
    }

    @Override
    public Boolean isLike(Integer remarkId, Integer uid) {
        if (remarkMapper.getLikeByUid(uid,remarkId).isEmpty()) {return false;}
        else return remarkMapper.getLikeByUid(uid, remarkId).get(0).getLiked();
    }
}