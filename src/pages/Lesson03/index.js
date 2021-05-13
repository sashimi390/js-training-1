import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart03";
import instruction from "./instruction.md";

const convertData = (input) => {
  const data = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i].gender === "男性") {
      data.push({ gender: input[i].gender, y: input[i].y, x: input[i].x });
    }
  }
  return data;
  //return input.filter(data => data.gender === "男性"); 
};


//dataの部分は変数名何にしても大丈夫？
const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer03"
      dataUrl="data/size-and-weight.json"
      convertData={(input) => {
        return [
          {
            id: "男性",
            data: convertData(input),
          },
        ];
      }}
      instruction={instruction}
      title="Lesson 03"
      Chart={Chart}
    />
  );
};

export default Lesson;
