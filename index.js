const express = require('express');
const http = require('http');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  console.log('URL = ', req.url);
  console.log('Original_URL = ', req.originalUrl);
  console.log('METHOD = ', req.method);
  console.log('HOST = ', req.headers.host);
  console.log('IsSecure = ', req.secure);
  console.log('BODY', req.body);
  console.log('QUERY', req.query);

  next();
});

app.all('/test', (req, res) => {
  res.status(200).json({ message: 'KKKKKK'});
})

 app.get('/GET',(req, res)=> {
    res.status(200).json({message: 'KEK'});
});

app.put('/PUT',(req, res)=> {
    res.status(200).json({message: 'AHAHAH'});
});

app.patch('/PATCH',(req, res)=> {
    res.status(200).json({message: 'PIPEC'});
});

app.delete('/DELETE',(req, res)=> {
    res.status(200).json({message: 'RABOTAET'});
});

app.post('/POST',(req, res)=> {
    res.status(200).json({message: 'lol'});
});

app.post('/sum', (req, res) =>{
  let sum = req.body.num1 + req.body.num2;
  res.status(200).json({sum: sum})
})

app.post('/reverseCase', (req, res) =>{
  let arr = req.body.str.split('');
  let reverseCase = [];
  arr.forEach(element => {
      if (element == element.toLowerCase()) { 
          reverseCase.push(element.toUpperCase());
      }
      else { 
          reverseCase.push(element.toLowerCase());
      }
  });
  res.status(200).json({reverseCase: reverseCase.join("")})
})

app.post('/reverseArray', (req, res) =>{
  let str = req.body.str.split('');
  let reverseArray = [];
  for(let i = str.length - 1; i>=0; i--){
      reverseArray.push(str[i]);
  }
  res.status(200).json({reverseArray: reverseArray.join("")})
})

http.createServer(app).listen(3000, () => {
  console.log('Server is working on port 3000');
})