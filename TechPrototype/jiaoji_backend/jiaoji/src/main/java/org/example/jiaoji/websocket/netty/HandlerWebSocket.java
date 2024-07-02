package org.example.jiaoji.websocket.netty;

import io.netty.channel.Channel;
import io.netty.channel.ChannelHandler;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.handler.codec.http.websocketx.TextWebSocketFrame;
import io.netty.handler.codec.http.websocketx.WebSocketServerProtocolHandler;
import io.netty.util.Attribute;
import io.netty.util.AttributeKey;
import org.example.jiaoji.websocket.ChatContextUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@ChannelHandler.Sharable
public class HandlerWebSocket extends SimpleChannelInboundHandler<TextWebSocketFrame> {

    private static final Logger logger = LoggerFactory.getLogger(HandlerWebSocket.class);

    private ChatContextUtils chatContextUtils = new ChatContextUtils();

    @Override
    protected  void channelRead0(ChannelHandlerContext ctx, TextWebSocketFrame msg) throws Exception {
        Channel channel = ctx.channel();
        String text = msg.text();
        //TODO:处理发过来的message
        if ("heartbeat".equals(text)) {
            // 处理心跳消息
            logger.info("收到心跳消息");
            return;
        }

        Attribute<String> attribute = channel.attr(AttributeKey.valueOf(channel.id().toString()));
        String userId = attribute.get();
        logger.info("收到user{}的消息：{}",userId, msg.text());
        //TODO:保存心跳来查看用户是否有登录
    }

    //通道就绪后调用，一般用户用来做初始化
    @Override
    public void channelActive(ChannelHandlerContext ctx) throws Exception {
        logger.info("有新的连接加入.....");
    }

    @Override
    public void channelInactive(ChannelHandlerContext ctx) throws Exception {
        logger.info("有连接断开.....");
        chatContextUtils.removeContext(ctx.channel());
    }

    //校验token是否正确
    @Override
    public void userEventTriggered(ChannelHandlerContext ctx, Object evt) throws Exception {
        if (evt instanceof WebSocketServerProtocolHandler.HandshakeComplete complete) {
            String url = complete.requestUri();
            String UserId = getUserId(url);
            logger.info("UserId:{}", UserId);
            chatContextUtils.addContext(UserId, ctx.channel());
        }
    }

    public String getUserId(String url) {
        if(!url.contains("?")){
            return null;
        }
        String [] queryParams = url.split("\\?");
        if(queryParams.length != 2){
            return null;
        }
        String [] params = queryParams[1].split("=");
        if(params.length != 2){
            return null;
        }
        return params[1];
    }
}
