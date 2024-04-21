package org.example.jiaoji.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//针对对象的直接评论

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Object {
    private Integer id;
    private Integer topicId;
    private Integer userId;
    private String title;
    private String description;
    private String picture;

    public Integer getAveScore(){
        return 5;
    }
}

