var imgPlayer1 = Math.random();

imgPlayer1 = imgPlayer1 * 6;

imgPlayer1 = Math.floor(imgPlayer1)+1;

var imageIndex1 = "dice"+imgPlayer1+".png";

var imageSource = "images/"+imageIndex1;

document.querySelectorAll("img")[0].setAttribute("src",imageSource);

var imgPlayer2 = Math.floor(Math.random() * 6) +1;

var imageIndex2 ="dice"+imgPlayer2+".png";

document.querySelectorAll("img")[1].setAttribute("src" , "images/"+imageIndex2);

if(imgPlayer1<imgPlayer2)
{
  document.querySelector("h1").innerHTML=" Player2 Win 🚩 ";
}
else if (imgPlayer2<imgPlayer1) {
  document.querySelector("h1").innerHTML=" 🚩 Player1 Win";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
