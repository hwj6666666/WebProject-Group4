package org.example.jiaoji.service;

import jakarta.persistence.criteria.CriteriaBuilder;
import org.example.jiaoji.pojo.Chat;
import org.example.jiaoji.pojo.ChatItem;

import java.util.List;

public interface ChatService {

    void addChat(Chat chat);

//    List<Chat> getAllChatWith(Integer sendId, Integer receiveId);
    List<Chat> getAllChatWith(Integer id);

    List<ChatItem> getAllChatItem(Integer userId);

    Integer getTheOtherId(Integer chatItemId, Integer sendId);
}
