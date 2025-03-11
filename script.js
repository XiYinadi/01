
let hide=0;

function getmain(){
   const main = document.getElementById('main');

    console.log(hide);
if (!main){
    console.log('未输入文本');
    return;
}
else{
    console.log(main.value);
    if (main.value == 'hide' || main.value == 'HIDE'){
        document.getElementById("test_key").style.display = "block";
        alert('切换开关开启');
    }
    if (main.value == 'hide1' ){
        hide_event();
        alert('触发了隐藏图片1');
    }
    else if(main.value == 'hide2'){
        hide1_event();
        alert('触发了隐藏图片2');
    }
    else if(main.value == 'hide3'){
        hide2_event();
        alert('触发了隐藏图片3');
    }
    else
    {
        alert('已提交');
        main.value = '';
    }
    
}
}



test_key.onclick = function hide_key(){
    hide++;
    if (hide==1 ){
        hide_event();
        alert('触发了隐藏图片1');
    }
    else if(hide==2){
        hide1_event();
        alert('触发了隐藏图片2');
    }
    else if(hide==3){
        hide2_event();
        alert('触发了隐藏图片3');
        hide=0;
    }
}

let photo = document.getElementById('photo');
let aa="test.jpg";
let bb="aa.jpg";

function hide_event(){
    photo.src = "hide.jpeg";
}

function hide1_event(){
    photo.src = "hide1.jpeg";
}

function hide2_event(){
    photo.src = "hide2.jpeg";
}

photo.onclick = function photo_change(){

    photo.src = aa;
    aa = bb;
    bb = photo.src;
}
