create table user
(
    id       int auto_increment comment 'ID,唯一标识'
        primary key,
    username varchar(20)  not null comment '用户名',
    avatar   varchar(100) not null comment '头像',
    note     varchar(50)  null comment '个性签名',
    constraint username
        unique (username)
)
    comment '用户表';

INSERT INTO jiaoji.user (id, username, avatar, note) VALUES (1, 'Tom', 'path', 'This is Tom');
INSERT INTO jiaoji.user (id, username, avatar, note) VALUES (2, 'Jer', 'path', 'This is Jer');
INSERT INTO jiaoji.user (id, username, avatar, note) VALUES (3, 'Ros', 'path', 'This is Ros');
