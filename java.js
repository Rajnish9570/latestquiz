function decimal() {
    var decimal=document.getElementById("input").value;
    var tempDecimal,rem,binary=0,place=1;
    tempDecimal=decimal;
    while(tempDecimal>0){
      rem=tempDecimal%2;
      binary=binary+(rem*place);
      tempDecimal=parseInt(tempDecimal/2);
      place=place*10;
    }
    document.getElementById("result").innerHTML=binary;
  }

  var a;
  function about(){
    if(a==1){
      document.getElementById("about").style.display="inline";
      return a=0;
    }
    else{
      document.getElementById("about").style.display="none";
      return a=1;
    }
  }