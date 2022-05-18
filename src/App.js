/* eslint-disable */

import { useState } from "react";
import "./App.css";

function App() {
  let post = "dd";

  //a : 보관한 자료, b:state변경을 도와주는 함수

  let [title1, title1_] = useState("남자코트추천");
  let [title2, title2_] = useState("강남 우동맛집");
  let [title3, title3_] = useState("파이썬");
  let [글제목, 글제목변경] = useState(["남자코트추천", "우동맛집", "파이썬"]);

  let [따봉, 따봉변경] = useState(0);

  //변수가 있는데 state를 쓰는 이유
  //html에 자동 재렌더링됨 : state (자주 변경이 일어나는 부분만!!!)

  //{} : 데이터 바인딩

  //Destructuring 문법 - array안에 있는 변수들을 각각의 변수로 분리시켜주는 문법
  let num = [1, 2];
  let a = num[0];
  let [c, d] = [1, 2];

  function 함수() {
    console.log(1);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      <button onClick={() => {}}>가나다</button>
      <button
        onClick={() => {
          let copy = [...글제목]; //새로운 주소값을 할당해주세요 글제목!=copy
          copy[0] = "여자코트 추천";
          글제목변경(copy);
        }}
      >
        글수정
      </button>
      <div className="list">
        <h4>
          {글제목[0]}{" "}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>{" "}
          {따봉}
        </h4>
        <p>5월 16일 발행</p>
      </div>

      <div className="list">
        <h4>
          {글제목[1]} <span onClick={함수}>👍</span> {따봉}
        </h4>
        <p>5월 16일 발행</p>
      </div>

      <div className="list">
        <h4>
          {글제목[2]} <span onClick={함수}>👍</span> {따봉}
        </h4>
        <p>5월 16일 발행</p>
      </div>

      <h4 style={{ color: "red", fontSize: "16px" }}> {post} </h4>

      <Modal />
    </div>
  );
}
function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
