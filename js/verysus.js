var korekto = "beta";

function handleKeyDown(e){
if (e.key == 'Backspace'){
	if (document.activeElement.parentNode.parentElement.id == "aitakata" || document.activeElement.parentNode.parentElement.id == "hiraragana"){
		e.preventDefault();
		if (document.activeElement.parentNode.parentElement.id == "aitakata"){
			SpatialNavigation.remove("kat");
			document.querySelector(".katakana").classList.add("goaway");
			setTimeout(function(){document.querySelector(".katakana").style.display = "none";document.querySelector(".katakana").classList.remove("goaway");document.querySelector("#katBTN").focus();},400);
			
		} else {
			SpatialNavigation.remove("hir");
			document.querySelector(".hiragana").classList.add("goaway");
			setTimeout(function(){document.querySelector(".hiragana").style.display = "none";document.querySelector(".hiragana").classList.remove("goaway");document.querySelector("#hirBTN").focus();},400);
			
		};
		SpatialNavigation.enable("main");
	}
	if (document.activeElement.id == "kopi"){
		e.preventDefault();
		document.querySelector(".licenso").classList.add("goaway");
		setTimeout(function(){document.querySelector(".licenso").style.display = "none";document.querySelector(".licenso").classList.remove("goaway");document.querySelector("#lissenso").focus();},400);
		SpatialNavigation.enable("main");
	}
	if (document.activeElement.id == "datonebox"){
		if (document.querySelector("#datonebox").value !== ""){}else{ 
		e.preventDefault();
		document.querySelector(".playgr").classList.add("bai");
		document.querySelector(".main").style.display = "block";
		document.querySelector(".main").classList.add("cmbk");
		hideBowtons();
		setTimeout(function(){
			document.querySelector(".playgr").style.display = "none";
			document.querySelector(".main").classList.remove("cmbk");
			document.querySelector(".playgr").classList.remove("bai");
			document.querySelector(".main").style.display = "block";
			SpatialNavigation.enable("main");
			document.querySelector("#stuwart").focus();
			},510);
		}
	}
	if (document.activeElement.id == "frokus"){
		hideucharteu();
		e.preventDefault();
	}
}

if (e.key == "ArrowUp" || e.key == "ArrowDown"){
	if (document.activeElement.id == "kopi"){
	e.preventDefault();
	if (e.key == "ArrowUp"){
		document.activeElement.scrollBy({top:-100, behavior:"smooth"})
	}
	else{
		document.activeElement.scrollBy({top:100, behavior:"smooth"})
	}

}
if (document.activeElement.parentNode.parentElement.id == "hiraragana"){
	if (e.key == "ArrowUp"){
		setTimeout(function(){document.getElementById("hiraragana").scrollBy({top:-50, behavior:"smooth"})},10);
		if (document.activeElement.id == "focusdumbass"){
			setTimeout(function(){document.getElementById("hiraragana").scrollBy({top:3000, behavior:"smooth"})},10);
			setTimeout(function(){document.querySelector("#lastitem").focus();},600);
		}
	}
	if (e.key == "ArrowDown"){
		setTimeout(function(){document.getElementById("hiraragana").scrollBy({top:50, behavior:"smooth"})},10)
		if (document.activeElement.id == "lastitem"){
			setTimeout(function(){document.getElementById("hiraragana").scrollBy({top:-3000, behavior:"smooth"})},10);
			setTimeout(function(){document.querySelector("#focusdumbass").focus();},450);
		}
	}
}

if (document.activeElement.parentNode.parentElement.id == "aitakata"){
		if (e.key == "ArrowUp"){
			setTimeout(function(){document.getElementById("aitakata").scrollBy({top:-50, behavior:"smooth"})},10)
			if (document.activeElement.id == "focusdumbass1"){
				setTimeout(function(){document.getElementById("aitakata").scrollBy({top:3000, behavior:"smooth"})},10);
				setTimeout(function(){document.querySelector("#lastitem1").focus();},600);
			}
		}
		if (e.key == "ArrowDown"){
			setTimeout(function(){document.getElementById("aitakata").scrollBy({top:50, behavior:"smooth"})},10)
			if (document.activeElement.id == "lastitem1"){
				setTimeout(function(){document.getElementById("aitakata").scrollBy({top:-3000, behavior:"smooth"})},10);
				setTimeout(function(){document.querySelector("#focusdumbass1").focus();},500);
			}
		}
}

}

if (e.key == "Enter"){
	if (document.activeElement.className == "checkbox-container__checkbox hirfocusable" || document.activeElement.className == "checkbox-container__checkbox katfocusable" || document.activeElement.id == "kopi"){
		document.activeElement.click()
	}
	if (document.activeElement.id == "hirBTN"){
		document.querySelector(".hiragana").style.display = "block";
		document.querySelector("#focusdumbass").focus();
		document.getElementById("hiraragana").scrollBy({top:-3000});
		SpatialNavigation.disable("main");
		SpatialNavigation.add({ selector: '.hirfocusable', straightOnly: true, id: "hir",});
	}
	if (document.activeElement.id == "katBTN"){
		document.querySelector(".katakana").style.display = "block";
		document.getElementById("aitakata").scrollBy({top:-3000});
		document.querySelector("#focusdumbass1").focus();
		SpatialNavigation.disable("main");
		SpatialNavigation.add({ selector: '.katfocusable', straightOnly: true, id: "kat",});
	}
	if (document.activeElement.id == "lissenso"){
		document.querySelector(".licenso").style.display = "block";
		SpatialNavigation.disable("main");
		document.querySelector("#kopi").focus();
	}
	if (document.activeElement.id == "stuwart"){
		SpatialNavigation.disable("main");
		document.querySelector(".main").classList.add("gtfaway");
		document.querySelector(".playgr").style.display = "block";
		
		showBowtons();
		setTimeout(function(){document.querySelector(".main").classList.remove("gtfaway"); document.querySelector(".main").style.display = "none";document.querySelector("#datonebox").focus();},500);
	}
	if (document.activeElement.id == "datonebox"){
		if (document.querySelector("#datonebox").value !== ""){
		if (document.querySelector("#datonebox").value.toLowerCase() == korekto){
			document.querySelector("#datonebox").value = "";
			korekKorek();
		}else{
			document.querySelector("#datonebox").value = "";
			showToast();
		}
		}
	}
	if (document.activeElement.id == "frokus"){
		hideucharteu();
	}
}

if (e.key == "SoftRight" || e.key == "="){
	if (document.activeElement.id == "datonebox"){
		document.querySelector(".chart-pop").style.display = "block";
		
		setTimeout(function(){document.querySelector(".chart-pop").focus();},200);
		skorSkor();
	}
	if (document.activeElement.id == "frokus"){
		hideucharteu();
	}
}
if (e.key == "SoftLeft" || e.key == "-"){
	if (document.activeElement.id == "frokus"){
		if (localStorage.ftuhint == "YES"){
			localStorage.ftuhint = "NO";
			document.querySelector("#hinto").style.display="none";
		} else {
			localStorage.failures = "0";
			localStorage.successatp = "0";
			skorSkor();
		}
	}
	if (document.activeElement.id == "datonebox"){
		e.preventDefault();
		document.querySelector(".blok").style.display = "block";
		setTimeout(function(){window.location = "chart.html";},500);
		setTimeout(function(){
			document.querySelector(".blok").classList.add("baiblok");
			
			setTimeout(function(){document.querySelector(".blok").style.display = "none";document.querySelector("#datonebox").focus();document.querySelector(".blok").classList.remove("baiblok")},500);
			},1000)
	}
}
}

