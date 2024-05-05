package org.example.jiaoji;

import org.example.jiaoji.mapper.TopicMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class JiaojiApplicationTests {

    @Autowired
    private TopicMapper topicMapper;
    @Test
    void contextLoads() {
        System.out.println(topicMapper.selectAll());
    }
}
