
   var imgs = $('img') 


   function lazyLoad(){
       var screenH =$(window).height()//可视区域
       var sH = $(document).scrollTop(); //滚动条移动的距离
           
       $.each(imgs,function(index,item){//循环添加src属性
            if(screenH + sH> $(item).offset().top){
               item.src = $(item).attr('data-src')
            }
         })
    }
    

    window.onload = window.onscroll = function () { //onscroll()在滚动条滚动的时候触发
        lazyLoad();
    }