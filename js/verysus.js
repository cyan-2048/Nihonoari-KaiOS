var korekto = "beta";
var chArr;
var enabledAds = "false";
var chartsClicked = "no";

function toArr() {
	skorKuno();
	var x = localStorage.checked;
	baa = x.split(":");
	bass = baa.splice(0, baa.length - 1);
	chArr = shuffle(bass);
}

function handleKeyDown(e) {
	if (e.key == 'Backspace') {
		if (document.activeElement.parentNode.parentElement.id == "aitakata" || document.activeElement.parentNode.parentElement.id == "hiraragana") {
			e.preventDefault();
			if (document.activeElement.parentNode.parentElement.id == "aitakata") {
				SpatialNavigation.remove("kat");
				document.querySelector(".katakana").classList.add("goaway");
				setTimeout(function() {
					document.querySelector(".katakana").style.display = "none";
					document.querySelector(".katakana").classList.remove("goaway");
					document.querySelector("#katBTN").focus();
				}, 400);

			} else {
				SpatialNavigation.remove("hir");
				document.querySelector(".hiragana").classList.add("goaway");
				setTimeout(function() {
					document.querySelector(".hiragana").style.display = "none";
					document.querySelector(".hiragana").classList.remove("goaway");
					document.querySelector("#hirBTN").focus();
				}, 400);

			};
			SpatialNavigation.enable("main");
		}
		if (document.activeElement.parentNode.id == "debugmenu" || document.activeElement.parentNode.parentElement.id == "debugmenu") {
			e.preventDefault();
			SpatialNavigation.remove("deb");
			document.querySelector(".devug").classList.add("goaway");
			setTimeout(function() {
				document.querySelector(".devug").style.display = "none";
				document.querySelector(".devug").classList.remove("goaway");
				document.querySelector("#kopi").focus();
			}, 400);
		}
		if (document.activeElement.id == "kopi") {
			e.preventDefault();
			document.querySelector(".licenso").classList.add("goaway");
			setTimeout(function() {
				document.querySelector(".licenso").style.display = "none";
				document.querySelector(".licenso").classList.remove("goaway");
				document.querySelector("#lissenso").focus();
			}, 400);
			SpatialNavigation.enable("main");
			hideBowtons();
		}
		if (document.activeElement.id == "datonebox" || document.activeElement.className == "kanaklas") {
			if (document.querySelector("#datonebox").value !== "") {} else {
				e.preventDefault();
				document.querySelector(".playgr").classList.add("bai");
				document.querySelector(".main").style.display = "block";
				document.querySelector(".main").classList.add("cmbk");
				hideBowtons();
				setTimeout(function() {
					document.querySelector(".playgr").style.display = "none";
					document.querySelector(".main").classList.remove("cmbk");
					document.querySelector(".playgr").classList.remove("bai");
					document.querySelector(".main").style.display = "block";
					SpatialNavigation.enable("main");
					document.querySelector("#stuwart").focus();
				}, 480);
			}
		}
		if (document.activeElement.id == "frokus") {
			hideucharteu();
			e.preventDefault();
		}
		if (document.activeElement.className == "links") {
			e.preventDefault();
			document.querySelector("#kopi").focus();
			SpatialNavigation.remove("links");
			linksClicked = "no";
		}
	}

	if (e.key == "ArrowUp" || e.key == "ArrowDown") {
		if (document.activeElement.id == "kopi") {
			e.preventDefault();
			if (e.key == "ArrowUp") {
				document.activeElement.scrollBy({ top: -100, behavior: "smooth" })
			} else {
				document.activeElement.scrollBy({ top: 100, behavior: "smooth" })
			}

		}
		if (document.activeElement.parentNode.parentElement.id == "hiraragana" || document.activeElement.parentNode.parentElement.id == "aitakata") {
			var active = document.activeElement.parentNode.parentElement.id;
			if (e.key == "ArrowUp") {
				e.preventDefault();
				setTimeout(function() { 
				if (document.activeElement.getBoundingClientRect().bottom <= 150){
				 document.getElementById(active).scrollBy({ top: -60, behavior: "smooth" }) 
				}
				}, 50);
				if (document.activeElement.id == "focusdumbass" || document.activeElement.id == "focusdumbass1") {
					setTimeout(function() { document.getElementById(active).scrollBy({ top: 3000, behavior: "smooth" }) }, 50);
					if (active == "hiraragana") {
						setTimeout(function() { document.querySelector("#lastitem").focus(); }, 600);
					} else {
						setTimeout(function() { document.querySelector("#lastitem1").focus(); }, 600);
					}
				}
			}
			if (e.key == "ArrowDown") {
				e.preventDefault();
				setTimeout(function() { 
				if (document.activeElement.getBoundingClientRect().top >= 120){
					document.getElementById(active).scrollBy({ top: 60, behavior: "smooth" })
					}
				}, 50)
				if (document.activeElement.id == "lastitem" || document.activeElement.id == "lastitem1") {
					setTimeout(function() { document.getElementById(active).scrollBy({ top: -3000, behavior: "smooth" }) }, 50);
					if (active == "hiraragana") {
						setTimeout(function() { document.querySelector("#focusdumbass").focus(); }, 450);
					} else {
						setTimeout(function() { document.querySelector("#focusdumbass1").focus(); }, 450);
					}
				}
			}
		} else {

		}


	}

	if (e.key == "Enter") {
		if (document.activeElement.className == "checkbox-container__checkbox hirfocusable" || document.activeElement.className == "checkbox-container__checkbox katfocusable" || document.activeElement.id == "kopi" || document.activeElement.className == "checkbox-container__checkbox debfocusable") {
			document.activeElement.click()
		}
		if (document.activeElement.id == "hirBTN") {
			document.querySelector(".hiragana").style.display = "block";
			document.querySelector("#focusdumbass").focus();
			document.getElementById("hiraragana").scrollBy({ top: -3000 });
			SpatialNavigation.disable("main");
			SpatialNavigation.add({ selector: '.hirfocusable', straightOnly: true, id: "hir", });
		}
		if (document.activeElement.id == "katBTN") {
			document.querySelector(".katakana").style.display = "block";
			document.getElementById("aitakata").scrollBy({ top: -3000 });
			document.querySelector("#focusdumbass1").focus();
			SpatialNavigation.disable("main");
			SpatialNavigation.add({ selector: '.katfocusable', straightOnly: true, id: "kat", });
		}
		if (document.activeElement.id == "lissenso") {
			document.querySelector(".licenso").style.display = "block";
			SpatialNavigation.disable("main");
			showBowtons("links");
			document.querySelector("#kopi").focus();
		}
		if (document.activeElement.id == "stuwart") {
			SpatialNavigation.disable("main");
			document.querySelector(".main").classList.add("gtfaway");
			document.querySelector(".playgr").style.display = "block";
			document.querySelector(".kanaklas").innerHTML = ranCho();
			skorKuno();
			showBowtons();
			setTimeout(function() {
				document.querySelector(".main").classList.remove("gtfaway");
				document.querySelector(".main").style.display = "none";
				document.querySelector("#datonebox").focus();
			}, 500);
		}
		if (document.activeElement.id == "datonebox") {
			if (document.querySelector("#datonebox").value !== "") {
				if (document.querySelector("#datonebox").value.toLowerCase() == korekto) {
					document.querySelector("#datonebox").value = "";
					korekKorek();
				} else {
					document.querySelector("#datonebox").value = "";
					showToast();
				}
			}
		}
		if (document.activeElement.id == "frokus") {
			hideucharteu();
		}
	}

	if (e.key == "SoftRight" || e.key == "=") {
		if (document.activeElement.id == "datonebox") {
			document.querySelector(".chart-pop").style.display = "block";

			setTimeout(function() { document.querySelector(".chart-pop").focus(); }, 200);
			skorSkor();
		}
		if (document.activeElement.id == "frokus") {
			hideucharteu();
		}
		if (document.activeElement.id == "kopi") {
			if (enabledAds == "true") {
				displayAd();
			}
		}
	}
	if (e.key == "SoftLeft" || e.key == "-") {
		if (document.activeElement.id == "frokus") {
			if (localStorage.ftuhint == "YES") {
				localStorage.ftuhint = "NO";
				document.querySelector("#hinto").style.display = "none";
			} else {
				localStorage.failures = "0";
				localStorage.successatp = "0";
				skorSkor();
			}
		}
		if (document.activeElement.id == "datonebox") {
			e.preventDefault();
			document.querySelector(".blok").style.display = "block";
			if (chartsClicked == "no") {
				chartsClicked = "yes";
				setTimeout(function() { window.location = "chart.html"; }, 500);
				setTimeout(function() {
					document.querySelector(".blok").classList.add("baiblok");

					setTimeout(function() {
						document.querySelector(".blok").style.display = "none";
						document.querySelector("#datonebox").focus();
						document.querySelector(".blok").classList.remove("baiblok")
					}, 500);

				}, 1000)
				setTimeout(function() { chartsClicked = "no"; }, 2000)
			}
		}
		if (document.activeElement.id == "kopi") {
			SpatialNavigation.add({ selector: '.links', straightOnly: true, id: "links", });
			document.querySelector(".links").focus();
			setTimeout(function() { linksClicked = "yes" }, 500)
		}
		if (linksClicked == "yes") {
			e.preventDefault();
			document.querySelector("#kopi").focus();
			SpatialNavigation.remove("links");
			linksClicked = "no";
		}

	}
}

