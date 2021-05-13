import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart06";
import instruction from "./instruction.md";

const convertData = (input) => {
  const data = [];
  const colors = {
    男性: "blue",
    女性: "red"
  }
  for (let i = 0; i < input.length; i++) {
    data.push({
      color: colors[input[i].gender],
      gender: input[i].gender,
      bmi: input[i].x / (input[i].y / 100) ** 2,
      weight: input[i].x,
      height: input[i].y
    });
  }
  return data;
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer06"
      convertData={convertData}
      dataUrl="data/size-and-weight.json"
      instruction={instruction}
      title="Lesson 06"
      Chart={Chart}
    />
  );
};

export default Lesson;
