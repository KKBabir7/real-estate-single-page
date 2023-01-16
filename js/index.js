	$(window).scroll(function(){
				$('nav').toggleClass('scrolled', $(this).scrollTop() >80);
			});
			
			
			

var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("bnh");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}














(function() {

  var parent = document.querySelector(".range-slider");
  if(!parent) return;

  var
    rangeS = parent.querySelectorAll("input[type=range]"),
    numberS = parent.querySelectorAll("input[type=number]");

  rangeS.forEach(function(el) {
    el.oninput = function() {
      var slide1 = parseFloat(rangeS[0].value),
      slide2 = parseFloat(rangeS[1].value);

      if (slide1 > slide2) {
				[slide1, slide2] = [slide2, slide1];
        // var tmp = slide2;
        // slide2 = slide1;
        // slide1 = tmp;
      }

      numberS[0].value = slide1;
      numberS[1].value = slide2;
	  numDifferentiation()
	  numDifferenttow();
    }
	
	
  });

  numberS.forEach(function(el) {
    el.oninput = function() {
			var number1 = parseFloat(numberS[0].value),
					number2 = parseFloat(numberS[1].value);
			
      if (number1 > number2) {
        var tmp = number1;
        numberS[0].value = number2;
        numberS[1].value = tmp;
      }

      rangeS[0].value = number1;
      rangeS[1].value = number2;
      
    }
	
  });

})();








var pfocus = document.getElementById("pfocus");
var alp = pfocus.getElementsByClassName("alp");
for (var ip = 0; ip < alp.length; ip++) {
  alp[ip].addEventListener("click", function() {
  var currentp = document.getElementsByClassName("activep");
  currentp[0].className = currentp[0].className.replace(" activep", "");
  this.className += " activep";
  });
}



$("#pfocus p").click(function(){
  $(this).parents(".pagenumber").find('.number').html($(this).text());
  $(this).parents(".pagenumber").find('.number').val($(this).data('value'));
});












    vao=5
	document.getElementById("vlinput").innerHTML= vao.toFixed(2) + ' K';
function numDifferentiation() {
	vall=document.getElementById("onep").value

 if(vall >= 5000){

	document.getElementById("vlinput").innerHTML= (vall/1000).toFixed(2) + ' K';
 }
 if(vall >= 100000){
	document.getElementById("vlinput").innerHTML=(vall/100000).toFixed(2) + ' Lac';
}

}



    vaot=1
	document.getElementById("vlinputtow").innerHTML= vaot.toFixed(2) + ' Lac';
function numDifferenttow() {
	vall=document.getElementById("towp").value


 if(vall >= 100000){
	document.getElementById("vlinputtow").innerHTML=(vall/100000).toFixed(2) + ' Lac';
}
if(val >= 10000000){
	document.getElementById("vlinputtow").innerHTML = (val/10000000).toFixed(2) + ' Cr';

}


}











(function() {

  var parent = document.querySelector(".size-slider");
  if(!parent) return;

  var
    rangeS = parent.querySelectorAll("input[type=range]"),
    numberS = parent.querySelectorAll("input[type=number]");

  rangeS.forEach(function(el) {
    el.oninput = function() {
      var slide1 = parseFloat(rangeS[0].value),
      slide2 = parseFloat(rangeS[1].value);

      if (slide1 > slide2) {
				[slide1, slide2] = [slide2, slide1];
        // var tmp = slide2;
        // slide2 = slide1;
        // slide1 = tmp;
      }

      numberS[0].value = slide1;
      numberS[1].value = slide2;
	  numDone();
	numDonetow();
    }
	
	
  });

  numberS.forEach(function(el) {
    el.oninput = function() {
			var number1 = parseFloat(numberS[0].value),
					number2 = parseFloat(numberS[1].value);
			
      if (number1 > number2) {
        var tmp = number1;
        numberS[0].value = number2;
        numberS[1].value = tmp;
      }

      rangeS[0].value = number1;
      rangeS[1].value = number2;
      
    }
	
  });

})();



    sizeo=1
	document.getElementById("vlinputs").innerHTML= 1;
function numDone() {
	vall=document.getElementById("oneps").value


	document.getElementById("vlinputs").innerHTML=vall



}



   
	document.getElementById("vlinputtows").innerHTML=50;
function numDonetow() {
	vall=document.getElementById("tows").value
   document.getElementById("vlinputtows").innerHTML=vall


}







function hitvalue(){
	
	document.getElementById("pvalue").innerHTML="Rs " + document.getElementById("vlinput").innerHTML +"-"+ document.getElementById("vlinputtow").innerHTML +' <span class="caret"></span>'
	
}

function hitvaluetow(){
	
	document.getElementById("pvaluetow").innerHTML=document.getElementById("vlinputs").innerHTML +"-"+ document.getElementById("vlinputtows").innerHTML +'&nbsp' + document.getElementById("mainmarala").innerHTML + ' <span class="caret"></span>'
	
}


function spanrotet(){
	var kjy=document.getElementById("idrote")
	if(kjy){
		
		kjy.style.transform ="rotate(180deg)";
	}
	window.onclick = function(event){
		if(event.target == kjy){
		kjy.style.transform ="rotate(0deg)";
	  }
	}
	
} 










$(".rightpp .dropup li").click(function(){
  $(this).parents(".rightpp .dropup").find('.manssin').html($(this).text());
  $(this).parents(".rightpp .dropup").find('.manssin').val($(this).data('value'));
});




var pknmb = document.getElementById("pknmb");
var lopop = pknmb.getElementsByClassName("lopop");
for (var p = 0; p < lopop.length; p++) {
  lopop[p].addEventListener("click", function() {
  var clopp = document.getElementsByClassName("activclop");
  clopp[0].className = clopp[0].className.replace(" activclop", "");
  this.className += " activclop";
  });
}

var standard = document.getElementById("standard");
var strar = standard.getElementsByClassName("strar");
for (var s = 0; s < strar.length; s++) {
  strar[s].addEventListener("click", function() {
  var standardop = document.getElementsByClassName("activestan");
  standardop[0].className = standardop[0].className.replace(" activestan", "");
  this.className += " activestan";
  });
}

var mySidepanel = document.getElementById("mySidepanel");
var mbac = mySidepanel.getElementsByClassName("mbac");
for (var sm = 0; sm < mbac.length; sm++) {
  mbac[sm].addEventListener("click", function() {
  var mbactive = document.getElementsByClassName("mbactive");
  mbactive[0].className = mbactive[0].className.replace(" mbactive", "");
  this.className += " mbactive";
  });
}



function menuicon(x) {
   var jklki=document.getElementById("mySidepanel")
   document.getElementById("mySidepanel").style.width = "80%";
   document.getElementById("mySidepanel").style.opacity= "1";
   var mbcsectionok = document.getElementById("mbcsectionok")
   mbcsectionok.classList.add("pesofiu");
    
}



function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
  mbcsectionok.classList.remove("pesofiu");
   document.getElementById("mySidepanel").style.opacity= "0";
}







$(window).resize(function(){
   console.log('resize called');
   var width = $(window).width();
   if(width >= 1468){
       $('*[id^="bigcontainer"]').removeClass('container-fluid').addClass('container');
   }
   else{
       $('*[id^="bigcontainer"]').removeClass('container').addClass('container-fluid');
   }
})
.resize();//trigger the resize event on page load.