var linksClicked = "no";
// setInterval(function(){console.log(document.activeElement.parentNode.parentNode.parentElement.className)},500);
// setInterval(function(){console.log(document.activeElement.id)},500);
// setTimeout(function(){},500);

window.addEventListener('load', function() {
	isCheckCheck();
	skorSkor();
	checkIfEmpty();
	SpatialNavigation.init();
	SpatialNavigation.add({ selector: '.focusable', straightOnly: true, id: "main", });
	SpatialNavigation.makeFocusable();
	SpatialNavigation.focus();
	setTimeout(function() {
		document.querySelector(".lazyloaded").classList.add("fadeaway");
		setTimeout(function() {
			document.querySelector(".lazyloaded").style.display = "none";
			document.querySelector(".lazyloaded").classList.remove("fadeaway")
		}, 250);
	}, 600)
	for (var i = 0; i < document.querySelectorAll('.hirfocusable').length; i++) {
		document.querySelectorAll('.hirfocusable')[i].checked = false;
		trollface();
	}

	for (var i = 0; i < document.querySelectorAll('.katfocusable').length; i++) {
		document.querySelectorAll('.katfocusable')[i].checked = false;
	}
	updateHirDis();
	updateDisplay();

});

document.addEventListener("keydown", handleKeyDown);