// setInterval(function(){console.log(document.activeElement.parentNode.parentNode.parentElement.className)},500);
// setInterval(function(){console.log(document.activeElement.id)},500);
// setTimeout(function(){},500);

window.addEventListener('load', function() {
	isCheckCheck();
	skorSkor();
	checkIfEmpty();
	SpatialNavigation.init();
	SpatialNavigation.add({ selector: '.focusable', straightOnly: true, id: "main",});
	SpatialNavigation.makeFocusable();
	SpatialNavigation.focus();
});

document.addEventListener("keydown", handleKeyDown);

function checkIfEmpty(){
var x = localStorage

if (x.getItem('successatp') == null) {
x.setItem('successatp', "0");
}
if (x.getItem('failures') == null) {
x.setItem('failures', "0");
}
if (x.getItem('ftuhint') == null){
	x.setItem('ftuhint', "YES");
}
if (x.getItem('ftuhint') == "NO"){
	document.querySelector("#hinto").style.display="none";
}
};

function hideBowtons(){
	document.querySelector("#scorebowton").style.display = "none";
	document.querySelector("#selectbowton").style.display = "inline-flex";
	document.querySelector("#enterbowton").style.display = "none";
	document.querySelector("#chartbowton").style.display = "none";
}
function showBowtons(){
	document.querySelector("#scorebowton").style.display = "inline-flex";
	document.querySelector("#selectbowton").style.display = "none";
	document.querySelector("#enterbowton").style.display = "inline-flex";
	document.querySelector("#chartbowton").style.display = "inline-flex";
}


var clicks = 0;
var timer, timeout = 350; // time between each click
var tripleClick = function(e) {
  window.open("http://www.youtube.com/watch?v=v1POP-m76ac")
}
document.getElementById("kopi").addEventListener('click', function(e) {
  clearTimeout(timer);
  clicks++;
  var evt = e;
  timer = setTimeout(function() {
// to do: debug menu 
    if(clicks==3) tripleClick(evt);
    clicks = 0;
  }, timeout);
});
var katall = document.querySelector('input[id="katBTN"]');
var katcheck = document.querySelectorAll('.katfocusable');
for(var i = 0; i < katcheck.length; i++) {
  katcheck[i].addEventListener('change', updateDisplay);
}
function updateDisplay() {
    var checkedCount = 0;
    for(var i = 0; i < katcheck.length; i++) {
      if(katcheck[i].checked) {
        checkedCount++;
      }
    }

    if(checkedCount === 0) {
      katall.checked = false;
	  isCheckCheck();
    } else if(checkedCount === katcheck.length) {
      katall.checked = true;
	  isCheckCheck();
    } else {
      katall.checked = true;
	  isCheckCheck();
    }
  };
