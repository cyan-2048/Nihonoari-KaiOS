if (window.location.hash != "") window.location.hash = "";
var options,
	d = document,
	qA = "querySelectorAll",
	qS = "querySelector",
	gC = "getElementsByClassName",
	gI = "getElementById",
	aE = "activeElement",
	toast,
	noscroll = { preventScroll: !0 },
	selected_kana = [],
	last_kana = "";

var nav = {
	focus: (e) => {
		if (null != e) d[qA](nav.tabindex[e].s)[nav.tabindex[e].i].focus(noscroll);
		else {
			if (null == nav.selected) return "specify id pls";
			d[qA](nav.tabindex[nav.selected].s)[nav.tabindex[nav.selected].i].focus(noscroll);
		}
	},
	add: (e, n) => {
		if ((window.removeEventListener("keydown", nav.init), 0 == d[qA](e).length)) return "error no elements found";
		null == n
			? "INPUT" == d[qA](e)[0].tagName
				? (nav.tabindex[d[qA](e)[0].parentElement.parentElement.id] = { i: 0, s: null })
				: (nav.tabindex[d[qA](e)[0].parentElement.id] = { i: 0, s: null })
			: (nav.tabindex[n] = { i: 0, s: null }),
			(nav.selected = n),
			(nav.tabindex[n].s = e),
			window.addEventListener("keydown", nav.init);
	},
	selected: null,
	init: (e) => {
		var k = e.key;
		var n = nav.selected;
		if (n != null && (k == "ArrowDown" || k == "ArrowUp") && d[aE].id != "chart") {
			var i = nav.tabindex[n].s;
			switch (k) {
				case "ArrowDown":
					e.preventDefault();
					nav.tabindex[n].i >= 0 && nav.tabindex[n].i != d[qA](i).length - 1 ? (nav.tabindex[n].i = Array.from(d[qA](i)).indexOf(d[aE]) + 1) : (nav.tabindex[n].i = 0),
						d[qA](i)[nav.tabindex[n].i].focus(noscroll);
					break;
				case "ArrowUp":
					e.preventDefault();
					0 != nav.tabindex[n].i ? (nav.tabindex[n].i = Array.from(d[qA](i)).indexOf(d[aE]) - 1) : (nav.tabindex[n].i = d[qA](i).length - 1), d[qA](i)[nav.tabindex[n].i].focus(noscroll);
			}

			setTimeout(() => {
				var bcr = "getBoundingClientRect",
					r = d[aE][bcr](),
					l = r.top - d.body[bcr]().top + r.height / 2;
				d[aE].closest("#content").scrollBy({ left: 0, top: l - window.innerHeight / 2, behavior: "smooth" });
			}, 0);
		}
	},
	tabindex: {},
};

