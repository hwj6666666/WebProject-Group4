import Topic from "@/components/topic"
import Header from "@/pages/header";
import { MySider } from "./components/sider";

function App() {

const topics = [
    {
      title: '交大哪个餐饮大楼你去得最多？',
      hotComments: ["第一食堂", "第二食堂","第三食堂"],
      heat: 100,
    },
    {
      title: '疯狂星期四你最喜欢点哪个？',
      hotComments: ["蛋挞","蜜汁全鸡","汉堡"],
      heat: 200,
    },
    // 更多话题...
  ];

  const handleTopicClick = (topic) => {
    console.log(`Topic clicked: ${topic.title}`);
  };


  return (
    <div className="App">
      <Header />

      {topics.map((topic, index) => (
        <Topic key={index} topic={topic} onTopicClick={() => handleTopicClick(topic)} />
      ))}

      <MySider/>
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
