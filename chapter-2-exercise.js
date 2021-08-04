//triangle
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

//fizzuzz
for (var count =1;count<=100;count++){
  var object="";
  if (count % 5==0){
    object+="fizz";
  }
  if(count%3==0){
    object+="buzz";
  }
  console.log(object||count);
}

//Chessboard
for(var row=1;row<=10;row++){
  var object="";
  for(var col=1;col<=10;col++){
    if(row%2==0){
      if(col%2!=0){
          object+="#";
      }
      else{
          object+=" ";
      }
    }
    else{
      if(col%2==0){
          object+="#";
      }
      else{
          object+=" ";
      }
    }
  }
  console.log(object);
}