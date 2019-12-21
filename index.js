let randomNumber1 = Math.floor((Math.random())*6)+1;;
 

let randomImageSource1 = "images/dice"+ randomNumber1 +".png";
document.querySelectorAll('img')[0].setAttribute('src' , randomImageSource1);
console.log(randomNumber1);


//for the second dice
let randomNumber2 = Math.floor(Math.random() *6) +1;

 let randomImageSource2 = "images/dice"+ randomNumber2 +".png";
 document.querySelectorAll('img')[1].setAttribute('src' , randomImageSource2);
 
console.log(randomNumber2);


if (randomNumber1 > randomNumber2 )  {

    document.querySelector('h1').textContent ='🏁PLAYER 1 WINS';

}
else if( randomNumber1 < randomNumber2){
    document.querySelector('h1').innerHTML ='PLAYER 2 WINS🏁';
}
 else{
    document.querySelector('h1').innerHTML ='DRAW !😋😋';
}

//  document.getElementsByClassName('btn').addEventListener('click' , function(){
//      e.target;
//      console.log(e);
//     ;
//  });
