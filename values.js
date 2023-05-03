function guessTheNum(){
    x = document.querySelector("input").value;
    if(x<1 || x>100){
        alert("Invalid Input. Please enter a number between 1 and 100");
        return;
    }
    count=0;
    flag=false;
    while(count<5){
        var y = Math.floor((Math.random()*100)+1);
        var para=document.createElement('h2');
        if(x==y){
            var node = document.createTextNode('Your number is '+y);
            para.appendChild(node);
            document.getElementById('heading2').appendChild(para);
            document.getElementById('heading3').innerHTML = ("Computer wins");
            flag=true;
            break;
        }else{
            var node = document.createTextNode('Computer guessed '+y);
            para.appendChild(node);
            document.getElementById('heading1').appendChild(para);
            
        }
        count++;
    }
    if(!flag){
        var para2 = document.createElement('h2');
        var node1 = document.createTextNode('You WIN!!');
        para2.appendChild(node1);
        document.getElementById('heading1').appendChild(para2);
    }
    clear();
}
function reset(){
    location.reload();
}

