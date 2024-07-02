create table chat
(
    chat_id    int          not null,
    send_id    int          not null,
    receive_id int          not null,
    content    varchar(500) not null,
    time       datetime     null,
    constraint chat_chat_item_id_fk
        foreign key (chat_id) references chat_item (id)
            on update cascade on delete cascade
);

INSERT INTO jiaoji.chat (chat_id, send_id, receive_id, content, time) VALUES (4, 1, 2, '1to2', '2024-07-01 16:21:24');
INSERT INTO jiaoji.chat (chat_id, send_id, receive_id, content, time) VALUES (5, 1, 3, '1to3', '2024-07-01 16:21:34');
INSERT INTO jiaoji.chat (chat_id, send_id, receive_id, content, time) VALUES (4, 2, 1, '2to1', '2024-07-01 16:21:48');
INSERT INTO jiaoji.chat (chat_id, send_id, receive_id, content, time) VALUES (6, 2, 3, '2to3', '2024-07-01 16:21:56');
INSERT INTO jiaoji.chat (chat_id, send_id, receive_id, content, time) VALUES (5, 3, 1, '3to1', '2024-07-01 16:22:07');
INSERT INTO jiaoji.chat (chat_id, send_id, receive_id, content, time) VALUES (6, 3, 2, '3to2', '2024-07-01 16:22:14');
INSERT INTO jiaoji.chat (chat_id, send_id, receive_id, content, time) VALUES (4, 1, 1, 'nihaoyahui    @Select("SELECT receive_id FROM chat WHERE chat_id=#{chatId} AND send_id=#{sendId}")
  Integer getTheOtherId(Integer chatId, Integer sendId);
', '2024-07-02 11:02:39');
INSERT INTO jiaoji.chat (chat_id, send_id, receive_id, content, time) VALUES (4, 1, 1, 'nihao', '2024-07-02 11:04:58');
INSERT INTO jiaoji.chat (chat_id, send_id, receive_id, content, time) VALUES (4, 1, 1, 'nihao', '2024-07-02 11:05:16');
INSERT INTO jiaoji.chat (chat_id, send_id, receive_id, content, time) VALUES (4, 1, 1, '😅😅😅😅😅', '2024-07-02 11:05:50');
INSERT INTO jiaoji.chat (chat_id, send_id, receive_id, content, time) VALUES (4, 1, 1, 'shazi ', '2024-07-02 11:07:06');
INSERT INTO jiaoji.chat (chat_id, send_id, receive_id, content, time) VALUES (4, 1, 1, 'niaho', '2024-07-02 11:07:24');
INSERT INTO jiaoji.chat (chat_id, send_id, receive_id, content, time) VALUES (5, 1, 1, '98743', '2024-07-02 11:24:09');
INSERT INTO jiaoji.chat (chat_id, send_id, receive_id, content, time) VALUES (4, 1, 1, 'huwenjie', '2024-07-02 13:38:53');
INSERT INTO jiaoji.chat (chat_id, send_id, receive_id, content, time) VALUES (4, 1, 1, 'nihao ', '2024-07-02 13:42:49');
INSERT INTO jiaoji.chat (chat_id, send_id, receive_id, content, time) VALUES (5, 1, 1, '66666', '2024-07-02 13:43:06');
INSERT INTO jiaoji.chat (chat_id, send_id, receive_id, content, time) VALUES (4, 1, 1, 'ty082ujrtioputjiewut839p24jg;wowjp5tup9wtowi;stjw;4uj89wput0[0sig[9uj;hgss.gnjafhup49j;anfjhngljaehprgj;ksrhru;r;eugra;ohta', '2024-07-02 13:45:45');
INSERT INTO jiaoji.chat (chat_id, send_id, receive_id, content, time) VALUES (5, 1, 1, 'mihayo', '2024-07-02 14:09:45');
INSERT INTO jiaoji.chat (chat_id, send_id, receive_id, content, time) VALUES (4, 1, 1, 'shabo', '2024-07-02 14:09:56');
INSERT INTO jiaoji.chat (chat_id, send_id, receive_id, content, time) VALUES (4, 1, 1, 'shabo', '2024-07-02 14:10:09');
INSERT INTO jiaoji.chat (chat_id, send_id, receive_id, content, time) VALUES (4, 1, 1, 'You', '2024-07-02 14:10:18');
INSERT INTO jiaoji.chat (chat_id, send_id, receive_id, content, time) VALUES (4, 3, 2, 'nihao,woshijioaxioaji', '2024-07-02 14:41:35');
INSERT INTO jiaoji.chat (chat_id, send_id, receive_id, content, time) VALUES (4, 3, 2, 'nihao', '2024-07-02 15:10:52');
INSERT INTO jiaoji.chat (chat_id, send_id, receive_id, content, time) VALUES (4, 3, 2, 'enter', '2024-07-02 15:11:08');