window.addEventListener("load", function load(e) {
	window.removeEventListener("load", load);
	console.log("yes");

	nav.add("#hiragana #content > .cc [tabindex], #hiragana #murky:not(.disabled) [tabindex]", "hiragana");
	nav.add("#katakana #content > .cc [tabindex], #katakana #murky:not(.disabled) [tabindex]", "katakana");
	nav.add("#options [tabindex]", "options");
	nav.add("#main [tabindex]:not([disabled])", "main");
	nav.focus();

	if (localStorage.options === undefined) {
		let a = { show_diatrics: false, dark_mode: true, font: 1, ads: true, toast: 3, save_stats: true, stats: { p: 0, f: 0 } };
		localStorage.options = JSON.stringify(a);
		localStorage.zoomLevel = 1;
		options = a;
	} else {
		options = JSON.parse(localStorage.options);
	}

	d[gI]("chart").style.setProperty("--scale", [0.77, 0.93, 1.16, 1.54][localStorage.zoomLevel]);

	update();
	loadSettings();
	setSettings();

	if (options.save_stats == false) {
		options.stats = { p: 0, f: 0 };
	}

	function changeu(e) {
		let t = e.target;
		if (t.type == "range") {
			t.dataset.value = t.value;
		}
		if (Array.from(d[qA]("#options *")).includes(d[aE])) setSettings();
	}

	window.addEventListener("change", changeu);
	window.addEventListener("input", changeu);

	(() => {
		let longpress = false;
		const longpress_timespan = 500;
		let timeout;

		window.addEventListener("keydown", (e) => {
			let n = e.target;
			if (d[aE].id == "stats") {
				e.preventDefault();
				window.history.back();
				setTimeout(() => {
					d[gI]("game_input").focus();
				}, 500);
				return;
			}
			if (d[aE].id == "chart") {
				switch (e.key) {
					case "SoftLeft":
						chartZoomOut();
						return;
						break;
					case "SoftRight":
						chartZoomIn();
						return;
						break;
				}
			}

			if (n.id == "chart" && !e.shiftKey) {
				e.preventDefault();
				let o = d[gI]("chart").children[0];
				let m = Number(window.getComputedStyle(o).marginBottom.split("px")[0]);
				let z = o.offsetHeight * 2 + 7;
				let a = { behavior: "smooth" };
				switch (e.key) {
					case "ArrowUp":
						a.top = "-" + (m + z);
						break;
					case "ArrowDown":
						a.top = m + z;
						break;
					case "ArrowLeft":
						a.left = "-" + (m + z);
						break;
					case "ArrowRight":
						a.left = m + z;
						break;
					case "Backspace":
						window.history.back();
						softkeyHandler("game");
						setTimeout(() => {
							d[gI]("game_input").focus();
						}, 5);
						return;
						break;

					default:
						return;
						break;
				}
				n.scrollBy(a);
				return;
			}
			switch (e.key) {
				case "Enter":
					if ((n.tagName == "INPUT" || n.tagName == "BUTTON" || n.className == "l") && !Array.from(d[qA]("#main *")).includes(d[aE])) n.click();
					if (n.id == "kana") toast.cancel();
					break;
				case "Backspace":
					if (Array.from(d[qA]("#hiragana *, #katakana *, #options *")).includes(d[aE])) select.ergo("main"), update();
					if (d[aE].type != "text" || d[aE].value == "") e.preventDefault();
					if (Array.from(d[qA]("#main *")).includes(d[aE])) window.close();
					if (n.id == "game_input" && n.value == "") select.ergo("main");
					if (Array.from(d[qA]("#options *")).includes(d[aE])) {
						if (localStorage.options != JSON.stringify(options)) {
							localStorage.options = JSON.stringify(options);
							toast("Changes saved!");
						}
					}
					break;
				case "SoftLeft":
					if (window.location.hash == "#game") (window.location.hash = "chart"), d[gI]("chart").focus(), softkeyHandler("zoom");
					break;
				case "SoftRight":
					if (window.location.hash == "#game") {
						let g = options.stats;
						window.location.hash = "stats";
						setTimeout(() => {
							d[gI]("stats").focus();
						}, 400);
						d[qS]("#stats div").innerText = `Total: ${g.p + g.f} \n Passed: ${g.p} \n Failed: ${g.f} \n Success Rate: ${((g.p / (g.p + g.f)) * 100 || 0).toFixed(2)}%`;
					}
					break;
				case "EndCall":
					e.preventDefault();
					window.close();
					break;
			}
			if (!e.repeat) {
				longpress = false;
				timeout = setTimeout(() => {
					longpress = true;
					(() => {
						// long press action
						switch (e.key) {
							case "Enter":
								if (n.id == "hiragana_btn" || n.id == "katakana_btn") {
									let b = n.id.split("_btn")[0],
										c = n[qS]("input").checked;
									for (let a of d[qA](`#${b} #content > .cc [tabindex], #${b} #murky:not(.disabled) [tabindex]`)) {
										if (c) {
											a.checked = false;
										} else {
											a.checked = true;
										}
									}
									update();
								}
								break;
						}
					})();
				}, longpress_timespan);
			}
		});

		window.addEventListener("keyup", (e) => {
			clearTimeout(timeout);
			if (!longpress) {
				// shortpress
				let n = e.target;
				switch (e.key) {
					case "Enter":
						if (Array.from(d[qA]("#main *")).includes(d[aE])) n.click();
						break;
				}
			}
		});
	})();

	window.addEventListener("click", (e) => {
		let map = {
			あ: "a",
			い: "i",
			う: "u",
			え: "e",
			お: "o",
			か: "ka",
			き: "ki",
			く: "ku",
			け: "ke",
			こ: "ko",
			さ: "sa",
			し: "shi",
			す: "su",
			せ: "se",
			そ: "so",
			た: "ta",
			ち: "chi",
			つ: "tsu",
			て: "te",
			と: "to",
			な: "na",
			に: "ni",
			ぬ: "nu",
			ね: "ne",
			の: "no",
			は: "ha",
			ひ: "hi",
			ふ: "fu",
			へ: "he",
			ほ: "ho",
			ま: "ma",
			み: "mi",
			む: "mu",
			め: "me",
			も: "mo",
			や: "ya",
			ゆ: "yu",
			よ: "yo",
			ら: "ra",
			り: "ri",
			る: "ru",
			れ: "re",
			ろ: "ro",
			わ: "wa",
			を: "wo",
			ん: "n",
			が: "ga",
			ぎ: "gi",
			ぐ: "gu",
			げ: "ge",
			ご: "go",
			ざ: "za",
			じ: "ji",
			ず: "zu",
			ぜ: "ze",
			ぞ: "zo",
			だ: "da",
			ぢ: "ji",
			づ: "zu",
			で: "de",
			ど: "do",
			ば: "ba",
			び: "bi",
			ぶ: "bu",
			べ: "be",
			ぼ: "bo",
			ぱ: "pa",
			ぴ: "pi",
			ぷ: "pu",
			ぺ: "pe",
			ぽ: "po",
			ア: "a",
			イ: "i",
			ウ: "u",
			エ: "e",
			オ: "o",
			カ: "ka",
			キ: "ki",
			ク: "ku",
			ケ: "ke",
			コ: "ko",
			サ: "sa",
			シ: "shi",
			ス: "su",
			セ: "se",
			ソ: "so",
			タ: "ta",
			チ: "chi",
			ツ: "tsu",
			テ: "te",
			ト: "to",
			ナ: "na",
			ニ: "ni",
			ヌ: "nu",
			ネ: "ne",
			ノ: "no",
			ハ: "ha",
			ヒ: "hi",
			フ: "fu",
			ヘ: "he",
			ホ: "ho",
			マ: "ma",
			ミ: "mi",
			ム: "mu",
			メ: "me",
			モ: "mo",
			ヤ: "ya",
			ユ: "yu",
			ヨ: "yo",
			ラ: "ra",
			リ: "ri",
			ル: "ru",
			レ: "re",
			ロ: "ro",
			ワ: "wa",
			ヲ: "wo",
			ン: "n",
			ガ: "ga",
			ギ: "gi",
			グ: "gu",
			ゲ: "ge",
			ゴ: "go",
			ザ: "za",
			ジ: "ji",
			ズ: "zu",
			ゼ: "ze",
			ゾ: "zo",
			ダ: "da",
			ヂ: "ji",
			ヅ: "zu",
			デ: "de",
			ド: "do",
			バ: "ba",
			ビ: "bi",
			ブ: "bu",
			ベ: "be",
			ボ: "bo",
			パ: "pa",
			ピ: "pi",
			プ: "pu",
			ペ: "pe",
			ポ: "po",
		};
		let n = e.target;
		switch (n.id) {
			case "license_opt":
				var s = "/licenso.html";
				if (options.ads) {
					s = "/js/ad.html";
				}
				window.open(s);
				break;
			case "clear_opt":
				options.stats = { f: 0, p: 0 };
				break;
			case "hiragana_btn":
			case "katakana_btn":
			case "options_btn":
				select.ergo(n.id.split("_btn")[0]);
				break;
			case "select_btn":
				select.game();
				break;
			case "game_input":
				if (n.value != "") {
					let ka = d[gI]("kana"),
						i = d[gI]("game_input");
					function score(a) {
						ka.removeAttribute("class");
						i.value = "";
						i.focus();
						options.stats[a] += 1;
						localStorage.options = JSON.stringify(options);
						randomKana();
					}
					if (n.value.toLowerCase() == map[ka.innerText]) {
						ka.focus();
						ka.className = "right";
						setTimeout(() => score("p"), (options.toast / 3) * 900);
					} else {
						ka.focus();
						ka.className = "wrong";
						toast(`Correct answer: ${map[ka.innerText]}`, () => score("f"));
					}
				}
				break;
		}
	});

	if (!navigator.userAgent.includes("KAIOS")) {
		window.addEventListener("mousedown", (e) => {
			let n = e.target;
			let x = /cc|sc/g;
			if (n.className && (n.className.match(x) || n.parentElement.className.match(x))) {
				setTimeout(() => {
					(n.getElementsByTagName("input")[0] || n.parentElement.getElementsByTagName("input")[0]).focus();
				}, 0);
			}
		});

		window.addEventListener("keydown", (e) => {
			var k = e.key,
				a;
			if (e.shiftKey) {
				if (k == "ArrowLeft") a = "SoftLeft";
				else if (k == "ArrowRight") a = "SoftRight";
				else return;
			} else return;
			if (a == undefined) return;
			window.dispatchEvent(new KeyboardEvent("keydown", { key: a }));
		});
	}

	setTimeout(() => {
		d[gI]("splash").style = "opacity:0;visibility:hidden;";
	}, 1000);
});

