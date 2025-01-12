import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart01";
import instruction from "./instruction.md";

const convertData = (input) => {
  const arr = [];
  for (let i = 0; i < input.length; i++) {
    arr.push({ name: input[i][0], count: input[i][1] })
  }
  return arr;

};
/* const convertData = (input) => {
  const data = new Array();
  for (const [item1, item2] of input) {
    data.push({ name: item1, count: item2 });
  }
  return data;
}; */

/* const convertData = (input) => {
  const data = new Array(input.length);
  for (const item of input) {
    data.push({ name: item[0], count: item[1] })
  }
  return data;

}; */

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer01"
      convertData={convertData}
      dataUrl="data/chs-capacity.json"
      instruction={instruction}
      title="Lesson 01"
      Chart={Chart}
    />
  );
};

export default Lesson;
