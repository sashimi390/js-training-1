import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart02";
import instruction from "./instruction.md";

const convertData = (input) => {
  input.sort((a, b) => b.count - a.count);

  const data = [];
  for (let i = 0; i < 20; i++) {
    data.push({ tag: input[i].tag, count: input[i].count });
  }
  return data;
};
//sliceで上位20件を取り出す。
//return input.slice(0, 20);

const Lesson = () => {
  return (
    <LessonPage
      dataUrl="data/qiita-tags.json"
      answerUrl="/answer02"
      convertData={convertData}
      instruction={instruction}
      title="Lesson 02"
      Chart={Chart}
    />
  );
};

export default Lesson;