var select = {
	ergo: (s) => {
		softkeyHandler(["", "SELECT", ""]);
		nav.selected = s;
		if (s !== "main") window.location.hash = s;
		else window.history.back();
		setTimeout(() => {
			nav.focus(s);
		}, 5);
	},
	game: () => {
		softkeyHandler("game");
		nav.selected = null;
		window.location.hash = "game";
		setTimeout(() => {
			d[gI]("game_input").focus();
		}, 100);

		selected_kana = [];
		last_kana = "";
		let dia = {
			か: ["が", "ぎ", "ぐ", "げ", "ご"],
			さ: ["ざ", "じ", "ず", "ぜ", "ぞ"],
			た: ["だ", "ぢ", "づ", "で", "ど"],
			は: ["ば", "び", "ぶ", "べ", "ぼ", "ぱ", "ぴ", "ぷ", "ぺ", "ぽ"],
			カ: ["ガ", "ギ", "グ", "ゲ", "ゴ"],
			サ: ["ザ", "ジ", "ズ", "ゼ", "ゾ"],
			タ: ["ダ", "ヂ", "ヅ", "デ", "ド"],
			ハ: ["バ", "ビ", "ブ", "ベ", "ボ", "パ", "ピ", "プ", "ペ", "ポ"],
		};

		for (let ka of d[qA](
			"#hiragana #content > .cc [tabindex]:checked~p, #hiragana #murky:not(.disabled) [tabindex]:checked~p,#katakana #content > .cc [tabindex]:checked~p, #katakana #murky:not(.disabled) [tabindex]:checked~p"
		)) {
			let a = ka.innerText.split(" ");
			selected_kana = selected_kana.concat(a);
			if (!options.show_diatrics && dia[a[0]] != undefined) {
				selected_kana = selected_kana.concat(dia[a[0]]);
			}
		}

		randomKana();
	},
};