function checkIfEmpty() {
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
	if (x.ftuhint == null) {
		x.ftuhint = "YES";
	}
	if (x.ftuhint == "NO") {
		document.querySelector("#hinto").style.display = "none";
	}
	if (x.debugArr == "yep") {
		document.querySelector("#testlangpo").style.display = "block";
		document.querySelector("#testlangpo").innerHTML = chArr;
		document.querySelector("#showarray").checked = true;
	} else {
		document.querySelector("#testlangpo").style.display = "none";
		document.querySelector("#showarray").checked = false;
	}
};

function hideBowtons() {
	document.querySelector("#scorebowton").style.display = "none";
	document.querySelector("#selectbowton").style.display = "inline-flex";
	document.querySelector("#enterbowton").style.display = "none";
	document.querySelector("#chartbowton").style.display = "none";
	document.querySelector(".softkey-left p").innerHTML = "";
	if (enabledAds == "true") {
		document.querySelector(".softkey-right p").innerHTML = "";
	}
}

function showBowtons(e) {
	if (e == "links") {
		document.querySelector(".softkey-left p").innerHTML = "Links";
		if (enabledAds == "true") {
			document.querySelector(".softkey-right p").innerHTML = "Show Ad";
		}
	} else {
		document.querySelector("#scorebowton").style.display = "inline-flex";
		document.querySelector("#selectbowton").style.display = "none";
		document.querySelector("#enterbowton").style.display = "inline-flex";
		document.querySelector("#chartbowton").style.display = "inline-flex";
	}
}

