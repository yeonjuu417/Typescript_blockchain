const express = require('express')
const app = express();
const PORT = process.env.PORT || 1217; // 0~65535 까지 가능 

//서버를 실행했을때 서버 응답을 출력하고 싶다면 
app.get('/',(req,res) => {
    res.send('파피파닥블로그입니다.')
})

app.listen(PORT, () =>{
    console.log('파피파닥블로그 서버실행중...')
})