function randomKana() {
	let r = Math.floor(Math.random() * selected_kana.length);
	if (selected_kana[r] != last_kana) {
		last_kana = selected_kana[r];
		d[qS]("#game #kana").innerText = selected_kana[r];
	} else {
		randomKana();
	}
}
function update() {
	for (let k of ["hiragana", "katakana"]) {
		let s = d[qS](`#${k}_btn input`);
		if (d[qA](`#${k} #content > .cc [tabindex]:checked, #${k} #murky:not(.disabled) [tabindex]:checked`).length > 0) s.checked = true;
		else s.checked = false;
	}
	let s = d[gI]("select_btn");
	if (d[qA]("#hiragana_btn input:checked,#katakana_btn input:checked").length > 0) {
		s.disabled = false;
		s.innerText = "Start";
	} else {
		s.disabled = true;
		s.innerText = "Select one";
	}
}
function loadSettings() {
	for (let a of d[qA]("#options input")) {
		let b = a.id.split("_opt")[0];
		switch (b) {
			case "dark":
				a.checked = options.dark_mode;
				break;
			case "dia":
				a.checked = options.show_diatrics;
				break;
			case "font":
			case "toast":
				a.value = options[b];
				a.dataset.value = options[b];
				break;
		}
	}
}
function setSettings() {
	for (let a of d[qA]("#options input")) {
		let b = a.id.split("_opt")[0];
		switch (b) {
			case "dark":
				options.dark_mode = a.checked;
				break;
			case "dia":
				options.show_diatrics = a.checked;
				break;
			case "font":
			case "toast":
				options[b] = a.value;
				break;
		}
	}
	applySettings();
}
function applySettings() {
	let root = d.documentElement;
	root.setAttribute("style", "");
	if (!options.dark_mode) {
		let a = {
			"--button-background": "#363636",
			"--header-color": "#000",
			"--slider-color": "rgba(0, 0, 0, 0.5)",
			"--arrow-color": "#363636",
			"--button-color": "#000",
			"--header-background": "#fff",
			"--softkeys-color": "#000",
			"--item-background": "#fff",
			"--item-text-color": "#363636",
			"--item-subtext-color": "#363636",
			"--app-background": "white",
			"--softkeys-background": "#fff",
			"--on-image": "var(--black-on)",
			"--off-image": "var(--black-off)",
			"--soft-bord": "0.2rem solid #363636",
			"--soft-padd": "0.3rem",
		};
		for (let b in a) {
			root.style.setProperty(b, a[b]);
		}
		d[qS]("meta[name='theme-color']").outerHTML = `<meta content="rgb(230, 230, 230)" name="theme-color">`;
	} else {
		d[qS]("meta[name='theme-color']").outerHTML = `<meta content="rgb(14, 14, 14)" name="theme-color">`;
	}
	root.style.fontSize = ["8px", "10px", "12px"][options.font];
	for (let i of d[qA]("#murky")) {
		i.className = options.show_diatrics ? "" : "disabled";
	}
}