var clicks = 0;
var timer, timeout = 350; // time between each click

document.getElementById("kopi").addEventListener('click', function(e) {
	clearTimeout(timer);
	clicks++;
	var evt = e;
	timer = setTimeout(function() {
		// to do: debug menu 
		if (clicks == 3) { window.open("http://www.youtube.com/watch?v=v1POP-m76ac"); }
		if (clicks == 2) {
			SpatialNavigation.add({ selector: '.debfocusable', straightOnly: true, id: "deb", });
			document.querySelector(".devug").style.display = "block";
			debugRef();
			document.querySelector("#showarray").focus();
		}
		clicks = 0;
	}, timeout);
});
var katall = document.querySelector('input[id="katBTN"]');
var katcheck = document.querySelectorAll('.katfocusable');
for (var i = 0; i < katcheck.length; i++) {
	katcheck[i].addEventListener('change', updateDisplay);
	katcheck[i].addEventListener('change', notrickroll);
}

function updateDisplay() {
	var checkedCount = 0;
	for (var i = 0; i < katcheck.length; i++) {
		if (katcheck[i].checked) {
			checkedCount++;
		}
	}

	if (checkedCount === 0) {
		katall.checked = false;
		isCheckCheck();
	} else if (checkedCount === katcheck.length) {
		katall.checked = true;
		isCheckCheck();
	} else {
		katall.checked = true;
		isCheckCheck();
	}
};
var hirall = document.querySelector('input[id="hirBTN"]');
var hircheck = document.querySelectorAll('.hirfocusable');
for (var i = 0; i < hircheck.length; i++) {
	hircheck[i].addEventListener('change', updateHirDis);
	hircheck[i].addEventListener('change', notrickroll);
}

