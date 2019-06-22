let express= require('express');
let axios =require('axios');
let bodyparser = require('body-parser');
let Crypto= require('crypto');
let app = express();

app.listen(3000,function(){
    console.log(3000);
});

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();

})

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4000"); //允许8080端口访问
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"); //允许接收的头
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS"); //允许的方法
    res.header('Access-Control-Allow-Credentials','true');
    // 允许跨域设置cookie
    //如果发的是options的请求 响应ok 即可
    if(req.method==="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.get('/sliders',(req,res)=>{
    axios.get('http://www.html5train.com/orgHomePage.do?action=getOrgHomePageInfo&layoutType=default&organizationId=510&_=1548753901314')
    .then(response=>{
        console.log('server/slider');
        res.json(response.data.moduleDTOList.list[0].moduleMap.map.pictureDTOList.list);
    })
})

app.get('/lessons/:offset/:limit/:type',(req,res)=>{
    
    let lessons=require('./mock/lessons.js').lessons;
    let {offset,limit,type} = req.params;
    console.log(offset,limit,type);
    offset=parseInt(offset);
    limit = parseInt(limit);
    let lists= lessons;
    let hasMore= true;
    if(type!== "all"){
        lists = lessons.filter(item=>item.type===type);
    }
    let list=lists.slice(offset,offset+limit);
    if(offset+limit>=lists.length) hasMore=false;
    setTimeout(() => {
        res.json({hasMore,list});
    }, 2000);
    
})

app.get('/lesson/:id',function(req,res){
    let id= req.params.id;
    let lessons=require('./mock/lessons.js').lessons;
    let lesson =lessons.find(item=>item.lessonId==id) || {};
    res.json(lesson);

})
let userList=[];
app.post('/reg',function(req,res){
    console.log('psot')
    let {username,password} = req.body;
    console.log(username,password);
    let user=userList.find(item=>item.username=username);
    if(user){
        res.json({username:null,err:1,msg:"用户名存在",success:""});
    }else
    {
        
        password=Crypto.createHash('md5').update(password).digest('base64');
        userList.push({username,password});
        console.log(userList);
        res.json({username:username,err:0,msg:"",success:"注册成功"});
    }
})


app.get('/jsonp', function(req, res) {
  var _callback = req.query.callback;//callback=fn3  -> fn3
  var _data = [1,2,3,4,5];
  console.log(_callback)
  if (_callback){
      res.type('text/javascript');
    //   fn3 + '(' data + ')' ->  fn(data)
      setTimeout(function(){
        res.send(_callback + '(' + JSON.stringify(_data) + ')');
      },5000)
  }
  else{
      res.json(_data);
  }
});



