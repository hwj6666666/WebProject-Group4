package org.example.jiaoji;

import org.example.jiaoji.controller.TopicController;
import org.example.jiaoji.pojo.Topic;
import org.example.jiaoji.service.TopicService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

public class TopicControllerTest {

    @InjectMocks
    TopicController topicController;

    @Mock
    TopicService topicService;

    @BeforeEach
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testGetTopic() {
        Topic topic1 = new Topic();
        Topic topic2 = new Topic();
        List<Topic> topics = Arrays.asList(topic1, topic2);

        when(topicService.SelectAll()).thenReturn(topics);

        ResponseEntity<List<Topic>> response = topicController.getTopic(0);

        assertEquals(200, response.getStatusCodeValue());
        assertEquals(2, response.getBody().size());
    }

    @Test
    public void testGetOneTopic() {
        Topic topic = new Topic();
        topic.setId(1);
        topic.setClassId(1);
        topic.setUserId(1);
        topic.setTitle("test");
        topic.setPicture("test");
        topic.setIntroduction("test");
        topic.setHot(100);
        topic.setPublicTime(null);
        topic.setBase64("test");
        when(topicService.SelectById(1)).thenReturn(topic);
        ResponseEntity<Topic> response = topicController.getOneTopic(1);
        assertEquals(200, response.getStatusCodeValue());
        assertEquals(1, response.getBody().getId());
        assertEquals(1, response.getBody().getClassId());
        assertEquals(1, response.getBody().getUserId());
        assertEquals("test", response.getBody().getTitle());
        assertEquals("test", response.getBody().getPicture());
        assertEquals("test", response.getBody().getIntroduction());
        assertEquals(100, response.getBody().getHot());
        assertEquals(null, response.getBody().getPublicTime());
        assertEquals("test", response.getBody().getBase64());
    }

    @Test
    public void testInsert() {
        Topic topic = new Topic();
        topic.setId(1);
        topic.setClassId(1);
        topic.setUserId(1);
        topic.setTitle("test");
        topic.setPicture("test");
        topic.setIntroduction("test");
        topic.setHot(100);
        topic.setPublicTime(null);
        topic.setBase64("test");
        when(topicService.insertTopic(topic)).thenReturn(1);
        Integer response = topicController.insert(topic);
        assertEquals(1, response);
    }

    @Test
    public void testSearch() {
        Topic topic1 = new Topic();
        Topic topic2 = new Topic();
        List<Topic> topics = Arrays.asList(topic1, topic2);
        when(topicService.search("test")).thenReturn(topics);
        ResponseEntity<List<Topic>> response = topicController.search("test");
        assertEquals(200, response.getStatusCodeValue());
        assertEquals(2, response.getBody().size());
    }
}