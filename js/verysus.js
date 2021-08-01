var korekto = "beta";
var chArr;

function toArr(){
	skorKuno();
	var x = localStorage.checked;
	baa = x.split(":");
	bass = baa.splice(0, baa.length - 1);
	chArr = shuffle(bass);
}

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
	if (document.activeElement.id == "datonebox" || document.activeElement.className == "kanaklas"){
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
			},480);
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
		setTimeout(function(){document.getElementById("hiraragana").scrollBy({top:-50, behavior:"smooth"})},50);
		if (document.activeElement.id == "focusdumbass"){
			setTimeout(function(){document.getElementById("hiraragana").scrollBy({top:3000, behavior:"smooth"})},50);
			setTimeout(function(){document.querySelector("#lastitem").focus();},600);
		}
	}
	if (e.key == "ArrowDown"){
		setTimeout(function(){document.getElementById("hiraragana").scrollBy({top:50, behavior:"smooth"})},50)
		if (document.activeElement.id == "lastitem"){
			setTimeout(function(){document.getElementById("hiraragana").scrollBy({top:-3000, behavior:"smooth"})},50);
			setTimeout(function(){document.querySelector("#focusdumbass").focus();},450);
		}
	}
}

if (document.activeElement.parentNode.parentElement.id == "aitakata"){
		if (e.key == "ArrowUp"){
			setTimeout(function(){document.getElementById("aitakata").scrollBy({top:-50, behavior:"smooth"})},50)
			if (document.activeElement.id == "focusdumbass1"){
				setTimeout(function(){document.getElementById("aitakata").scrollBy({top:3000, behavior:"smooth"})},50);
				setTimeout(function(){document.querySelector("#lastitem1").focus();},600);
			}
		}
		if (e.key == "ArrowDown"){
			setTimeout(function(){document.getElementById("aitakata").scrollBy({top:50, behavior:"smooth"})},50)
			if (document.activeElement.id == "lastitem1"){
				setTimeout(function(){document.getElementById("aitakata").scrollBy({top:-3000, behavior:"smooth"})},50);
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
		document.querySelector(".kanaklas").innerHTML = ranCho();
		skorKuno();
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
	setTimeout(function(){document.querySelector(".lazyloaded").classList.add("fadeaway"); setTimeout(function(){document.querySelector(".lazyloaded").style.display = "none";document.querySelector(".lazyloaded").classList.remove("fadeaway")}, 250); }, 600)
	for(var i = 0; i < document.querySelectorAll('.hirfocusable').length; i++) {
    document.querySelectorAll('.hirfocusable')[i].checked = false;
	
}	
for(var i = 0; i < document.querySelectorAll('.links').length; i++) {
	document.querySelectorAll('.links')[i].href = document.querySelectorAll('.links')[i].innerHTML;
	document.querySelectorAll('.links')[i].target = "_blank";
}
for(var i = 0; i < document.querySelectorAll('.katfocusable').length; i++) {
    document.querySelectorAll('.katfocusable')[i].checked = false;
}
updateHirDis();
updateDisplay();

});

document.addEventListener("keydown", handleKeyDown);

function checkIfEmpty(){
var x = localStorage

if (x.successatp == null) {
x.successatp = "0";
}
if (x.failures == null) {
x.failures = "0";
}
if (x.checked == null) {
x.checked = "";
} else {
	x.checked = "";
}
if (x.ftuhint == null){
	x.ftuhint = "YES";
}
if (x.ftuhint == "NO"){
	document.querySelector("#hinto").style.display="none";
}
if (x.debugArr == "yep"){
	document.querySelector("#testlangpo").style.display = "block";
	document.querySelector("#testlangpo").innerHTML = chArr;
} else {
	document.querySelector("#testlangpo").style.display = "none";
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
  katcheck[i].addEventListener('change', notrickroll);
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
  hircheck[i].addEventListener('change', notrickroll);
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

// cancel out clicks because it's buggy
var tengo = document.querySelectorAll(".list-item-indicator, .list-item-indicator__subtext, .main_item, checkbox-container__text");
for(var i = 0; i < tengo.length; i++) {
  tengo[i].addEventListener("click", function(event){
 event.preventDefault();
 SpatialNavigation.makeFocusable();
 SpatialNavigation.focus();
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
	document.querySelector(".kanaklas").focus();
	setTimeout(function(){
		document.querySelector(".kui-toast").classList.add("byetoast")
		setTimeout(function(){document.querySelector(".kui-toast").style.display = "none";document.querySelector(".kui-toast").classList.remove("byetoast");document.querySelector(".kanaklas").classList.remove("wrongkana");
		document.querySelector(".kanaklas").innerHTML = ranCho();document.querySelector("#datonebox").focus();
			skorKuno();
		},500);
		
	},2500);
}

function korekKorek(){
	localStorage.successatp = Number(localStorage.successatp)+1;
	skorSkor();
	document.querySelector(".kanaklas").classList.add("raitkana");
	setTimeout(function(){document.querySelector(".kanaklas").classList.remove("raitkana");
	document.querySelector(".kanaklas").innerHTML = ranCho();
		skorKuno();
	},500);
}

// scoring thing
function skorSkor(){var e=document.querySelector("#pasadyo"),r=document.querySelector("#totyal"),o=document.querySelector("#bigyo"),t=document.querySelector("#gradyo"),n=Number(localStorage.successatp),c=Number(localStorage.failures),u=n+c;e.innerHTML=n,r.innerHTML=u,o.innerHTML=c,i=n/u*100||0,t.innerHTML=i.toFixed(2)}
function hideucharteu(){
	document.querySelector("#frokus").classList.add("fadeaway");
	setTimeout(function(){document.querySelector("#frokus").style.display = "none";document.querySelector("#frokus").classList.remove("fadeaway");document.querySelector("#datonebox").focus();},300);
}


function notrickroll(){
	if (this.checked){
		localStorage.checked += this.getAttribute("kanata");
		toArr();
	} else {
		localStorage.checked = localStorage.checked.replace(this.getAttribute("kanata"), "");
		toArr();
	}
		document.querySelector("#testlangpo").innerHTML = chArr;
}


function ranCho(){
	document.querySelector("#testlangpo").innerHTML = chArr;
skorKuno();
    if(chArr.length==0)
    {
    toArr();
    }
    var num = chArr.shift();
    return num;

}


// https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
  var copy = [], n = array.length, i;
  while (n) {
    i = Math.floor(Math.random() * n--);
    copy.push(array.splice(i, 1)[0]);
  }

  return copy;
}

function skorKuno(){
	var x = document.querySelector(".kanaklas")
	if (x.innerHTML == "あ" || x.innerHTML == "ア"){korekto = "a"};
	if (x.innerHTML == "い" || x.innerHTML == "イ"){korekto = "i"};
	if (x.innerHTML == "う" || x.innerHTML == "ウ"){korekto = "u"};
	if (x.innerHTML == "え" || x.innerHTML == "エ"){korekto = "e"};
	if (x.innerHTML == "お" || x.innerHTML == "オ"){korekto = "o"};
	if (x.innerHTML == "か" || x.innerHTML == "カ"){korekto = "ka"};
	if (x.innerHTML == "き" || x.innerHTML == "キ"){korekto = "ki"};
	if (x.innerHTML == "く" || x.innerHTML == "ク"){korekto = "ku"};
	if (x.innerHTML == "け" || x.innerHTML == "ケ"){korekto = "ke"};
	if (x.innerHTML == "こ" || x.innerHTML == "コ"){korekto = "ko"};
	if (x.innerHTML == "さ" || x.innerHTML == "サ"){korekto = "sa"};
	if (x.innerHTML == "し" || x.innerHTML == "シ"){korekto = "shi"};
	if (x.innerHTML == "す" || x.innerHTML == "ス"){korekto = "su"};
	if (x.innerHTML == "せ" || x.innerHTML == "セ"){korekto = "se"};
	if (x.innerHTML == "そ" || x.innerHTML == "ソ"){korekto = "so"};
	if (x.innerHTML == "た" || x.innerHTML == "タ"){korekto = "ta"};
	if (x.innerHTML == "ち" || x.innerHTML == "チ"){korekto = "chi"};
	if (x.innerHTML == "つ" || x.innerHTML == "ツ"){korekto = "tsu"};
	if (x.innerHTML == "て" || x.innerHTML == "テ"){korekto = "te"};
	if (x.innerHTML == "と" || x.innerHTML == "ト"){korekto = "to"};
	if (x.innerHTML == "な" || x.innerHTML == "ナ"){korekto = "na"};
	if (x.innerHTML == "に" || x.innerHTML == "ニ"){korekto = "ni"};
	if (x.innerHTML == "ぬ" || x.innerHTML == "ヌ"){korekto = "nu"};
	if (x.innerHTML == "ね" || x.innerHTML == "ネ"){korekto = "ne"};
	if (x.innerHTML == "の" || x.innerHTML == "ノ"){korekto = "no"};
	if (x.innerHTML == "は" || x.innerHTML == "ハ"){korekto = "ha"};
	if (x.innerHTML == "ひ" || x.innerHTML == "ヒ"){korekto = "hi"};
	if (x.innerHTML == "ふ" || x.innerHTML == "フ"){korekto = "fu"};
	if (x.innerHTML == "へ" || x.innerHTML == "ヘ"){korekto = "he"};
	if (x.innerHTML == "ほ" || x.innerHTML == "ホ"){korekto = "ho"};
	if (x.innerHTML == "ま" || x.innerHTML == "マ"){korekto = "ma"};
	if (x.innerHTML == "み" || x.innerHTML == "ミ"){korekto = "mi"};
	if (x.innerHTML == "む" || x.innerHTML == "ム"){korekto = "mu"};
	if (x.innerHTML == "め" || x.innerHTML == "メ"){korekto = "me"};
	if (x.innerHTML == "も" || x.innerHTML == "モ"){korekto = "mo"};
	if (x.innerHTML == "や" || x.innerHTML == "ヤ"){korekto = "ya"};
	if (x.innerHTML == "ゆ" || x.innerHTML == "ユ"){korekto = "yu"};
	if (x.innerHTML == "よ" || x.innerHTML == "ヨ"){korekto = "yo"};
	if (x.innerHTML == "ら" || x.innerHTML == "ラ"){korekto = "ra"};
	if (x.innerHTML == "り" || x.innerHTML == "リ"){korekto = "ri"};
	if (x.innerHTML == "る" || x.innerHTML == "ル"){korekto = "ru"};
	if (x.innerHTML == "れ" || x.innerHTML == "レ"){korekto = "re"};
	if (x.innerHTML == "ろ" || x.innerHTML == "ロ"){korekto = "ro"};
	if (x.innerHTML == "わ" || x.innerHTML == "ワ"){korekto = "wa"}
	if (x.innerHTML == "を" || x.innerHTML == "ヲ"){korekto = "wo"}
	if (x.innerHTML == "ん" || x.innerHTML == "ン"){korekto = "n"};
	if (x.innerHTML == "が" || x.innerHTML == "ガ"){korekto = "ga"};
	if (x.innerHTML == "ぎ" || x.innerHTML == "ギ"){korekto = "gi"};
	if (x.innerHTML == "ぐ" || x.innerHTML == "グ"){korekto = "gu"};
	if (x.innerHTML == "げ" || x.innerHTML == "ゲ"){korekto = "ge"};
	if (x.innerHTML == "ご" || x.innerHTML == "ゴ"){korekto = "go"};
	if (x.innerHTML == "ざ" || x.innerHTML == "ザ"){korekto = "za"};
	if (x.innerHTML == "じ" || x.innerHTML == "ジ"){korekto = "ji"};
	if (x.innerHTML == "ず" || x.innerHTML == "ズ"){korekto = "zu"};
	if (x.innerHTML == "ぜ" || x.innerHTML == "ゼ"){korekto = "ze"};
	if (x.innerHTML == "ぞ" || x.innerHTML == "ゾ"){korekto = "zo"};
	if (x.innerHTML == "だ" || x.innerHTML == "ダ"){korekto = "da"};
	if (x.innerHTML == "ぢ" || x.innerHTML == "ヂ"){korekto = "ji"};
	if (x.innerHTML == "づ" || x.innerHTML == "ヅ"){korekto = "zu"};
	if (x.innerHTML == "で" || x.innerHTML == "デ"){korekto = "de"};
	if (x.innerHTML == "ど" || x.innerHTML == "ド"){korekto = "do"};
	if (x.innerHTML == "ば" || x.innerHTML == "バ"){korekto = "ba"};
	if (x.innerHTML == "び" || x.innerHTML == "ビ"){korekto = "bi"};
	if (x.innerHTML == "ぶ" || x.innerHTML == "ブ"){korekto = "bu"};
	if (x.innerHTML == "べ" || x.innerHTML == "ベ"){korekto = "be"};
	if (x.innerHTML == "ぼ" || x.innerHTML == "ボ"){korekto = "bo"};
	if (x.innerHTML == "ぱ" || x.innerHTML == "パ"){korekto = "pa"};
	if (x.innerHTML == "ぴ" || x.innerHTML == "ピ"){korekto = "pi"};
	if (x.innerHTML == "ぷ" || x.innerHTML == "プ"){korekto = "pu"};
	if (x.innerHTML == "ぺ" || x.innerHTML == "ペ"){korekto = "pe"};
	if (x.innerHTML == "ぽ" || x.innerHTML == "ポ"){korekto = "po"};
}

//OH GOD I FORGOT DAKUONS AND HANDAKUON AAAAAAAAHHHHHHHH