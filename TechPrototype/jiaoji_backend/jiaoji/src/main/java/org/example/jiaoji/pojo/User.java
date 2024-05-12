package org.example.jiaoji.pojo;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private Integer id;
    private Integer level;
    private String username;
    private String avatar;
    private String note;
    private String password;
}
