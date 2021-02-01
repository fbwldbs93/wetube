/*-----------------
    expressjs.com 가이드에서 가져온 코드
-------------------*/
const express = require('express') //node_modules에서 express를 가져오는 작업
/*
    require
    - node module을 어딘가에서 가져오는것
    - 위의 경우는 "express"라는 폴더를 내 파일들 속에서 찾으려고 하는 것
    - 만일 못찾으면 그 다음엔 node_modules 안에서 찾으려고 함
    - node_modules 를 보면 express라는 폴더가 있음
    - express 폴더 안에는 내가 생성했던 index.js 가 있음
*/ 

const PORT = 4000;

const app = express()
//const 로 선언한 변수 app에 express 를 실행해서 담은 것


function handleListening(){
    console.log(`Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);


/*
    총정리
    1. express 호출
    2. node_modules에서 import 부터 하고
    3. 그리고 실행하기 (앱 생성)
    4. app에게 "const PORT=4000"을 listen 하라고 명령
    5. listening 할때 handleListening이라는 함수를 호출
 */

 