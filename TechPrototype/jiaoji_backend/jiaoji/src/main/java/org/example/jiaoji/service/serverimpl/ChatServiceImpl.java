package org.example.jiaoji.service.serverimpl;

import java.util.List;
import org.example.jiaoji.mapper.ChatItemMapper;
import org.example.jiaoji.mapper.ChatMapper;
import org.example.jiaoji.pojo.Chat;
import org.example.jiaoji.pojo.ChatItem;
import org.example.jiaoji.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChatServiceImpl implements ChatService {
  @Autowired private ChatMapper chatMapper;
  @Autowired private ChatItemMapper chatItemMapper;

  @Override
  //  public void addChat(Chat chat) {
  //    Integer chatItemId = chatItemMapper.getChatItemId(chat.getSendId(), chat.getReceiveId());
  //    if (chatItemId == null) {
  //      chatItemMapper.addChatItem(
  //          chat.getSendId(), chat.getReceiveId(), chat.getContent(), chat.getTime());
  //      chatItemId = chatItemMapper.getChatItemId(chat.getSendId(), chat.getReceiveId());
  //    } else {
  //      chatItemMapper.updateChatItem(chatItemId, chat.getContent(), chat.getTime());
  //    }
  //    chat.setChatId(chatItemId);
  //    chatMapper.addChat(
  //        chat.getChatId(), chat.getSendId(), chat.getReceiveId(), chat.getContent(),
  // chat.getTime());
  //  }
  public void addChat(Chat chat) {
    //    Integer chatItemId = chatItemMapper.getChatItemId(chat.getSendId(), chat.getReceiveId());
    Integer chatItemId = chat.getChatId();
    System.out.println("chatItemId: " + chatItemId);

    chatItemMapper.updateChatItem(chatItemId, chat.getContent(), chat.getTime());
    Integer receiveId = chatItemMapper.getTheOtherId(chatItemId, chat.getSendId());

    chat.setReceiveId(receiveId);
    chatMapper.addChat(
        chat.getChatId(), chat.getSendId(), chat.getReceiveId(), chat.getContent(), chat.getTime());
  }

  @Override
  public List<Chat> getAllChatWith(Integer id) {
    return chatMapper.getAllChatWith(id);
  }

  @Override
  public List<ChatItem> getAllChatItem(Integer userId) {
    return chatItemMapper.getAllChatItem(userId);
  }

  @Override
  public Integer getTheOtherId(Integer chatItemId, Integer sendId)
  {
    return chatItemMapper.getTheOtherId(chatItemId, sendId);
  }
}
