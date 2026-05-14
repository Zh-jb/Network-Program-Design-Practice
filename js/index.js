(function () {
	var homeSlides = [
		{ image: "img/home/1.jpeg", title: "旧日房间相册盒", desc: "呈现旧日空间里的成长记忆。" },
		{ image: "img/home/2.jpg", title: "童年相册纪念盒", desc: "收纳童年照片与纸条。" },
		{ image: "img/home/3.jpg", title: "暖灯书桌纪念画", desc: "记录学习桌旁的安静时光。" },
		{ image: "img/home/4.jpg", title: "老屋日常明信片", desc: "保存熟悉的家中角落。" },
		{ image: "img/home/5.jpg", title: "窗边回忆摆件", desc: "把日常光影做成纪念。" },
		{ image: "img/home/6.jpg", title: "时光收藏套装", desc: "归档主页全部素材。" }
	];

	var categories = {
		family: "家人志",
		books: "书香志",
		friends: "挚友志",
		travel: "山河志",
		growth: "成长志"
	};

	var products = [
		{ id: 1, name: "阿姨旧照纪念卡", category: "family", price: 46, image: "img/family/aunt.jpg", file: "family/aunt.jpg", desc: "把亲人旧照与手写祝福整理成可收藏的复古纪念卡。" },
		{ id: 2, name: "家庭合影桌面摆件", category: "family", price: 79, image: "img/family/fami.jpg", file: "family/fami.jpg", desc: "用家庭合影制作桌面摆件，放在书桌或床头都很合适。" },
		{ id: 3, name: "长辈旧照纪念卡一", category: "family", price: 49, image: "img/family/par1.jpg", file: "family/par1.jpg", desc: "整理长辈照片、家庭故事和纪念日期，保存一家人的温度。" },
		{ id: 4, name: "长辈旧照纪念卡二", category: "family", price: 49, image: "img/family/par2.jpg", file: "family/par2.jpg", desc: "适合制作家人主题相册的补充卡片，记录亲情回忆。" },
		{ id: 5, name: "微生物课堂收藏页", category: "books", price: 39, image: "img/books/bacteria.jpg", file: "books/bacteria.jpg", desc: "以课堂图片为主题的书香志素材页，适合校园课程纪念。" },
		{ id: 6, name: "生物笔记纪念页", category: "books", price: 42, image: "img/books/biology.jpg", file: "books/biology.jpg", desc: "把学习笔记、课本图像和课堂回忆整理成书页纪念品。" },
		{ id: 7, name: "校园书页套装", category: "books", price: 59, image: "img/books/study.jpg", file: "books/study.jpg", desc: "用书页、笔记和课程照片组合成校园主题纪念套装。" },
		{ id: 8, name: "老师寄语收藏卡", category: "books", price: 42, image: "img/books/teacher.jpg", file: "books/teacher.jpg", desc: "将老师寄语和课堂回忆整理成卡片，适合作为毕业留念。" },
		{ id: 9, name: "好友拍立得挂绳一", category: "friends", price: 49, image: "img/friends/1.jpg", file: "friends/1.jpg", desc: "把朋友合照做成拍立得挂绳，保留青春同行的细碎片段。" },
		{ id: 10, name: "好友拍立得挂绳二", category: "friends", price: 49, image: "img/friends/2.jpg", file: "friends/2.jpg", desc: "挚友志主题纪念物，记录朋友间的日常瞬间。" },
		{ id: 11, name: "朋友时光卡册", category: "friends", price: 76, image: "img/friends/3.jpg", file: "friends/3.jpg", desc: "用于收藏聚会、旅行与校园日常照片的小型纪念卡册。" },
		{ id: 12, name: "挚友同行纪念画", category: "friends", price: 88, image: "img/friends/4.jpg", file: "friends/4.jpg", desc: "将朋友同行的影像做成装饰画，适合毕业季互赠。" },
		{ id: 13, name: "旅途票根收纳册", category: "travel", price: 68, image: "img/travel/1.jpg", file: "travel/1.jpg", desc: "保存车票、门票、地图与照片，让一段旅程有迹可循。" },
		{ id: 14, name: "山河明信片一", category: "travel", price: 36, image: "img/travel/2.jpg", file: "travel/2.jpg", desc: "山河志主题明信片，用一张照片记录一次远行。" },
		{ id: 15, name: "山河明信片二", category: "travel", price: 36, image: "img/travel/3.jpg", file: "travel/3.jpg", desc: "适合写下旅途心情，和票根一起装进纪念册。" },
		{ id: 16, name: "远方风景拼贴画", category: "travel", price: 118, image: "img/travel/4.jpg", file: "travel/4.jpg", desc: "把旅行照片做成复古拼贴画，适合装饰书桌与房间。" },
		{ id: 17, name: "成人礼纪念册", category: "growth", price: 98, image: "img/growth/adult.jpg", file: "growth/adult.jpg", desc: "为十八岁、入学、获奖等重要时刻制作专属纪念册。" },
		{ id: 18, name: "荣誉证书收纳册", category: "growth", price: 86, image: "img/growth/certificate.jpg", file: "growth/certificate.jpg", desc: "整理活动、比赛与证书照片，记录一步一步长大的证据。" },
		{ id: 19, name: "交流活动纪念页", category: "growth", price: 65, image: "img/growth/communicate.jpg", file: "growth/communicate.jpg", desc: "保存交流活动照片与心得，记录成长中的沟通时刻。" },
		{ id: 20, name: "毕业成长纪念盒", category: "growth", price: 128, image: "img/growth/graduate.jpg", file: "growth/graduate.jpg", desc: "适合毕业季收藏照片、证书、徽章与纪念卡。" },
		{ id: 21, name: "志愿成长徽章册", category: "growth", price: 86, image: "img/growth/help.jpg", file: "growth/help.jpg", desc: "整理志愿服务和帮助他人的照片，留下成长中的善意。" },
		{ id: 22, name: "参观学习纪念册", category: "growth", price: 72, image: "img/growth/visit.jpg", file: "growth/visit.jpg", desc: "将参观学习、实践活动和心得文字汇集成册。" }
	];

	var cartKey = "memoryKeepsakesCart";
	var orderKey = "memoryKeepsakesOrders";
	var activeCategory = getQuery("cat") || "all";
	var keyword = "";

	function $(id) {
		return document.getElementById(id);
	}

	function getQuery(name) {
		var query = window.location.search.substring(1).split("&");
		var i;

		for (i = 0; i < query.length; i++) {
			var pair = query[i].split("=");
			if (decodeURIComponent(pair[0]) === name) {
				return decodeURIComponent(pair[1] || "");
			}
		}
		return "";
	}

	function getStore(key, fallback) {
		try {
			return JSON.parse(localStorage.getItem(key)) || fallback;
		} catch (e) {
			return fallback;
		}
	}

	function setStore(key, value) {
		localStorage.setItem(key, JSON.stringify(value));
	}

	function formatPrice(price) {
		return "￥" + price.toFixed(2);
	}

	function getCart() {
		return getStore(cartKey, []);
	}

	function saveCart(cart) {
		setStore(cartKey, cart);
		updateCartCount();
	}

	function updateCartCount() {
		var el = $("cartCount");
		var cart = getCart();
		var count = 0;
		var i;

		for (i = 0; i < cart.length; i++) {
			count += cart[i].qty;
		}
		if (el) {
			el.innerHTML = count;
		}
	}

	function findProduct(id) {
		var i;

		for (i = 0; i < products.length; i++) {
			if (products[i].id === id) {
				return products[i];
			}
		}
		return null;
	}

	function addToCart(id, qty) {
		var cart = getCart();
		var product = findProduct(id);
		var count = qty || 1;
		var i;

		if (!product) {
			return;
		}

		for (i = 0; i < cart.length; i++) {
			if (cart[i].id === id) {
				cart[i].qty += count;
				saveCart(cart);
				alert("已加入购物车");
				return;
			}
		}

		cart.push({ id: id, qty: count });
		saveCart(cart);
		alert("已加入购物车");
	}

	function setActiveButtons() {
		var tabs = $("categoryTabs");
		var buttons;
		var i;

		if (!tabs) {
			return;
		}

		buttons = tabs.getElementsByTagName("button");
		for (i = 0; i < buttons.length; i++) {
			buttons[i].className = buttons[i].getAttribute("data-filter") === activeCategory ? "active" : "";
		}
	}

	function getFilteredProducts() {
		var list = [];
		var i;

		for (i = 0; i < products.length; i++) {
			var item = products[i];
			var text = item.name + categories[item.category] + item.file + item.desc;
			var matchCategory = activeCategory === "all" || item.category === activeCategory;
			var matchKeyword = keyword === "" || text.indexOf(keyword) > -1;

			if (matchCategory && matchKeyword) {
				list.push(item);
			}
		}
		return list;
	}

	function productCard(item) {
		return '' +
			'<div class="product-card">' +
				'<a class="product-img" href="detail.html?id=' + item.id + '">' +
					'<img src="' + item.image + '" alt="' + item.name + '">' +
					'<span class="product-tag">' + categories[item.category] + '</span>' +
				'</a>' +
				'<div class="product-info">' +
					'<h3><a href="detail.html?id=' + item.id + '">' + item.name + '</a></h3>' +
					'<p>' + item.desc + '</p>' +
					'<div class="product-bottom">' +
						'<span class="price">' + formatPrice(item.price) + '</span>' +
						'<button class="add-cart" type="button" data-id="' + item.id + '"><i class="fas fa-cart-plus"></i>加入购物车</button>' +
					'</div>' +
				'</div>' +
			'</div>';
	}

	function bindAddButtons(scope) {
		var buttons = scope.getElementsByTagName("button");
		var i;

		for (i = 0; i < buttons.length; i++) {
			if (buttons[i].getAttribute("data-id")) {
				buttons[i].onclick = function () {
					addToCart(parseInt(this.getAttribute("data-id"), 10), 1);
				};
			}
		}
	}

	function renderProducts() {
		var grid = $("productGrid");
		var empty = $("emptyTip");
		var list;
		var html = "";
		var i;
		var keys = ["family", "books", "friends", "travel", "growth"];
		var k;

		if (!grid) {
			return;
		}

		list = getFilteredProducts();
		if (!list.length) {
			html = "";
		} else if (activeCategory === "all") {
			for (k = 0; k < keys.length; k++) {
				html += '<div class="category-block"><h3>' + categories[keys[k]] + '<span>' + keys[k] + ' 文件夹</span></h3>';
				for (i = 0; i < products.length; i++) {
					if (products[i].category === keys[k] && (keyword === "" || (products[i].name + categories[products[i].category] + products[i].file + products[i].desc).indexOf(keyword) > -1)) {
						html += productCard(products[i]);
					}
				}
				html += '</div>';
			}
		} else {
			for (i = 0; i < list.length; i++) {
				html += productCard(list[i]);
			}
		}
		grid.innerHTML = html;
		if (empty) {
			empty.style.display = list.length ? "none" : "block";
		}
		bindAddButtons(grid);
	}

	function renderFeatured() {
		var grid = $("featuredGrid");
		var ids = [2, 7, 9, 16, 20, 18];
		var html = "";
		var i;
		var product;

		if (!grid) {
			return;
		}

		for (i = 0; i < ids.length; i++) {
			product = findProduct(ids[i]);
			if (product) {
				html += productCard(product);
			}
		}
		grid.innerHTML = html;
		bindAddButtons(grid);
	}

	function bindProductTools() {
		var tabs = $("categoryTabs");
		var search = $("searchInput");

		if (tabs) {
			tabs.onclick = function (event) {
				var target = event.target || event.srcElement;
				if (target.tagName.toLowerCase() !== "button") {
					return;
				}
				activeCategory = target.getAttribute("data-filter");
				setActiveButtons();
				renderProducts();
			};
			setActiveButtons();
		}

		if (search) {
			search.onkeyup = function () {
				keyword = search.value.replace(/^\s+|\s+$/g, "");
				renderProducts();
			};
		}
	}

	function renderHomeSlides() {
		var heroImage = $("heroImage");
		var heroTitle = $("heroTitle");
		var heroDesc = $("heroDesc");
		var thumbs = $("homeThumbs");
		var index = 0;
		var html = "";
		var i;

		if (!heroImage || !thumbs) {
			return;
		}

		function show(next) {
			index = next;
			heroImage.src = homeSlides[index].image;
			heroTitle.innerHTML = homeSlides[index].title;
			heroDesc.innerHTML = homeSlides[index].desc;
			markThumb();
		}

		function markThumb() {
			var links = thumbs.getElementsByTagName("a");
			var j;
			for (j = 0; j < links.length; j++) {
				links[j].className = j === index ? "active" : "";
			}
		}

		for (i = 0; i < homeSlides.length; i++) {
			html += '<a href="javascript:;" data-index="' + i + '"><img src="' + homeSlides[i].image + '" alt="' + homeSlides[i].title + '"><span>' + homeSlides[i].title + '</span></a>';
		}
		thumbs.innerHTML = html;
		thumbs.onclick = function (event) {
			var target = event.target || event.srcElement;
			while (target && target.tagName && target.tagName.toLowerCase() !== "a") {
				target = target.parentNode;
			}
			if (target && target.getAttribute("data-index")) {
				show(parseInt(target.getAttribute("data-index"), 10));
			}
		};
		show(0);
		setInterval(function () {
			show((index + 1) % homeSlides.length);
		}, 3000);
	}

	function renderDetail() {
		var box = $("detailBox");
		var id = parseInt(getQuery("id"), 10);
		var item = findProduct(id) || products[0];

		if (!box) {
			return;
		}

		box.innerHTML = '' +
			'<div class="detail-img"><img src="' + item.image + '" alt="' + item.name + '"></div>' +
			'<div class="detail-info">' +
				'<p class="sub-title">' + categories[item.category] + ' · ' + item.file + '</p>' +
				'<h1>' + item.name + '</h1>' +
				'<p>' + item.desc + '</p>' +
				'<div class="detail-price">' + formatPrice(item.price) + '</div>' +
				'<div class="qty-box">' +
					'<button id="qtyMinus" type="button">-</button>' +
					'<input id="detailQty" type="text" value="1">' +
					'<button id="qtyPlus" type="button">+</button>' +
				'</div>' +
				'<button id="detailAddCart" class="line-btn" type="button">加入购物车</button>' +
				'<a class="plain-link" href="products.html?cat=' + item.category + '">返回' + categories[item.category] + '</a>' +
			'</div>';

		$("qtyMinus").onclick = function () {
			var qty = parseInt($("detailQty").value, 10) || 1;
			$("detailQty").value = Math.max(1, qty - 1);
		};
		$("qtyPlus").onclick = function () {
			var qty = parseInt($("detailQty").value, 10) || 1;
			$("detailQty").value = qty + 1;
		};
		$("detailAddCart").onclick = function () {
			addToCart(item.id, parseInt($("detailQty").value, 10) || 1);
		};
	}

	function renderCartPage() {
		var listBox = $("cartPageList");
		var totalBox = $("cartTotal");
		var cart = getCart();
		var total = 0;
		var html = "";
		var i;
		var item;
		var product;

		if (!listBox) {
			return;
		}

		if (!cart.length) {
			listBox.innerHTML = '<div class="cart-empty"><i class="fas fa-shopping-cart"></i><p>购物车还是空的，请先去商品展示页选择纪念物。</p></div>';
			if (totalBox) {
				totalBox.innerHTML = "￥0";
			}
			return;
		}

		html += '<table><thead><tr><th>商品</th><th>栏目</th><th>单价</th><th>数量</th><th>小计</th><th>操作</th></tr></thead><tbody>';
		for (i = 0; i < cart.length; i++) {
			item = cart[i];
			product = findProduct(item.id);
			if (!product) {
				continue;
			}
			total += product.price * item.qty;
			html += '<tr>' +
				'<td class="cart-goods"><img src="' + product.image + '" alt="' + product.name + '"><span>' + product.name + '</span></td>' +
				'<td>' + categories[product.category] + '</td>' +
				'<td>' + formatPrice(product.price) + '</td>' +
				'<td><button class="qty-change" data-id="' + product.id + '" data-step="-1">-</button><em>' + item.qty + '</em><button class="qty-change" data-id="' + product.id + '" data-step="1">+</button></td>' +
				'<td>' + formatPrice(product.price * item.qty) + '</td>' +
				'<td><button class="remove-row" data-id="' + product.id + '">删除</button></td>' +
			'</tr>';
		}
		html += '</tbody></table>';
		listBox.innerHTML = html;
		if (totalBox) {
			totalBox.innerHTML = formatPrice(total);
		}
		bindCartPageButtons();
	}

	function bindCartPageButtons() {
		var listBox = $("cartPageList");
		var buttons = listBox.getElementsByTagName("button");
		var i;

		for (i = 0; i < buttons.length; i++) {
			buttons[i].onclick = function () {
				var id = parseInt(this.getAttribute("data-id"), 10);
				var step = parseInt(this.getAttribute("data-step"), 10);
				var cart = getCart();
				var next = [];
				var j;

				for (j = 0; j < cart.length; j++) {
					if (cart[j].id === id) {
						if (this.className === "remove-row") {
							continue;
						}
						cart[j].qty += step;
						if (cart[j].qty < 1) {
							continue;
						}
					}
					next.push(cart[j]);
				}
				saveCart(next);
				renderCartPage();
			};
		}
	}

	function checkout() {
		var cart = getCart();
		var orders = getStore(orderKey, []);
		var total = 0;
		var items = [];
		var i;
		var product;

		if (!cart.length) {
			alert("购物车为空，无法提交订单。");
			return;
		}

		for (i = 0; i < cart.length; i++) {
			product = findProduct(cart[i].id);
			if (product) {
				total += product.price * cart[i].qty;
				items.push({ name: product.name, category: categories[product.category], qty: cart[i].qty, price: product.price });
			}
		}

		orders.unshift({
			id: "SG" + new Date().getTime(),
			time: new Date().toLocaleString(),
			total: total,
			status: "已提交",
			items: items
		});
		setStore(orderKey, orders);
		saveCart([]);
		alert("订单已提交，正在进入订单管理页。");
		window.location.href = "orders.html";
	}

	function renderOrders() {
		var box = $("orderList");
		var orders = getStore(orderKey, []);
		var html = "";
		var i;
		var j;

		if (!box) {
			return;
		}
		if (!orders.length) {
			box.innerHTML = '<div class="cart-empty"><i class="fas fa-clipboard-list"></i><p>暂无订单记录。提交购物车后会在这里显示。</p></div>';
			return;
		}
		for (i = 0; i < orders.length; i++) {
			html += '<div class="order-card"><h3>订单号：' + orders[i].id + '</h3><p>提交时间：' + orders[i].time + '　状态：' + orders[i].status + '　合计：' + formatPrice(orders[i].total) + '</p><ul>';
			for (j = 0; j < orders[i].items.length; j++) {
				html += '<li>' + orders[i].items[j].category + ' - ' + orders[i].items[j].name + ' x ' + orders[i].items[j].qty + '</li>';
			}
			html += '</ul></div>';
		}
		box.innerHTML = html;
	}

	function bindForms() {
		var loginForm = $("loginForm");
		var registerForm = $("registerForm");

		if (loginForm) {
			loginForm.onsubmit = function () {
				var name = $("loginName").value.replace(/^\s+|\s+$/g, "");
				var pwd = $("loginPwd").value;
				var msg = $("loginMsg");
				if (!name || !pwd) {
					msg.innerHTML = "账号和密码不能为空。";
					return false;
				}
				msg.innerHTML = "登录成功";
				return false;
			};
		}

		if (registerForm) {
			registerForm.onsubmit = function () {
				var name = $("regName").value.replace(/^\s+|\s+$/g, "");
				var email = $("regEmail").value.replace(/^\s+|\s+$/g, "");
				var pwd = $("regPwd").value;
				var pwd2 = $("regPwd2").value;
				var msg = $("regMsg");
				if (name.length < 4 || name.length > 16) {
					msg.innerHTML = "账号长度必须为 4-16 位。";
					return false;
				}
				if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
					msg.innerHTML = "请输入正确的邮箱格式。";
					return false;
				}
				if (pwd.length < 6) {
					msg.innerHTML = "密码至少 6 位。";
					return false;
				}
				if (pwd !== pwd2) {
					msg.innerHTML = "两次输入的密码不一致。";
					return false;
				}
				msg.innerHTML = "注册成功";
				return false;
			};
		}
	}

	function showDate() {
		var el = $("todayText");
		var date = new Date();
		if (el) {
			el.innerHTML = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
		}
	}

	if ($("checkoutBtn")) {
		$("checkoutBtn").onclick = checkout;
	}

	showDate();
	updateCartCount();
	renderHomeSlides();
	renderFeatured();
	bindProductTools();
	renderProducts();
	renderDetail();
	renderCartPage();
	renderOrders();
	bindForms();
})();