var hirall = document.querySelector('input[id="hirBTN"]');
var hircheck = document.querySelectorAll('.hirfocusable');
for(var i = 0; i < hircheck.length; i++) {
  hircheck[i].addEventListener('change', updateHirDis);
}
function updateHirDis() {
  var checkedCount = 0;
  for(var i = 0; i < hircheck.length; i++) {
    if(hircheck[i].checked) {
      checkedCount++;
    }
  }

  if(checkedCount === 0) {
    hirall.checked = false;
	isCheckCheck();
  } else if(checkedCount === hircheck.length) {
    hirall.checked = true;
	isCheckCheck();
  } else {
    hirall.checked = true;
	isCheckCheck();
  }
}
document.querySelector('input[id="katBTN"]').addEventListener('change', isCheckCheck);
document.querySelector('input[id="hirBTN"]').addEventListener('change', isCheckCheck);
var ishirChecked = null;
var iskatChecked = null;
function isCheckCheck(){
	if (document.querySelector('input[id="katBTN"]').checked){
		iskatChecked = 1;
	}
	if (document.querySelector('input[id="hirBTN"]').checked){
		ishirChecked = 1;
	}
	if (document.querySelector('input[id="katBTN"]').checked == false){
		iskatChecked = 0;
	}
	if (document.querySelector('input[id="hirBTN"]').checked == false){
		ishirChecked = 0;
	}
	selectFrist();
}
function selectFrist(){
	var lebu = document.querySelector('#stuwart'); 
	if (iskatChecked + ishirChecked == 0){
		lebu.innerHTML = 'Select one';
		lebu.classList.remove("focusable");
		lebu.classList.add("plspick");
	} else {
		lebu.innerHTML = 'Start';
		lebu.classList.remove("plspick");
		lebu.classList.add("focusable");
	}
}

// from https://github.com/canicjusz/KaiOS-native-UI

let classesWithColoredParents = /checkbox-container__checkbox|radio-container__radio|input-container__input|textarea-container__textarea|slider-container__slider/g;

const callFunction = (callback, e) => {
  let element = e.target;
  //if element has any of those classes in regex then its parent will change class. 
  if (element.className && element.className.match(classesWithColoredParents))
    callback(element.parentElement);
};

const blur = (element) => element.classList.remove('selected');

const focus = (element) => element.classList.add('selected');

window.addEventListener('focus', e => callFunction(focus, e), true);
window.addEventListener('blur', e => callFunction(blur, e), true);

// code

// cancel out clicks because it's buggy

var tengo = document.querySelectorAll(".list-item-indicator, .list-item-indicator__subtext, .main_item, checkbox-container__text");
for(var i = 0; i < tengo.length; i++) {
  tengo[i].addEventListener("click", function(event){
 event.preventDefault();
 document.querySelector("input").focus();
 });
}
document.querySelector(".kanaklas").addEventListener("click", function(){
	document.querySelector("#datonebox").focus();
});

// this part is the part about toasts

function showToast(){
	document.querySelector(".kui-toast").style.display = "block";
	document.querySelector(".kui-pri").innerHTML = "Correct answer: " + korekto;
	localStorage.failures = Number(localStorage.failures)+1;
	skorSkor();
	document.querySelector(".kanaklas").classList.add("wrongkana");
	setTimeout(function(){
		document.querySelector(".kui-toast").classList.add("byetoast")
		setTimeout(function(){document.querySelector(".kui-toast").style.display = "none";document.querySelector(".kui-toast").classList.remove("byetoast");document.querySelector(".kanaklas").classList.remove("wrongkana");},500);
		
	},2500);
}

function korekKorek(){
	localStorage.successatp = Number(localStorage.successatp)+1;
	skorSkor();
	document.querySelector(".kanaklas").classList.add("raitkana");
	setTimeout(function(){document.querySelector(".kanaklas").classList.remove("raitkana");},500);
}

// scoring thing
function skorSkor(){
	var pasadyo = document.querySelector("#pasadyo");
	var totyal =  document.querySelector("#totyal");
	var bigyo =   document.querySelector("#bigyo");
	var gradyo =  document.querySelector("#gradyo");
	
	var sucs = Number(localStorage.successatp);
	var fals = Number(localStorage.failures);
	var tottal = sucs + fals;
	
	pasadyo.innerHTML = sucs;
	totyal.innerHTML = tottal;
	bigyo.innerHTML = fals;
	gugugu = sucs / tottal * 100 || 0;
	gradyo.innerHTML = gugugu.toFixed(2)
	
}

function hideucharteu(){
	document.querySelector("#frokus").classList.add("fadeaway");
	setTimeout(function(){document.querySelector("#frokus").style.display = "none";document.querySelector("#frokus").classList.remove("fadeaway");document.querySelector("#datonebox").focus();},300);
}