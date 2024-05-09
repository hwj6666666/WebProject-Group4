create table object
(
    id          int auto_increment comment 'Primary Key'
        primary key,
    title       varchar(255)                                    not null,
    topic_id    int           default 0                         not null comment '前端分类id',
    user_id     int                                             not null comment '创建用户id',
    picture     mediumtext                                      not null,
    description varchar(3000) default '作者太懒了，并没有写简介' null,
    constraint id
        unique (id),
    constraint object_topic
        foreign key (topic_id) references topic (id),
    constraint object_user
        foreign key (user_id) references user (id)
);

create index title
    on object (title);

INSERT INTO jiaoji.object (id, title, topic_id, user_id, picture, description) VALUES (1, '一餐', 1, 1, '0', '一餐位于学生公寓西一区北面，距离包玉刚图书馆、上中下院教学楼较近。由于靠近教学楼，一餐在工作日饭点人流量很大，早餐种类丰富，正餐时段一楼包含川味窗口、陕西美食、养生锅（推荐!飘香鸡锅不错）、五芳斋、糖水粥铺等窗口，还开设了低脂、低糖、少油、无碘盐等特殊窗口。二楼则是教工餐厅和自选餐厅。在一餐附近有清真餐厅、麦当劳、Timo咖啡、思源面包、蔬果每日水果店等，十分便利。');
INSERT INTO jiaoji.object (id, title, topic_id, user_id, picture, description) VALUES (2, '二餐', 1, 2, '0', '位于东一区与东二区宿舍楼之间，距离东上中下院较近，和四餐并列为校内最受欢迎的餐厅。一楼分为小吃广场和西餐厅，小吃广场有吉祥馄饨、石锅菜、辛拉面、糖水粥铺、麻辣烫、酸菜鱼等档口，西餐厅有奶茶店、烤盘饭、木桶饭、韩式拌饭等西式点心。二楼有教工食堂和大众餐厅，大众餐厅往里走是新疆餐厅，出售烤羊肉串、牛奶饭等人气食品，可以点菜，秋冬还有羊蝎子汤，爱吃新疆菜的同学不要错过。三楼的绿园餐厅人气很旺，自选麻辣香锅在饭点要等上半个小时，除此之外，绿园也有铁板烧和小碗菜档口，消费会比二楼的稍高一些。');
INSERT INTO jiaoji.object (id, title, topic_id, user_id, picture, description) VALUES (3, '三餐', 1, 3, '0', '三餐在东三宿舍区对面，临近捭阖塘。一楼是学生餐厅，提供木桶饭、各类点心，还开设了低脂、低糖、少油、无碘盐等特殊窗口。二楼是小吃广场，黄焖鸡、烤肉饭、麻辣香锅、铁板烧等应有尽有。三餐侧翼有便民一条街——捭阖坊以及瑞幸咖啡，闲暇时买杯咖啡去池边赏荷也是不错的选择。');
INSERT INTO jiaoji.object (id, title, topic_id, user_id, picture, description) VALUES (4, '下院', 2, 1, '0', '离一餐最近的教学楼，靠近包图');
INSERT INTO jiaoji.object (id, title, topic_id, user_id, picture, description) VALUES (5, '中院', 2, 2, '0', '夹在中间的教学楼');
INSERT INTO jiaoji.object (id, title, topic_id, user_id, picture, description) VALUES (6, '上院', 2, 3, '0', '离思源门最近的教学楼，很方便出去，而且离光体很近，上完上一节课可以直接去体育课');
INSERT INTO jiaoji.object (id, title, topic_id, user_id, picture, description) VALUES (7, '鱼香肉丝', 3, 1, '0', '鱼香肉丝色泽艳丽，口感爽脆，香气扑鼻，味道鲜美。它烹制简单，是家常菜中的一道常见菜肴，备受人们喜爱。无论是在家庭聚餐还是餐馆就餐，鱼香肉丝都是一道受欢迎的美食选择。其酸甜辣的口味不仅开胃，而且配菜丰富，营养均衡，深受各地食客的喜爱。');
INSERT INTO jiaoji.object (id, title, topic_id, user_id, picture, description) VALUES (8, '狮子头', 3, 2, '0', '狮子头是中国传统菜系中的一道经典菜肴，起源于江苏一带，尤其在苏菜中颇受欢迎。这道菜以猪肉为主料，将肉末搅拌成丸子状，再以姜、葱、料酒等调味品调制而成。形似狮子头的圆形状，因此得名。作为一道家常菜，狮子头不仅美味可口，而且营养丰富，富含蛋白质和各种微量元素，受到了广大食客的喜爱。它常常出现在家庭聚餐、节庆宴席等场合，并成为了许多人心中的美食记忆之一。');
INSERT INTO jiaoji.object (id, title, topic_id, user_id, picture, description) VALUES (9, '羊肉串', 3, 3, '0', '羊肉串是一道源自中国西北地区的传统美食，也是中国烧烤文化中的重要组成部分。它以选用优质羊肉为原料，经过腌制、串烤而成。通常，羊肉会被切成小块，串在竹签或金属签上，然后在火上烤制至金黄酥香。羊肉串的烤制技巧是关键所在，需要掌握火候，使得肉质鲜嫩，口感香醇。烤制时可以加入一些香料和调味料，如孜然粉、辣椒粉、蒜末等，使得羊肉串更加美味可口。');
INSERT INTO jiaoji.object (id, title, topic_id, user_id, picture, description) VALUES (10, '工程学导论', 4, 1, '0', '《工程学导论》是一门旨在介绍工程学基础知识、原理和方法的课程。它旨在为学生提供对工程学领域的广泛了解，帮助他们建立起对工程学科的整体认识和理解。在这门课程中，学生通常会学习到工程学的历史背景、基本概念、工程伦理、工程设计流程等内容。课程会涉及到各个工程学科的基础知识，如土木工程、机械工程、电气工程等，以及工程实践中常见的工具、技术和方法。');
INSERT INTO jiaoji.object (id, title, topic_id, user_id, picture, description) VALUES (11, '软件工程原理与实践', 4, 2, '0', '《软件工程基本原理与实践》是一门旨在介绍软件工程领域核心概念、方法和技术，并将其应用于实际软件开发项目中的课程或教材。这门课程旨在帮助学生理解软件工程的基本原理，并将其运用到实践中，以提高软件开发过程的效率、质量和可靠性。在《软件工程基本原理与实践》课程中，学生将学习到软件工程领域的基本概念，如需求工程、软件设计、编码与实现、软件测试、软件部署与维护等内容。同时，课程也会通过实际项目案例或实践性作业，帮助学生将所学理论知识应用到实际软件开发过程中去。');
INSERT INTO jiaoji.object (id, title, topic_id, user_id, picture, description) VALUES (12, '大物实验', 4, 3, '0', '大物实验通常是指大学物理实验课程中的一部分，旨在通过实验手段来加深学生对物理学理论知识的理解，并培养其实验设计、数据处理、实验操作和报告撰写等方面的能力。这门实验课程通常涵盖了经典物理学的各个领域，如力学、电磁学、热学、光学等，学生将通过实际操作来验证和探究书本知识中的物理现象和规律。');
INSERT INTO jiaoji.object (id, title, topic_id, user_id, picture, description) VALUES (13, '深入理解计算机系统', 5, 1, '0', '该书以计算机系统的底层原理为核心，全面介绍了计算机系统的各个方面，包括计算机硬件、操作系统、编译器和网络等。与其他计算机科学教材不同，该书强调了从程序员的角度出发，探讨计算机系统的工作原理和设计思想，帮助读者深入理解计算机系统的运行机制和内部结构。');
INSERT INTO jiaoji.object (id, title, topic_id, user_id, picture, description) VALUES (14, 'C++Prime', 5, 2, '0', '《C++ Primer》全面而深入地介绍了C++编程语言的各个方面，从基础知识到高级技术，涵盖了C++语法、面向对象编程、模板、标准库等内容。这本书以清晰易懂的语言和丰富的示例，帮助读者逐步掌握C++编程的核心概念和技巧，从而成为一名熟练的C++程序员。');
INSERT INTO jiaoji.object (id, title, topic_id, user_id, picture, description) VALUES (15, '牧羊少年的奇幻之旅', 5, 3, '0', '《牧羊少年奇幻之旅》是一部由巴西作家保罗·柯艾略（Paulo Coelho）所著的小说，于1988年出版。这部小说以其深刻的寓意和启发性的故事情节而闻名于世，成为了全球畅销书之一。');
INSERT INTO jiaoji.object (id, title, topic_id, user_id, picture, description) VALUES (16, '思源湖', 6, 1, '0', '思源湖因其清澈的湖水、秀丽的湖光山色和丰富的历史文化而闻名。湖水清澈见底，常年涵养着丰富的水生植物和鱼类，是休闲垂钓和观赏游玩的好去处。湖畔的景色四季变幻，春季碧波荡漾，夏季绿树成荫，秋季金风送爽，冬季冰雪皑皑，各有风情。');
INSERT INTO jiaoji.object (id, title, topic_id, user_id, picture, description) VALUES (17, '子衿街', 6, 2, '0', '子衿街一楼现设快递中心，1个多功能排练厅，1个演奏厅，1个器乐厅以及若干琴房，二楼设若干学生原创文化工作室，2个会议室以及小剧场，为交大师生开展校园文化活动提供了阵地。子衿街上的首批学生原创文化工作室共计8个，分别是vision美术协会、笛箫协会、钢琴协会、国学社、吉他协会、三棋联合会、摄影协会、书画篆刻协会，这些学生原创文化工作室错落有致分布在一、二楼区域，工作室的成立助力学生社团的蓬勃发展，将极大地丰富校园文化生活，成为交大师生陶冶情操的好去处。');
INSERT INTO jiaoji.object (id, title, topic_id, user_id, picture, description) VALUES (18, '霍体', 6, 3, '0', '霍英东体育中心，于2007年7月在上海交大闵行校区建成启用，是一座功能全面，设施完备，全面开放的综合性体育馆。建筑面积19950平方米，座位7206座，建筑高度29.341米，可举办各类大中型比赛和文娱活动，是上海交通大学标志性建筑之一。除了用于篮球比赛，学校最重大的活动也放在这里');
INSERT INTO jiaoji.object (id, title, topic_id, user_id, picture, description) VALUES (19, '《晴天》', 7, 1, '0', '《晴天》是一首由中国著名音乐人周杰伦创作的歌曲，收录于他的专辑《叶惠美》中，于2003年发行。这首歌曲以流行音乐为基调，融合了电子、流行摇滚等多种音乐风格，以其动感的旋律和深情的歌词而备受欢迎。');
INSERT INTO jiaoji.object (id, title, topic_id, user_id, picture, description) VALUES (20, '《天外来物》', 7, 2, '0', '《天外来物》是中国流行歌手薛之谦演唱的一首歌曲，收录于他的专辑《渡》中，于2020年发行。这首歌曲由薛之谦亲自作词作曲，并展现了他独特的音乐风格和情感表达。《天外来物》的歌词充满了诗意和想象力，用富有幻想的语言描绘了一个充满未知和神秘的世界。歌曲通过对“天外来物”的幻想和追求，表达了对爱情的向往和美好的期待，以及对未来的希冀和憧憬。');
INSERT INTO jiaoji.object (id, title, topic_id, user_id, picture, description) VALUES (21, '《waiting for love》', 7, 3, '0', '《Waiting for Love》是瑞典音乐制作人Avicii（艾维奇）的一首歌曲，由Avicii与Martin Garrix和Simon Aldred共同创作，于2015年发行。这首歌曲以其轻快的旋律和动感的节奏而备受欢迎，成为了当年夏季的流行单曲之一。');
INSERT INTO jiaoji.object (id, title, topic_id, user_id, picture, description) VALUES (22, '肯德基', 8, 1, '0', '肯德基（KFC）是一家全球知名的连锁快餐品牌，专注于提供炸鸡和其他快餐美食。它由哈兰·山德士（Harland Sanders）创立于1952年，总部位于美国肯塔基州路易斯维尔市。如今，肯德基已经成为了全球最大的连锁快餐企业之一，业务遍布全球100多个国家和地区。');
INSERT INTO jiaoji.object (id, title, topic_id, user_id, picture, description) VALUES (23, '麦当劳', 8, 2, '0', '麦当劳（McDonald\'s）是全球最大的连锁快餐企业之一，总部位于美国伊利诺伊州芝加哥郊区。该公司于1940年由理查德·麦克唐纳德（Richard McDonald）和莫里斯·麦克唐纳德（Maurice McDonald）兄弟创立，起初是一家以速食汉堡为主打产品的小餐馆。如今，麦当劳已经发展成为了全球领先的快餐连锁企业，在全球范围内拥有数以万计的门店。');
INSERT INTO jiaoji.object (id, title, topic_id, user_id, picture, description) VALUES (24, '尊宝披萨', 8, 3, '0', '尊宝披萨（ZOOMPIZZA）是一家以披萨为主打产品的连锁快餐品牌。尊宝披萨以其独特的披萨口味和快捷的服务而受到消费者的喜爱。该品牌的创立者们致力于为顾客提供高品质、美味可口的披萨，并通过不断的创新来满足消费者的口味需求。');
INSERT INTO jiaoji.object (id, title, topic_id, user_id, picture, description) VALUES (25, 'b站', 9, 1, '0', '哔哩哔哩（Bilibili）是中国一家知名的在线视频平台，以ACG（动画、漫画、游戏）文化为主打，同时涵盖了各种领域的视频内容，如生活、科技、娱乐等。该平台由徐逸凡等人于2009年创建，旨在为用户提供优质的视频内容和交流分享的平台。');
INSERT INTO jiaoji.object (id, title, topic_id, user_id, picture, description) VALUES (26, 'Youtube', 9, 2, '0', 'YouTube是全球最大的在线视频平台之一，于2005年由三名前PayPal员工创立，隶属于美国科技巨头谷歌旗下。作为一个开放的视频分享平台，YouTube为用户提供了一个广阔的视频内容世界，涵盖了几乎所有领域的视频内容，包括但不限于音乐、娱乐、教育、新闻、时事、科技、美食、生活等。');
INSERT INTO jiaoji.object (id, title, topic_id, user_id, picture, description) VALUES (27, '抖音', 9, 3, '0', '抖音是一款由中国字节跳动公司开发的短视频分享应用，于2016年9月正式上线，迅速在全球范围内获得了巨大成功和普及。作为一款移动应用，抖音以其简单易用的界面和丰富多样的视频内容吸引了亿万用户，尤其受到年轻人的喜爱。');
INSERT INTO jiaoji.object (id, title, topic_id, user_id, picture, description) VALUES (28, '一餐', 2, 3, '28', '?');
