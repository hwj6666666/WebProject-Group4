# **JiaoJi 项目**

这是上海交通大学软件工程原理与实践课程第四小组的项目

## topicButton:

+ 增加上传文件功能在form表单
+ 上传同时可选择分类，默认其他
+ 文件上传为base64编码

## 在component增加了UploadButton模块

## topicSider:

+ 通过redux与useEffect获取与更新topic与选定的分类

## 由于分类通过后端获取，故删掉了store文件的topickey.js

## 为了获取后端内容，增加了api文件夹与util中的request.js,作用类似于fetch

# spring

## pojo

一些简单类，其中retType用于对返回结果的统一封装

## mapper

用于于数据库交互

## service

最外层文件是功能的的接口，serviceImpl是对接口的实现

## controller

获取前端请求，返回处理结果



# 一些踩过的坑

+ controller记得加@CrossOrigin注解，解决跨域问题
+ 若只用mapper实现与数据库交互，记得删掉相应的xml映射文件，不然会报错
+ 可以在application.properties加上myBatis的数据库下划线与Java驼峰的映射，开启后数据库的xx_id与java的xxId可一一对应

~~~java
mybatis.configuration.map-underscore-to-camel-case=true
~~~

+ 由于object与class与java的关键字重合，因此处理时要慎重
