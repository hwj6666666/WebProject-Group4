create table user
(
    id       int auto_increment comment 'ID,唯一标识'
        primary key,
    level    int          default 0                                                                              not null comment '等级',
    username varchar(20)  default '交小集'                                                                       not null comment '用户名',
    avatar   varchar(100) default 'path'                                                                         not null comment '头像',
    note     varchar(50)  default '由所有属于集合A且属于集合B的元素所组成的集合，叫做集合A与集合B的交集，记作A∩B。' not null comment '个性签名',
    password varchar(50)                                                                                         not null comment '密码',
    email    varchar(50)                                                                                         not null comment '邮箱',
    constraint email
        unique (email)
)
    comment '用户表';

INSERT INTO jiaoji.user (id, level, username, avatar, note, password, email) VALUES (1, 1, 'Tom', 'path', 'This is Tom', '88888888', '11111111@qq.com');
INSERT INTO jiaoji.user (id, level, username, avatar, note, password, email) VALUES (2, 3, 'Jer', 'path', 'This is Jer', '88888888', '11111112@qq.com');
INSERT INTO jiaoji.user (id, level, username, avatar, note, password, email) VALUES (3, 6, 'Ros', 'path', 'This is Ros', '88888888', '11111113@qq.com');
INSERT INTO jiaoji.user (id, level, username, avatar, note, password, email) VALUES (4, 5, '交小集', 'path', '由所有属于集合A且属于集合B的元素所组成的集合，叫做集合A与集合B的交集，记作A∩B。', '88888888', '11111114@qq.com');
INSERT INTO jiaoji.user (id, level, username, avatar, note, password, email) VALUES (5, 3, 'jack', 'path', 'This is jack', '123456', '11111115@qq.com');
