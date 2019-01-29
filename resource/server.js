let express= require('express');
let axios =require('axios');
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
app.get('/sliders',(req,res)=>{
    axios.get('http://www.html5train.com/orgHomePage.do?action=getOrgHomePageInfo&layoutType=default&organizationId=510&_=1548753901314')
    .then(response=>{
        console.log('server/slider');
        res.json(response.data.moduleDTOList.list[0].moduleMap.map.pictureDTOList.list);
    })
})