// KaiOS-Native-UI
(() => {
	const callFunction = (t, e) => {
			let n = e.target;
			n.className && n.className.match(/cci|sci/g) && !n.parentElement.classList.contains("l") && t(n.parentElement);
		},
		blur = (t) => t.classList.remove("sel"),
		focus = (t) => t.classList.add("sel");
	window.addEventListener("focus", (t) => callFunction(focus, t), !0), window.addEventListener("blur", (t) => callFunction(blur, t), !0);
})();
// toaster by arma7x
(() => {
	var x = d[gC]("toast")[0];
	var queue = [];
	var timeout;
	toast = (text, cb) => {
		let len = queue.length;
		queue.push({ text: text, cb: cb });
		if (len === 0) {
			queue_toast({ text: text, cb: cb });
		}
	};

	toast.cancel = () => {
		clearTimeout(timeout);
		timeout_funct();
	};

	function timeout_funct() {
		timeout = null;
		x.classList.remove("toast--on");

		if (queue[0] != undefined) {
			let cb = queue[0].cb;
			cb && typeof cb === "function" ? cb() : false;
		}

		queue = queue.slice(1);
		if (queue.length > 0) {
			setTimeout(() => {
				queue_toast(o);
			}, 1000);
		}
	}

	function queue_toast(o) {
		x.innerText = queue[0].text;
		x.classList.add("toast--on");
		timeout = setTimeout(timeout_funct, options.toast * 1000);
	}
})();
// chart handler
(() => {
	var z = 1;
	var s = localStorage;
	(s.zoomLevel && (z = Number(s.zoomLevel))) || s.setItem("zoomLevel", 1);
	let map = [0.77, 0.93, 1.16, 1.54];
	let y = d[gI]("chart").style;
	chartZoomIn = () => {
		if (z >= 0 && z != map.length - 1) y.setProperty("--scale", map[z + 1]);
		else return;
		z = z + 1;
		s.zoomLevel = z;
	};
	chartZoomOut = () => {
		if (z != 0 && z <= map.length - 1) y.setProperty("--scale", map[z - 1]);
		else return;
		z = z - 1;
		s.zoomLevel = z;
	};
})();

function softkeyHandler(a) {
	if (a == "game")
		return softkeyHandler([
			`<svg fill="currentColor" viewBox="0 0 16 16"><path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"/><path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"/></svg>`,
			`<svg fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/></svg>`,
			`<svg fill="currentColor" viewBox="0 0 16 16"><path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"/></svg>`,
		]);
	if (a == "zoom")
		return softkeyHandler([
			`<svg fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/><path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/><path fill-rule="evenodd" d="M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/></svg>`,
			"",
			`<svg fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/><path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/><path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"/></svg>`,
		]);
	Array.from(d[qA](".softkey")).forEach((e, b) => {
		if (a[b] == undefined) return;
		e.innerHTML = a[b];
	});
}