function updateHirDis() {
	var checkedCount = 0;
	for (var i = 0; i < hircheck.length; i++) {
		if (hircheck[i].checked) {
			checkedCount++;
		}
	}

	if (checkedCount === 0) {
		hirall.checked = false;
		isCheckCheck();
	} else if (checkedCount === hircheck.length) {
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

function isCheckCheck() {
	if (document.querySelector('input[id="katBTN"]').checked) {
		iskatChecked = 1;
	}
	if (document.querySelector('input[id="hirBTN"]').checked) {
		ishirChecked = 1;
	}
	if (document.querySelector('input[id="katBTN"]').checked == false) {
		iskatChecked = 0;
	}
	if (document.querySelector('input[id="hirBTN"]').checked == false) {
		ishirChecked = 0;
	}
	selectFrist();
}

function selectFrist() {
	var lebu = document.querySelector('#stuwart');
	if (iskatChecked + ishirChecked == 0) {
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
for (var i = 0; i < tengo.length; i++) {
	tengo[i].addEventListener("click", function(event) {
		event.preventDefault();
		SpatialNavigation.makeFocusable();
		SpatialNavigation.focus();
		console.log("imagine using a pc to use a kaios app :yuckchamp:")
	});
}
document.querySelector(".kanaklas").addEventListener("click", function() {
	document.querySelector("#datonebox").focus();
});

// this part is the part about toasts

function showToast() {
	document.querySelector(".kui-toast").style.display = "block";
	document.querySelector(".kui-pri").innerHTML = "Correct answer: " + korekto;
	localStorage.failures = Number(localStorage.failures) + 1;
	skorSkor();
	document.querySelector(".kanaklas").classList.add("wrongkana");
	document.querySelector(".kanaklas").focus();
	setTimeout(function() {
		document.querySelector(".kui-toast").classList.add("byetoast")
		setTimeout(function() {
			document.querySelector(".kui-toast").style.display = "none";
			document.querySelector(".kui-toast").classList.remove("byetoast");
			document.querySelector(".kanaklas").classList.remove("wrongkana");
			document.querySelector(".kanaklas").innerHTML = ranCho();
			document.querySelector("#datonebox").focus();
			skorKuno();
		}, 500);

	}, 1800);
}

function korekKorek() {
	localStorage.successatp = Number(localStorage.successatp) + 1;
	skorSkor();
	document.querySelector(".kanaklas").classList.add("raitkana");
	setTimeout(function() {
		document.querySelector(".kanaklas").classList.remove("raitkana");
		document.querySelector(".kanaklas").innerHTML = ranCho();
		skorKuno();
	}, 500);
}

// scoring thing
function skorSkor() {
	var e = document.querySelector("#pasadyo"),
		r = document.querySelector("#totyal"),
		o = document.querySelector("#bigyo"),
		t = document.querySelector("#gradyo"),
		n = Number(localStorage.successatp),
		c = Number(localStorage.failures),
		u = n + c;
	e.innerHTML = n, r.innerHTML = u, o.innerHTML = c, i = n / u * 100 || 0, t.innerHTML = i.toFixed(2)
}

function hideucharteu() {
	document.querySelector("#frokus").classList.add("fadeaway");
	setTimeout(function() {
		document.querySelector("#frokus").style.display = "none";
		document.querySelector("#frokus").classList.remove("fadeaway");
		document.querySelector("#datonebox").focus();
	}, 300);
}


function notrickroll() {
	if (this.checked) {
		localStorage.checked += this.getAttribute("kanata");
		toArr();
	} else {
		localStorage.checked = localStorage.checked.replace(this.getAttribute("kanata"), "");
		toArr();
	}
	document.querySelector("#testlangpo").innerHTML = chArr;
}

document.querySelector("#showarray").addEventListener("change", function() {

	if (this.checked) {
		localStorage.debugArr = "yep";
		document.querySelector("#testlangpo").innerHTML = chArr;
		document.querySelector("#testlangpo").style.display = "block";
	} else {
		localStorage.debugArr = "nope";
		document.querySelector("#testlangpo").style.display = "none";
	}
	debugRef();
})

function ranCho() {
	document.querySelector("#testlangpo").innerHTML = chArr;
	skorKuno();
	if (chArr.length == 0) {
		toArr();
	}
	var num = chArr.shift();
	return num;

}


// https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
	var copy = [],
		n = array.length,
		i;
	while (n) {
		i = Math.floor(Math.random() * n--);
		copy.push(array.splice(i, 1)[0]);
	}

	return copy;
}

function skorKuno() {
	var x = document.querySelector(".kanaklas")
	const map = {
    'あ': 'a',
    'い': 'i',
    'う': 'u',
    'え': 'e',
    'お': 'o',
    'か': 'ka',
    'き': 'ki',
    'く': 'ku',
    'け': 'ke',
    'こ': 'ko',
    'さ': 'sa',
    'し': 'shi',
    'す': 'su',
    'せ': 'se',
    'そ': 'so',
    'た': 'ta',
    'ち': 'chi',
    'つ': 'tsu',
    'て': 'te',
    'と': 'to',
    'な': 'na',
    'に': 'ni',
    'ぬ': 'nu',
    'ね': 'ne',
    'の': 'no',
    'は': 'ha',
    'ひ': 'hi',
    'ふ': 'fu',
    'へ': 'he',
    'ほ': 'ho',
    'ま': 'ma',
    'み': 'mi',
    'む': 'mu',
    'め': 'me',
    'も': 'mo',
    'や': 'ya',
    'ゆ': 'yu',
    'よ': 'yo',
    'ら': 'ra',
    'り': 'ri',
    'る': 'ru',
    'れ': 're',
    'ろ': 'ro',
    'わ': 'wa',
    'を': 'wo',
    'ん': 'n',
    'が': 'ga',
    'ぎ': 'gi',
    'ぐ': 'gu',
    'げ': 'ge',
    'ご': 'go',
    'ざ': 'za',
    'じ': 'ji',
    'ず': 'zu',
    'ぜ': 'ze',
    'ぞ': 'zo',
    'だ': 'da',
    'ぢ': 'ji',
    'づ': 'zu',
    'で': 'de',
    'ど': 'do',
    'ば': 'ba',
    'び': 'bi',
    'ぶ': 'bu',
    'べ': 'be',
    'ぼ': 'bo',
    'ぱ': 'pa',
    'ぴ': 'pi',
    'ぷ': 'pu',
    'ぺ': 'pe',
    'ぽ': 'po',
    'ア': 'a',
    'イ': 'i',
    'ウ': 'u',
    'エ': 'e',
    'オ': 'o',
    'カ': 'ka',
    'キ': 'ki',
    'ク': 'ku',
    'ケ': 'ke',
    'コ': 'ko',
    'サ': 'sa',
    'シ': 'shi',
    'ス': 'su',
    'セ': 'se',
    'ソ': 'so',
    'タ': 'ta',
    'チ': 'chi',
    'ツ': 'tsu',
    'テ': 'te',
    'ト': 'to',
    'ナ': 'na',
    'ニ': 'ni',
    'ヌ': 'nu',
    'ネ': 'ne',
    'ノ': 'no',
    'ハ': 'ha',
    'ヒ': 'hi',
    'フ': 'fu',
    'ヘ': 'he',
    'ホ': 'ho',
    'マ': 'ma',
    'ミ': 'mi',
    'ム': 'mu',
    'メ': 'me',
    'モ': 'mo',
    'ヤ': 'ya',
    'ユ': 'yu',
    'ヨ': 'yo',
    'ラ': 'ra',
    'リ': 'ri',
    'ル': 'ru',
    'レ': 're',
    'ロ': 'ro',
    'ワ': 'wa',
    'ヲ': 'wo',
    'ン': 'n',
    'ガ': 'ga',
    'ギ': 'gi',
    'グ': 'gu',
    'ゲ': 'ge',
    'ゴ': 'go',
    'ザ': 'za',
    'ジ': 'ji',
    'ズ': 'zu',
    'ゼ': 'ze',
    'ゾ': 'zo',
    'ダ': 'da',
    'ヂ': 'ji',
    'ヅ': 'zu',
    'デ': 'de',
    'ド': 'do',
    'バ': 'ba',
    'ビ': 'bi',
    'ブ': 'bu',
    'ベ': 'be',
    'ボ': 'bo',
    'パ': 'pa',
    'ピ': 'pi',
    'プ': 'pu',
    'ペ': 'pe',
    'ポ': 'po',
  };
  korekto = map[x.innerHTML]
}

//OH GOD I FORGOT DAKUONS AND HANDAKUON AAAAAAAAHHHHHHHH
window.addEventListener('resize', trollface);

function trollface() {
	if (getWidth() > 240) {
		document.querySelector("#trollface").style.display = "block";
		document.querySelector("#trollfacer").style.display = "block";
		document.querySelector("#trollfaceu").src = "https://cdn.discordapp.com/attachments/813030840526569472/871692377591545897/hehe.jpeg";
	}
	if (getWidth() <= 240) {
		document.querySelector("#trollfaceu").src = "https://cdn.discordapp.com/attachments/813030840526569472/871692381009879081/welp.jpg";
		document.querySelector("#trollfacer").style.display = "none";
		setTimeout(function() { document.querySelector("#trollface").style.display = "none"; }, 2000);
	}

}

function getWidth() {
	return Math.max(
		document.body.scrollWidth,
		document.documentElement.scrollWidth,
		document.body.offsetWidth,
		document.documentElement.offsetWidth,
		document.documentElement.clientWidth
	);
}

for (var i = 0; i < document.querySelectorAll('.links').length; i++) {
	document.querySelectorAll('.links')[i].addEventListener("click", function() {
		window.open(this.innerHTML)
	})
	document.querySelectorAll('.links')[i].href = "javascript:void(null);"
}

function allStorage() {

	var archive = [],
		keys = Object.keys(localStorage),
		i = 0,
		key;

	for (; key = keys[i]; i++) {
		archive.push(key + ' : ' + localStorage.getItem(key));
	}

	return archive;
}

function debugRef() {
	document.getElementById("storr").innerHTML = allStorage().join("<br>");
}