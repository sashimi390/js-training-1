import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart04";
import instruction from "./instruction.md";

const convertData = (input) => {
  const map = input.map(({ species }) => species);
  const set = new Set(map);
  const varieties = Array.from(set);
  return varieties.map((varieties) => {
    return {
      id: varieties,
      data: input.filter((data) => data.species === varieties).map(({ sepalLength: x, petalWidth: y }) => ({ x, y })),
    };
  });
};

/**const convertData = (input) => {

  const varieties = Array.from(new Set(input.map(({ species }) => species)));
  return varieties.map((varieties) => {
    return {
      id: varieties,
      data: input.filter((data) => data.species === varieties).map(({ sepalLength: x, petalWidth: y }) => ({ x, y })),
    };
  });
};*/


const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer04"
      dataUrl="data/iris.json"
      convertData={convertData}
      instruction={instruction}
      title="Lesson 04"
      Chart={Chart}
    />
  );
};

export default Lesson;
