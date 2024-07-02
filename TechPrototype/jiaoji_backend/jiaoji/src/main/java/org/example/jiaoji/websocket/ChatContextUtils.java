package org.example.jiaoji.websocket;

import io.netty.channel.Channel;
import io.netty.handler.codec.http.websocketx.TextWebSocketFrame;
import io.netty.util.Attribute;
import io.netty.util.AttributeKey;
import org.example.jiaoji.websocket.netty.NettyWebSocketStarter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.socket.TextMessage;

import java.util.concurrent.ConcurrentHashMap;

public class ChatContextUtils {
    private static final Logger logger = LoggerFactory.getLogger(ChatContextUtils.class);

    private static final ConcurrentHashMap<String, Channel> USER_CONTEXT_MAP = new ConcurrentHashMap<>();

    public void addContext(String userId, Channel channel){
        String channelId = channel.id().toString();
        AttributeKey attributeKey = null;
        logger.info("channelId:{}", channelId);
        if(!AttributeKey.exists(channelId)){
            attributeKey = AttributeKey.newInstance(channelId);
        }else{
            attributeKey = AttributeKey.valueOf(channelId);
        }
        channel.attr(attributeKey).set(userId);
        USER_CONTEXT_MAP.put(userId, channel);
        //TODO:使用接口给用户发消息
        //查数据,并合理包装
        sendMessage(userId, "这是一个测试，看到代表成功了");
    }

    public static void sendMessage(String UserId, String Message){
        Channel channel = USER_CONTEXT_MAP.get(UserId);
        if(channel == null){
            return;
        }
//        channel.writeAndFlush(new TextWebSocketFrame(JsonUtils.convert));
        channel.writeAndFlush(new TextWebSocketFrame(Message));
    }

    public void removeContext(Channel channel){
        Attribute<String> attribute = channel.attr(AttributeKey.valueOf(channel.id().toString()));
        String userId = attribute.get();
        if(userId != null){
            USER_CONTEXT_MAP.remove(userId);
        }
    }
}
