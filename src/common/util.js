export function Loadmore(ele,cb){
    console.log('loadmore')
    ele.addEventListener("scroll",function(){
        let timer;
        clearTimeout(timer);
        console.log('loadmore2')
        timer = setTimeout(function(){
            //屏幕高度 元素滚动条内的顶部隐藏部分的高度。 元素滚动条内的内容高度。
            let {offsetHeight,scrollTop,scrollHeight} = ele;
            console.log(offsetHeight,scrollTop,scrollHeight,)
            if(scrollTop+offsetHeight+20 > scrollHeight){
                cb();
            }
        },30)
    })
}
//向下拉 scrolltop=0 offsettop=53
export function pullRefresh(ele,cb){
    let startY;
    let moveEndY;
    let dis=ele.offsetTop;
    let move=0;
    function startFun(e){
        console.log('start');
        startY = e.touches[0].pageY;
        if(ele.scrollTop===0 && ele.offsetTop === dis){
            ele.addEventListener('touchmove',moveFun)
            ele.addEventListener('touchend',endFun)
        }

    }
    function moveFun(e){
        console.log('move');
        moveEndY = e.touches[0].pageY;
        move =moveEndY-startY;
        console.log(startY,moveEndY,move);
        if(move>0){
            if(move>80) move=80;
            ele.style.top=move+dis+"px";
        }else{
            ele.removeEventListener('touchend',endFun)
            ele.removeEventListener('touchmove',moveFun)
        }
        
        
    }
    function endFun(){
        console.log('end',move);
        if(move<80){
            console.log('d');
            return ele.style.top=dis+"px";}
        console.log('cb');
        ele.style.top=dis+"px";
        cb();
        ele.removeEventListener('touchmove',moveFun)
        ele.removeEventListener('touchend',endFun)
    }
    ele.addEventListener('touchstart',startFun);

        
    }

