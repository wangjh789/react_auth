# React_auth

### Server
- MongoDB
- Node.js



### Client
- React.js

## Installation
- Make ```dev.js``` in ```server/config``` dir and paste
```
module.exports = {
    mongoURI:'<Your MongoDB URI>'
}
```

```sh
cd react_auth-master
npm run dev
```
Using 3000 & 5000 port for client, server


## Features

### Server 

- http://localhost:5000/api/users/login
<img width="387" alt="스크린샷 2021-03-17 오후 5 57 46" src="https://user-images.githubusercontent.com/19744909/111442864-27cde000-874c-11eb-8f0a-ddad14691ae4.png">

- http://localhost:5000/api/users/register
<img width="394" alt="스크린샷 2021-03-17 오후 5 49 51" src="https://user-images.githubusercontent.com/19744909/111442620-e2a9ae00-874b-11eb-8e8e-4cb7de432083.png">

- http://localhost:5000/api/users/logout
<img width="389" alt="스크린샷 2021-03-17 오후 6 14 30" src="https://user-images.githubusercontent.com/19744909/111443339-a034a100-874c-11eb-9ddf-ba0e92e88dd2.png">

- http://localhost:5000/api/users/auth
<img width="385" alt="스크린샷 2021-03-17 오후 6 04 52" src="https://user-images.githubusercontent.com/19744909/111442915-35836580-874c-11eb-88c2-9b87adfec303.png">



### Client

/api/users/auth 를 Middleware로써 활용
(login, register 는 유저 브라우저 쿠키에 x_auth 있으면 '/' 로 push)


- http://localhost:3000/login
<img width="238" alt="스크린샷 2021-03-17 오후 5 24 54" src="https://user-images.githubusercontent.com/19744909/111436763-b2f7a780-8745-11eb-8f3d-013c490df480.png">

- http://localhost:3000/register
<img width="216" alt="스크린샷 2021-03-17 오후 5 25 36" src="https://user-images.githubusercontent.com/19744909/111436856-cb67c200-8745-11eb-96e7-ed71253ef83a.png">

- http://localhost:3000/
<img width="247" alt="스크린샷 2021-03-17 오후 5 26 02" src="https://user-images.githubusercontent.com/19744909/111436921-da4e7480-8745-11eb-8c3b-ba00b34a1ebf.png">
