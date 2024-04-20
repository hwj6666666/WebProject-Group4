package org.example.jiaoji.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
//针对对象的直接评论
public class Remark {
    private Integer id;
    private Integer userId;
    private Integer objectId;

    private String content;
    private Integer like;
    private Integer score;
    private LocalDateTime publicTime;
}
