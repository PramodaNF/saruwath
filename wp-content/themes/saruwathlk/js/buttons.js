var stlib = stlib || {
        functions: [], functionCount: 0, util: {
            prop: function (b, a) {
                if (a) {
                    return a[b]
                }
                return function (d) {
                    return d[b]
                }
            }
        }, dynamicOn: true, parseQuery: function (e) {
            var f = new Object();
            if (!e) {
                return f
            }
            var a = e.split(/[;&]/);
            for (var d = 0; d < a.length; d++) {
                var h = a[d].split("=");
                if (!h || h.length != 2) {
                    continue
                }
                var b = unescape(h[0]);
                var g = unescape(h[1]);
                g = g.replace(/\+/g, " ");
                f[b] = g
            }
            return f
        }, getQueryParams: function () {
            var a = document.getElementById("st_insights_js");
            if (a && a.src) {
                var d = a.src.replace(/^[^\?]+\??/, "");
                var b = stlib.parseQuery(d);
                stlib.publisher = b.publisher;
                stlib.product = b.product
            }
        }
    };
stlib.global = {hash: stlib.util.prop("hash", document.location).substr(1)};
stlib.getQueryParams();
stlib.debugOn = false;
stlib.debug = {
    count: 0, messages: [], debug: function (b, a) {
        if (a && (typeof console) != "undefined") {
            console.log(b)
        }
        stlib.debug.messages.push(b)
    }, show: function (a) {
        for (message in stlib.debug.messages) {
            if ((typeof console) != "undefined") {
                if (a) {
                    /ERROR/.test(stlib.debug.messages[message]) ? console.log(stlib.debug.messages[message]) : null
                } else {
                    console.log(stlib.debug.messages[message])
                }
            }
        }
    }, showError: function () {
        stlib.debug.show(true)
    }
};
var _$d = function (a) {
    stlib.debug.debug(a, stlib.debugOn)
};
var _$d0 = function () {
    _$d(" ")
};
var _$d_ = function () {
    _$d("___________________________________________")
};
var _$d1 = function (a) {
    _$d(_$dt() + "| " + a)
};
var _$d2 = function (a) {
    _$d(_$dt() + "|  * " + a)
};
var _$de = function (a) {
    _$d(_$dt() + "ERROR: " + a)
};
var _$dt = function () {
    var b = new Date();
    var e = b.getHours();
    var a = b.getMinutes();
    var d = b.getSeconds();
    return e + ":" + a + ":" + d + " > "
};
stlib.allServices = {
    adfty: {title: "Adfty"},
    allvoices: {title: "Allvoices"},
    amazon_wishlist: {title: "Amazon Wishlist"},
    arto: {title: "Arto"},
    att: {title: "AT&T"},
    baidu: {title: "Baidu"},
    blinklist: {title: "Blinklist"},
    blip: {title: "Blip"},
    blogmarks: {title: "Blogmarks"},
    blogger: {title: "Blogger", type: "post"},
    buddymarks: {title: "BuddyMarks"},
    buffer: {title: "Buffer"},
    care2: {title: "Care2"},
    chiq: {title: "chiq"},
    citeulike: {title: "CiteULike"},
    chiq: {title: "chiq"},
    corkboard: {title: "Corkboard"},
    dealsplus: {title: "Dealspl.us"},
    delicious: {title: "Delicious"},
    digg: {title: "Digg"},
    diigo: {title: "Diigo"},
    dzone: {title: "DZone"},
    edmodo: {title: "Edmodo"},
    email: {title: "Email"},
    embed_ly: {title: "Embed.ly"},
    evernote: {title: "Evernote"},
    facebook: {title: "Facebook"},
    fark: {title: "Fark"},
    fashiolista: {title: "Fashiolista"},
    flipboard: {title: "Flipboard"},
    folkd: {title: "folkd.com"},
    foodlve: {title: "FoodLve"},
    fresqui: {title: "Fresqui"},
    friendfeed: {title: "FriendFeed"},
    funp: {title: "Funp"},
    fwisp: {title: "fwisp"},
    google: {title: "Google"},
    googleplus: {title: "Google +"},
    google_bmarks: {title: "Bookmarks"},
    google_reader: {title: "Google Reader"},
    google_translate: {title: "Google Translate"},
    hatena: {title: "Hatena"},
    instapaper: {title: "Instapaper"},
    jumptags: {title: "Jumptags"},
    kaboodle: {title: "Kaboodle"},
    kik: {title: "Kik"},
    linkagogo: {title: "linkaGoGo"},
    linkedin: {title: "LinkedIn"},
    livejournal: {title: "LiveJournal", type: "post"},
    mail_ru: {title: "mail.ru"},
    meneame: {title: "Meneame"},
    messenger: {title: "Messenger"},
    mister_wong: {title: "Mr Wong"},
    moshare: {title: "moShare"},
    myspace: {title: "MySpace"},
    n4g: {title: "N4G"},
    netlog: {title: "Netlog"},
    netvouz: {title: "Netvouz"},
    newsvine: {title: "Newsvine"},
    nujij: {title: "NUjij"},
    odnoklassniki: {title: "Odnoklassniki"},
    oknotizie: {title: "Oknotizie"},
    pinterest: {title: "Pinterest"},
    pocket: {title: "Pocket"},
    print: {title: "Print"},
    raise_your_voice: {title: "Raise Your Voice"},
    reddit: {title: "Reddit"},
    segnalo: {title: "Segnalo"},
    sharethis: {title: "ShareThis"},
    sina: {title: "Sina"},
    sonico: {title: "Sonico"},
    startaid: {title: "Startaid"},
    startlap: {title: "Startlap"},
    stumbleupon: {title: "StumbleUpon"},
    stumpedia: {title: "Stumpedia"},
    typepad: {title: "TypePad", type: "post"},
    tumblr: {title: "Tumblr"},
    twitter: {title: "Twitter"},
    viadeo: {title: "Viadeo"},
    virb: {title: "Virb"},
    vkontakte: {title: "Vkontakte"},
    voxopolis: {title: "VOXopolis"},
    whatsapp: {title: "WhatsApp"},
    weheartit: {title: "We Heart It"},
    wordpress: {title: "WordPress", type: "post"},
    xerpi: {title: "Xerpi"},
    xing: {title: "Xing"},
    yammer: {title: "Yammer"}
};
stlib.allOauthServices = {twitter: {title: "Twitter"}, linkedIn: {title: "LinkedIn"}, facebook: {title: "Facebook"}};
stlib.allNativeServices = {
    fblike: {title: "Facebook Like"},
    fbrec: {title: "Facebook Recommend"},
    fbsend: {title: "Facebook Send"},
    fbsub: {title: "Facebook Subscribe"},
    foursquaresave: {title: "Foursquare Save"},
    foursquarefollow: {title: "Foursquare Follow"},
    instagram: {title: "Instagram Badge"},
    plusone: {title: "Google +1"},
    pinterestfollow: {title: "Pinterest Follow"},
    twitterfollow: {title: "Twitter Follow"},
    youtube: {title: "Youtube Subscribe"}
};
stlib.allDeprecatedServices = {google_bmarks: {title: "Google Bookmarks"}, yahoo_bmarks: {title: "Yahoo Bookmarks"}};
stlib.allOtherServices = {
    copy: {title: "Copy Paste"},
    sharenow: {title: "ShareNow"},
    sharenow_auto: {title: "Frictionless Sharing"},
    fbunlike: {title: "Facebook Unlike"}
};
var _all_services = stlib.allServices;
stlib.buttonInfo = {
    buttonList: [], addButton: function (a) {
        stlib.buttonInfo.buttonList.push(a)
    }, getButton: function (a) {
        if (!isNaN(a)) {
            if (a >= stlib.buttonInfo.buttonList.length) {
                return false
            } else {
                return stlib.buttonInfo.buttonList[a]
            }
        } else {
            for (c = 0; c < stlib.buttonInfo.buttonList.length; c++) {
                if (stlib.buttonInfo.buttonList[c].service == a) {
                    debug(stlib.buttonInfo.buttonList[c])
                }
            }
        }
    }, clickButton: function (a) {
        if (!isNaN(a)) {
            if (a >= stlib.buttonInfo.buttonList.length) {
                return false
            } else {
                if (stlib.buttonInfo.getButton(a).service == "sharethis" || stlib.buttonInfo.getButton(a).service == "email" || stlib.buttonInfo.getButton(a).service == "wordpress") {
                    stlib.buttonInfo.getButton(a).popup()
                } else {
                    stlib.buttonInfo.getButton(a).element.childNodes[0].onclick()
                }
            }
        } else {
            for (c = 0; c < stlib.buttonInfo.buttonList.length; c++) {
                if (stlib.buttonInfo.buttonList[c].service == a) {
                    if (stlib.buttonInfo.getButton(c).service == "sharethis" || stlib.buttonInfo.getButton(c).service == "email" || stlib.buttonInfo.getButton(c).service == "wordpress") {
                        stlib.buttonInfo.getButton(c).popup();
                        return true
                    } else {
                        stlib.buttonInfo.getButton(c).element.childNodes[0].onclick()
                    }
                }
            }
        }
    }, resetButton: function () {
        stlib.buttonInfo.buttonList = []
    }, listButton: function () {
        for (c = 0; c < stlib.buttonInfo.buttonList.length; c++) {
            debug(stlib.buttonInfo.buttonList[c])
        }
    }
};
stlib.buttonInfo.resetButton();
stlib.messageQueue = function () {
    var a = this;
    this.pumpInstance = null;
    this.queue = [];
    this.dependencies = ["data"];
    this.sending = true;
    this.setPumpInstance = function (b) {
        this.pumpInstance = b
    };
    this.send = function (f, d) {
        if ((typeof(f) == "string") && (typeof(d) == "string")) {
            _$d_();
            _$d1("Queueing message: " + d + ": " + f)
        }
        (typeof(f) == "string") && (typeof(d) == "string") ? this.queue.push([d, f]) : null;
        if (this.sending == false || stlib.browser.ieFallback) {
            if (this.pumpInstance != null) {
                if (this.dependencies.length > 0) {
                    for (messageSet in this.queue) {
                        if (this.queue.hasOwnProperty(messageSet) && this.queue[messageSet][0] == this.dependencies[0]) {
                            if (this.queue.length > 0) {
                                _$d1("Current Queue Length: " + this.queue.length);
                                var b = this.queue.shift();
                                this.pumpInstance.broadcastSendMessage(b[1]);
                                this.dependencies.shift();
                                this.sending = true
                            }
                        }
                    }
                } else {
                    if (this.queue.length > 0) {
                        _$d1("Current Queue Length: " + this.queue.length);
                        var b = this.queue.shift();
                        this.pumpInstance.broadcastSendMessage(b[1]);
                        this.sending = true
                    }
                }
            } else {
                _$d_();
                _$d1("Pump is null")
            }
        }
        if ((stlib.browser.ieFallback) && (this.queue.length > 0)) {
            var e = "process" + stlib.functionCount;
            stlib.functionCount++;
            stlib.functions[e] = a.process;
            setTimeout("stlib.functions['" + e + "']()", 500)
        }
    };
    this.process = function () {
        _$d1("Processing MessageQueue");
        a.sending = false;
        _$d(this.queue);
        a.send()
    }
};
stlib.sharer = {
    sharerUrl: (("https:" == document.location.protocol) ? "https://ws." : "http://wd.") + "sharethis.com/api/sharer.php",
    regAuto: new RegExp(/(.*?)_auto$/),
    constructParamString: function () {
        stlib.data.validate();
        stlib.hash.checkURL();
        var a = stlib.data.pageInfo;
        var d = "?";
        var b;
        for (b in a) {
            d += b + "=" + encodeURIComponent(a[b]) + "&";
            _$d1("constructParamStringPageInfo: " + b + ": " + a[b])
        }
        a = stlib.data.shareInfo;
        for (b in a) {
            d += b + "=" + encodeURIComponent(a[b]) + "&";
            _$d1("constructParamStringShareInfo: " + b + ": " + a[b])
        }
        d += "ts=" + new Date().getTime() + "&";
        return d.substring(0, d.length - 1)
    },
    stPrint: function () {
        window.print()
    },
    sharePinterest: function () {
        if (stlib.data.get("image", "shareInfo") == false || stlib.data.get("image", "shareInfo") == null || stlib.data.get("pinterest_native", "shareInfo") == "true") {
            if (typeof(stWidget) != "undefined" && typeof(stWidget.closeWidget) === "function") {
                stWidget.closeWidget()
            }
            if (typeof(stcloseWidget) === "function") {
                stcloseWidget()
            }
            if (typeof(stToolbar) != "undefined" && typeof(stToolbar.closeWidget) === "function") {
                stToolbar.closeWidget()
            }
            var a = document.createElement("script");
            a.setAttribute("type", "text/javascript");
            a.setAttribute("charset", "UTF-8");
            a.setAttribute("src", "//assets.pinterest.com/js/pinmarklet.js?r=" + Math.random() * 99999999);
            document.body.appendChild(a)
        }
    },
    share: function (e, a) {
        var d = stlib.sharer.constructParamString();
        _$d_();
        _$d1("Initiating a Share with the following url:");
        _$d2(stlib.sharer.sharerUrl + d);
        if ((stlib.data.get("destination", "shareInfo") == "print") || (stlib.data.get("destination", "shareInfo") == "email") || (stlib.data.get("destination", "shareInfo") == "pinterest" && stlib.data.get("source", "shareInfo").match(/share4xmobile/) == null && stlib.data.get("source", "shareInfo").match(/share4xpage/) == null && stlib.data.get("source", "shareInfo").match(/5xpage/) == null && (stlib.data.get("image", "shareInfo") == false || stlib.data.get("image", "shareInfo") == null)) || stlib.data.get("destination", "shareInfo") == "snapsets" || stlib.data.get("destination", "shareInfo") == "copy" || stlib.data.get("destination", "shareInfo") == "plusone" || stlib.data.get("destination", "shareInfo").match(stlib.sharer.regAuto) || (typeof(stlib.nativeButtons) != "undefined" && stlib.nativeButtons.checkNativeButtonSupport(stlib.data.get("destination", "shareInfo"))) || (stlib.data.get("pinterest_native", "shareInfo") != false && stlib.data.get("pinterest_native", "shareInfo") != null)) {
            var b = new Image(1, 1);
            b.src = stlib.sharer.sharerUrl + d;
            b.onload = function () {
                return
            }
        } else {
            if (typeof(a) != "undefined" && a == true) {
                window.open(stlib.sharer.sharerUrl + d, (new Date()).valueOf(), "scrollbars=1, status=1, height=480, width=640, resizable=1")
            } else {
                window.open(stlib.sharer.sharerUrl + d)
            }
        }
        e ? e() : null
    }
};
stlib.browser = {
    iemode: null,
    firefox: null,
    firefoxVersion: null,
    safari: null,
    chrome: null,
    opera: null,
    windows: null,
    mac: null,
    ieFallback: (/MSIE [6789]/).test(navigator.userAgent),
    init: function () {
        var a = navigator.userAgent.toString().toLowerCase();
        if (/msie|trident/i.test(a)) {
            if (document.documentMode) {
                stlib.browser.iemode = document.documentMode
            } else {
                stlib.browser.iemode = 5;
                if (document.compatMode) {
                    if (document.compatMode == "CSS1Compat") {
                        stlib.browser.iemode = 7
                    }
                }
            }
        }
        stlib.browser.firefox = ((a.indexOf("firefox") != -1) && (typeof InstallTrigger !== "undefined")) ? true : false;
        stlib.browser.firefoxVersion = (a.indexOf("firefox/5.0") != -1 || a.indexOf("firefox/9.0") != -1) ? false : true;
        stlib.browser.safari = (a.indexOf("safari") != -1 && a.indexOf("chrome") == -1) ? true : false;
        stlib.browser.chrome = (a.indexOf("safari") != -1 && a.indexOf("chrome") != -1) ? true : false;
        stlib.browser.opera = (window.opera || a.indexOf(" opr/") >= 0) ? true : false;
        stlib.browser.windows = (a.indexOf("windows") != -1) ? true : false;
        stlib.browser.mac = (a.indexOf("macintosh") != -1) ? true : false
    },
    getIEVersion: function () {
        return stlib.browser.iemode
    },
    isFirefox: function () {
        return stlib.browser.firefox
    },
    firefox8Version: function () {
        return stlib.browser.firefoxVersion
    },
    isSafari: function () {
        return stlib.browser.safari
    },
    isWindows: function () {
        return stlib.browser.windows
    },
    isChrome: function () {
        return stlib.browser.chrome
    },
    isOpera: function () {
        return stlib.browser.opera
    },
    isMac: function () {
        return stlib.browser.mac
    }
};
stlib.browser.init();
stlib.browser.mobile = {
    mobile: false,
    uagent: null,
    android: null,
    iOs: null,
    silk: null,
    windows: null,
    kindle: null,
    url: null,
    sharCreated: false,
    sharUrl: null,
    isExcerptImplementation: false,
    iOsVer: 0,
    init: function () {
        this.uagent = navigator.userAgent.toLowerCase();
        if (this.isAndroid()) {
            this.mobile = true
        } else {
            if (this.isIOs()) {
                this.mobile = true
            } else {
                if (this.isSilk()) {
                    this.mobile = true
                } else {
                    if (this.isWindowsPhone()) {
                        this.mobile = true
                    } else {
                        if (this.isKindle()) {
                            this.mobile = true
                        }
                    }
                }
            }
        }
    },
    isMobile: function isMobile() {
        return this.mobile
    },
    isAndroid: function () {
        if (this.android === null) {
            this.android = this.uagent.indexOf("android") > -1
        }
        return this.android
    },
    isKindle: function () {
        if (this.kindle === null) {
            this.kindle = this.uagent.indexOf("kindle") > -1
        }
        return this.kindle
    },
    isIOs: function isIOs() {
        if (this.iOs === null) {
            this.iOs = (this.uagent.indexOf("ipad") > -1) || (this.uagent.indexOf("ipod") > -1) || (this.uagent.indexOf("iphone") > -1)
        }
        return this.iOs
    },
    isSilk: function () {
        if (this.silk === null) {
            this.silk = this.uagent.indexOf("silk") > -1
        }
        return this.silk
    },
    getIOSVersion: function () {
        if (this.isIOs()) {
            this.iOsVer = this.uagent.substr((this.uagent.indexOf("os ")) + 3, 5).replace(/\_/g, ".")
        }
        return this.iOsVer
    },
    isWindowsPhone: function () {
        if (this.windows === null) {
            this.windows = this.uagent.indexOf("windows phone") > -1
        }
        return this.windows
    }
};
stlib.browser.mobile.init();
stlib = stlib || {};
stlib.browser = stlib.browser || {};
stlib.browser.mobile = stlib.browser.mobile || {};
stlib.browser.mobile.handleForMobileFriendly = function (k, d, l) {
    if (!this.isMobile()) {
        return false
    }
    if (typeof(stLight) === "undefined") {
        stLight = {};
        stLight.publisher = d.publisher;
        stLight.sessionID = d.sessionID;
        stLight.fpc = ""
    }
    var t = (typeof(k.title) !== "undefined") ? k.title : encodeURIComponent(document.title);
    var e = (typeof(k.url) !== "undefined") ? k.url : document.URL;
    var u = (d.short_url != "" && d.short_url != null) ? d.short_url : "";
    if (d.service == "sharethis") {
        var t = (typeof(k.title) !== "undefined") ? k.title : encodeURIComponent(document.title);
        var e = (typeof(k.url) !== "undefined") ? k.url : document.URL;
        var f = "";
        if (typeof(k.summary) != "undefined" && k.summary != null) {
            f = k.summary
        }
        var a = document.createElement("form");
        a.setAttribute("method", "GET");
        a.setAttribute("action", "http://edge.sharethis.com/share4x/mobile.html");
        a.setAttribute("target", "_blank");
        var p = {
            url: e,
            title: t,
            summary: f,
            destination: d.service,
            publisher: stLight.publisher,
            fpc: stLight.fpc,
            sessionID: stLight.sessionID,
            short_url: u
        };
        if (typeof(k.image) != "undefined" && k.image != null) {
            p.image = k.image
        }
        if (typeof(k.summary) != "undefined" && k.summary != null) {
            p.desc = k.summary
        }
        if (typeof(l) != "undefined" && typeof(l.exclusive_services) != "undefined" && l.exclusive_services != null) {
            p.exclusive_services = l.exclusive_services
        }
        if (typeof(d.exclusive_services) != "undefined" && d.exclusive_services != null) {
            p.exclusive_services = d.exclusive_services
        }
        if (typeof(l) != "undefined" && typeof(l.services) != "undefined" && l.services != null) {
            p.services = l.services
        }
        if (typeof(d.services) != "undefined" && d.services != null) {
            p.services = d.services
        }
        var h = d;
        if (typeof(l) != "undefined") {
            h = l
        }
        if (typeof(h.doNotHash) != "undefined" && h.doNotHash != null) {
            p.doNotHash = h.doNotHash
        }
        if (typeof(k.via) != "undefined" && k.via != null) {
            p.via = k.via
        }
        p.service = d.service;
        p.type = d.type;
        if (stlib.data) {
            var r = stlib.json.encode(stlib.data.pageInfo);
            var q = stlib.json.encode(stlib.data.shareInfo);
            if (stlib.browser.isFirefox() && !stlib.browser.firefox8Version()) {
                r = encodeURIComponent(encodeURIComponent(r));
                q = encodeURIComponent(encodeURIComponent(q))
            } else {
                r = encodeURIComponent(r);
                q = encodeURIComponent(q)
            }
            p.pageInfo = r;
            p.shareInfo = q
        }
        for (var s in p) {
            var g = document.createElement("input");
            g.setAttribute("type", "hidden");
            g.setAttribute("name", s);
            g.setAttribute("value", p[s]);
            a.appendChild(g)
        }
        document.body.appendChild(a);
        a.submit();
        return true
    }
    if (d.service == "email") {
        var b, n = 0;
        stlib.browser.mobile.url = e;
        if (stlib.browser.mobile.sharUrl == null) {
            stlib.browser.mobile.createSharOnPage()
        }
        var j = (u != "") ? u + "%0A%0a" : "{sharURLValue}%0A%0a";
        if ((typeof(k.summary) != "undefined") && k.summary != null) {
            j += k.summary + "%0A%0a"
        }
        j += "Sent using ShareThis";
        var m = "mailto:?";
        m += "subject=" + t;
        m += "&body=" + j;
        b = setInterval(function () {
            if (stlib.browser.mobile.sharUrl != null) {
                clearInterval(b);
                window.location.href = m.replace("{sharURLValue}", stlib.browser.mobile.sharUrl)
            }
            if (n > 500) {
                clearInterval(b);
                window.location.href = m.replace("{sharURLValue}", stlib.browser.mobile.sharUrl)
            }
            n++
        }, 100)
    }
    return true
};
stlib.browser.mobile.createSharOnPage = function () {
    if (stlib.browser.mobile.url !== "" && stlib.browser.mobile.url !== " " && stlib.browser.mobile.url !== null && !stlib.browser.mobile.sharCreated) {
        var a = ["return=json", "cb=stlib.browser.mobile.createSharOnPage_onSuccess", "service=createSharURL", "url=" + encodeURIComponent(stlib.browser.mobile.url)];
        a = a.join("&");
        stlib.scriptLoader.loadJavascript((("https:" == document.location.protocol) ? "https://ws." : "http://wd.") + "sharethis.com/api/getApi.php?" + a, function () {
        })
    }
};
stlib.browser.mobile.createSharOnPage_onSuccess = function (a) {
    if (a.status == "SUCCESS") {
        stlib.browser.mobile.sharCreated = true;
        stlib.browser.mobile.sharUrl = a.data.sharURL
    } else {
        stlib.browser.mobile.sharUrl = stlib.browser.mobile.url
    }
};
var tpcCookiesEnableCheckingDone = false;
var tpcCookiesEnabledStatus = true;
stlib.cookie = {
    setCookie: function (e, n, p) {
        var d = (navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") == -1);
        var b = (navigator.userAgent.indexOf("MSIE") != -1);
        if (d || b) {
            var r = (p) ? p * 24 * 60 * 60 : 0;
            var k = document.createElement("div");
            k.setAttribute("id", e);
            k.setAttribute("type", "hidden");
            document.body.appendChild(k);
            var a = document.getElementById(e), f = document.createElement("form");
            try {
                var m = document.createElement('<iframe name="' + e + '" ></iframe>')
            } catch (l) {
                m = document.createElement("iframe")
            }
            m.name = e;
            m.src = "javascript:false";
            m.style.display = "none";
            a.appendChild(m);
            f.action = (("https:" == document.location.protocol) ? "https://sharethis.com/" : "http://sharethis.com/") + "account/setCookie.php";
            f.method = "POST";
            var j = document.createElement("input");
            j.setAttribute("type", "hidden");
            j.setAttribute("name", "name");
            j.setAttribute("value", e);
            f.appendChild(j);
            var q = document.createElement("input");
            q.setAttribute("type", "hidden");
            q.setAttribute("name", "value");
            q.setAttribute("value", n);
            f.appendChild(q);
            var o = document.createElement("input");
            o.setAttribute("type", "hidden");
            o.setAttribute("name", "time");
            o.setAttribute("value", r);
            f.appendChild(o);
            f.target = e;
            a.appendChild(f);
            f.submit()
        } else {
            if (p) {
                var i = new Date();
                i.setTime(i.getTime() + (p * 24 * 60 * 60 * 1000));
                var g = "; expires=" + i.toGMTString()
            } else {
                var g = ""
            }
            var h = e + "=" + escape(n) + g;
            h += "; domain=" + escape(".sharethis.com") + ";path=/";
            document.cookie = h
        }
    }, setTempCookie: function (e, f, g) {
        if (g) {
            var d = new Date();
            d.setTime(d.getTime() + (g * 24 * 60 * 60 * 1000));
            var a = "; expires=" + d.toGMTString()
        } else {
            var a = ""
        }
        var b = e + "=" + escape(f) + a;
        b += "; domain=" + escape(".sharethis.com") + ";path=/";
        document.cookie = b
    }, getCookie: function (b) {
        var a = document.cookie.match("(^|;) ?" + b + "=([^;]*)(;|$)");
        if (a) {
            return (unescape(a[2]))
        } else {
            return false
        }
    }, deleteCookie: function (e) {
        var l = "/";
        var k = ".sharethis.com";
        document.cookie = e.replace(/^\s+|\s+$/g, "") + "=" + ((l) ? ";path=" + l : "") + ((k) ? ";domain=" + k : "") + ";expires=Thu, 01-Jan-1970 00:00:01 GMT";
        var d = (navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") == -1);
        var b = (navigator.userAgent.indexOf("MSIE") != -1);
        if (d || b) {
            var h = document.createElement("div");
            h.setAttribute("id", e);
            h.setAttribute("type", "hidden");
            document.body.appendChild(h);
            var a = document.getElementById(e), f = document.createElement("form");
            try {
                var j = document.createElement('<iframe name="' + e + '" ></iframe>')
            } catch (i) {
                j = document.createElement("iframe")
            }
            j.name = e;
            j.src = "javascript:false";
            j.style.display = "none";
            a.appendChild(j);
            f.action = (("https:" == document.location.protocol) ? "https://sharethis.com/" : "http://sharethis.com/") + "account/deleteCookie.php";
            f.method = "POST";
            var g = document.createElement("input");
            g.setAttribute("type", "hidden");
            g.setAttribute("name", "name");
            g.setAttribute("value", e);
            f.appendChild(g);
            f.target = e;
            a.appendChild(f);
            f.submit()
        }
    }, deleteAllSTCookie: function () {
        var e = document.cookie;
        e = e.split(";");
        for (var g = 0; g < e.length; g++) {
            var d = e[g];
            d = d.split("=");
            if (!/st_optout/.test(d[0])) {
                var f = d[0];
                var j = "/";
                var h = ".edge.sharethis.com";
                document.cookie = f + "=;path=" + j + ";domain=" + h + ";expires=Thu, 01-Jan-1970 00:00:01 GMT"
            }
        }
    }, setFpcCookie: function (a, h) {
        var d = new Date;
        var j = d.getFullYear();
        var g = d.getMonth() + 9;
        var i = d.getDate();
        var e = a + "=" + escape(h);
        if (j) {
            var b = new Date(j, g, i);
            e += "; expires=" + b.toGMTString()
        }
        var f = stlib.cookie.getDomain();
        e += "; domain=" + escape(f) + ";path=/";
        document.cookie = e
    }, getFpcCookie: function (b) {
        var a = document.cookie.match("(^|;) ?" + b + "=([^;]*)(;|$)");
        if (a) {
            return (unescape(a[2]))
        } else {
            return false
        }
    }, getDomain: function () {
        var b = document.domain.split(/\./);
        var a = "";
        if (b.length > 1) {
            a = "." + b[b.length - 2] + "." + b[b.length - 1]
        }
        return a
    }, checkCookiesEnabled: function () {
        if (!tpcCookiesEnableCheckingDone) {
            stlib.cookie.setTempCookie("STPC", "yes", 1);
            if (stlib.cookie.getCookie("STPC") == "yes") {
                tpcCookiesEnabledStatus = true
            } else {
                tpcCookiesEnabledStatus = false
            }
            tpcCookiesEnableCheckingDone = true;
            return tpcCookiesEnabledStatus
        } else {
            return tpcCookiesEnabledStatus
        }
    }, hasLocalStorage: function () {
        try {
            localStorage.setItem("stStorage", "yes");
            localStorage.removeItem("stStorage");
            return true
        } catch (a) {
            return false
        }
    }
};
stlib.fpc = {
    cookieName: "__unam", cookieValue: "", createFpc: function () {
        stlib.fpc.setOptout();
        if (!document.domain || document.domain.search(/\.gov/) > 0) {
            return false
        }
        var i = stlib.cookie.getFpcCookie(stlib.fpc.cookieName);
        if (i == false) {
            var d = Math.round(Math.random() * 2147483647);
            d = d.toString(16);
            var g = (new Date()).getTime();
            g = g.toString(16);
            var f = window.location.hostname.split(/\./)[1];
            if (!f) {
                return false
            }
            var h = "";
            h = stlib.fpc.determineHash(f) + "-" + g + "-" + d + "-1";
            i = h
        } else {
            var b = i;
            var a = b.split(/\-/);
            if (a.length == 4) {
                var e = Number(a[3]);
                e++;
                i = a[0] + "-" + a[1] + "-" + a[2] + "-" + e
            }
        }
        stlib.cookie.setFpcCookie(stlib.fpc.cookieName, i);
        stlib.fpc.cookieValue = i;
        return i
    }, setOptout: function () {
        opt_out = (stlib.cookie.getCookie("st_optout"));
        stlib.data.set("st_optout", opt_out, "pageInfo")
    }, determineHash: function (b) {
        var f = 0;
        var e = 0;
        for (var d = b.length - 1; d >= 0; d--) {
            var a = parseInt(b.charCodeAt(d));
            f = ((f << 8) & 268435455) + a + (a << 12);
            if ((e = f & 161119850) != 0) {
                f = (f ^ (e >> 20))
            }
        }
        return f.toString(16)
    }
};
stlib.validate = {
    regexes: {
        notEncoded: /(%[^0-7])|(%[0-7][^0-9a-f])|["{}\[\]\<\>\\\^`\|]/gi,
        tooEncoded: /%25([0-7][0-9a-f])/gi,
        publisher: /^(([a-z]{2}(-|\.))|)[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
        url: /^(http|https):\/\/([a-z0-9!'\(\)\*\.\-\+:]*(\.)[a-z0-9!'\(\)\*\.\-\+:]*)((\/[a-z0-9!'\(\)\*\.\-\+:]*)*)/i,
        fpc: /^[0-9a-f]{7}-[0-9a-f]{11}-[0-9a-f]{7,8}-[0-9]*$/i,
        sessionID: /^[0-9]*\.[0-9a-f]*$/i,
        title: /.*/,
        description: /.*/,
        buttonType: /^(chicklet|vcount|hcount|large|custom|button|)$/,
        comment: /.*/,
        destination: /.*/,
        source: /.*/,
        image: /(^(http|https):\/\/([a-z0-9!'\(\)\*\.\-\+:]*(\.)[a-z0-9!'\(\)\*\.\-\+:]*)((\/[a-z0-9!'\(\)\*\.\-\+:]*)*))|^$/i,
        sourceURL: /^(http|https):\/\/([a-z0-9!'\(\)\*\.\-\+:]*(\.)[a-z0-9!'\(\)\*\.\-\+:]*)((\/[a-z0-9!'\(\)\*\.\-\+:]*)*)/i,
        sharURL: /(^(http|https):\/\/([a-z0-9!'\(\)\*\.\-\+:]*(\.)[a-z0-9!'\(\)\*\.\-\+:]*)((\/[a-z0-9!'\(\)\*\.\-\+:]*)*))|^$/i
    }
};
stlib.html = {
    encode: function (a) {
        if (stlib.html.startsWith(a, "http")) {
            return String(a).replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        } else {
            return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }
    }, startsWith: function (a, b) {
        return (a.match("^" + b) == b)
    }
};
stlib.stfp = {
    screenResolutionDepthHash: "ERROR",
    pluginsListHash: "ERROR",
    fontsListHash: "ERROR",
    timezoneoffsetHash: "ERROR",
    checkIEPlugins: ["ShockwaveFlash.ShockwaveFlash", "AcroPDF.PDF", "PDF.PdfCtrl", "QuickTime.QuickTime", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "RealPlayer", "SWCtl.SWCtl", "WMPlayer.OCX", "AgControl.AgControl", "Skype.Detection"],
    getPluginsHash: function () {
        var b = "";
        if (stlib.browser.getIEVersion() != null) {
            for (var a = 0; a < stlib.stfp.checkIEPlugins.length; a++) {
                try {
                    new ActiveXObject(stlib.stfp.checkIEPlugins[a]);
                    b += stlib.stfp.checkIEPlugins[a] + ":"
                } catch (d) {
                }
            }
        }
        if (stlib.browser.getIEVersion() == null || stlib.browser.getIEVersion() >= 11) {
            if (((typeof navigator) != "undefined" || navigator != null) && ((typeof navigator.plugins) != "undefined" || navigator.plugins != null)) {
                for (var a = 0; a < navigator.plugins.length; a++) {
                    b += navigator.plugins[a].name + ":"
                }
            }
        }
        if (b.length > 0) {
            stlib.stfp.pluginsListHash = stlib.stfp.getFpHash(b)
        }
    },
    getResolutionDepthHash: function () {
        if (screen) {
            stlib.stfp.screenResolutionDepthHash = stlib.stfp.getFpHash((((typeof screen.width) != "undefined") ? screen.width : "NA") + ":" + (((typeof screen.height) != "undefined") ? screen.height : "NA") + ":" + (((typeof screen.colorDepth) != "undefined") ? screen.colorDepth : "NA"))
        }
    },
    getTimezoneOffsetHash: function () {
        var b = new Date();
        var a = b.getTimezoneOffset();
        stlib.stfp.timezoneoffsetHash = stlib.stfp.getFpHash(a.toString())
    },
    getFontsHash: function () {
        var d = false;
        var h = document;
        var a = h.createElement("iframe");
        a.id = "st_ifr";
        a.style.width = "0px";
        a.style.height = "0px";
        a.src = "about:blank";
        var b = stlib.browser.isChrome();
        var f = '<html><head><title>st_bf</title><script type="text/javascript">var stlib1={};stlib1.stfp={fontStr:"",fontsListHash:"ERROR",checkFonts:["Aharoni","algerian","Andalus","\'Angsana New\'","\'Apple Symbols\'","\'Arabic Typesetting\'","Arial","\'Baskerville Old Face\'","Batang","BatangChe","\'Bell MT\'","\'Berlin Sans FB\'","\'Bitstream Charter\'","\'Book Antiqua\'","\'Bookman Old Style\'","\'Bradley Hand ITC\'","Calibri","\'Californian FB\'","\'Cambria Math\'","\'Century Schoolbook\'","\'Century Schoolbook L\'","Charter","\'colonna mt\'","Consolas","Corbel","\'Cordia New\'","Courier","cursive","David","default","DFKai-SB","DilleniaUPC","DotumChe","Ebrima","\'Estrangelo Edessa\'","fantasy","FrankRuehl","Garamond","Gentium","Gungsuh","GungsuhChe","Haettenschweiler","\'Heiti TC\'","\'High Tower Text\'","\'Informal Roman\'","IrisUPC","\'Juice ITC\'","KaiTi","Kalinga","Kartika","Kokonor","Leelawadee","\'Liberation Mono\'","\'Liberation Sans\'","Loma","Magneto","\'Malgun Gothic\'","\'matura mt script capitals\'","\'Microsoft Himalaya\'","\'Microsoft JhengHei\'","\'Microsoft Sans Serif\'","\'Microsoft Uighur\'","\'Microsoft YaHei\'","\'Microsoft Yi Baiti\'","MingLiU","Mistral","Modena","\'Mongolian Baiti\'","\'Monotype Corsiva\'","\'MS Mincho\'","\'MS Outlook\'","\'MS PGothic\'","\'MS PMincho\'","\'MT Extra\'","\'Nimbus Mono L\'","\'Nimbus Sans L\'","NSimSun","Optima","Papyrus","PMingLiU-ExtB","Saab","\'Segoe Print\'","\'Segoe Script\'","\'Showcard Gothic\'","SimHei","\'Simplified Arabic\'","\'Simplified Arabic Fixed\'","SimSun","SimSun-ExtB","Tahoma","\'Traditional Arabic\'","Tunga","Ubuntu","\'URW Gothic L\'","\'URW Palladio L\'","Utopia","Verona","\'Viner Hand ITC\'","Vrinda","webdings","\'wide latin\'","Zapfino"],checkFontsLength:0,baseFonts:["monospace","sans-serif","serif"],baseFontsLength:0,testString:"mmmmmmmmmmlli",testSize:"72px",s:document.createElement("span"),sty:document.createElement("style"),hd:document.head||document.getElementsByTagName("head")[0],defaultWidth:{},defaultHeight:{},';
        if (b) {
            f += "checkFontForCrome:function(checkFontIndex){var detected = false;var checkElement;for(var baseFontIndex=0;baseFontIndex<stlib1.stfp.baseFontsLength;baseFontIndex++){checkElement = document.getElementById(\"st_check_fonts_\" + checkFontIndex + \"_\" + baseFontIndex);var matched = checkElement.offsetWidth!=stlib1.stfp.defaultWidth[baseFontIndex]||checkElement.offsetHeight!=stlib1.stfp.defaultHeight[baseFontIndex];detected = detected || matched;}return detected;},createFragments:function(){var span, fragment = document.createDocumentFragment();var doc = document;var d = doc.createElement('div');d.className = 'st_fontDetect';var baseFontName, checkFontName, baseElement, checkElement;for(var baseFontIndex=0;baseFontIndex<stlib1.stfp.baseFontsLength;baseFontIndex++){baseFontName = stlib1.stfp.baseFonts[baseFontIndex];baseElement = document.createElement('span');baseElement.style.fontFamily=baseFontName;baseElement.id = \"st_base_fonts_\" + baseFontIndex;baseElement.innerHTML = stlib1.stfp.testString;baseElement.style.fontSize = stlib1.stfp.testSize;fragment.appendChild(baseElement);}for(var checkFontIndex=0;checkFontIndex<stlib1.stfp.checkFontsLength;checkFontIndex++){checkFontName = stlib1.stfp.checkFonts[checkFontIndex];for(var baseFontIndex=0;baseFontIndex<stlib1.stfp.baseFontsLength;baseFontIndex++){baseFontName = stlib1.stfp.baseFonts[baseFontIndex];checkElement = document.createElement('span');checkElement.style.fontFamily= checkFontName + ',' + baseFontName;checkElement.id = \"st_check_fonts_\" + checkFontIndex + \"_\" + baseFontIndex;checkElement.innerHTML = stlib1.stfp.testString;checkElement.style.fontSize = stlib1.stfp.testSize;fragment.appendChild(checkElement);}}d.appendChild(fragment);doc.body.appendChild(d);},"
        } else {
            f += 'checkFont:function(font){var detected = false;for(var baseFontIndex=0;baseFontIndex<stlib1.stfp.baseFontsLength;baseFontIndex++){stlib1.stfp.s.style.fontFamily = font +"," + stlib1.stfp.baseFonts[baseFontIndex];var matched = stlib1.stfp.s.offsetWidth!=stlib1.stfp.defaultWidth[stlib1.stfp.baseFonts[baseFontIndex]]||stlib1.stfp.s.offsetHeight!=stlib1.stfp.defaultHeight[stlib1.stfp.baseFonts[baseFontIndex]];detected = detected || matched;}return detected;},'
        }
        f += 'createStyle:function(){var css =".st_fontDetect{display:inline !important}";stlib1.stfp.sty.type="text/css";stlib1.stfp.sty.id="st_style";if(stlib1.stfp.sty.styleSheet){stlib1.stfp.sty.styleSheet.cssText = css;}else{stlib1.stfp.sty.appendChild(document.createTextNode(css))}stlib1.stfp.hd.appendChild(stlib1.stfp.sty)},getFontsHash:function(){var isBodyStyleSet = false;stlib1.stfp.s.className="st_fontDetect";stlib1.stfp.createStyle();stlib1.stfp.s.style.fontSize=stlib1.stfp.testSize;stlib1.stfp.s.innerHTML=stlib1.stfp.testString;stlib1.stfp.baseFontsLength = stlib1.stfp.baseFonts.length;stlib1.stfp.checkFontsLength = stlib1.stfp.checkFonts.length;var bodyDisplay = null;var bodyVisibility = null;if(document.body.style.display==="none"){isBodyStyleSet = true;bodyDisplay = document.body.style.display;bodyVisibility = document.body.style.visibility;document.body.style.display="block";document.body.style.visibility="hidden";}';
        if (b) {
            f += "stlib1.stfp.createFragments();stlib1.stfp.defaultWidth[0] = document.getElementById('st_base_fonts_0').offsetWidth;stlib1.stfp.defaultHeight[0] = document.getElementById('st_base_fonts_0').offsetHeight;stlib1.stfp.defaultWidth[1] = document.getElementById('st_base_fonts_1').offsetWidth;stlib1.stfp.defaultHeight[1] = document.getElementById('st_base_fonts_1').offsetHeight;stlib1.stfp.defaultWidth[2] = document.getElementById('st_base_fonts_2').offsetWidth;stlib1.stfp.defaultHeight[2] = document.getElementById('st_base_fonts_2').offsetHeight;for(var checkFontIndex=0;checkFontIndex<stlib1.stfp.checkFontsLength;checkFontIndex++){var tempCheckFontName = stlib1.stfp.checkFonts[checkFontIndex];if(stlib1.stfp.checkFontForCrome(checkFontIndex)){stlib1.stfp.fontStr += tempCheckFontName +\":\";}}"
        } else {
            f += 'for(var baseFontIndex=0;baseFontIndex<stlib1.stfp.baseFontsLength;baseFontIndex++){var tempBaseFontName = stlib1.stfp.baseFonts[baseFontIndex];stlib1.stfp.s.style.fontFamily = tempBaseFontName;document.body.appendChild(stlib1.stfp.s);stlib1.stfp.defaultWidth[tempBaseFontName]=stlib1.stfp.s.offsetWidth;stlib1.stfp.defaultHeight[tempBaseFontName]=stlib1.stfp.s.offsetHeight;document.body.removeChild(stlib1.stfp.s)}stlib1.stfp.s.style.fontFamily="st_font";document.body.appendChild(stlib1.stfp.s);for(var checkFontIndex=0;checkFontIndex<stlib1.stfp.checkFontsLength;checkFontIndex++){var tempCheckFontName = stlib1.stfp.checkFonts[checkFontIndex];if(stlib1.stfp.checkFont(tempCheckFontName)){stlib1.stfp.fontStr += tempCheckFontName +":"}}var sheet = document.getElementById("st_style");sheet.parentNode.removeChild(sheet);document.body.removeChild(stlib1.stfp.s);'
        }
        f += 'if(isBodyStyleSet){document.body.style.display = bodyDisplay;document.body.style.visibility = bodyVisibility;}}};<\/script></head><body id="st_ifr"><div><script type="text/javascript">stlib1.stfp.getFontsHash();<\/script></div></body></html>';
        h.body.appendChild(a);
        try {
            a.contentWindow.document.open("text/html", "replace")
        } catch (g) {
            if (stlib.browser.getIEVersion() != null) {
                if (stlib.browser.getIEVersion() < 11 && g.message.match(/denied/g)) {
                    h.body.removeChild(a);
                    d = true
                }
            }
        }
        if (!d) {
            a.contentWindow.document.write(f);
            a.contentWindow.document.close();
            stlib.stfp.fontsListHash = stlib.stfp.getFpHash(document.getElementById("st_ifr").contentWindow.stlib1.stfp.fontStr);
            h.body.removeChild(a)
        }
    },
    init: function () {
        stlib.stfp.getFontsHash()
    },
    getFpHash: function (a) {
        var f = 0, e = 0;
        for (var d = a.length - 1; d >= 0; d--) {
            var b = parseInt(a.charCodeAt(d));
            f = ((f << 8) & 268435455) + b + (b << 12);
            if ((e = f & 161119850) != 0) {
                f = (f ^ (e >> 20))
            }
        }
        return f.toString(16)
    }
};
if (typeof(stlib.data) == "undefined") {
    stlib.data = {
        bInit: false, publisherKeySet: false, pageInfo: {}, shareInfo: {}, resetPageData: function () {
            stlib.data.pageInfo.fpc = "ERROR";
            stlib.data.pageInfo.sessionID = "ERROR";
            stlib.data.pageInfo.hostname = "ERROR";
            stlib.data.pageInfo.location = "ERROR"
        }, resetShareData: function () {
            stlib.data.shareInfo = {};
            stlib.data.shareInfo.url = "ERROR";
            stlib.data.shareInfo.sharURL = "";
            stlib.data.shareInfo.buttonType = "ERROR";
            stlib.data.shareInfo.destination = "ERROR";
            stlib.data.shareInfo.source = "ERROR"
        }, resetData: function () {
            stlib.data.resetPageData();
            stlib.data.resetShareData()
        }, validate: function () {
            var a = stlib.validate.regexes;

            function b(f, h) {
                if (h != encodeURIComponent(h)) {
                    a.notEncoded.test(h) ? _$de(f + " not encoded") : null;
                    a.tooEncoded.test(h) ? _$de(f + " has too much encoding") : null
                }
                var g = a[f] ? a[f].test(decodeURIComponent(h)) : true;
                if (!g) {
                    _$de(f + " failed validation")
                }
            }

            var d = stlib.data.pageInfo;
            var e;
            for (e in d) {
                b(e, d[e])
            }
            d = stlib.data.shareInfo;
            for (e in d) {
                b(e, d[e])
            }
        }, init: function () {
            if (!stlib.data.bInit) {
                stlib.data.bInit = true;
                stlib.data.resetData();
                if (stlib.publisher) {
                    stlib.data.setPublisher(stlib.publisher)
                }
                var h = document.location.href, d = "", a = "", g = [], k = "", j = "", e = "", b = "", f = "", i = "";
                g = stlib.data.getRefDataFromUrl(h);
                if (g.length > 0) {
                    d = (typeof(g[0]) != "undefined") ? g[0] : "";
                    a = (typeof(g[1]) != "undefined") ? g[1] : "";
                    j = stlib.data.removeRefDataFromUrl(h);
                    stlib.data.showModifiedUrl(j);
                    stlib.data.set("url", j, "shareInfo")
                } else {
                    k = document.referrer;
                    g = k.replace("http://", "").replace("https://", "").split("/");
                    d = g.shift();
                    a = g.join("/");
                    stlib.data.set("url", h, "shareInfo")
                }
                stlib.hash.init();
                stlib.data.set("shareHash", stlib.hash.shareHash, "pageInfo");
                stlib.data.set("incomingHash", stlib.hash.incomingHash, "pageInfo");
                stlib.stfp.getPluginsHash();
                stlib.stfp.getResolutionDepthHash();
                stlib.stfp.getTimezoneOffsetHash();
                stlib.data.set("title", document.title, "shareInfo");
                if (!stlib.hash.doNotHash) {
                    e = "#" + stlib.data.get("shareHash", "pageInfo")
                }
                b = stlib.hash.updateParams();
                stlib.data.set("url", b + e, "shareInfo");
                if (stlib.data.publisherKeySet != true) {
                    stlib.data.set("publisher", "ur.00000000-0000-0000-0000-000000000000", "pageInfo")
                }
                stlib.fpc.createFpc();
                stlib.data.set("fpc", stlib.fpc.cookieValue, "pageInfo");
                f = (new Date()).getTime().toString();
                i = Number(Math.random().toPrecision(5).toString().substr(2)).toString();
                stlib.data.set("sessionID", f + "." + i, "pageInfo");
                stlib.data.set("hostname", document.location.hostname, "pageInfo");
                stlib.data.set("location", document.location.pathname, "pageInfo");
                stlib.data.set("refDomain", d, "pageInfo");
                stlib.data.set("refQuery", a, "pageInfo")
            }
        }, showModifiedUrl: function (b) {
            if (window.history && history.replaceState) {
                history.replaceState(null, document.title, b)
            } else {
                if ((/MSIE/).test(navigator.userAgent)) {
                    var g = 0, d = window.location.hash, a = new RegExp("(&st_refDomain=?)[^&|]+"), f = new RegExp("(#st_refDomain=?)[^&|]+"), e = document.location.href;
                    if (a.test(e)) {
                        g = d.indexOf("&st_refDomain");
                        window.location.hash = d.substr(0, g)
                    } else {
                        if (f.test(e)) {
                            window.location.replace("#")
                        }
                    }
                } else {
                    document.location.replace(b)
                }
            }
        }, getRefDataFromUrl: function (b) {
            var e = new RegExp("st_refDomain="), f = "", d = "", a = [];
            if (e.test(b)) {
                f = b.match(/(st_refDomain=?)[^\&|]+/g);
                a.push(f[0].split("=")[1]);
                d = b.match(/(st_refQuery=?)[^\&|]+/g);
                a.push(d[0].replace("st_refQuery=", ""))
            }
            return a
        }, removeRefDataFromUrl: function (b) {
            var f = "", d = "", a = new RegExp("(&st_refDomain=?)[^&|]+"), e = new RegExp("(#st_refDomain=?)[^&|]+");
            if (a.test(b)) {
                f = b.replace(/\&st_refDomain=(.*)/g, "")
            } else {
                if (e.test(b)) {
                    f = b.replace(/\#st_refDomain=(.*)/g, "")
                } else {
                    f = b
                }
            }
            return f
        }, setPublisher: function (a) {
            stlib.data.set("publisher", a, "pageInfo");
            stlib.data.publisherKeySet = true
        }, setSource: function (d, a) {
            var b = "";
            if (a) {
                if (a.toolbar) {
                    b = "toolbar" + d
                } else {
                    if (a.page && a.page != "home" && a.page != "") {
                        b = "chicklet" + d
                    } else {
                        b = "button" + d
                    }
                }
            } else {
                b = d
            }
            stlib.data.set("source", b, "shareInfo")
        }, set: function (a, d, b) {
            if (typeof(d) == "number" || typeof(d) == "boolean") {
                stlib.data[b][a] = d
            } else {
                if (typeof(d) == "undefined" || d == null) {
                } else {
                    stlib.data[b][a] = encodeURIComponent(decodeURIComponent(unescape(d.replace(/<[^<>]*>/gi, " ")).replace(/%/gi, "%25")));
                    if (a == "url" || a == "location" || a == "image") {
                        try {
                            stlib.data[b][a] = encodeURIComponent(decodeURIComponent(decodeURI(d.replace(/<[^<>]*>/gi, " ")).replace(/%/gi, "%25")))
                        } catch (f) {
                            stlib.data[b][a] = encodeURIComponent(decodeURIComponent(unescape(d.replace(/<[^<>]*>/gi, " ")).replace(/%/gi, "%25")))
                        }
                    }
                }
            }
        }, get: function (a, b) {
            if (stlib.data[b] && stlib.data[b][a]) {
                return decodeURIComponent(stlib.data[b][a])
            } else {
                return false
            }
        }, unset: function (a, b) {
            if (stlib.data[b] && typeof(stlib.data[b][a]) != "undefined") {
                delete stlib.data[b][a]
            }
        }
    };
    stlib.data.resetData()
}
stlib.hash = {
    doNotHash: true,
    hashAddressBar: false,
    doNotCopy: true,
    prefix: "sthash",
    shareHash: "",
    incomingHash: "",
    validChars: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    servicePreferences: {linkedin: "param", stumbleupon: "param", bebo: "param"},
    hashDestination: function (b) {
        if (b == "copy") {
            return "dpuf"
        }
        var d = b.substring(0, 2) + b.substring(b.length - 2, b.length);
        var a = function (e, f) {
            if (e.charCodeAt(f) == 122) {
                return "a"
            }
            return String.fromCharCode(e.charCodeAt(f) + 1)
        };
        return a(d, 0) + a(d, 1) + a(d, 2) + a(d, 3)
    },
    getHash: function () {
        var d = false;
        var b = "";
        var e = document.location.href;
        e = e.split("#").shift();
        var a = e.split("?");
        if (a.length > 1) {
            a = a[1].split("&");
            for (arg in a) {
                try {
                    if (a[arg].substring(0, 6) == "sthash") {
                        d = true;
                        b = a[arg]
                    }
                } catch (f) {
                }
            }
            if (d) {
                return b
            } else {
                return document.location.hash.substring(1)
            }
        } else {
            return document.location.hash.substring(1)
        }
    },
    stripHash: function (a) {
        var b = a;
        b = b.split("#");
        if (b.length > 1) {
            return b[1]
        } else {
            return ""
        }
    },
    clearHash: function () {
        if (stlib.hash.validateHash(document.location.hash)) {
            var a = document.location.href.split("#").shift();
            if (window.history && history.replaceState) {
                history.replaceState(null, document.title, a)
            } else {
                if ((/MSIE/).test(navigator.userAgent)) {
                    window.location.replace("#")
                } else {
                    document.location.hash = ""
                }
            }
        }
    },
    init: function () {
        var b = "";
        var a = stlib.hash.validChars.length;
        for (var f = 0; f < 8; f++) {
            b += stlib.hash.validChars[Math.random() * a | 0]
        }
        if (stlib.hash.getHash() == "") {
            stlib.hash.shareHash = stlib.hash.prefix + "." + b
        } else {
            var d = stlib.hash.getHash().split(".");
            var e = d.shift();
            if (e == stlib.hash.prefix || e == stlib.hash.prefix) {
                stlib.hash.incomingHash = stlib.hash.getHash();
                stlib.hash.shareHash = stlib.hash.prefix + "." + d.shift() + "." + b
            } else {
                stlib.hash.shareHash = stlib.hash.prefix + "." + b
            }
        }
        if (!stlib.hash.doNotHash && stlib.hash.hashAddressBar) {
            if (document.location.hash == "" || stlib.hash.validateHash(document.location.hash)) {
                if (window.history && history.replaceState) {
                    history.replaceState(null, "ShareThis", "#" + stlib.hash.shareHash + ".dpbs")
                } else {
                    if ((/MSIE/).test(navigator.userAgent)) {
                        window.location.replace("#" + stlib.hash.shareHash + ".dpbs")
                    } else {
                        document.location.hash = stlib.hash.shareHash + ".dpbs"
                    }
                }
            }
        } else {
            stlib.hash.clearHash()
        }
        if (!stlib.hash.doNotHash && !stlib.hash.doNotCopy) {
            stlib.hash.copyPasteInit()
        }
        stlib.hash.copyPasteLog()
    },
    checkURL: function () {
        var b = stlib.data.get("destination", "shareInfo");
        var g = stlib.hash.updateParams(b);
        var e = "." + stlib.hash.hashDestination(b);
        stlib.hash.updateDestination(e);
        if (!stlib.hash.doNotHash && typeof(stlib.data.pageInfo.shareHash) != "undefined") {
            var d = stlib.data.get("url", "shareInfo");
            var h = stlib.hash.stripHash(d);
            if (stlib.hash.validateHash(h) || h == "") {
                if (typeof(stlib.hash.servicePreferences[b]) != "undefined") {
                    if (stlib.hash.servicePreferences[b] == "param") {
                        _$d1("Don't use hash, use params");
                        _$d2(g);
                        if (g.split("?").length > 1) {
                            var f = g.split("?")[1].split("&");
                            var i = false;
                            for (var a = 0; a < f.length; a++) {
                                if (f[a].split(".")[0] == "sthash") {
                                    i = true
                                }
                            }
                            if (i) {
                                stlib.data.set("url", g, "shareInfo")
                            } else {
                                stlib.data.set("url", g + "&" + stlib.data.pageInfo.shareHash, "shareInfo")
                            }
                        } else {
                            stlib.data.set("url", g + "?" + stlib.data.pageInfo.shareHash, "shareInfo")
                        }
                        if (b == "linkedin") {
                            if (stlib.data.get("sharURL", "shareInfo") != "") {
                                stlib.data.set("sharURL", stlib.data.get("url", "shareInfo"), "shareInfo")
                            }
                        }
                    } else {
                        _$d1("Using Hash");
                        stlib.data.set("url", g + "#" + stlib.data.pageInfo.shareHash, "shareInfo")
                    }
                } else {
                    _$d1("Not using custom destination hash type");
                    stlib.data.set("url", g + "#" + stlib.data.pageInfo.shareHash, "shareInfo")
                }
            }
        }
    },
    updateParams: function (a) {
        var g = stlib.data.get("url", "shareInfo").split("#").shift();
        var f = /(\?)sthash\.[a-zA-z0-9]{8}\.[a-zA-z0-9]{8}/;
        var e = /(&)sthash\.[a-zA-z0-9]{8}\.[a-zA-z0-9]{8}/;
        var d = /(\?)sthash\.[a-zA-z0-9]{8}/;
        var b = /(&)sthash\.[a-zA-z0-9]{8}/;
        if (f.test(g)) {
            g = g.replace(f, "?" + stlib.data.pageInfo.shareHash)
        } else {
            if (e.test(g)) {
                g = g.replace(e, "&" + stlib.data.pageInfo.shareHash)
            } else {
                if (d.test(g)) {
                    g = g.replace(d, "?" + stlib.data.pageInfo.shareHash)
                } else {
                    if (b.test(g)) {
                        g = g.replace(b, "&" + stlib.data.pageInfo.shareHash)
                    }
                }
            }
        }
        return g
    },
    updateDestination: function (b) {
        var a = /sthash\.[a-zA-z0-9]{8}\.[a-zA-z0-9]{8}\.[a-z]{4}/;
        var d = /sthash\.[a-zA-z0-9]{8}\.[a-z]{4}/;
        _$d_();
        _$d1("Updating Destination");
        if (a.test(stlib.data.pageInfo.shareHash)) {
            _$d2(stlib.data.pageInfo.shareHash.substring(0, 24));
            stlib.data.pageInfo.shareHash = stlib.data.pageInfo.shareHash.substring(0, 24) + b
        } else {
            if (d.test(stlib.data.pageInfo.shareHash)) {
                _$d2(stlib.data.pageInfo.shareHash.substring(0, 15));
                stlib.data.pageInfo.shareHash = stlib.data.pageInfo.shareHash.substring(0, 15) + b
            } else {
                stlib.data.pageInfo.shareHash += b
            }
        }
    },
    validateHash: function (a) {
        var b = /[\?#&]?sthash\.[a-zA-z0-9]{8}\.[a-zA-z0-9]{8}$/;
        var d = /[\?#&]?sthash\.[a-zA-z0-9]{8}\.[a-zA-z0-9]{8}\.[a-z]{4}$/;
        var e = /[\?#&]?sthash\.[a-zA-z0-9]{8}\.[a-z]{4}$/;
        var f = /[\?#&]?sthash\.[a-zA-z0-9]{8}$/;
        return f.test(a) || e.test(a) || d.test(a) || b.test(a)
    },
    appendHash: function (a) {
        var b = stlib.hash.stripHash(a);
        if (stlib.data.pageInfo.shareHash && (stlib.hash.validateHash(b) || b == "")) {
            a = a.replace("#" + b, "") + "#" + stlib.data.pageInfo.shareHash
        } else {
        }
        return a
    },
    copyPasteInit: function () {
        var a = document.getElementsByTagName("body")[0];
        var d = document.createElement("div");
        d.id = "stcpDiv";
        d.style.position = "absolute";
        d.style.top = "-1999px";
        d.style.left = "-1988px";
        a.appendChild(d);
        d.innerHTML = "ShareThis Copy and Paste";
        var b = document.location.href.split("#").shift();
        var e = "#" + stlib.hash.shareHash;
        if (document.addEventListener) {
            a.addEventListener("copy", function (i) {
                if (typeof(Tynt) != "undefined") {
                    return
                }
                var h = document.getSelection();
                if (h.isCollapsed) {
                    return
                }
                var g = h.getRangeAt(0).cloneContents();
                d.innerHTML = "";
                d.appendChild(g);
                if (d.textContent.trim().length == 0) {
                    return
                }
                if ((h + "").trim().length == 0) {
                } else {
                    if (d.innerHTML == (h + "") || d.textContent == (h + "")) {
                        d.innerHTML = stlib.html.encode(stlib.hash.selectionModify(h))
                    } else {
                        d.innerHTML += stlib.html.encode(stlib.hash.selectionModify(h, true))
                    }
                }
                var f = document.createRange();
                f.selectNodeContents(d);
                var j = h.getRangeAt(0);
                h.removeAllRanges();
                h.addRange(f);
                setTimeout(function () {
                    h.removeAllRanges();
                    h.addRange(j)
                }, 0)
            }, false)
        } else {
            if (document.attachEvent) {
            }
        }
    },
    copyPasteLog: function () {
        var d = window.addEventListener ? "addEventListener" : "attachEvent";
        var b = d == "attachEvent" ? "oncopy" : "copy";
        var a = document.getElementsByTagName("body")[0];
        if (a) {
            a[d](b, function (g) {
                var f = true;
                stlib.data.resetShareData();
                stlib.data.set("url", document.location.href, "shareInfo");
                stlib.data.setSource("copy");
                stlib.data.set("destination", "copy", "shareInfo");
                stlib.data.set("buttonType", "custom", "shareInfo");
                if (typeof(Tynt) != "undefined") {
                    stlib.data.set("result", "tynt", "shareInfo");
                    stlib.logger.log("debug");
                    f = false
                }
                if (typeof(addthis_config) != "undefined") {
                    stlib.data.set("result", "addThis", "shareInfo");
                    if (typeof(addthis_config.data_track_textcopy) == "undefined" || addthis_config.data_track_textcopy) {
                        stlib.data.set("enabled", "true", "shareInfo");
                        f = false
                    } else {
                        stlib.data.set("enabled", "false", "shareInfo")
                    }
                    stlib.logger.log("debug")
                }
                if (f) {
                    stlib.data.set("result", "pass", "shareInfo");
                    stlib.logger.log("debug")
                }
            }, false)
        }
    },
    logCopy: function (a, b) {
        stlib.data.resetShareData();
        stlib.data.set("url", a, "shareInfo");
        stlib.data.setSource("copy");
        stlib.data.set("destination", "copy", "shareInfo");
        stlib.data.set("buttonType", "custom", "shareInfo");
        if (b) {
            stlib.data.set("description", b, "shareInfo")
        }
        stlib.sharer.share()
    },
    selectionModify: function (o, m) {
        o = "" + o;
        _$d_();
        _$d1("Copy Paste");
        var n = /^((http|https):\/\/([a-z0-9!'\(\)\*\.\-\+:]*(\.)[a-z0-9!'\(\)\*\.\-\+:]*)((\/[a-z0-9!'\(\)\*\.\-\+:]*)*))/i;
        var h = /^([a-z0-9!'\(\)\*\.\-\+:]*(\.)[a-z0-9!'\(\)\*\.\-\+:]*)((\/[a-z0-9!'\(\)\*\.\-\+:]*)*)/i;
        var f = /^\+?1?[\.\-\\)_\s]?[\\(]?[0-9]{3}[\.\-\\)_\s]?[0-9]{3}[\.\-_\s]?[0-9]{4}$|^[0-9]{3}[\.\-_\s]?[0-9]{4}$/;
        var j = /^[0-9]{3}[\.\-_\s]?[0-9]{8}$/;
        var l = /^[0-9]{2}[\.\-_\s]?[0-9]{4}[\.\-_\s]?[0-9]{4}$/;
        var d = /[\-_\.a-z0-9]+@[\-_\.a-z0-9]+\.[\-_\.a-z0-9]+/i;
        var g = /[\s@]/;
        var b = document.location.href.split("#").shift();
        var i = "#" + stlib.hash.shareHash;
        var a = "";
        var k = "";
        var e = "";
        if (typeof(m) == "undefined" && ((n.test(o) || h.test(o)) && !g.test(o.trim()))) {
            _$d2("is Url");
            if (o.match(/#/) == null || stlib.hash.validateHash(o)) {
                k = o.split("#")[0] + i + ".dpuf";
                e = k
            } else {
                k = o;
                e = k
            }
        } else {
            _$d2("is Not Url");
            if (document.location.hash == "" || (/^#$/).test(document.location.hash) || stlib.hash.validateHash(document.location.hash)) {
                k = b + i + ".dpuf"
            } else {
                k = document.location.href
            }
            e = o;
            if (o.length > 50) {
                a = " - See more at: " + k + "";
                if (!f.test(o) && !j.test(o) && !l.test(o) && !d.test(o)) {
                    e += a
                }
            }
        }
        if (o.length > 140) {
            o = o.substring(0, 137) + "..."
        }
        stlib.hash.logCopy(k, o);
        return ((m && m == true) ? a : e)
    }
};
stlib.pump = function (a, d, e) {
    var b = this;
    this.isIframeReady = false;
    this.isIframeSending = false;
    this.getHash = function (f) {
        var g = f.split("#");
        g.shift();
        return g.join("#")
    };
    this.broadcastInit = function (f) {
        this.destination = f;
        _$d_("---------------------");
        _$d1("Initiating broadcaster:");
        _$d(this.destination)
    };
    this.broadcastSendMessage = function (f) {
        _$d_("---------------------");
        _$d1("Initiating Send:");
        if (this.destination === window) {
            if (stlib.browser.ieFallback) {
                window.location.replace(window.location.href.split("#")[0] + "#" + f);
                _$d2("child can't communicate with parent");
                return
            }
            _$d2("Iframe to publisher: " + f);
            parent.postMessage("#" + f, document.referrer)
        } else {
            _$d2("Publisher to Iframe: " + f);
            if (stlib.browser.ieFallback) {
                if (this.destination.contentWindow) {
                    this.destination.contentWindow.location.replace(this.destination.src + "#" + f);
                    this.isIframeSending = true
                }
                return
            }
            this.destination.contentWindow.postMessage("#" + f, this.destination.src)
        }
    };
    this.receiverInit = function (h, k) {
        _$d_("---------------------");
        _$d1("Initiating Receiver:");
        _$d(h);
        if (stlib.browser.ieFallback) {
            this.callback = k;
            this.source = h;
            if (h === window) {
                window.location.replace(window.location.href.split("#")[0] + "#");
                this.currentIframe = window.location.hash;
                var g = "receiver" + stlib.functionCount;
                stlib.functions[g] = function (m) {
                    if ("" != window.location.hash && "#" != window.location.hash) {
                        var l = window.location.hash;
                        m(l);
                        window.location.replace(window.location.href.split("#")[0] + "#")
                    }
                };
                stlib.functionCount++;
                var j = "callback" + stlib.functionCount;
                stlib.functions[j] = k;
                stlib.functionCount++;
                setInterval("stlib.functions['" + g + "'](stlib.functions['" + j + "'])", 200)
            } else {
            }
            var i = window.addEventListener ? "addEventListener" : "attachEvent";
            var f = i == "attachEvent" ? "onmessage" : "message";
            window[i](f, function (l) {
                if (h == window) {
                } else {
                    if (l.origin.indexOf("sharethis.com") != -1) {
                        if (l.data.match(/#Pinterest Click/)) {
                            stlib.sharer.sharePinterest()
                        }
                        if (l.data.match(/#Print Click/)) {
                            stlib.sharer.stPrint()
                        }
                    }
                }
            }, false);
            return
        }
        var i = window.addEventListener ? "addEventListener" : "attachEvent";
        var f = i == "attachEvent" ? "onmessage" : "message";
        window[i](f, function (l) {
            if (h == window) {
                _$d1("arrived in iframe from:");
                _$d(l.origin);
                if (l.data.match(/#fragmentPump/) || l.data.match(/#Buttons Ready/) || l.data.match(/#Widget Ready/) || l.data.indexOf("#light") == 0 || l.data.indexOf("#widget") == 0 || l.data.indexOf("#popup") == 0 || l.data.indexOf("#show") == 0 || l.data.indexOf("#init") == 0 || l.data.indexOf("#test") == 0 || l.data.indexOf("#data") == 0) {
                    k(l.data)
                }
            } else {
                if (l.origin.indexOf("sharethis.com") != -1) {
                    _$d1("arrived in parent from:");
                    _$d(l.origin);
                    if (l.data.match(/#fragmentPump/) || l.data.match(/#Buttons Ready/) || l.data.match(/#Widget Ready/) || l.data.indexOf("#light") == 0 || l.data.indexOf("#widget") == 0 || l.data.indexOf("#popup") == 0 || l.data.indexOf("#show") == 0 || l.data.indexOf("#init") == 0 || l.data.indexOf("#test") == 0 || l.data.indexOf("#data") == 0) {
                        k(l.data)
                    } else {
                        if (l.data.match(/#Pinterest Click/)) {
                            stlib.sharer.sharePinterest()
                        } else {
                            if (l.data.match(/#Print Click/)) {
                                stlib.sharer.stPrint()
                            }
                        }
                    }
                } else {
                    _$d1("discarded event from:");
                    _$d(l.origin)
                }
            }
        }, false)
    };
    this.broadcastInit(a);
    this.receiverInit(d, e)
};
stlib.json = {
    c: {"\b": "b", "\t": "t", "\n": "n", "\f": "f", "\r": "r", '"': '"', "\\": "\\", "/": "/"},
    d: function (a) {
        return a < 10 ? "0".concat(a) : a
    },
    e: function (c, f, e) {
        e = eval;
        delete eval;
        if (typeof eval === "undefined") {
            eval = e
        }
        f = eval("" + c);
        eval = e;
        return f
    },
    i: function (d, b, a) {
        return 1 * d.substr(b, a)
    },
    p: ["", "000", "00", "0", ""],
    rc: null,
    rd: /^[0-9]{4}\-[0-9]{2}\-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}$/,
    rs: /(\x5c|\x2F|\x22|[\x0c-\x0d]|[\x08-\x0a])/g,
    rt: /^([0-9]+|[0-9]+[,\.][0-9]{1,3})$/,
    ru: /([\x00-\x07]|\x0b|[\x0e-\x1f])/g,
    s: function (a, b) {
        return "\\".concat(stlib.json.c[b])
    },
    u: function (a, b) {
        var e = b.charCodeAt(0).toString(16);
        return "\\u".concat(stlib.json.p[e.length], e)
    },
    v: function (b, a) {
        return stlib.json.types[typeof result](result) !== Function && (a.hasOwnProperty ? a.hasOwnProperty(b) : a.constructor.prototype[b] !== a[b])
    },
    types: {
        "boolean": function () {
            return Boolean
        }, "function": function () {
            return Function
        }, number: function () {
            return Number
        }, object: function (a) {
            return a instanceof a.constructor ? a.constructor : null
        }, string: function () {
            return String
        }, "undefined": function () {
            return null
        }
    },
    $$: function (a) {
        function b(f, d) {
            d = f[a];
            delete f[a];
            try {
                stlib.json.e(f)
            } catch (e) {
                f[a] = d;
                return 1
            }
        }

        return b(Array) && b(Object)
    },
    encode: function () {
        var d = arguments.length ? arguments[0] : this, a, h;
        if (d === null) {
            a = "null"
        } else {
            if (d !== undefined && (h = stlib.json.types[typeof d](d))) {
                switch (h) {
                    case Array:
                        a = [];
                        for (var g = 0, e = 0, b = d.length; e < b; e++) {
                            if (d[e] !== undefined && (h = stlib.json.encode(d[e]))) {
                                a[g++] = h
                            }
                        }
                        a = "[".concat(a.join(","), "]");
                        break;
                    case Boolean:
                        a = String(d);
                        break;
                    case Date:
                        a = '"'.concat(d.getFullYear(), "-", stlib.json.d(d.getMonth() + 1), "-", stlib.json.d(d.getDate()), "T", stlib.json.d(d.getHours()), ":", stlib.json.d(d.getMinutes()), ":", stlib.json.d(d.getSeconds()), '"');
                        break;
                    case Function:
                        break;
                    case Number:
                        a = isFinite(d) ? String(d) : "null";
                        break;
                    case String:
                        a = '"'.concat(d.replace(stlib.json.rs, stlib.json.s).replace(stlib.json.ru, stlib.json.u), '"');
                        break;
                    default:
                        var g = 0, f;
                        a = [];
                        for (f in d) {
                            if (d[f] !== undefined && (h = stlib.json.encode(d[f]))) {
                                a[g++] = '"'.concat(f.replace(stlib.json.rs, stlib.json.s).replace(stlib.json.ru, stlib.json.u), '":', h)
                            }
                        }
                        a = "{".concat(a.join(","), "}");
                        break
                }
            }
        }
        return a
    },
    decode: function (a) {
        if (typeof(a) == "string") {
            var d = null;
            try {
                if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                    d = window.JSON && window.JSON.parse ? window.JSON.parse(a) : (new Function("return " + a))();
                    return d
                } else {
                    return null
                }
            } catch (b) {
            }
        }
    }
};
try {
    stlib.json.rc = new RegExp('^("(\\\\.|[^"\\\\\\n\\r])*?"|[,:{}\\[\\]0-9.\\-+Eaeflnr-u \\n\\r\\t])+?$')
} catch (z) {
    stlib.json.rc = /^(true|false|null|\[.*\]|\{.*\}|".*"|\d+|\d+\.\d+)$/
}
stlib.logger = {
    loggerUrl: (("https:" == document.location.protocol) ? "https://" : "http://") + "l.sharethis.com/",
    l2LoggerUrl: (("https:" == document.location.protocol) ? "https://" : "http://") + "l2.sharethis.com/",
    productArray: new Array(),
    version: "",
    lang: "en",
    isFpEvent: false,
    constructParamString: function () {
        var a = stlib.data.pageInfo;
        var d = "";
        var b;
        for (b in a) {
            if (!stlib.logger.isFpEvent && (b == "ufa" || b == "ufb" || b == "ufc" || b == "ufd")) {
                continue
            }
            d += b + "=" + a[b] + "&"
        }
        a = stlib.data.shareInfo;
        for (b in a) {
            d += b + "=" + a[b] + "&"
        }
        return d.substring(0, d.length - 1)
    },
    log: function (g, i, f) {
        if (g == "pview" || g == "share" || g == "onscript") {
            stlib.logger.isFpEvent = true;
            if (stlib.stfp.screenResolutionDepthHash != "ERROR") {
                stlib.data.set("ufa", stlib.stfp.screenResolutionDepthHash, "pageInfo")
            }
            if (stlib.stfp.pluginsListHash != "ERROR") {
                stlib.data.set("ufb", stlib.stfp.pluginsListHash, "pageInfo")
            }
            if (stlib.stfp.fontsListHash != "ERROR") {
                stlib.data.set("ufc", stlib.stfp.fontsListHash, "pageInfo")
            }
            if (stlib.stfp.timezoneoffsetHash != "ERROR") {
                stlib.data.set("ufd", stlib.stfp.timezoneoffsetHash, "pageInfo")
            }
        } else {
            stlib.logger.isFpEvent = false
        }
        if (typeof(stlib.data.get("counter", "shareInfo")) != "undefined") {
            var e = 0;
            if (stlib.data.get("counter", "shareInfo")) {
                e = stlib.data.get("counter", "shareInfo")
            }
            stlib.data.set("ts" + new Date().getTime() + "." + e, "", "shareInfo");
            stlib.data.unset("counter", "shareInfo")
        } else {
            stlib.data.set("ts" + new Date().getTime(), "", "shareInfo")
        }
        if (g == "widget") {
            var b = "." + stlib.hash.hashDestination(stlib.data.shareInfo.destination);
            stlib.hash.updateDestination(b)
        }
        if (!f || (f != stlib.logger.loggerUrl && f != stlib.logger.l2LoggerUrl)) {
            f = stlib.logger.loggerUrl
        }
        var a = (g == "pview" || g == "onscript") ? g : ((g == "debug") ? "cns" : "log");
        if (g == "pview" || g == "onscript") {
            var h = f + a + "?event=" + g + "&test=V5&version=" + stlib.logger.version + "&lang=" + stlib.logger.lang + "&" + stlib.logger.constructParamString()
        } else {
            var h = f + a + "?event=" + g + "&test=V5&" + stlib.logger.constructParamString()
        }
        var d = new Image(1, 1);
        d.src = h;
        d.onload = function () {
            return
        };
        i ? i() : null
    }
};
if (!stlib.onscriptload && document.URL.indexOf("edge.sharethis.com") == -1) {
    stlib.data.init();
    stlib.onscriptload = true;
    stlib.logger.log("onscript")
}
stlib.scriptLoader = {
    loadJavascript: function (b, d) {
        _$d_();
        _$d1("Loading JS: " + b);
        var a = stlib.scriptLoader;
        a.head = document.getElementsByTagName("head")[0];
        a.scriptSrc = b;
        a.script = document.createElement("script");
        a.script.setAttribute("type", "text/javascript");
        a.script.setAttribute("src", a.scriptSrc);
        a.script.async = true;
        if (window.attachEvent && document.all) {
            a.script.onreadystatechange = function () {
                if (this.readyState == "complete" || this.readyState == "loaded") {
                    d()
                }
            }
        } else {
            a.script.onload = d
        }
        a.s = document.getElementsByTagName("script")[0];
        a.s.parentNode.insertBefore(a.script, a.s)
    }, loadCSS: function (b, e) {
        _$d_();
        _$d1("Loading CSS: " + b);
        var a = stlib.scriptLoader;
        var d;
        a.head = document.getElementsByTagName("head")[0];
        a.cssSrc = b;
        a.css = document.createElement("link");
        a.css.setAttribute("rel", "stylesheet");
        a.css.setAttribute("type", "text/css");
        a.css.setAttribute("href", b);
        a.css.setAttribute("id", b);
        setTimeout(function () {
            e();
            if (!document.getElementById(b)) {
                d = setInterval(function () {
                    if (document.getElementById(b)) {
                        clearInterval(d);
                        e()
                    }
                }, 100)
            }
        }, 100);
        a.head.appendChild(a.css)
    }
};
stlib.nativeButtons = {
    supportedNativeButtons: {
        linkedinfollow: {
            log: true,
            config: true,
            dependencyLoaded: false,
            dependencyLoading: false,
            requiredFields: [["st_followId", "Profile Id", "Enter '207839' for profile id"]]
        },
        twitterfollow: {
            log: false,
            config: true,
            requiredFields: [["st_username", "Username", "Enter 'sharethis' for username"]]
        },
        pinterestfollow: {
            log: true,
            config: true,
            requiredFields: [["st_username", "Username", "Enter 'sharethis' for username"]]
        },
        youtube: {
            log: true,
            config: true,
            requiredFields: [["st_username", "Username", "Enter 'sharethis' for username"]]
        },
        foursquaresave: {log: false, config: true, dependencyLoaded: false, dependencyLoading: false},
        foursquarefollow: {
            log: false,
            config: true,
            requiredFields: [["st_username", "Username", "Enter 'sharethis' for username"], ["st_followId", "Follow id", "Enter '1234567' for follow id"]]
        },
        googleplusfollow: {
            log: true,
            config: true,
            requiredFields: [["st_followId", "Page Id", "Enter '110967630299632321627' for page id"]]
        },
        googleplusadd: {
            log: true,
            config: true,
            requiredFields: [["st_followId", "Profile Id", "Enter '113842823840690472625' for profile id"]]
        }
    }, loadService: function (a) {
        if (a == "foursquaresave" || a == "foursquarefollow") {
            if (stlib.nativeButtons.supportedNativeButtons.foursquaresave.dependencyLoaded == false) {
                if (stlib.nativeButtons.supportedNativeButtons.foursquaresave.dependencyLoading == false) {
                    stlib.nativeButtons.supportedNativeButtons.foursquaresave.dependencyLoading = true;
                    var d = "http://platform.foursquare.com/js/widgets.js";
                    var b = {uid: "606"};
                    if ("https:" == document.location.protocol) {
                        d = "http://platform-s.foursquare.com/js/widgets.js";
                        b.secure = true
                    }
                    (function () {
                        window.___fourSq = b;
                        var e = document.createElement("script");
                        e.type = "text/javascript";
                        e.src = d;
                        e.async = true;
                        var f = document.getElementsByTagName("script")[0];
                        e.onload = function () {
                            fourSq.widget.Factory.go();
                            stlib.nativeButtons.supportedNativeButtons.foursquaresave.dependencyLoaded = true;
                            stlib.nativeButtons.supportedNativeButtons.foursquaresave.dependencyLoading = false
                        };
                        e.onreadystatechange = function () {
                            if (this.readyState == "complete" || this.readyState == "loaded") {
                                fourSq.widget.Factory.go();
                                stlib.nativeButtons.supportedNativeButtons.foursquaresave.dependencyLoaded = true;
                                stlib.nativeButtons.supportedNativeButtons.foursquaresave.dependencyLoading = false
                            }
                        };
                        f.parentNode.insertBefore(e, f)
                    })()
                }
            } else {
                fourSq.widget.Factory.go()
            }
        } else {
            if (a == "pinterestfollow") {
            } else {
                if (a == "twitterfollow") {
                } else {
                    if (a == "youtube") {
                    } else {
                        if (a == "linkedinfollow") {
                            if (window.IN && typeof(window.IN.parse) === "function") {
                                window.IN.parse()
                            } else {
                                if (stlib.nativeButtons.supportedNativeButtons.linkedinfollow.dependencyLoading == false) {
                                    stlib.nativeButtons.supportedNativeButtons.linkedinfollow.dependencyLoading = true;
                                    var d = "//platform.linkedin.com/in.js";
                                    (function () {
                                        var e = document.createElement("script");
                                        e.type = "text/javascript";
                                        e.src = d;
                                        e.async = true;
                                        var f = document.getElementsByTagName("script")[0];
                                        e.onload = function () {
                                            stlib.nativeButtons.supportedNativeButtons.linkedinfollow.dependencyLoading = false
                                        };
                                        e.onreadystatechange = function () {
                                            if (this.readyState == "complete" || this.readyState == "loaded") {
                                                stlib.nativeButtons.supportedNativeButtons.linkedinfollow.dependencyLoading = false
                                            }
                                        };
                                        f.parentNode.insertBefore(e, f)
                                    })()
                                }
                            }
                        } else {
                        }
                    }
                }
            }
        }
    }, logService: function (a, b) {
        stlib.data.resetShareData();
        stlib.data.set("url", b, "shareInfo");
        stlib.data.set("destination", a, "shareInfo");
        stlib.data.setSource("chicklet");
        stlib.data.set("buttonType", "chicklet", "shareInfo");
        stlib.sharer.share()
    }, makeButton: function (w, e, d) {
        if (w == "foursquaresave") {
            try {
                var k = document.createElement("<div></div>");
                var i = document.createElement("<a></a>")
            } catch (h) {
                k = document.createElement("div");
                i = document.createElement("a")
            }
            k.className = "stNativeButton stFourSquare";
            i.setAttribute("href", "https://foursquare.com/intent/venue.html");
            i.setAttribute("class", "fourSq-widget");
            i.setAttribute("data-on-open", "foursquareCallback");
            k.appendChild(i);
            return k
        } else {
            if (w == "foursquarefollow") {
                if (typeof(d.username) == "undefined" || d.username == "") {
                    return false
                }
                if (typeof(d.followId) == "undefined" || d.followId == "") {
                    return false
                }
                try {
                    var k = document.createElement("<div></div>");
                    var i = document.createElement("<a></a>")
                } catch (h) {
                    k = document.createElement("div");
                    i = document.createElement("a")
                }
                k.className = "stNativeButton stFourSquare";
                i.setAttribute("href", "https://foursquare.com/user/" + d.username);
                i.setAttribute("class", "fourSq-widget");
                i.setAttribute("data-type", "follow");
                i.setAttribute("data-fuid", d.followId);
                i.setAttribute("data-on-open", "foursquareCallback");
                k.appendChild(i);
                return k
            } else {
                if (w == "googleplusfollow" || w == "googleplusadd") {
                    if (typeof(d.followId) == "undefined" || d.followId == "") {
                        return false
                    }
                    try {
                        var q = document.createElement("<span></span>")
                    } catch (h) {
                        q = document.createElement("span")
                    }
                    q.className = "stNativeButton stGoogleNative";
                    var o = document.createElement("g:plus");
                    o.setAttribute("href", "https://plus.google.com/" + d.followId);
                    o.setAttribute("width", "300");
                    o.setAttribute("height", "69");
                    q.appendChild(o);
                    return q
                } else {
                    if (w == "pinterestfollow") {
                        if (typeof(d.username) == "undefined" || d.username == "") {
                            return false
                        }
                        try {
                            var b = document.createElement("<span></span>");
                            var p = document.createElement("<a></a>");
                            var n = document.createElement("<img></img>")
                        } catch (h) {
                            b = document.createElement("span");
                            p = document.createElement("a");
                            n = document.createElement("img")
                        }
                        b.className = "stNativeButton stPinterestfollow";
                        var g = d.username;
                        p.setAttribute("target", "_blank");
                        p.setAttribute("href", "//pinterest.com/" + g + "/");
                        n.setAttribute("src", "//passets-cdn.pinterest.com/images/follow-on-pinterest-button.png");
                        n.setAttribute("width", "156");
                        n.setAttribute("height", "26");
                        n.setAttribute("alt", "Follow " + g + " on Pinterest");
                        p.appendChild(n);
                        b.appendChild(p);
                        return b
                    } else {
                        if (w == "twitterfollow") {
                            if (typeof(d.username) == "undefined" || d.username == "") {
                                return false
                            }
                            try {
                                var j = document.createElement("<iframe></iframe>")
                            } catch (h) {
                                j = document.createElement("iframe")
                            }
                            var l = "&screen_name=" + d.username;
                            var r = "&show_count=false";
                            iedocmode = stlib.browser.getIEVersion();
                            var v = "";
                            if (e == "vcount") {
                                r = "&show_count=true"
                            } else {
                                if (e == "hcount") {
                                    r = "&show_count=true"
                                }
                            }
                            j.setAttribute("allowtransparency", "true");
                            j.setAttribute("frameborder", "0");
                            j.setAttribute("scrolling", "no");
                            j.className = "stTwitterFollowFrame";
                            j.setAttribute("src", "//platform.twitter.com/widgets/follow_button.html?lang=en&show_screen_name=false" + l + r);
                            var u = document.createElement("span");
                            u.className = "stNativeButton stTwitterFollowFrame stTwitterFollow";
                            u.appendChild(j);
                            return u
                        } else {
                            if (w == "youtube") {
                                if (typeof(d.username) == "undefined" || d.username == "") {
                                    return false
                                }
                                try {
                                    var m = document.createElement("<span></span>");
                                    var f = document.createElement("<a></a>");
                                    var a = document.createElement("<img></img>")
                                } catch (h) {
                                    m = document.createElement("span");
                                    f = document.createElement("a");
                                    a = document.createElement("img")
                                }
                                m.setAttribute("class", "stNativeButton stYoutube");
                                var g = d.username;
                                f.setAttribute("target", "_blank");
                                f.setAttribute("href", "//youtube.com/subscription_center?add_user=" + g);
                                a.setAttribute("src", "//s.ytimg.com/yt/img/creators_corner/Subscribe_to_my_videos/YT_Subscribe_130x36_red.png");
                                a.setAttribute("alt", "Follow " + g + " on youtube");
                                f.appendChild(a);
                                m.appendChild(f);
                                return m
                            } else {
                                if (w == "linkedinfollow") {
                                    if (typeof(d.followId) == "undefined" || d.followId == "") {
                                        return false
                                    }
                                    var s = document.createElement("span");
                                    s.setAttribute("class", "stNativeButton stLinkedinfollow");
                                    var t = document.createElement("script");
                                    t.type = "text/javascript";
                                    t.setAttribute("type", "IN/FollowCompany");
                                    t.setAttribute("data-id", d.followId);
                                    t.setAttribute("data-counter", "none");
                                    if (e == "vcount") {
                                        t.setAttribute("data-counter", "top")
                                    } else {
                                        if (e == "hcount") {
                                            t.setAttribute("data-counter", "right")
                                        }
                                    }
                                    s.appendChild(t);
                                    return s
                                } else {
                                }
                            }
                        }
                    }
                }
            }
        }
    }, checkNativeButtonSupport: function (a) {
        if (stlib.nativeButtons.supportedNativeButtons[a]) {
            return true
        }
        return false
    }, checkNativeButtonLogging: function (a) {
        if (stlib.nativeButtons.supportedNativeButtons[a]) {
            return stlib.nativeButtons.supportedNativeButtons[a].log
        }
        return false
    }, checkNativeButtonConfig: function (a) {
        if (stlib.nativeButtons.supportedNativeButtons[a]) {
            return stlib.nativeButtons.supportedNativeButtons[a].config
        }
        return false
    }
};
foursquareCallback = function (d) {
    if (d) {
        var a = "foursquaresave";
        var b = "https://foursquare.com/intent/venue.html";
        if (d.config.type) {
            a = "foursquarefollow";
            b = "https://foursquare.com/user/" + d.config.fuid
        }
        stlib.nativeButtons.logService(a, b)
    }
};
stlib.nativeCounts = {
    nativeCountServices: {linkedin: true, facebook: true, stumbleupon: true},
    nativeFunc: [],
    addNativeFunc: function (b, a) {
        stlib.nativeCounts.nativeFunc[b] = a
    },
    getNativeCounts: function (e, d, b) {
        switch (e) {
            case"facebook":
                var a = "select url, like_count, total_count, comment_count, share_count, click_count from link_stat where url='" + encodeURIComponent(d) + "'";
                var f = (("https:" == document.location.protocol) ? "https://ws.sharethis.com/api/processFQLQuery.php?fqlQuery=" + a + "&callback=" + b + "" : "http://wd.sharethis.com/api/processFQLQuery.php?fqlQuery=" + a + "&callback=" + b + "");
                stlib.scriptLoader.loadJavascript(f, function () {
                });
                break;
            case"linkedin":
                stlib.scriptLoader.loadJavascript((("https:" == document.location.protocol) ? "https://" : "http://") + "www.linkedin.com/countserv/count/share?format=jsonp&callback=" + b + "&url=" + encodeURIComponent(d), function () {
                });
                break;
            case"stumbleupon":
                stlib.scriptLoader.loadJavascript((("https:" == document.location.protocol) ? "https://" : "http://") + "www.stumbleupon.com/services/1.1/badge.getinfo?url=" + encodeURIComponent(d) + "&format=jsonp&callback=" + b, function () {
                });
                break
        }
    },
    checkNativeCountServicesQueue: function (a) {
        if (stlib.nativeCounts.nativeCountServices[a]) {
            return true
        }
        return false
    }
};
var stWidgetVersion = false, showHoverbarReskinned = false;
var isEsiLoaded = false;
if (typeof(switchTo5x) == "undefined") {
    stWidgetVersion = "4x"
} else {
    if (switchTo5x == false) {
        stWidgetVersion = "4x"
    }
    if (switchTo5x == true) {
        stWidgetVersion = "5xa"
    }
}
var stShowNewMobileWidget = false;
__stgetPubGA = function () {
    if (typeof(_gaq) !== "undefined" && typeof(__stPubGA) == "undefined") {
        if (typeof(_gat) !== "undefined") {
            __stPubGA = _gat._getTrackerByName("~0")._getAccount()
        }
        if (typeof(__stPubGA) !== "undefined" && __stPubGA == "UA-XXXXX-X") {
            _gaq.push(function () {
                var a = _gat._getTrackerByName();
                __stPubGA = a._getAccount()
            })
        }
    } else {
        if (typeof(ga) !== "undefined" && typeof(__stPubGA) == "undefined") {
            ga(function () {
                var f = ga.getAll();
                for (var b = 0; b < f.length; ++b) {
                    var d = f[b];
                    var a = d.get("trackingId");
                    var e = a.indexOf("UA");
                    if (e >= 0) {
                        __stPubGA = a
                    }
                }
            })
        }
    }
    if (__stPubGA == "UA-XXXXX-X") {
        delete __stPubGA
    }
};
if (typeof(stLight) == "undefined" && typeof(SHARETHIS) == "undefined") {
    var isMobileButtonLoaded = false;
    var stRecentServices = false;
    var iswhatsappCustomButton = false;
    var isKikCustomButton = false;
    if (typeof(switchTo5x) == "undefined") {
        stWidgetVersion = "4x"
    } else {
        if (switchTo5x == false) {
            stWidgetVersion = "4x"
        }
        if (switchTo5x == true) {
            stWidgetVersion = "5xa"
        }
    }
    var stIsLoggedIn = false, servicesLoggedIn = {};
    var stFastShareObj = {};
    stFastShareObj.shorten = true;
    if ("https:" == document.location.protocol) {
        var useFastShare = false
    }
    if (typeof(useFastShare) == "undefined") {
        var useFastShare = true
    }
    stLight = new function () {
        this.version = false;
        this.publisher = null;
        this.sessionID_time = (new Date()).getTime().toString();
        this.sessionID_rand = Number(Math.random().toPrecision(5).toString().substr(2)).toString();
        this.sessionID = this.sessionID_time + "." + this.sessionID_rand;
        this.fpc = null;
        this.counter = 0;
        this.readyRun = false;
        this.meta = {hostname: document.location.host, location: document.location.pathname};
        this.loadedFromBar = false;
        this.clickCallBack = false
    };
    stLight.onReady = function () {
        if (stLight.readyRun == true) {
            return false
        }
        stLight.readyRun = true;
        stlib.stfp.init();
        stLight.getAllAppDefault(function () {
            stlib.data.init();
            stLight.fpc = stlib.data.get("fpc", "pageInfo");
            if (stButtons.messageQueueInstance == null) {
                stButtons.messageQueueInstance = new stlib.messageQueue()
            }
            stLight.processSTQ();
            if (stLight.publisher == null) {
                if (typeof(window.console) !== "undefined") {
                    try {
                        console.debug("Please specify a ShareThis Publisher Key \nFor help, contact support@sharethis.com")
                    } catch (a) {
                    }
                }
            }
            var b = stLight.getSource();
            if (stLight.hasButtonOnPage()) {
                if (b == "share4x" || b == "bar_share4x") {
                    stlib.logger.productArray.push("Chicklet4x")
                } else {
                    if (b == "share5x" || b == "bar_share5x") {
                        stlib.logger.productArray.push("Chicklet5x")
                    }
                }
            }
            if (typeof st_hover_widget != "undefined") {
                stlib.logger.productArray.push("HoverBar")
            }
            if (typeof st_pulldown_widget != "undefined") {
                stlib.logger.productArray.push("PullDownBar")
            }
            if (typeof st_bar_widget != "undefined") {
                stlib.logger.productArray.push("ShareBar")
            }
            if (typeof st_service_widget != "undefined") {
                stlib.logger.productArray.push("ShareNow")
            }
            if (typeof stlib.shareEgg != "undefined") {
                stlib.logger.productArray.push("ShareEgg")
            }
            if (typeof st_disc_widget != "undefined") {
                stlib.logger.productArray.push("TrendingWidget")
            }
            stlib.logger.version = "buttons.js";
            if ((stWidget.options.lang !== "undefined") && (stWidget.options.lang !== "")) {
                stlib.logger.lang = stWidget.options.lang
            } else {
                stlib.logger.lang = "en"
            }
            if (stlib.logger.productArray.length > 0) {
                stlib.data.set("product", stlib.logger.productArray.toString(), "pageInfo")
            }
            stLight.log("pview", b);
            stWidget.options.sessionID = stLight.sessionID;
            stWidget.options.fpc = stLight.fpc;
            stButtons.onReady()
        })
    };
    stLight.getSource = function () {
        var a = "share4x";
        if (stWidgetVersion == "5xa") {
            a = "share5x"
        }
        if (stLight.hasButtonOnPage()) {
            if (stLight.loadedFromBar) {
                if (stWidgetVersion == "5xa") {
                    a = "bar_share5x"
                } else {
                    a = "bar_share4x"
                }
            }
        } else {
            if (stLight.loadedFromBar) {
                a = "bar"
            }
        }
        return a
    };
    stLight.getSource2 = function (a) {
        var d = "share4x";
        if (stWidgetVersion == "5xa") {
            d = "share5x";
            try {
                if (stLight.clickCallBack != false) {
                    stLight.clickCallBack(a.service)
                }
            } catch (b) {
            }
        }
        if (a.type == "stbar" || a.type == "stsmbar") {
            d = "bar"
        }
        return d
    };
    stLight.log = function (d, e, a, b) {
        stlib.data.resetShareData();
        stlib.data.set("url", document.location.href, "shareInfo");
        stlib.data.set("title", document.title, "shareInfo");
        stlib.data.set("counter", stLight.counter++, "shareInfo");
        stlib.data.setSource(e);
        if (typeof(a) != "undefined") {
            stlib.data.set("destination", a, "shareInfo")
        }
        if (typeof(b) != "undefined") {
            stlib.data.set("buttonType", b, "shareInfo")
        }
        stlib.logger.log(d);
        if (d == "pview") {
            stLight.createSegmentFrame()
        }
    };
    stLight._stFpc = function () {
        if (!document.domain || document.domain.search(/\.gov/) > 0) {
            return false
        }
        var h = stLight._stGetFpc("__unam");
        if (h == false) {
            var d = Math.round(Math.random() * 2147483647);
            d = d.toString(16);
            var i = (new Date()).getTime();
            i = i.toString(16);
            var f = "";
            var a = stLight._stGetD();
            a = a.split(/\./)[1];
            if (!a) {
                return false
            }
            f = stLight._stdHash(a) + "-" + i + "-" + d + "-1";
            h = f;
            stLight._stSetFpc(h)
        } else {
            var b = h;
            var g = b.split(/\-/);
            if (g.length == 4) {
                var e = Number(g[3]);
                e++;
                b = g[0] + "-" + g[1] + "-" + g[2] + "-" + e;
                h = b;
                stLight._stSetFpc(h)
            }
        }
        return h
    };
    stLight._stSetFpc = function (h) {
        var a = "__unam";
        var d = new Date;
        var j = d.getFullYear();
        var g = d.getMonth() + 9;
        var i = d.getDate();
        var e = a + "=" + escape(h);
        if (j) {
            var b = new Date(j, g, i);
            e += "; expires=" + b.toGMTString()
        }
        var f = stLight._stGetD();
        e += "; domain=" + escape(f) + ";path=/";
        document.cookie = e
    };
    stLight._stGetD = function () {
        var b = document.domain.split(/\./);
        var a = "";
        if (b.length > 1) {
            a = "." + b[b.length - 2] + "." + b[b.length - 1]
        }
        return a
    };
    stLight._stGetFpc = function (b) {
        var a = document.cookie.match("(^|;) ?" + b + "=([^;]*)(;|$)");
        if (a) {
            return (unescape(a[2]))
        } else {
            return false
        }
    };
    stLight._stdHash = function (a) {
        var f = 0, e = 0;
        for (var d = a.length - 1; d >= 0; d--) {
            var b = parseInt(a.charCodeAt(d));
            f = ((f << 8) & 268435455) + b + (b << 12);
            if ((e = f & 161119850) != 0) {
                f = (f ^ (e >> 20))
            }
        }
        return f.toString(16)
    };
    stLight._thisScript = null;
    stLight.getShareThisLightScript = function () {
        var e = document.getElementsByTagName("script");
        var d = null;
        for (var b = 0; b < e.length; b++) {
            var a = e[b].src;
            if (a.search(/.*sharethis.*\/button\/light.*/) >= 0) {
                d = e[b]
            }
        }
        return d
    };
    stLight.dbrInfo = function () {
        var j = document.referrer;
        if (j && j.length > 0) {
            var h = /\/\/.*?\//;
            var e = j.match(h);
            if (typeof(e) !== "undefined" && typeof(e[0]) !== "undefined") {
                var b = new RegExp(document.domain, "gi");
                if (b.test(e[0]) == true) {
                    return false
                }
            }
            var g = /(http:\/\/)(.*?)\/.*/i;
            var f = /(^.*\?)(.*)/ig;
            var a = "";
            var d = j.replace(g, "$2");
            var b = new RegExp(d, "gi");
            if (d.length > 0) {
                a += "&refDomain=" + d
            } else {
                return false
            }
            var i = j.replace(f, "$2");
            if (i.length > 0) {
                a += "&refQuery=" + encodeURIComponent(i)
            }
            return a
        } else {
            return false
        }
    };
    stLight.odjs = function (a, b) {
        this.head = document.getElementsByTagName("head")[0];
        this.scriptSrc = a;
        this.script = document.createElement("script");
        this.script.setAttribute("type", "text/javascript");
        this.script.setAttribute("src", this.scriptSrc);
        if (window.attachEvent && document.all) {
            this.script.onreadystatechange = function () {
                if (this.readyState == "complete" && this.readyState == "loaded") {
                    b()
                }
            }
        } else {
            this.script.onload = b
        }
        this.head.appendChild(this.script)
    };
    stLight.getAllAppDefault = function (a) {
        if (name == "cns") {
            if (stWidget.options.doNotHash == null) {
                stlib.hash.doNotHash = stWidget.options.doNotHash = true
            }
            if (stWidget.options.hashAddressBar == null) {
                stlib.hash.hashAddressBar = stWidget.options.hashAddressBar = false
            }
            if (stWidget.options.doNotCopy == null) {
                stlib.hash.doNotCopy = stWidget.options.doNotCopy = true
            }
        } else {
            if (name == "snapsets") {
                if (stWidget.options.snapsets == null) {
                    stWidget.options.snapsets = false
                }
            }
        }
        a()
    };
    stLight.allDefault = function (a) {
        if (a) {
            if (a.cns) {
                stLight.cnsDefault(a.cns)
            }
            if (a.snapsets) {
                stLight.snapSetsDefault(a.snapsets)
            }
            if (a.migration) {
                stLight.migrationDefault(a.migration)
            } else {
                stLight.usePublisherDefaultSettings()
            }
            if (a.mobileWidget) {
                stLight.mobileWidgetSetsDefault(a.mobileWidget)
            } else {
                if (typeof(stLight.mobileWidget) != "undefined") {
                    stLight.setUserDefinedMobileParameter()
                }
            }
        } else {
            stLight.usePublisherDefaultSettings()
        }
    };
    stLight.mobileWidgetSetsDefault = function (a) {
        if (typeof(a) != "undefined" && typeof(a.mobileWidget) != "undefined") {
            showHoverbarReskinned = a.mobileWidget
        }
        if (typeof(stLight.mobileWidget) != "undefined") {
            stLight.setUserDefinedMobileParameter()
        } else {
            if (a) {
                stShowNewMobileWidget = a.mobileWidget
            }
        }
    };
    stLight.setUserDefinedMobileParameter = function () {
        if (stLight.mobileWidget === true || stLight.mobileWidget === "true") {
            stShowNewMobileWidget = true
        } else {
            if (stLight.mobileWidget === false || stLight.mobileWidget === "false") {
                stShowNewMobileWidget = false
            } else {
                stShowNewMobileWidget = false
            }
        }
    };
    stLight.usePublisherDefaultSettings = function () {
        if (typeof(switchTo5x) == "undefined") {
            stWidgetVersion = "4x"
        } else {
            if (switchTo5x == false) {
                stWidgetVersion = "4x"
            }
            if (switchTo5x == true) {
                stWidgetVersion = "5xa"
            }
        }
        if (typeof(stLight.mobileWidget) != "undefined") {
            stLight.setUserDefinedMobileParameter()
        }
    };
    stLight.migrationDefault = function (a) {
        if (stWidgetVersion == "5x" || stLight.version == "5x") {
            stWidgetVersion = "5xa"
        }
    };
    stLight.snapSetsDefault = function (a) {
        if (a) {
            if (a.override) {
                stWidget.options.snapsets = a.snapsets
            } else {
                if (stWidget.options.snapsets == null) {
                    stWidget.options.snapsets = a.snapsets
                }
            }
        }
    };
    stLight.cnsDefault = function (a) {
        if (a) {
            if (a.override) {
                stWidget.options.doNotHash = a.doNotHash;
                stWidget.options.hashAddressBar = a.hashAddressBar;
                stWidget.options.doNotCopy = a.doNotCopy
            } else {
                if (stWidget.options.doNotHash == null) {
                    stWidget.options.doNotHash = a.doNotHash
                }
                if (stWidget.options.hashAddressBar == null) {
                    stWidget.options.hashAddressBar = a.hashAddressBar
                }
                if (stWidget.options.doNotCopy == null) {
                    stWidget.options.doNotCopy = a.doNotCopy
                }
            }
            stlib.hash.doNotHash = stWidget.options.doNotHash = (/true/i).test(stWidget.options.doNotHash) ? true : false;
            stlib.hash.hashAddressBar = stWidget.options.hashAddressBar = (/true/i).test(stWidget.options.hashAddressBar) ? true : false;
            stlib.hash.doNotCopy = stWidget.options.doNotCopy = (/true/i).test(stWidget.options.doNotCopy) ? true : false
        }
    };
    stLight.loadServicesLoggedIn = function (a) {
        a()
    };
    if (window.document.readyState == "completed") {
        stLight.onReady()
    } else {
        if (typeof(window.addEventListener) != "undefined") {
            window.addEventListener("load", stLight.onReady, false)
        } else {
            if (typeof(document.addEventListener) != "undefined") {
                document.addEventListener("load", stLight.onReady, false)
            } else {
                if (typeof window.attachEvent != "undefined") {
                    window.attachEvent("onload", stLight.onReady)
                }
            }
        }
    }
    stLight.createSegmentFrame = function () {
        try {
            stLight.segmentframe = document.createElement('<iframe name="stframe" allowTransparency="true" style="body{background:transparent;}" ></iframe>')
        } catch (b) {
            stLight.segmentframe = document.createElement("iframe")
        }
        stLight.segmentframe.id = "stSegmentFrame";
        stLight.segmentframe.name = "stSegmentFrame";
        var d = document.body;
        var a = (("https:" == document.location.protocol) ? "https://seg." : "http://seg.") + "sharethis.com/getSegment.php?purl=" + encodeURIComponent(document.location.href) + "&jsref=" + encodeURIComponent(document.referrer) + "&rnd=" + (new Date()).getTime();
        stLight.segmentframe.src = a;
        stLight.segmentframe.frameBorder = "0";
        stLight.segmentframe.scrolling = "no";
        stLight.segmentframe.width = "0px";
        stLight.segmentframe.height = "0px";
        stLight.segmentframe.setAttribute("style", "display:none;");
        d.appendChild(stLight.segmentframe)
    };
    stLight.options = function (a) {
        if (a && a.version) {
            stLight.version = a.version
        }
        if (a && typeof(a.mobileWidget) != "undefined") {
            stLight.mobileWidget = a.mobileWidget
        }
        if (a && a.publisher) {
            stlib.data.setPublisher(a.publisher);
            stLight.publisher = a.publisher
        }
        if (a && a.loadedFromBar) {
            stLight.loadedFromBar = a.loadedFromBar
        }
        if (a && a.clickCallBack && typeof(a.clickCallBack) == "function") {
            stLight.clickCallBack = a.clickCallBack
        }
        if (a && typeof(a.hashAddressBar) != "undefined") {
            stlib.hash.hashAddressBar = a.hashAddressBar
        }
        if (a && typeof(a.doNotHash) != "undefined") {
            stlib.hash.doNotHash = a.doNotHash
        }
        if (a && typeof(a.doNotCopy) != "undefined") {
            stlib.hash.doNotCopy = a.doNotCopy
        }
        for (var b in a) {
            if (b == "shorten") {
                stFastShareObj.shorten = a[b]
            }
            if (stWidget.options.hasOwnProperty(b) && a[b] !== null) {
                stWidget.options[b] = a[b]
            }
        }
    };
    stLight.hasButtonOnPage = function () {
        var g = document.getElementsByTagName("*");
        var e = new RegExp(/^st_(.*?)$/);
        var d = new RegExp(/st_(.*?)_custom$/);
        var a = g.length;
        for (var b = 0; b < a; b++) {
            if (typeof(g[b].className) == "string" && g[b].className != "") {
                if ((g[b].className.match(/st_whatsapp_custom/g) || g[b].className.match(/st_kik_custom/g)) && !(stlib.browser.mobile.isIOs() || stlib.browser.mobile.isAndroid()) && !(iswhatsappCustomButton || isKikCustomButton)) {
                    if (typeof(window.console) !== "undefined") {
                        try {
                            if (g[b].className.match(/st_whatsapp_custom/g)) {
                                console.debug("WhatsApp custom button has support for iOS (iPhone) and android only and it will not work on any other platform.");
                                iswhatsappCustomButton = true
                            } else {
                                if (g[b].className.match(/st_kik_custom/g)) {
                                    console.debug("Kik custom button has support for iOS (iPhone) and android only and it will not work on any other platform.");
                                    isKikCustomButton = true
                                }
                            }
                        } catch (f) {
                        }
                    }
                }
                if (g[b].className.match(d) && g[b].className.match(d).length >= 2 && g[b].className.match(d)[1]) {
                    return true
                } else {
                    if (g[b].className.match(e) && g[b].className.match(e).length >= 2 && g[b].className.match(e)[1]) {
                        return true
                    }
                }
            }
        }
        return false
    }
}
var stButtons = {};
stButtons.smartifyButtons = function (a) {
    if (typeof(a) != "undefined" && a != "undefined") {
        stRecentServices = a;
        for (var b in stRecentServices) {
            stRecentServices[b].processed = false
        }
    }
    stButtons.completeInit()
};
stButtons.makeButton = function (v) {
    var g = v.service;
    var H = v.text;
    var Y = "";
    if (typeof(stWidget.options.shorten) != "undefined") {
        Y = stWidget.options.shorten
    }
    if (H == null && (v.type == "vcount" || v.type == "hcount")) {
        H = "Share";
        if (g == "email") {
            H = "Mail"
        }
    }
    if (g == "fb_like") {
        g = "fblike"
    } else {
        if (g == "fblike_fbLong") {
            g = "fblike";
            v.type = "fbLong"
        }
    }
    var h = stWidget.ogurl ? stWidget.ogurl : (stWidget.twitterurl ? stWidget.twitterurl : document.location.href);
    h = v.url ? v.url : h;
    var U = h;
    if (!stlib.hash.doNotHash) {
        U = stlib.hash.appendHash(h);
        h = U
    }
    stlib.data.set("url", U, "shareInfo");
    var N = (v.short_url != null) ? v.short_url : "";
    var K = stWidget.ogtitle ? stWidget.ogtitle : (stWidget.twittertitle ? stWidget.twittertitle : document.title);
    K = v.title ? v.title : K;
    if (typeof(v.pinterest_native) == "string") {
        v.pinterest_native = v.pinterest_native.replace(/^\s+|\s+$/g, "")
    }
    if ((g == "weheartit" || g == "pinterest" || g == "kik") && (v.pinterest_native == "false" || v.pinterest_native == null || v.pinterest_native == "")) {
        var f = stWidget.ogimg ? stWidget.ogimg : (stWidget.twitterimg ? stWidget.twitterimg : (v.thumbnail ? v.thumbnail : null));
        if (typeof(f) == "string") {
            f = f.replace(/^\s+|\s+$/g, "")
        }
        if (typeof(v.image) == "string") {
            v.image = v.image.replace(/^\s+|\s+$/g, "")
        }
        f = (v.image) ? v.image : f
    }
    var Z = stWidget.desc ? stWidget.desc : "";
    Z = stWidget.ogdesc ? stWidget.ogdesc : (stWidget.twitterdesc ? stWidget.twitterdesc : stWidget.desc);
    Z = (v.summary && v.summary != null) ? v.summary : Z;
    var r = (v.message && v.message != null) ? v.message : "";
    if (/(http|https):\/\//.test(h) == false) {
        h = decodeURIComponent(h);
        K = decodeURIComponent(K)
    }
    if (/(http|https):\/\//.test(N) == false) {
        N = decodeURIComponent(N)
    }
    var af = document.createElement("span");
    af.setAttribute("style", "text-decoration:none;color:#000000;display:inline-block;cursor:pointer;");
    af.className = "stButton";
    if (v.type == "custom" && g != "email" && g != "sharethis" && g != "wordpress") {
        v.element.onclick = function () {
            _$d_();
            _$d1("Clicked on a custom button to share");
            stLight.callSubscribers("click", g, h);
            stlib.data.resetShareData();
            stlib.data.set("url", h, "shareInfo");
            stlib.data.set("short_url", N, "shareInfo");
            stlib.data.set("shorten", Y, "shareInfo");
            stlib.data.set("title", K, "shareInfo");
            stlib.data.set("destination", g, "shareInfo");
            stlib.data.setSource("chicklet");
            stlib.data.set("buttonType", v.type, "shareInfo");
            if (typeof(pinterest_native) != "undefined" && pinterest_native != null && pinterest_native != " ") {
                stlib.data.set("pinterest_native", pinterest_native, "shareInfo")
            }
            if (typeof(f) != "undefined" && f != null && f != " ") {
                stlib.data.set("image", f, "shareInfo")
            }
            if (typeof(Z) != "undefined" && Z != null) {
                stlib.data.set("description", Z, "shareInfo")
            }
            if (r != "") {
                stlib.data.set("message", r, "shareInfo")
            }
            if (v.element.getAttribute("st_username") != null) {
                stlib.data.set("refUsername", v.element.getAttribute("st_username"), "shareInfo")
            }
            if (g == "twitter" && v.element.getAttribute("st_via") != null) {
                stlib.data.set("via", v.element.getAttribute("st_via").replace(/^\s+|\s+$/g, ""), "shareInfo")
            }
            stlib.sharer.share(null, stWidget.options.servicePopup);
            if (g == "pinterest") {
                stlib.sharer.sharePinterest()
            }
            if (g == "print") {
                stlib.sharer.stPrint()
            }
        };
        return false
    }
    if (!((g == "email" || g == "sharethis" || g == "wordpress") || (stIsLoggedIn && servicesLoggedIn && typeof(servicesLoggedIn[g]) != "undefined" && ((useFastShare || (!useFastShare && switchTo5x)) && (g == "facebook" || g == "twitter" || g == "yahoo" || g == "linkedin"))))) {
        af.onclick = function () {
            if (!(stlib.browser.mobile.isIOs() || stlib.browser.mobile.isAndroid()) && ((g == "whatsapp" || g == "kik") && window.location.pathname.indexOf("get-sharing-tools") != -1)) {
            } else {
                _$d_();
                _$d1("Clicked on a regular button to share");
                stLight.callSubscribers("click", g, h);
                var b = this.getElementsByTagName("*");
                for (var a = 0; a < b.length; a++) {
                    if (b[a].className == "stBubble_hcount" || b[a].className == "stBubble_count") {
                        if (!stWidget.options.nativeCount || !stlib.nativeCounts.checkNativeCountServicesQueue(g)) {
                            if (!isNaN(b[a].innerHTML)) {
                                b[a].innerHTML = Number(b[a].innerHTML) + 1
                            }
                        }
                    }
                }
                if (stWidget.options.tracking) {
                    shareLog(g, h)
                }
                stlib.data.resetShareData();
                var ah = "";
                var ag = stLight.getSource();
                if (ag == "share5x") {
                    ah = "5x"
                } else {
                    if (ag == "share4x") {
                        ah = "4x"
                    }
                }
                stlib.data.set("url", h, "shareInfo");
                stlib.data.set("short_url", N, "shareInfo");
                stlib.data.set("shorten", Y, "shareInfo");
                stlib.data.set("title", K, "shareInfo");
                stlib.data.set("destination", g, "shareInfo");
                stlib.data.setSource("chicklet" + ah);
                stlib.data.set("buttonType", v.type, "shareInfo");
                if (typeof(pinterest_native) != "undefined" && pinterest_native != null && pinterest_native != " ") {
                    stlib.data.set("pinterest_native", pinterest_native, "shareInfo")
                }
                if (typeof(f) != "undefined" && f != null) {
                    stlib.data.set("image", f, "shareInfo")
                }
                if (typeof(Z) != "undefined" && Z != null) {
                    stlib.data.set("description", Z, "shareInfo")
                }
                if (r != "") {
                    stlib.data.set("message", r, "shareInfo")
                }
                if (v.element.getAttribute("st_username") != null) {
                    stlib.data.set("refUsername", v.element.getAttribute("st_username"), "shareInfo")
                }
                if (g == "twitter" && v.element.getAttribute("st_via") != null) {
                    stlib.data.set("via", v.element.getAttribute("st_via").replace(/^\s+|\s+$/g, ""), "shareInfo")
                }
                stlib.sharer.share(null, stWidget.options.servicePopup);
                if (g == "pinterest" && (stlib.data.get("image", "shareInfo") == false || stlib.data.get("image", "shareInfo") == null)) {
                    stlib.sharer.sharePinterest()
                }
                if (g == "print") {
                    stlib.sharer.stPrint()
                }
            }
        }
    }
    if (g == "gbuzz") {
        return af
    }
    if (g == "fblike" || g == "fbsend" || g == "fbrec" || g == "fbLong" || g == "fbsub") {
        if (g == "fbsub") {
            if (v.element.getAttribute("st_username") != null) {
                h = "http://facebook.com/" + v.element.getAttribute("st_username")
            } else {
                h = ""
            }
        }
        return stButtons.makeFBButton(g, v.type, h)
    }
    if (stlib.nativeButtons.checkNativeButtonSupport(g)) {
        var V = {};
        if (v.element.getAttribute("st_username") != null) {
            V.username = v.element.getAttribute("st_username")
        }
        if (v.element.getAttribute("st_followId") != null) {
            V.followId = v.element.getAttribute("st_followId")
        }
        retObj = stlib.nativeButtons.makeButton(g, v.type, V);
        if (retObj) {
            if (stlib.nativeButtons.checkNativeButtonLogging(g)) {
                retObj.onclick = function () {
                    stlib.nativeButtons.logService(g, h)
                }
            }
            return retObj
        } else {
            if (typeof(window.console) !== "undefined") {
                try {
                    console.debug("Looks like " + g + " is missing some required parameters. Please recheck " + g + " HTML \nFor help, contact support@sharethis.com")
                } catch (aa) {
                }
            }
            return af
        }
    }
    if (g == "plusone") {
        stButtons.loadPlusone = true;
        var F = document.createElement("div");
        F.innerHTML = "&nbsp;";
        iedocmode = stlib.browser.getIEVersion();
        var w = (navigator.userAgent.indexOf("MSIE 7.0") != -1);
        var i = (navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") == -1);
        var P = "display:inline-block;overflow:hidden;line-height:0px;";
        var C = "overflow:hidden;zoom:1;display:inline;vertical-align:bottom;";
        var D = "overflow:hidden;zoom:1;display:inline;line-height:0px;position:relative;";
        var e = document.createElement("g:plusone");
        var l = h;
        if ((/#sthash/i).test(l)) {
            var n = l.split("#");
            if (n.length > 0) {
                l = n[0]
            }
        }
        e.setAttribute("href", l);
        if (v.type == "vcount") {
            e.setAttribute("size", "tall");
            F.setAttribute("style", P + "vertical-align:bottom;width:55px; height:61px;");
            w && F.style.setAttribute ? F.style.setAttribute("cssText", P + "vertical-align:bottom;width:55px; height:61px;", 0) : null;
            (iedocmode && (iedocmode == 7) && F.style.setAttribute) ? F.style.setAttribute("cssText", D + "vertical-align:bottom;bottom:-8px;width:55px; height:80px;", 0) : (null)
        } else {
            if (v.type == "hcount") {
                e.setAttribute("size", "medium");
                e.setAttribute("count", "true");
                F.setAttribute("style", P + "position:relative;vertical-align:middle;bottom:0px;width:75px; height:21px;");
                w && F.style.setAttribute ? F.style.setAttribute("cssText", P + "position:relative;vertical-align:middle;width:75px; height:21px;", 0) : null;
                (iedocmode && (iedocmode == 7) && F.style.setAttribute) ? F.style.setAttribute("cssText", D + "vertical-align:middle;bottom:2px;width:75px; height:21px;", 0) : (null)
            } else {
                if (v.type == "button") {
                    e.setAttribute("size", "medium");
                    e.setAttribute("count", "false");
                    F.setAttribute("style", P + "position:relative;vertical-align:middle;bottom:0px;width:36px; height:21px;");
                    w && F.style.setAttribute ? F.style.setAttribute("cssText", P + "position:relative;vertical-align:middle;width:36px; height:21px;", 0) : null;
                    (iedocmode && (iedocmode == 7) && F.style.setAttribute) ? F.style.setAttribute("cssText", D + "vertical-align:middle;bottom:-8px;width:36px; height:39px;", 0) : (null)
                } else {
                    if (v.type == "large") {
                        e.setAttribute("size", "large");
                        e.setAttribute("count", "false");
                        F.setAttribute("style", P + "position:relative;vertical-align:middle;bottom:12px;width:38px; height:27px;");
                        w && F.style.setAttribute ? F.style.setAttribute("cssText", P + "position:relative;vertical-align:middle;bottom:0px;width:38px; height:30px;", 0) : null;
                        (iedocmode && ((iedocmode == 8) || (iedocmode == 9)) && F.style.setAttribute) ? F.style.setAttribute("cssText", D + "vertical-align:middle;bottom:7px;width:38px; height:39px;", 0) : (null);
                        (iedocmode && (iedocmode == 7) && F.style.setAttribute) ? F.style.setAttribute("cssText", D + "vertical-align:middle;bottom:1px;width:38px; height:39px;", 0) : (null)
                    } else {
                        e.setAttribute("size", "small");
                        e.setAttribute("count", "false");
                        F.setAttribute("style", P + "position:relative;vertical-align:middle;bottom:0px;width:36px; height:16px;");
                        w && F.style.setAttribute ? F.style.setAttribute("cssText", P + "position:relative;vertical-align:middle;width:36px; height:16px;", 0) : null;
                        (iedocmode && (iedocmode == 7) && F.style.setAttribute) ? F.style.setAttribute("cssText", D + "vertical-align:middle;bottom:-12px;width:36px; height:36px;", 0) : (null)
                    }
                }
            }
        }
        F.appendChild(e);
        e.setAttribute("callback", "plusoneCallback");
        return F
    }
    var j = ("https:" == document.location.protocol) ? "https://ws.sharethis.com/images/" : "http://w.sharethis.com/images/";
    var s = g;
    if (v.type == "chicklet") {
        var M = document.createElement("span");
        M.className = "chicklets " + g;
        if (H == null) {
            M.innerHTML = "&nbsp;";
            af.style.paddingLeft = "0px";
            af.style.paddingRight = "0px";
            af.style.width = "16px"
        } else {
            M.appendChild(document.createTextNode(H))
        }
        af.appendChild(M);
        return af
    } else {
        if (v.type == "large") {
            var M = document.createElement("span");
            M.className = "stLarge";
            af.appendChild(M);
            M.style.backgroundImage = "url('" + j + s + "_32.png')";
            return af
        } else {
            if (v.type == "basic" || v.type == "circle" || v.type == "brushed" || v.type == "shiny") {
                var M = document.createElement("span");
                M.className = "stLarge";
                M.className = v.size == "16" ? ((v.type == "brushed" || v.type == "shiny") ? "stSmall2" : "stSmall") : M.className;
                M.className = v.size == "64" ? "stHuge" : M.className;
                af.appendChild(M);
                M.style.backgroundImage = "url('" + j + v.type + "/" + v.size + "/" + s + (v.color ? "_" + v.color : "_" + v.type) + ".png')";
                return af
            } else {
                if (v.type == "pcount" || v.type == "stbar" || v.type == "stsmbar") {
                    var B = document.createElement("span");
                    var M = document.createElement("span");
                    if (v.type == "stsmbar") {
                        M.className = "stSmBar";
                        var j = ("https:" == document.location.protocol) ? "https://ws.sharethis.com/images/" : "http://w.sharethis.com/images/";
                        M.style.backgroundImage = "url('" + j + s + "_16.png')"
                    } else {
                        M.className = "stLarge";
                        var j = ("https:" == document.location.protocol) ? "https://ws.sharethis.com/images/" : "http://w.sharethis.com/images/";
                        M.style.backgroundImage = "url('" + j + s + "_32.png')"
                    }
                    B.appendChild(M);
                    var t = document.createElement("span");
                    var ae = document.createElement("div");
                    if (v.type == "stsmbar") {
                        ae.className = "stBubbleSmHoriz"
                    } else {
                        ae.className = "stBubbleSm"
                    }
                    ae.setAttribute("id", "stBubble_" + v.count);
                    ae.style.visibility = "hidden";
                    var W = document.createElement("div");
                    W.className = "stBubble_count_sm";
                    ae.appendChild(W);
                    t.appendChild(ae);
                    t.appendChild(B);
                    af.appendChild(t);
                    stButtons.getCount2(h, g, W);
                    B.onmouseover = function () {
                        var a = document.getElementById("stBubble_" + v.count);
                        a.style.visibility = "visible"
                    };
                    B.onmouseout = function () {
                        var a = document.getElementById("stBubble_" + v.count);
                        a.style.visibility = "hidden"
                    };
                    return af
                } else {
                    if (v.type == "button" || v.type == "vcount" || v.type == "hcount") {
                        var B = document.createElement("span");
                        B.className = "stButton_gradient";
                        var I = document.createElement("span");
                        I.className = "chicklets " + g;
                        if (H == null) {
                            I.innerHTML = "&nbsp;"
                        } else {
                            I.appendChild(document.createTextNode(H))
                        }
                        B.appendChild(I);
                        if (g == "facebook" || g == "twitter" || g == "linkedin" || g == "yahoo" || g == "pinterest" || g == "sharethis" || g == "email") {
                            var u = document.createElement("span");
                            u.className = "stMainServices st-" + g + "-counter";
                            u.innerHTML = "&nbsp";
                            B = u;
                            u.style.backgroundImage = "url('" + j + s + "_counter.png')";
                            if (g == "sharethis" && H != null && H.length < 6) {
                                u.className = "stMainServices st-" + g + "-counter2";
                                u.style.backgroundImage = "url('" + j + s + "_counter2.png')"
                            }
                        }
                        if (v.type == "vcount") {
                            var t = document.createElement("div");
                            var ae = document.createElement("div");
                            ae.className = "stBubble";
                            var W = document.createElement("div");
                            W.className = "stBubble_count";
                            ae.appendChild(W);
                            t.appendChild(ae);
                            t.appendChild(B);
                            af.appendChild(t);
                            stButtons.getCount2(h, g, W)
                        } else {
                            if (v.type == "hcount") {
                                var t = document.createElement("span");
                                var O = document.createElement("span");
                                O.className = "stButton_gradient stHBubble";
                                var q = document.createElement("span");
                                q.className = "stButton_left";
                                q.innerHTML = "&nbsp;";
                                var x = document.createElement("span");
                                x.className = "stButton_right";
                                x.innerHTML = "&nbsp;";
                                var W = document.createElement("span");
                                W.className = "stBubble_hcount";
                                O.appendChild(W);
                                t.appendChild(B);
                                var E = document.createElement("span");
                                E.className = "stArrow";
                                E.appendChild(O);
                                t.appendChild(E);
                                af.appendChild(t);
                                stButtons.getCount2(h, g, W)
                            } else {
                                af.appendChild(B)
                            }
                        }
                        if (v.type == "vcount" || v.type == "hcount") {
                            if (v.ctype == "native") {
                                if (g == "twitter") {
                                    var X = document.createElement("span");
                                    X.className = "stButton";
                                    var G = 55;
                                    var ab = 20;
                                    var S = "";
                                    var k = "none";
                                    var J = 7;
                                    if (v.type == "vcount") {
                                        var p = document.createElement("div");
                                        G = 55;
                                        ab = 62;
                                        S = "top:42px;";
                                        k = "vertical"
                                    } else {
                                        if (v.type == "hcount") {
                                            var p = document.createElement("span");
                                            G = 110;
                                            ab = 20;
                                            k = "horizontal"
                                        }
                                    }
                                    iedocmode = stlib.browser.getIEVersion();
                                    var T = document.createElement("span");
                                    T.setAttribute("style", "vertical-align:bottom;line-height:0px;position:absolute;padding:0px !important;" + S + "width:55px;height:20px;");
                                    (iedocmode && (iedocmode == 7) && T.style.setAttribute) ? T.style.setAttribute("cssText", "vertical-align:bottom;line-height:0px;position:absolute;padding:0px !important;" + S + "width:55px;height:20px;", 0) : null;
                                    try {
                                        var R = document.createElement('<iframe name="stframe" allowTransparency="true" scrolling="no" frameBorder="0"></iframe>')
                                    } catch (aa) {
                                        R = document.createElement("iframe");
                                        R.setAttribute("allowTransparency", "true");
                                        R.setAttribute("frameborder", "0");
                                        R.setAttribute("scrolling", "no")
                                    }
                                    var ad = encodeURIComponent(h);
                                    R.setAttribute("src", "http://platform.twitter.com/widgets/tweet_button.html?count=" + k + "&url=" + ad);
                                    R.setAttribute("style", "width:" + G + "px;height:" + ab + "px;");
                                    (iedocmode && (iedocmode == 7) && R.style.setAttribute) ? R.style.setAttribute("cssText", "width:" + G + "px;height:" + ab + "px;", 0) : null;
                                    if ((useFastShare && servicesLoggedIn && typeof(servicesLoggedIn[g]) != "undefined")) {
                                        p.appendChild(T)
                                    }
                                    p.appendChild(R);
                                    B = p;
                                    X.appendChild(B);
                                    X.setAttribute("style", "text-decoration:none;color:#000000;display:inline-block;cursor:pointer;vertical-align:bottom;margin-top:6px;width:" + G + "px;height:" + ab + "px;");
                                    (iedocmode && (iedocmode == 7) && X.style.setAttribute) ? X.style.setAttribute("cssText", "text-decoration:none;color:#000000;display:inline-block;cursor:pointer;vertical-align:bottom;width:" + G + "px;height:" + ab + "px;", 0) : null;
                                    af = X
                                } else {
                                    if (g == "facebook") {
                                        stButtons.getXFBMLFromFB(v);
                                        return stButtons.makeFBButton("fblike", v.type, h)
                                    } else {
                                        if (g == "linkedin") {
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        if (v.type == "css") {
                            var B = document.createElement("div");
                            B.className = "stCSSButton";
                            if (v.cssType == "cssV") {
                                var A = document.createElement("div");
                                A.className = "stCSSVBubble";
                                var L = document.createElement("div");
                                L.className = "stCSSVBubble_count";
                                A.appendChild(L);
                                var m = document.createElement("div");
                                m.className = "stCSSVArrow";
                                var Q = document.createElement("div");
                                Q.className = "stCSSVArrowBorder";
                                Q.appendChild(m);
                                af.appendChild(A);
                                af.appendChild(Q);
                                stButtons.getCount2(h, g, L)
                            }
                            var d = document.createElement("div");
                            d.className = "stCSSSprite " + g;
                            d.innerHTML = "&nbsp;";
                            var M = document.createElement("span");
                            M.className = "stCSSText";
                            B.appendChild(d);
                            if (H == null || H == "") {
                            } else {
                                M.appendChild(document.createTextNode(H));
                                B.appendChild(M)
                            }
                            af.appendChild(B);
                            if (v.cssType == "cssH") {
                                var y = document.createElement("div");
                                y.className = "stCSSHBubble";
                                var L = document.createElement("div");
                                L.className = "stCSSHBubble_count";
                                y.appendChild(L);
                                var ac = document.createElement("div");
                                ac.className = "stCSSHArrow";
                                var o = document.createElement("div");
                                o.className = "stCSSHArrowBorder";
                                o.appendChild(ac);
                                af.appendChild(o);
                                af.appendChild(y);
                                stButtons.getCount2(h, g, L)
                            }
                        }
                    }
                }
            }
        }
    }
    return af
};
stButtons.makeFBButton = function (j, l, b) {
    try {
        var i = document.createElement("<div></div>")
    } catch (e) {
        i = document.createElement("div")
    }
    if ((/#sthash/i).test(b)) {
        var m = b.split("#");
        if (m.length > 0) {
            b = m[0]
        }
    }
    var d = b;
    var h = "button_count";
    var k = "fb-send";
    var f = "";
    iedocmode = stlib.browser.getIEVersion();
    var g = "";
    if (l == "vcount") {
        h = "box_count"
    } else {
        if (l == "hcount") {
        } else {
            if (l == "large") {
                g = (iedocmode && (iedocmode == 7)) ? "vertical-align:bottom;bottom:3px;" : "bottom:7px;margin-top:9px;"
            } else {
                if (l == "button") {
                } else {
                    g = "top:1px;margin-top:0px;"
                }
            }
        }
    }
    if (j == "fbLong") {
        k = "fb-like";
        h = "standard";
        i.setAttribute("data-layout", h);
        i.setAttribute("data-send", "false");
        i.setAttribute("data-show-faces", "false")
    } else {
        if (j == "fbsend") {
            k = "fb-send"
        } else {
            if (j == "fblike" || j == "fbrec") {
                (j == "fbrec") ? f = "recommend" : null;
                k = "fb-like";
                i.setAttribute("data-action", f);
                i.setAttribute("data-send", "false");
                i.setAttribute("data-layout", h);
                i.setAttribute("data-show-faces", "false")
            } else {
                if (j == "fbsub") {
                    k = "fb-subscribe";
                    i.setAttribute("data-layout", h);
                    i.setAttribute("data-show-faces", "false")
                }
            }
        }
    }
    i.setAttribute("class", k);
    i.setAttribute("data-href", d);
    if (iedocmode && (iedocmode == 7)) {
        if (j != "fbsend") {
            i = document.createElement("<div class='" + k + "' data-action='" + f + "' data-send='false' data-layout='" + h + "' data-show-faces='false' data-href='" + d + "'></div>")
        } else {
            i = document.createElement("<div class='" + k + "' data-href='" + d + "'></div>")
        }
    }
    var a = document.createElement("span");
    a.setAttribute("style", "text-decoration:none;color:#000000;display:inline-block;cursor:pointer;position:relative;margin:3px 3px 0;padding:0px;font-size:11px;line-height:0px;vertical-align:bottom;overflow:visible;" + g);
    (iedocmode && (iedocmode == 7) && a.style.setAttribute) ? a.style.setAttribute("cssText", "text-decoration:none;color:#000000;display:inline-block;cursor:pointer;position:relative;margin:3px 3px 0;font-size:11px;line-height:0px;" + g, 0) : (null);
    a.appendChild(i);
    return a
};
stButtons.getCount = function (d, a, e) {
    var b = false;
    if (e && e !== null) {
        while (e.childNodes.length >= 1) {
            try {
                e.removeChild(e.firstChild)
            } catch (f) {
            }
        }
    }
    stButtons.cbQueue.push({url: d, service: a, element: e});
    stButtons.getCountsFromService(d, a, e)
};
stButtons.getCount2 = function (d, a, e) {
    var b = false;
    if (e && e !== null) {
        while (e.childNodes.length >= 1) {
            try {
                e.removeChild(e.firstChild)
            } catch (f) {
            }
        }
    }
    if (stWidget.options.nativeCount && stlib.nativeCounts.checkNativeCountServicesQueue(a)) {
        if (a == "facebook") {
            if ((/#/).test(d)) {
                d = d.split("#")[0]
            }
        }
        stButtons.cbNativeQueue.push({url: d, service: a, element: e});
        if (typeof(stButtons.countsNativeResp[d]) == "undefined") {
            stButtons.countsNativeResp[d] = []
        }
        if (typeof(stButtons.countsNativeResp[d][a]) == "undefined") {
            stlib.nativeCounts.getNativeCounts(a, d, "stButtons." + a + "CB");
            stButtons.countsNativeResp[d][a] = null
        } else {
            if (stButtons.countsNativeResp[d][a] != null) {
                switch (a) {
                    case"facebook":
                        stButtons.facebookCB(stButtons.countsNativeResp[d][a]);
                        break;
                    case"linkedin":
                        stButtons.linkedinCB(stButtons.countsNativeResp[d][a]);
                        break;
                    case"stumbleupon":
                        stButtons.stumbleuponCB(stButtons.countsNativeResp[d][a]);
                        break
                }
            }
        }
    } else {
        stButtons.cbQueue.push({url: d, service: a, element: e});
        stButtons.getCountsFromService(d, a, e)
    }
};
stButtons.processCB = function (a) {
    if (typeof(a) != "undefined" && typeof(a.ourl) != "undefined") {
        stButtons.countsResp[a.ourl] = a
    }
    stButtons.processCount(a)
};
stButtons.stumbleuponCB = function (a) {
    var b = {ourl: "", stumbleupon: null};
    if (typeof(a) != "undefined" && typeof(a.result) != "undefined") {
        if (typeof(stButtons.countsNativeResp[a.result.url]) != "undefined") {
            stButtons.countsNativeResp[a.result.url]["stumbleupon"] = a
        }
        b.ourl = a.result.url;
        if (typeof(a.result.views) != "undefined") {
            b.stumbleupon = a.result.views
        }
    }
    stButtons.processNativeCount(b, "stumbleupon")
};
stButtons.linkedinCB = function (a) {
    var b = {ourl: "", linkedin: null};
    if (typeof(a) != "undefined") {
        if (typeof(stButtons.countsNativeResp[a.url]) != "undefined") {
            stButtons.countsNativeResp[a.url]["linkedin"] = a
        }
        b.ourl = a.url;
        if (typeof(a.count) != "undefined") {
            b.linkedin = a.count
        }
    }
    stButtons.processNativeCount(b, "linkedin")
};
stButtons.facebookCB = function (a) {
    var b = {ourl: "", facebook: null};
    if (typeof(a) != "undefined") {
        if (typeof(stButtons.countsNativeResp[a.data[0].url]) != "undefined") {
            stButtons.countsNativeResp[a.data[0].url]["facebook"] = a.data
        }
        b.ourl = a.data[0].url;
        if (typeof(a.data[0].total_count) != "undefined") {
            b.facebook = a.data[0].total_count
        }
    }
    stButtons.processNativeCount(b, "facebook")
};
stButtons.processCount = function (b) {
    if (!(b)) {
        return
    }
    stButtons.storedCountResponse = b;
    var a = false;
    for (var d = 0; d < stButtons.cbQueue.length; d++) {
        var f = stButtons.cbQueue[d];
        if (b.ourl == f.url) {
            var h = "New";
            try {
                if (f.service == "sharethis") {
                    if (stWidget.options.minShareCount == null || b.total >= stWidget.options.minShareCount) {
                        if (stWidget.options.newOrZero == "zero") {
                            h = (b.total > 0) ? stButtons.human(b.total) : "0"
                        } else {
                            h = (b.total > 0) ? stButtons.human(b.total) : "New"
                        }
                    }
                } else {
                    if (f.service == "facebook" && typeof(b.facebook2) != "undefined") {
                        if (stWidget.options.minShareCount == null || b.facebook2 >= stWidget.options.minShareCount) {
                            h = stButtons.human(b.facebook2)
                        }
                    } else {
                        if (typeof(b[f.service]) != "undefined") {
                            if (stWidget.options.minShareCount == null || b[f.service] >= stWidget.options.minShareCount) {
                                h = (b[f.service] > 0) ? stButtons.human(b[f.service]) : "0"
                            }
                        } else {
                            if (stWidget.options.minShareCount == null || stWidget.options.minShareCount <= 0) {
                                h = "0"
                            }
                        }
                    }
                }
                if (/stHBubble/.test(f.element.parentNode.className) == true) {
                    f.element.parentNode.style.display = "inline-block"
                } else {
                    if (/stBubble/.test(f.element.parentNode.className) == true) {
                        f.element.parentNode.style.display = "block"
                    }
                }
                f.element.innerHTML = h
            } catch (e) {
                if (!f.element.hasChildNodes()) {
                    var g = document.createElement("div");
                    g.innerHTML = h;
                    f.element.appendChild(g)
                }
            }
            a = true
        }
    }
};
stButtons.processNativeCount = function (b, a) {
    if (!(b)) {
        return
    }
    if (!(a)) {
        return
    }
    for (var d = 0; d < stButtons.cbNativeQueue.length; d++) {
        var f = stButtons.cbNativeQueue[d];
        if (b.ourl == f.url || (a == "stumbleupon" && b.ourl.replace(/http:\/\/www\.|http:\/\/|www\./i, "") == f.url.replace(/http:\/\/www\.|http:\/\/|www\./i, ""))) {
            var h = "New";
            try {
                if (f.service == a) {
                    if (b[a] != null) {
                        if (stWidget.options.minShareCount == null || b[a] >= stWidget.options.minShareCount) {
                            h = stButtons.human(b[a])
                        }
                    }
                } else {
                    continue
                }
                if (/stHBubble/.test(f.element.parentNode.className) == true) {
                    f.element.parentNode.style.display = "inline-block"
                } else {
                    if (/stBubble/.test(f.element.parentNode.className) == true) {
                        f.element.parentNode.style.display = "block"
                    }
                }
                f.element.innerHTML = h
            } catch (e) {
                if (!f.element.hasChildNodes()) {
                    var g = document.createElement("div");
                    g.innerHTML = h;
                    f.element.appendChild(g)
                }
            }
        }
    }
};
stButtons.human = function (a) {
    if (a >= 100000) {
        a = a / 1000;
        a = Math.round(a);
        a = a + "K"
    } else {
        if (a >= 10000) {
            a = a / 100;
            a = Math.round(a);
            a = a / 10;
            a = a + "K"
        }
    }
    return a
};
stButtons.isValidService = function (a) {
    return (typeof(stlib.allServices) === "object" && stlib.allServices.hasOwnProperty(a)) ? true : (typeof(stlib.allOauthServices) === "object" && stlib.allOauthServices.hasOwnProperty(a)) ? true : (typeof(stlib.allNativeServices) === "object" && stlib.allNativeServices.hasOwnProperty(a)) ? true : (typeof(stlib.allOtherServices) === "object" && stlib.allOtherServices.hasOwnProperty(a)) ? true : false
};
stButtons.locateElements = function (f) {
    var F = document.getElementsByTagName("*");
    var u = [];
    var X = new RegExp(/st_(.*?)_custom/);
    var W = new RegExp(/st_(.*?)_vcount/);
    var H = new RegExp(/st_(.*?)_vcount_native/);
    var V = new RegExp(/st_(.*?)_hcount/);
    var t = new RegExp(/st_(.*?)_hcount_native/);
    var U = new RegExp(/st_(.*?)_button/);
    var T = new RegExp(/st_(.*?)_large/);
    var S = new RegExp(/st_(.*?)_pcount/);
    var Q = new RegExp(/st_(.*?)_stbar/);
    var N = new RegExp(/st_(.*?)_stsmbar/);
    var M = new RegExp(/st_(.*?)_css/);
    var E = new RegExp(/^st_(.*?)$/);
    var n = new RegExp(/st_(.*?)_basic/);
    var v = new RegExp(/st_(.*?)_circle/);
    var r = new RegExp(/(st_(.*?)_basic)|(st_(.*?)_circle)/);
    var h = new RegExp(/(st_(.*?)_brushed)|(st_(.*?)_shiny)/);
    var K = new RegExp(/(st_(.*?)_brushed)/);
    var Y = new RegExp(/(st_(.*?)_shiny)/);
    var l = F.length;
    var d = false;
    var w = {};
    var I = 0, J, s, p, a = [], D = false;
    if (typeof(stRecentServices) != "undefined" && stRecentServices != "undefined" && stRecentServices != "false" && stRecentServices) {
        D = true
    }
    for (var L = 0; L < l; L++) {
        J = "";
        s = false;
        p = false;
        if (typeof(F[L].className) == "string" && F[L].className != "") {
            if (!(stlib.browser.mobile.isIOs() || stlib.browser.mobile.isAndroid()) && ((F[L].className.indexOf("whatsapp") !== -1 || F[L].className.indexOf("kik") !== -1) && window.location.pathname.indexOf("get-sharing-tools") === -1)) {
                continue
            }
            if (F[L].className.match(X) && F[L].className.match(X).length >= 2 && F[L].className.match(X)[1]) {
                if (stButtons.testElem(F[L]) == false) {
                    p = true;
                    J = F[L].className.match(X)[1];
                    typeName = "custom";
                    if (J == "plusone" || J == "fblike" || J == "fbrec" || J == "fbsend" || J == "fbsub") {
                        typeName = "chicklet"
                    }
                    u.push({
                        service: J,
                        element: F[L],
                        url: F[L].getAttribute("st_url"),
                        short_url: (F[L].getAttribute("st_short_url") != null) ? F[L].getAttribute("st_short_url") : "",
                        title: F[L].getAttribute("st_title"),
                        image: (F[L].getAttribute("st_img") != null) ? F[L].getAttribute("st_img") : F[L].getAttribute("st_image"),
                        pinterest_native: F[L].getAttribute("st_native"),
                        message: (F[L].getAttribute("st_msg") != null) ? F[L].getAttribute("st_msg") : F[L].getAttribute("st_message"),
                        summary: F[L].getAttribute("st_summary"),
                        text: F[L].getAttribute("displayText"),
                        type: typeName
                    });
                    F[L].setAttribute("st_processed", "yes")
                }
            } else {
                if (F[L].className.match(r) && F[L].className.match(r).length >= 2) {
                    if (stButtons.testElem(F[L]) == false) {
                        p = true;
                        J = F[L].className.split("_")[1];
                        var Z = "basic";
                        if (F[L].className.match(v)) {
                            Z = "circle"
                        }
                        u.push({
                            service: J,
                            element: F[L],
                            url: F[L].getAttribute("st_url"),
                            short_url: (F[L].getAttribute("st_short_url") != null) ? F[L].getAttribute("st_short_url") : "",
                            title: F[L].getAttribute("st_title"),
                            image: (F[L].getAttribute("st_img") != null) ? F[L].getAttribute("st_img") : F[L].getAttribute("st_image"),
                            pinterest_native: F[L].getAttribute("st_native"),
                            message: (F[L].getAttribute("st_msg") != null) ? F[L].getAttribute("st_msg") : F[L].getAttribute("st_message"),
                            summary: F[L].getAttribute("st_summary"),
                            text: F[L].getAttribute("displayText"),
                            type: Z,
                            size: F[L].className.split("$")[1],
                            color: F[L].className.split("$")[2]
                        });
                        F[L].setAttribute("st_processed", "yes")
                    }
                } else {
                    if (F[L].className.match(h) && F[L].className.match(h).length >= 2) {
                        if (stButtons.testElem(F[L]) == false) {
                            p = true;
                            J = F[L].className.split("_")[1];
                            var Z = "brushed";
                            if (F[L].className.match(Y)) {
                                Z = "shiny"
                            }
                            u.push({
                                service: J,
                                element: F[L],
                                url: F[L].getAttribute("st_url"),
                                short_url: (F[L].getAttribute("st_short_url") != null) ? F[L].getAttribute("st_short_url") : "",
                                title: F[L].getAttribute("st_title"),
                                image: (F[L].getAttribute("st_img") != null) ? F[L].getAttribute("st_img") : F[L].getAttribute("st_image"),
                                pinterest_native: F[L].getAttribute("st_native"),
                                message: (F[L].getAttribute("st_msg") != null) ? F[L].getAttribute("st_msg") : F[L].getAttribute("st_message"),
                                summary: F[L].getAttribute("st_summary"),
                                text: F[L].getAttribute("displayText"),
                                type: Z,
                                size: F[L].className.split("$")[1]
                            });
                            F[L].setAttribute("st_processed", "yes")
                        }
                    } else {
                        if (F[L].className.match(W) && F[L].className.match(W).length >= 2 && F[L].className.match(W)[1]) {
                            if (stButtons.testElem(F[L]) == false) {
                                p = true;
                                J = F[L].className.match(W)[1];
                                var O = "";
                                if (F[L].className.match(H) && F[L].className.match(H).length >= 2 && F[L].className.match(H)[1]) {
                                    O = "native"
                                }
                                u.push({
                                    service: J,
                                    element: F[L],
                                    url: F[L].getAttribute("st_url"),
                                    short_url: (F[L].getAttribute("st_short_url") != null) ? F[L].getAttribute("st_short_url") : "",
                                    title: F[L].getAttribute("st_title"),
                                    image: (F[L].getAttribute("st_img") != null) ? F[L].getAttribute("st_img") : F[L].getAttribute("st_image"),
                                    pinterest_native: F[L].getAttribute("st_native"),
                                    message: (F[L].getAttribute("st_msg") != null) ? F[L].getAttribute("st_msg") : F[L].getAttribute("st_message"),
                                    summary: F[L].getAttribute("st_summary"),
                                    text: F[L].getAttribute("displayText"),
                                    type: "vcount",
                                    ctype: O
                                });
                                F[L].setAttribute("st_processed", "yes")
                            }
                        } else {
                            if (F[L].className.match(V) && F[L].className.match(V).length >= 2 && F[L].className.match(V)[1]) {
                                if (stButtons.testElem(F[L]) == false) {
                                    p = true;
                                    J = F[L].className.match(V)[1];
                                    var O = "";
                                    if (F[L].className.match(t) && F[L].className.match(t).length >= 2 && F[L].className.match(t)[1]) {
                                        O = "native"
                                    }
                                    u.push({
                                        service: J,
                                        element: F[L],
                                        url: F[L].getAttribute("st_url"),
                                        short_url: (F[L].getAttribute("st_short_url") != null) ? F[L].getAttribute("st_short_url") : "",
                                        title: F[L].getAttribute("st_title"),
                                        image: (F[L].getAttribute("st_img") != null) ? F[L].getAttribute("st_img") : F[L].getAttribute("st_image"),
                                        pinterest_native: F[L].getAttribute("st_native"),
                                        message: (F[L].getAttribute("st_msg") != null) ? F[L].getAttribute("st_msg") : F[L].getAttribute("st_message"),
                                        summary: F[L].getAttribute("st_summary"),
                                        text: F[L].getAttribute("displayText"),
                                        type: "hcount",
                                        ctype: O
                                    });
                                    F[L].setAttribute("st_processed", "yes")
                                }
                            } else {
                                if (F[L].className.match(U) && F[L].className.match(U).length >= 2 && F[L].className.match(U)[1]) {
                                    if (stButtons.testElem(F[L]) == false) {
                                        p = true;
                                        J = F[L].className.match(U)[1];
                                        u.push({
                                            service: J,
                                            element: F[L],
                                            url: F[L].getAttribute("st_url"),
                                            short_url: (F[L].getAttribute("st_short_url") != null) ? F[L].getAttribute("st_short_url") : "",
                                            title: F[L].getAttribute("st_title"),
                                            image: (F[L].getAttribute("st_img") != null) ? F[L].getAttribute("st_img") : F[L].getAttribute("st_image"),
                                            pinterest_native: F[L].getAttribute("st_native"),
                                            message: (F[L].getAttribute("st_msg") != null) ? F[L].getAttribute("st_msg") : F[L].getAttribute("st_message"),
                                            summary: F[L].getAttribute("st_summary"),
                                            text: F[L].getAttribute("displayText"),
                                            type: "button"
                                        });
                                        F[L].setAttribute("st_processed", "yes")
                                    }
                                } else {
                                    if (F[L].className.match(T) && F[L].className.match(T).length >= 2 && F[L].className.match(T)[1]) {
                                        if (stButtons.testElem(F[L]) == false) {
                                            p = true;
                                            J = F[L].className.match(T)[1];
                                            u.push({
                                                service: J,
                                                element: F[L],
                                                url: F[L].getAttribute("st_url"),
                                                short_url: (F[L].getAttribute("st_short_url") != null) ? F[L].getAttribute("st_short_url") : "",
                                                title: F[L].getAttribute("st_title"),
                                                image: (F[L].getAttribute("st_img") != null) ? F[L].getAttribute("st_img") : F[L].getAttribute("st_image"),
                                                pinterest_native: F[L].getAttribute("st_native"),
                                                message: (F[L].getAttribute("st_msg") != null) ? F[L].getAttribute("st_msg") : F[L].getAttribute("st_message"),
                                                summary: F[L].getAttribute("st_summary"),
                                                text: F[L].getAttribute("displayText"),
                                                type: "large"
                                            });
                                            F[L].setAttribute("st_processed", "yes")
                                        }
                                    } else {
                                        if (F[L].className.match(S) && F[L].className.match(S).length >= 2 && F[L].className.match(S)[1]) {
                                            if (stButtons.testElem(F[L]) == false) {
                                                p = true;
                                                J = F[L].className.match(S)[1];
                                                u.push({
                                                    service: J,
                                                    element: F[L],
                                                    url: F[L].getAttribute("st_url"),
                                                    short_url: (F[L].getAttribute("st_short_url") != null) ? F[L].getAttribute("st_short_url") : "",
                                                    title: F[L].getAttribute("st_title"),
                                                    image: (F[L].getAttribute("st_img") != null) ? F[L].getAttribute("st_img") : F[L].getAttribute("st_image"),
                                                    pinterest_native: F[L].getAttribute("st_native"),
                                                    message: (F[L].getAttribute("st_msg") != null) ? F[L].getAttribute("st_msg") : F[L].getAttribute("st_message"),
                                                    summary: F[L].getAttribute("st_summary"),
                                                    text: F[L].getAttribute("displayText"),
                                                    type: "pcount",
                                                    count: L
                                                });
                                                F[L].setAttribute("st_processed", "yes")
                                            }
                                        } else {
                                            if (F[L].className.match(Q) && F[L].className.match(Q).length >= 2 && F[L].className.match(Q)[1]) {
                                                if (stButtons.testElem(F[L]) == false) {
                                                    p = true;
                                                    J = F[L].className.match(Q)[1];
                                                    u.push({
                                                        service: J,
                                                        element: F[L],
                                                        url: F[L].getAttribute("st_url"),
                                                        short_url: (F[L].getAttribute("st_short_url") != null) ? F[L].getAttribute("st_short_url") : "",
                                                        title: F[L].getAttribute("st_title"),
                                                        image: (F[L].getAttribute("st_img") != null) ? F[L].getAttribute("st_img") : F[L].getAttribute("st_image"),
                                                        pinterest_native: F[L].getAttribute("st_native"),
                                                        message: (F[L].getAttribute("st_msg") != null) ? F[L].getAttribute("st_msg") : F[L].getAttribute("st_message"),
                                                        summary: F[L].getAttribute("st_summary"),
                                                        text: F[L].getAttribute("displayText"),
                                                        type: "stbar",
                                                        count: L
                                                    });
                                                    F[L].setAttribute("st_processed", "yes")
                                                }
                                            } else {
                                                if (F[L].className.match(N) && F[L].className.match(N).length >= 2 && F[L].className.match(N)[1]) {
                                                    if (stButtons.testElem(F[L]) == false) {
                                                        p = true;
                                                        J = F[L].className.match(N)[1];
                                                        u.push({
                                                            service: J,
                                                            element: F[L],
                                                            url: F[L].getAttribute("st_url"),
                                                            short_url: (F[L].getAttribute("st_short_url") != null) ? F[L].getAttribute("st_short_url") : "",
                                                            title: F[L].getAttribute("st_title"),
                                                            image: (F[L].getAttribute("st_img") != null) ? F[L].getAttribute("st_img") : F[L].getAttribute("st_image"),
                                                            pinterest_native: F[L].getAttribute("st_native"),
                                                            message: (F[L].getAttribute("st_msg") != null) ? F[L].getAttribute("st_msg") : F[L].getAttribute("st_message"),
                                                            summary: F[L].getAttribute("st_summary"),
                                                            text: F[L].getAttribute("displayText"),
                                                            type: "stsmbar",
                                                            count: L
                                                        });
                                                        F[L].setAttribute("st_processed", "yes")
                                                    }
                                                } else {
                                                    if (F[L].className.match(M) && F[L].className.match(M).length >= 2 && F[L].className.match(M)[1]) {
                                                        if (stButtons.testElem(F[L]) == false) {
                                                            p = true;
                                                            J = F[L].className.match(M)[1];
                                                            var P = F[L].className.split("_");
                                                            u.push({
                                                                service: J,
                                                                element: F[L],
                                                                url: F[L].getAttribute("st_url"),
                                                                short_url: (F[L].getAttribute("st_short_url") != null) ? F[L].getAttribute("st_short_url") : "",
                                                                title: F[L].getAttribute("st_title"),
                                                                image: (F[L].getAttribute("st_img") != null) ? F[L].getAttribute("st_img") : F[L].getAttribute("st_image"),
                                                                pinterest_native: F[L].getAttribute("st_native"),
                                                                message: (F[L].getAttribute("st_msg") != null) ? F[L].getAttribute("st_msg") : F[L].getAttribute("st_message"),
                                                                summary: F[L].getAttribute("st_summary"),
                                                                text: F[L].getAttribute("displayText"),
                                                                type: "css",
                                                                cssType: P[P.length - 1]
                                                            });
                                                            F[L].setAttribute("st_processed", "yes")
                                                        }
                                                    } else {
                                                        if (F[L].className.match(E) && F[L].className.match(E).length >= 2 && F[L].className.match(E)[1]) {
                                                            if (stButtons.testElem(F[L]) == false) {
                                                                p = true;
                                                                J = F[L].className.match(E)[1];
                                                                u.push({
                                                                    service: J,
                                                                    element: F[L],
                                                                    url: F[L].getAttribute("st_url"),
                                                                    short_url: (F[L].getAttribute("st_short_url") != null) ? F[L].getAttribute("st_short_url") : "",
                                                                    title: F[L].getAttribute("st_title"),
                                                                    image: (F[L].getAttribute("st_img") != null) ? F[L].getAttribute("st_img") : F[L].getAttribute("st_image"),
                                                                    pinterest_native: F[L].getAttribute("st_native"),
                                                                    message: (F[L].getAttribute("st_msg") != null) ? F[L].getAttribute("st_msg") : F[L].getAttribute("st_message"),
                                                                    summary: F[L].getAttribute("st_summary"),
                                                                    text: F[L].getAttribute("displayText"),
                                                                    type: "chicklet"
                                                                });
                                                                F[L].setAttribute("st_processed", "yes")
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (D) {
                if (p) {
                    for (I = 0; I < a.length; I++) {
                        if (a[I].service == J) {
                            a[I].count++;
                            s = true
                        }
                    }
                    if (!s) {
                        a.push({service: J, count: 1, doNotReplace: false, processed: false})
                    }
                }
            }
            if (J == "sharethis") {
                if (stlib.browser.mobile.isMobile()) {
                    if (d) {
                        if (!stlib.browser.mobile.isExcerptImplementation) {
                            var e;
                            var g = document.getElementsByTagName("meta");
                            for (var C = 0, B = g.length; C < B; C++) {
                                if (g[C].name.toLowerCase() == "description") {
                                    e = g[C]
                                }
                            }
                            w.url = document.URL;
                            w.title = document.title;
                            w.image = null;
                            w.summary = e
                        }
                        stlib.browser.mobile.isExcerptImplementation = true
                    } else {
                        w = {
                            service: J,
                            url: F[L].getAttribute("st_url"),
                            title: F[L].getAttribute("st_title"),
                            image: (F[L].getAttribute("st_img") != null) ? F[L].getAttribute("st_img") : F[L].getAttribute("st_image"),
                            summary: F[L].getAttribute("st_summary"),
                            via: F[L].getAttribute("st_via"),
                            type: "button"
                        }
                    }
                }
                d = true
            }
        }
    }
    var q = stButtons.isBarsExist();
    if (stlib.browser.mobile.isMobile() && q && !d) {
        var e;
        var g = document.getElementsByTagName("meta");
        for (var C = 0, B = g.length; C < B; C++) {
            if (g[C].name.toLowerCase() == "description") {
                e = g[C]
            }
        }
        w = {service: "sharethis", url: document.URL, title: document.title, image: null, summary: e, type: "button"};
        d = true
    }
    if (D) {
        var R = [];
        for (var C = a.length - 1; C >= 0; C--) {
            if (a[C].service == "sharethis" || a[C].doNotReplace) {
                a[C].processed = true;
                continue
            } else {
                for (var B in stRecentServices) {
                    var j = false;
                    if (!stRecentServices[B].processed) {
                        for (var b = 0; b < a.length; b++) {
                            if (B == a[b].service && !a[b].processed) {
                                j = true;
                                a[b].doNotReplace = true;
                                stRecentServices[B].processed = true;
                                break
                            }
                        }
                        if (j) {
                            a[C].processed = true
                        } else {
                            R.push({oldService: a[C].service, newService: B});
                            for (var A = 0; A < u.length; A++) {
                                if (u[A].service == a[C].service) {
                                    u[A].service = B;
                                    u[A].text = stRecentServices[B].title;
                                    u[A].element.setAttribute("displayText", stRecentServices[B].title);
                                    u[A].element.className = u[A].element.className.replace(a[C].service, B)
                                }
                            }
                            stRecentServices[B].processed = true;
                            a[C].processed = true;
                            break
                        }
                    }
                }
            }
        }
    }
    if (u.length > 0 && d && stlib.browser.mobile.isMobile() && stShowNewMobileWidget && !isMobileButtonLoaded) {
        var G = document.querySelector && document.querySelector('div[id="stToolPop"]');
        if (G == null) {
            stButtons.createMobileShareButton();
            w.element = document.getElementById("stToolPop");
            u.push(w);
            if (stWidget.mobileWidgetLoaded == false) {
                var o = ((("https:" == document.location.protocol) ? "https://ws." : "http://w.") + "sharethis.com/mobile/js/mobile.3beed41ba8c20ca55e4452f4909ac547.js");
                stlib.scriptLoader.loadJavascript(o, function () {
                    mobileWidget.init();
                    stWidget.mobileWidgetLoaded = true
                })
            }
        }
    }
    var m = u.length;
    for (var L = 0; L < m; L++) {
        if (!stButtons.isValidService(u[L].service)) {
            continue
        }
        stWidget.addEntry(u[L])
    }
    if (m > 0 && stShowNewMobileWidget && d && stlib.browser.mobile.isMobile()) {
        stButtons.hideBarsAndButtons()
    }
};
stButtons.odcss = function (a, b) {
    this.head = document.getElementsByTagName("head")[0];
    this.scriptSrc = a;
    this.css = document.createElement("link");
    this.css.setAttribute("rel", "stylesheet");
    this.css.setAttribute("type", "text/css");
    this.css.setAttribute("href", this.scriptSrc);
    setTimeout(function () {
        b()
    }, 500);
    this.head.appendChild(this.css)
};
stButtons.makeButtons = function () {
    if (typeof(stButtons.button_css_called) == "undefined") {
        var a = (("https:" == document.location.protocol) ? "https://ws.sharethis.com/button/css/buttons-secure.css" : "http://w.sharethis.com/button/css/buttons.ab966a004186897711de4a5ed256c924.css");
        stButtons.odcss(a, function () {
        });
        stButtons.button_css_called = true
    }
    stButtons.locateElements()
};
stButtons.getPlusOneFromGoogle = function (a) {
    if (stButtons.plusOneLoaded == false) {
        if (stButtons.plusOneLoading == false) {
            var b = document.createElement("script");
            b.setAttribute("type", "text/javascript");
            b.setAttribute("src", "https://apis.google.com/js/plusone.js");
            b.async = stWidget.options.asyncPlusone;
            b.onload = function () {
                stButtons.renderPlusOneFromGoogle(a);
                stButtons.plusOneLoaded = true;
                stButtons.plusOneLoading = false
            };
            b.onreadystatechange = function () {
                if (this.readyState == "complete") {
                    stButtons.renderPlusOneFromGoogle(a);
                    stButtons.plusOneLoaded = true;
                    stButtons.plusOneLoading = false
                }
            };
            stButtons.plusOneLoading = true;
            document.getElementsByTagName("head")[0].appendChild(b)
        }
    } else {
        stButtons.renderPlusOneFromGoogle(a)
    }
};
stButtons.renderPlusOneFromGoogle = function (a) {
    if (a == "plusone") {
        gapi.plusone.go()
    } else {
        if (a == "googleplusfollow" || a == "googleplusadd") {
            gapi.plus.go()
        }
    }
};
stButtons.getXFBMLFromFB = function (d) {
    if (typeof(stWidget.options.fbLoad) != "undefined" && stWidget.options.fbLoad != true) {
        return
    }
    if (stButtons.xfbmlLoaded == false) {
        if (stButtons.xfbmlLoading == false) {
            stButtons.xfbmlLoading = true;
            var e = document.createElement("div");
            e.setAttribute("id", "fb-root");
            document.body.appendChild(e);
            var b = "en_US";
            if (typeof(stWidget.options.fbLang) != "undefined" && stWidget.options.fbLang != "") {
                b = stWidget.options.fbLang
            }
            var g, f = document.getElementsByTagName("script")[0];
            if (document.getElementById("facebook-jssdk")) {
                if (typeof(FB) != "undefined" && typeof(FB.XFBML) != "undefined" && typeof(FB.XFBML.parse) == "function") {
                    if (!(/iframe/).test(d.innerHTML)) {
                        FB.XFBML.parse(d)
                    }
                    stButtons.trackFB();
                    stButtons.xfbmlLoaded = true;
                    stButtons.xfbmlLoading = false
                }
                return
            }
            g = document.createElement("script");
            g.id = "facebook-jssdk";
            g.src = "//connect.facebook.net/" + b + "/sdk.js";
            g.async = stWidget.options.async;
            if (window.fbAsyncInit) {
                var a = window.fbAsyncInit;
                window.fbAsyncInit = function () {
                    a();
                    stButtons.initFB()
                }
            } else {
                stButtons.setupFBAsynch(g)
            }
            f.parentNode.insertBefore(g, f)
        }
    } else {
        if (!(/iframe/).test(d.innerHTML)) {
            FB.XFBML.parse(d)
        }
        stButtons.trackFB()
    }
};
stButtons.initFB = function () {
    stButtons.trackFB();
    stButtons.xfbmlLoaded = true;
    stButtons.xfbmlLoading = false
};
stButtons.setupFBAsynch = function (a) {
    a.onload = function () {
        FB.init({appId: "", xfbml: true, version: "v2.0"});
        stButtons.initFB()
    };
    a.onreadystatechange = function () {
        if (this.readyState == "complete" || this.readyState == "loaded") {
            FB.init({appId: "", xfbml: true, version: "v2.0"});
            stButtons.initFB()
        }
    }
};
stButtons.addCount = function (a) {
    stButtons.counts.push(a)
};
stButtons.getCountsFromService = function (a, h, f) {
    if (stButtons.checkQueue(a) == false) {
        var d = d + "-" + stButtons.cbVal;
        d = "stButtons.processCB";
        stButtons.cbVal++;
        var j = document.referrer;
        var e = j.replace("http://", "").replace("https://", "").split("/");
        var i = e.shift();
        var b = e.join("/");
        i = encodeURIComponent(i);
        b = encodeURIComponent(b);
        var g = stLight.publisher;
        var k = (("https:" == document.location.protocol) ? "https://ws.sharethis.com/api/getCount2.php?cb=" + d + "&refDomain=" + i + "&refQuery=" + b + "&pgurl=" + encodeURIComponent(document.location.href) + "&pubKey=" + g + "&url=" : "http://wd.sharethis.com/api/getCount2.php?cb=" + d + "&refDomain=" + i + "&refQuery=" + b + "&pgurl=" + encodeURIComponent(document.location.href) + "&pubKey=" + g + "&url=");
        stLight.odjs(k + encodeURIComponent(a), function () {
        });
        stButtons.queue.push(a)
    }
    if (stButtons.countsResp[a]) {
        stButtons.processCount(stButtons.countsResp[a])
    }
};
stButtons.checkQueue = function (a) {
    for (var b = 0; b < stButtons.queue.length; b++) {
        if (stButtons.queue[b] == a) {
            return true
        }
    }
    return false
};
stButtons.testElem = function (b) {
    var a = false;
    if (b.getAttribute("st_processed") != null) {
        return true
    } else {
        return false
    }
};
stButtons.createMobileShareButton = function () {
    if (document.getElementById("stToolPop") != null) {
        return
    }
    var b = document.createElement("div");
    var a = document.createElement("a");
    var e = document.createElement("img");
    var d = document.getElementsByTagName("body")[0];
    b.id = "stToolPop";
    b.className = "stToolPop-circular semiTrans gray";
    b.style.visibility = "hidden";
    a.className = "stToolPopLink";
    a.href = "javascript:void(0)";
    e.id = "stToolPop_logo";
    e.src = (("https:" == document.location.protocol) ? "https://ws." : "http://w.") + "sharethis.com/images/st-logo-m-widget.png";
    a.appendChild(e);
    b.appendChild(a);
    d.appendChild(b);
    isMobileButtonLoaded = true
};
stButtons.hideBarsAndButtons = function () {
    var d = document.getElementById("sharebar");
    if (d != null) {
        d.style.cssText = "display:none !important"
    }
    var b = document.getElementById("sthoverbuttons");
    if (b != null) {
        b.style.visibility = "hidden"
    }
    var a = document.getElementById("stpulldown");
    if (a != null) {
        a.style.visibility = "hidden"
    }
};
stButtons.isBarsExist = function () {
    var b = false;
    var e = document.getElementById("sharebar");
    var d = document.getElementById("sthoverbuttons");
    var a = document.getElementById("stpulldown");
    if (e != null || d != null || a != null) {
        b = true
    }
    return b
};
function Shareable(d) {
    var a = {};
    a.facebook = "450";
    a.twitter = "684";
    a.yahoo = "500";
    a.linkedin = "600";
    var b = {};
    b.facebook = "300";
    b.twitter = "718";
    b.yahoo = "460";
    b.linkedin = "433";
    this.idx = -1;
    this.url = null;
    this.short_url = null;
    this.title = null;
    this.image = null;
    this.pinterest_native = null;
    this.element = null;
    this.service = null;
    this.message = null;
    this.screen = "home";
    this.summary = null;
    this.via = null;
    this.content = null;
    this.buttonText = null;
    this.frag = null;
    this.onhover = true;
    this.type = null;
    var e = this;
    var f = false;
    this.attachButton = function (g) {
        this.element = g;
        if ((this.onhover == true || this.onhover == "true") && !stlib.browser.mobile.isMobile() && ((stWidgetVersion == "4x") || ((stWidgetVersion == "5xa") && (d.service == "sharethis" || d.service == "email" || d.service == "wordpress")))) {
            g.onmouseover = this.mouseOn;
            g.onmouseout = this.mouseOut
        }
        g.onclick = function (h) {
            e.getSrcOfWidget(this);
            e.decideFastShare()
        }
    };
    this.getSrcOfWidget = function (i) {
        var h = new RegExp(/hoverbuttons/), j = null;
        if (i.className.match("buttonAnimate")) {
            j = "newhb"
        }
        if (null != j) {
            stlib.data.set("widSrc", j, "pageInfo")
        } else {
            var g = stlib.data.get("widSrc", "pageInfo");
            if (null != g || g) {
                stlib.data.unset("widSrc", "pageInfo")
            }
        }
    };
    this.init = function () {
        stWidget.merge(this, d);
        stWidget.shareables.push(this);
        if (d.element !== null) {
            this.attachButton(d.element)
        }
    };
    return this
}
if (typeof(stWidget) == "undefined") {
    var stWidget = new function () {
        this.shareables = [];
        this.entries = 0;
        this.widgetOpen = false;
        this.mouseOnTimer = null;
        this.mouseTimer = null;
        this.mouseOutTimer = null;
        this.frameReady = false;
        this.stopClosing = false;
        this.buttonClicked = false;
        this.widgetLoadingComplete = false;
        this.frameUrl5xa = this.frameUrl5x = (("https:" == document.location.protocol) ? "https://ws.sharethis.com/secure5x/index.html" : "http://edge.sharethis.com/share5x/index.53996cd31eb4ee27d0737817d0782aac.html");
        this.frameUrl4x = (("https:" == document.location.protocol) ? "https://ws.sharethis.com/secure/index.html" : "http://edge.sharethis.com/share4x/index.7da639609f47f9b4940d46ca963055dc.html");
        this.secure = false;
        try {
            this.mainstframe = document.createElement('<iframe name="stLframe" allowTransparency="true" style="body{background:transparent;}" ></iframe>');
            this.mainstframe.onreadystatechange = function () {
                if (stWidget.mainstframe.readyState === "complete") {
                    stWidget.frameReady = true;
                    stButtons.pumpInstance = new stlib.pump(stWidget.mainstframe, stWidget.mainstframe, function () {
                        stButtons.messageQueueInstance.process()
                    });
                    stButtons.messageQueueInstance.setPumpInstance(stButtons.pumpInstance);
                    try {
                        stButtons.pumpInstance.broadcastSendMessage("Buttons Ready")
                    } catch (d) {
                    }
                }
            }
        } catch (b) {
            this.mainstframe = document.createElement("iframe");
            this.mainstframe.allowTransparency = "true";
            this.mainstframe.setAttribute("allowTransparency", "true");
            this.mainstframe.onload = function () {
                stWidget.frameReady = true;
                stButtons.pumpInstance = new stlib.pump(stWidget.mainstframe, stWidget.mainstframe, function () {
                    stButtons.messageQueueInstance.process()
                });
                stButtons.messageQueueInstance.setPumpInstance(stButtons.pumpInstance);
                try {
                    stButtons.pumpInstance.broadcastSendMessage("Buttons Ready")
                } catch (d) {
                }
            }
        }
        this.mainstframe.id = "stLframe";
        this.mainstframe.className = "stLframe";
        this.mainstframe.name = "stLframe";
        this.mainstframe.frameBorder = "0";
        this.mainstframe.scrolling = "no";
        this.wrapper = document.createElement("div");
        this.wrapper.id = "stwrapper";
        this.wrapper.className = "stwrapper";
        this.wrapper.style.display = "none";
        var a = 0;
        this.widgetLoadInterval = self.setInterval(function () {
            stWidget.widgetLoad();
            a += 1;
            if (a > 90) {
                stWidget.forceDefaultWidgetSetting();
                window.clearInterval(stWidget.widgetLoadInterval)
            }
        }, 1000);
        this.ogtitle = null;
        this.ogdesc = null;
        this.ogurl = null;
        this.short_url = null;
        this.ogimg = null;
        this.ogtype = null;
        this.twittertitle = null;
        this.twitterdesc = null;
        this.twitterurl = null;
        this.twitterimg = null;
        this.twittercard = null;
        this.desc = null;
        this.initFire = false;
        this.merge = function (f, e) {
            for (var d in e) {
                if (f.hasOwnProperty(d) && e[d] !== null) {
                    f[d] = e[d]
                }
            }
        };
        this.oldScroll = 0;
        this.init = function () {
            if (stWidget.initFire == false) {
                stWidget.initFire = true;
                if (stButtons.messageQueueInstance == null) {
                    stButtons.messageQueueInstance = new stlib.messageQueue()
                }
                if (stlib.browser.ieFallback) {
                    setTimeout("stButtons.messageQueueInstance.send(stWidget.createFrag(stlib.data,'data'), 'data');", 1000)
                } else {
                    stButtons.messageQueueInstance.send(stWidget.createFrag(stlib.data, "data"), "data")
                }
                if (stlib.browser.ieFallback) {
                    setTimeout("stButtons.messageQueueInstance.send(stWidget.createFrag(null,'init'), 'init');", 2000);
                    setTimeout("stWidget.initIE=true;", 2500)
                } else {
                    stButtons.messageQueueInstance.send(stWidget.createFrag(null, "init"), "init")
                }
            }
        }
    }
}
stWidget.createWidgetContainer = function () {
    window.clearInterval(stWidget.widgetLoadInterval);
    if (stWidgetVersion == "5xa") {
        stWidget.frameUrlChoice = stWidget.frameUrl5xa;
        stWidget.wrapper.className += " stwrapper5x"
    } else {
        if (stWidgetVersion == "4x") {
            stWidget.frameUrlChoice = stWidget.frameUrl4x;
            stWidget.wrapper.className += " stwrapper4x"
        }
    }
    stWidget.mainstframe.src = stWidget.frameUrlChoice;
    stWidget.overlay = document.createElement("div");
    if (document.all && navigator.appVersion.indexOf("MSIE 6.") != -1) {
        stWidget.overlay.style.position = "absolute"
    }
    stWidget.overlay.setAttribute("id", "stOverlay");
    stWidget.overlay.setAttribute("onclick", "javascript:stWidget.closeWidget();");
    stWidget.wrapper.appendChild(stWidget.mainstframe);
    stWidget.widgetLoadingComplete = true
};
stWidget.widgetLoad = function () {
    stWidget.createWidgetContainer()
};
stWidget.forceDefaultWidgetSetting = function () {
    stLight.usePublisherDefaultSettings();
    stWidget.createWidgetContainer()
};
stWidget.mobileWidgetLoaded = false;
stWidget.mobileWidget = function (e, a, d) {
    if (stlib.browser.mobile.isMobile()) {
        if (!stShowNewMobileWidget) {
            return stlib.browser.mobile.handleForMobileFriendly(e, a, d)
        }
        if (stWidget.mobileWidgetLoaded == false) {
            var b = ((("https:" == document.location.protocol) ? "https://ws." : "http://w.") + "sharethis.com/mobile/js/mobile.3beed41ba8c20ca55e4452f4909ac547.js");
            stlib.scriptLoader.loadJavascript(b, function () {
                mobileWidget.loadMobileWidget(e, a, d);
                stWidget.mobileWidgetLoaded = true
            })
        } else {
            mobileWidget.loadMobileWidget(e, a, d)
        }
        return true
    }
    return false
};
stWidget.options = new function () {
    this.fpc = stLight.fpc;
    this.sessionID = null;
    this.publisher = null;
    this.tracking = true;
    this.send_services = null;
    this.exclusive_services = null;
    this.headerTitle = null;
    this.headerfg = null;
    this.headerbg = null;
    this.offsetLeft = null;
    this.offsetTop = null;
    this.onhover = true;
    this.async = false;
    this.asyncPlusone = false;
    this.autoclose = true;
    this.autoPosition = true;
    this.embeds = false;
    this.doneScreen = true;
    this.minorServices = true;
    this.excludeServices = null;
    this.theme = 1;
    this.serviceBarColor = null;
    this.shareButtonColor = null;
    this.footerColor = null;
    this.headerTextColor = null;
    this.helpTextColor = null;
    this.mainWidgetColor = null;
    this.textBoxFontColor = null;
    this.textRightToLeft = false;
    this.shorten = true;
    this.popup = false;
    this.newOrZero = "new";
    this.minShareCount = null;
    this.publisherGA = null;
    this.services = "";
    this.relatedDomain = null;
    this.hashAddressBar = null;
    this.doNotHash = null;
    this.doNotCopy = null;
    this.nativeCount = false;
    this.lang = "";
    this.fbLang = "";
    this.fbLoad = true;
    this.servicePopup = false;
    this.textcause = null;
    this.linkcause = null;
    this.snapsets = null;
    this.publisherMigration = false
};
stWidget.addEntry = function (a) {
    if (!a.element) {
        return false
    }
    if (a && a.service && ((a.service == "email" || a.service == "sharethis" || a.service == "wordpress") || ((stIsLoggedIn && servicesLoggedIn && typeof(servicesLoggedIn[a.service]) != "undefined" && ((useFastShare || (!useFastShare && (stWidgetVersion == "5xa"))) && (a.service == "facebook" || a.service == "twitter" || a.service == "yahoo" || a.service == "linkedin")))))) {
        openWidget = true
    } else {
        openWidget = false
    }
    if (!openWidget) {
        if (a.type !== "custom") {
            a.element.appendChild(stButtons.makeButton(a));
            if (a.service == "plusone" || a.service == "googleplusfollow" || a.service == "googleplusadd") {
                stButtons.getPlusOneFromGoogle(a.service)
            }
            if (a.service == "fblike" || a.service == "fbsend" || a.service == "fbrec" || a.service == "fbLong" || a.service == "fbsub") {
                stButtons.getXFBMLFromFB(a.element)
            }
            if (stlib.nativeButtons.checkNativeButtonSupport(a.service)) {
                stlib.nativeButtons.loadService(a.service)
            }
        } else {
            stButtons.makeButton(a)
        }
        stlib.buttonInfo.addButton(a);
        return true
    } else {
        if (a.type != "custom") {
            a.element.appendChild(stButtons.makeButton(a));
            if (a.service == "plusone" || a.service == "googleplusfollow" || a.service == "googleplusadd") {
                stButtons.getPlusOneFromGoogle(a.service)
            }
            if (a.service == "fblike" || a.service == "fbsend" || a.service == "fbrec" || a.service == "fbLong" || a.service == "fbsub") {
                stButtons.getXFBMLFromFB(a.element)
            }
            if (stlib.nativeButtons.checkNativeButtonSupport(a.service)) {
                stlib.nativeButtons.loadService(a.service)
            }
        } else {
            stButtons.makeButton(a)
        }
        var d = new Shareable(a);
        d.idx = stWidget.entries;
        stWidget.entries++;
        d.publisher = stLight.publisher;
        d.sessionID = stLight.sessionID;
        d.fpc = stLight.fpc;
        if (a.element.getAttribute("st_via") != null) {
            d.via = a.element.getAttribute("st_via").replace(/^\s+|\s+$/g, "")
        }
        d.url = stWidget.ogurl ? stWidget.ogurl : (stWidget.twitterurl ? stWidget.twitterurl : document.location.href);
        d.url = a.url ? a.url : d.url;
        if (!stlib.hash.doNotHash) {
            d.url = stlib.hash.appendHash(d.url);
            a.url = d.url
        }
        stlib.data.set("url", d.url, "shareInfo");
        stWidget.short_url = d.short_url;
        stlib.data.set("short_url", d.short_url, "shareInfo");
        d.title = stWidget.ogtitle ? stWidget.ogtitle : (stWidget.twittertitle ? stWidget.twittertitle : document.title);
        d.title = a.title ? a.title : d.title;
        var b = stWidget.ogimg ? stWidget.ogimg : (stWidget.twitterimg ? stWidget.twitterimg : (a.element.thumbnail ? a.element.thumbnail : null));
        d.image = (a.element.image) ? a.element.image : b;
        d.summary = stWidget.ogdesc ? stWidget.ogdesc : (stWidget.twitterdesc ? stWidget.twitterdesc : stWidget.desc);
        d.summary = a.element.summary ? a.element.summary : d.summary;
        stWidget.merge(d, stWidget.options);
        if (typeof(stWidget.options.textRightToLeft) != "undefined" && stWidget.options.textRightToLeft != "null" && stWidget.options.textRightToLeft == true) {
            document.getElementById("stwrapper").style.top = "auto";
            document.getElementById("stwrapper").style.left = "auto"
        }
        d.mouseOn = function () {
            stWidget.mouseOnTimer = setTimeout(function () {
                d.getSrcOfWidget(a.element);
                d.decideFastShare()
            }, 500)
        };
        d.mouseOut = function () {
            clearInterval(stWidget.mouseOnTimer)
        };
        d.decideFastShare = function () {
            if (stlib.browser.ieFallback) {
                if (typeof(stWidget.initIE) == "undefined" || stWidget.initIE != true) {
                    return
                }
            }
            if (!useFastShare || !stIsLoggedIn || a.service == "email" || a.service == "sharethis" || a.service == "wordpress" || (typeof(servicesLoggedIn[a.service]) == "undefined" && (a.service == "facebook" || a.service == "twitter" || a.service == "linkedin" || a.service == "yahoo"))) {
                if (stWidget.mobileWidget(d, a, stWidget.options)) {
                    stLight.log("widget", "mobile", a.service, a.type)
                } else {
                    d.popup()
                }
            } else {
                stLight.log("widget", "fastShare", a.service, a.type);
                stFastShareObj.url = d.url;
                stFastShareObj.short_url = d.short_url;
                stFastShareObj.title = d.title;
                stFastShareObj.image = d.image;
                if (typeof(d.summary) != "undefined" && d.summary != null) {
                    stFastShareObj.summary = d.summary
                }
                stFastShareObj.via = null;
                if (a.service == "twitter" && d.element.getAttribute("st_via") != null) {
                    stFastShareObj.via = d.element.getAttribute("st_via").replace(/^\s+|\s+$/g, "")
                }
                stFastShareObj.message = d.message;
                stFastShareObj.element = a.element;
                stFastShareObj.service = a.service;
                stFastShareObj.type = a.type;
                stFastShareObj.publisher = stlib.data.get("publisher", "pageInfo");
                stFastShareObj.fpc = stlib.data.get("fpc", "pageInfo");
                stFastShareObj.sessionID = stlib.data.get("sessionID", "pageInfo");
                stFastShareObj.hostname = stlib.data.get("hostname", "pageInfo");
                stFastShareObj.username = servicesLoggedIn[a.service];
                if (typeof(fastShare) == "undefined") {
                    stLight.odjs((("https:" == document.location.protocol) ? "https://ws.sharethis.com/button/fastShare.js" : "http://w.sharethis.com/button/fastShare.js"), function () {
                        fastShare.showWidget()
                    })
                } else {
                    fastShare.showWidget()
                }
            }
        };
        d.popup = function () {
            if (stWidget.widgetOpen == false) {
                if (stWidgetVersion == "4x") {
                    stWidget.stCancelClose()
                }
                var h = stLight.getSource2(a);
                stLight.log("widget", h, a.service, a.type);
                if (stWidget.options.popup && (stWidgetVersion == "4x")) {
                    var j = stWidget.createFrag(d);
                    _$d_();
                    _$d1("4x Popup Called");
                    _$d1(j);
                    _$d_();
                    window.open(stWidget.frameUrl4x + "#" + j, "newstframe", "status=1,toolbar=0,width=345,height=375")
                } else {
                    if (stWidget.options.popup && (stWidgetVersion == "5xa")) {
                        var i = "http://sharethis.com/share?url=" + d.url;
                        if (d.title != null) {
                            i += "&title=" + d.title
                        }
                        if (d.image != null) {
                            i += "&img=" + d.image
                        }
                        if (d.summary != null) {
                            i += "&summary=" + d.summary
                        }
                        if (a.type != null) {
                            i += "&type=" + a.type
                        }
                        if (d.via != null) {
                            i += "&via=" + d.via
                        }
                        var g = "";
                        if (stlib.data) {
                            var f = stlib.json.encode(stlib.data.pageInfo);
                            var e = stlib.json.encode(stlib.data.shareInfo);
                            if (stlib.browser.isFirefox() && !stlib.browser.firefox8Version()) {
                                f = encodeURIComponent(encodeURIComponent(f));
                                e = encodeURIComponent(encodeURIComponent(e))
                            } else {
                                f = encodeURIComponent(f);
                                e = encodeURIComponent(e)
                            }
                            g = "&pageInfo=" + f + "&shareInfo=" + e
                        }
                        window.open(i + g, "newstframe", "status=1,toolbar=0,width=820,height=950")
                    } else {
                        stButtons.messageQueueInstance.send(stWidget.createFrag(d), "light");
                        stWidget.positionWidget(d);
                        if (stWidget.options.embeds == false) {
                            stWidget.hideEmbeds()
                        }
                        setTimeout(function () {
                            stWidget.widgetOpen = true;
                            st_showing = true
                        }, 200)
                    }
                }
            } else {
                if (stWidget.widgetOpen == true && stWidget.options.onhover == false) {
                }
            }
            return false
        };
        d.init();
        stlib.buttonInfo.addButton(d);
        return d
    }
};
stWidget.createFrag = function (a, j) {
    var i = "light";
    i = stWidget.options.popup ? "popup" : i;
    __stgetPubGA();
    if (j == "data") {
        i = "data";
        for (var b in a) {
            if (a.hasOwnProperty(b) == true && a[b] !== null && typeof(a[b]) != "function") {
                if (typeof(a[b]) == "object") {
                    var e = stlib.json.encode(a[b])
                } else {
                    var e = a[b]
                }
                if (stlib.browser.isFirefox() && !stlib.browser.firefox8Version()) {
                    i = i + "/" + b + "=" + encodeURIComponent(encodeURIComponent(e))
                } else {
                    i = i + "/" + b + "=" + encodeURIComponent(e)
                }
            }
        }
    } else {
        if (j == "init") {
            i = "init";
            if (stWidget.options.tracking && stWidget.options.publisherGA == null) {
                if (typeof(pageTracker) != "undefined" && pageTracker !== null) {
                    if (typeof(pageTracker._getAccount) != "undefined") {
                        stWidget.options.publisherGA = pageTracker._getAccount()
                    }
                    if (typeof(ga) !== "undefined" && stWidget.options.publisherGA == null) {
                        ga(function () {
                            var p = ga.getAll();
                            for (var l = 0; l < p.length; ++l) {
                                var m = p[l];
                                var k = m.get("trackingId");
                                var o = k.indexOf("UA");
                                if (o >= 0) {
                                    stWidget.options.publisherGA = k
                                }
                            }
                        })
                    }
                } else {
                    if (stWidget.options.publisherGA == null && typeof(__stPubGA) !== "undefined") {
                        stWidget.options.publisherGA = __stPubGA
                    }
                }
            }
            for (var b in stWidget.options) {
                if (stWidget.options.hasOwnProperty(b) == true && stWidget.options[b] !== null && typeof(stWidget.options[b]) != "function" && typeof(stWidget.options[b]) != "object") {
                    var h = stWidget.options[b];
                    try {
                        h = decodeURIComponent(h);
                        h = decodeURIComponent(h)
                    } catch (d) {
                    }
                    i = i + "/" + b + "=" + encodeURIComponent(h)
                }
            }
            i = i + "/pUrl=" + encodeURIComponent(encodeURIComponent(document.location.href)) + ((document.title != "") ? "/title=" + encodeURIComponent(encodeURIComponent(document.title)) : "") + "/stLight=true"
        } else {
            for (var b in a) {
                if (a.hasOwnProperty(b) == true && a[b] !== null && typeof(a[b]) != "function" && typeof(a[b]) != "object" && b !== "idx") {
                    i = i + "/" + b + "-=-" + encodeURIComponent(encodeURIComponent(a[b]))
                }
            }
            if (a.service == "email") {
                i = i + "/page-=-send"
            }
            if (stWidgetVersion == "5xa") {
                if (a.service == "facebook") {
                    i = i + "/page-=-fbhome"
                } else {
                    if (a.service == "twitter") {
                        i = i + "/page-=-twhome"
                    } else {
                        if (a.service == "yahoo") {
                            i = i + "/page-=-ybhome"
                        } else {
                            if (a.service == "linkedin") {
                                i = i + "/page-=-lihome"
                            } else {
                                if (a.service == "wordpress") {
                                    i = i + "/page-=-wphome"
                                }
                            }
                        }
                    }
                }
            }
            if (stlib.data) {
                var g = stlib.json.encode(stlib.data.pageInfo);
                var f = stlib.json.encode(stlib.data.shareInfo);
                if (stlib.browser.isFirefox() && !stlib.browser.firefox8Version()) {
                    g = encodeURIComponent(encodeURIComponent(g));
                    f = encodeURIComponent(encodeURIComponent(f))
                } else {
                    g = encodeURIComponent(g);
                    f = encodeURIComponent(f)
                }
                i += "/pageInfo-=-" + g;
                i += "/shareInfo-=-" + f
            }
        }
    }
    return i
};
stWidget.positionWidget = function (a) {
    if (!a) {
        return false
    }
    stWidget.overlay.style.display = "block";
    stWidget.wrapper.style.display = "block"
}, stWidget.hideWidget = function () {
    stWidget.wrapper.style.display = "none";
    stWidget.overlay.style.display = "none"
};
stWidget.pageSize = function () {
    var f = [0, 0, 0, 0];
    var b = 0;
    var a = 0;
    var e = 0;
    var d = 0;
    if (typeof(window.pageYOffset) == "number") {
        b = window.pageXOffset;
        a = window.pageYOffset
    } else {
        if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
            b = document.body.scrollLeft;
            a = document.body.scrollTop
        } else {
            if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
                b = document.documentElement.scrollLeft;
                a = document.documentElement.scrollTop
            }
        }
    }
    if (window.innerWidth) {
        e = window.innerWidth;
        d = window.innerHeight
    } else {
        if (document.documentElement.offsetWidth) {
            e = document.documentElement.offsetWidth;
            d = document.documentElement.offsetHeight
        }
    }
    f = {scrX: b, scrY: a, width: e, height: d};
    return f
};
stWidget.closetimeout = null;
stWidget.stClose = function (a) {
    if (!a) {
        a = 1000
    }
    if ((stWidgetVersion == "4x") && stWidget.options.autoclose != null && (stWidget.options.autoclose == true || stWidget.options.autoclose == "true")) {
        if (stWidget.openDuration < 0.5 && stWidget.stopClosing == false) {
            stWidget.closetimeout = setTimeout("stWidget.closeWidget()", a)
        } else {
            stWidget.stopClosing = true
        }
    }
};
stWidget.stCancelClose = function () {
    clearTimeout(stWidget.closetimeout);
    stWidget.buttonClicked = true;
    setTimeout(function () {
        stWidget.buttonClicked = false
    }, 100)
};
stWidget.closeWidget = function () {
    if (st_showing == false) {
        return false
    }
    st_showing = false;
    stWidget.widgetOpen = false;
    stWidget.wrapper.style.display = "none";
    stWidget.showEmbeds();
    stWidget.sendEvent("screen", "home");
    stWidget.overlay.style.display = "none"
};
stWidget.hideEmbeds = function () {
    var b = document.getElementsByTagName("embed");
    for (var a = 0; a < b.length; a++) {
        b[a].style.visibility = "hidden"
    }
};
stWidget.showEmbeds = function () {
    if (stWidget.options.embeds == true) {
        return true
    }
    var b = document.getElementsByTagName("embed");
    for (var a = 0; a < b.length; a++) {
        b[a].style.visibility = "visible"
    }
};
stWidget.sendEvent = function (a, d) {
    var b = "widget/" + a + "=" + d;
    stButtons.messageQueueInstance.send(b, "widget")
};
stWidget.getMetaTags = function () {
    stWidget.getOGTags();
    stWidget.getTwitterTags()
};
stWidget.getOGTags = function () {
    var d = document.getElementsByTagName("meta");
    for (var a = 0; a < d.length; a++) {
        var b = d[a].getAttribute("property");
        if (b == null) {
            b = d[a].getAttribute("name")
        }
        if (b == "og:title") {
            stWidget.ogtitle = d[a].getAttribute("content")
        } else {
            if (b == "og:type") {
                stWidget.ogtype = d[a].getAttribute("content")
            } else {
                if (b == "og:url") {
                    stWidget.ogurl = d[a].getAttribute("content")
                } else {
                    if (b == "og:image") {
                        stWidget.ogimg = d[a].getAttribute("content").replace(/^\s+|\s+$/g, "")
                    } else {
                        if (b == "og:description") {
                            stWidget.ogdesc = d[a].getAttribute("content")
                        } else {
                            if (b == "description" || b == "Description") {
                                stWidget.desc = d[a].getAttribute("content")
                            }
                        }
                    }
                }
            }
        }
    }
};
stWidget.getTwitterTags = function () {
    var d = document.getElementsByTagName("meta");
    for (var a = 0; a < d.length; a++) {
        var b = d[a].getAttribute("name");
        if (b == null) {
            b = d[a].getAttribute("property")
        }
        if (b == "twitter:card") {
            stWidget.twittercard = d[a].getAttribute("content")
        } else {
            if (b == "twitter:url") {
                stWidget.twitterurl = d[a].getAttribute("content")
            } else {
                if (b == "twitter:title") {
                    stWidget.twittertitle = d[a].getAttribute("content")
                } else {
                    if (b == "twitter:description") {
                        stWidget.twitterdesc = d[a].getAttribute("content")
                    } else {
                        if (b == "twitter:image") {
                            stWidget.twitterimg = d[a].getAttribute("content")
                        } else {
                            if (b == "description" || b == "Description") {
                                stWidget.desc = d[a].getAttribute("content")
                            }
                        }
                    }
                }
            }
        }
    }
};
function shareLog(a, b) {
    if (typeof(ga) !== "undefined") {
        ga("send", "event", "ShareThis", a, b)
    } else {
        if (typeof(pageTracker) != "undefined" && pageTracker !== null && typeof(pageTracker._trackEvent) != "undefined") {
            pageTracker._trackEvent("ShareThis", a, b)
        } else {
            if (typeof(_gaq) != "undefined" && _gaq !== null) {
                _gaq.push(["_trackEvent", "ShareThis", a, b])
            } else {
                if (stButtons.publisherTracker !== null) {
                    stButtons.publisherTracker._trackEvent("ShareThis", a, b)
                } else {
                    if (typeof(_gat) != "undefined" && _gat !== null) {
                        if (typeof(stWidget.options.publisherGA) != "undefined" && stWidget.options.publisherGA != null) {
                            stButtons.publisherTracker = _gat._createTracker(stWidget.options.publisherGA);
                            stButtons.publisherTracker._trackEvent("ShareThis", a, b)
                        }
                    }
                }
            }
        }
    }
}
stButtons.completeInit = function () {
    if (!stButtons.goToInit) {
        stButtons.goToInit = true;
        var a = self.setInterval(function () {
            if (stWidget.widgetLoadingComplete) {
                stWidget.getMetaTags();
                document.body.appendChild(stWidget.wrapper);
                document.body.appendChild(stWidget.overlay);
                stButtons.makeButtons();
                stWidget.init();
                window.clearInterval(a)
            }
        }, 1000)
    }
};
plusoneCallback = function (a) {
    if (a.state == "on") {
        stlib.data.resetShareData();
        stlib.data.set("url", a.href, "shareInfo");
        stlib.data.set("short_url", stWidget.short_url, "shareInfo");
        stlib.data.set("destination", "plusone", "shareInfo");
        stlib.data.setSource("chicklet");
        stlib.data.set("buttonType", "chicklet", "shareInfo");
        stlib.sharer.share()
    }
};
stButtons.trackFB = function () {
    try {
        if (!stButtons.fbTracked && typeof(FB) != "undefined" && typeof(FB.Event) != "undefined" && typeof(FB.Event.subscribe) != "undefined") {
            stButtons.fbTracked = true;
            FB.Event.subscribe("edge.create", function (b) {
                stButtons.trackShare("fblike_auto", b);
                stLight.callSubscribers("click", "fblike", b)
            });
            FB.Event.subscribe("edge.remove", function (b) {
                stButtons.trackShare("fbunlike_auto", b);
                stLight.callSubscribers("click", "fbunlike", b)
            });
            FB.Event.subscribe("message.send", function (b) {
                stButtons.trackShare("fbsend_auto", b);
                stLight.callSubscribers("click", "fbsend", b)
            })
        }
    } catch (a) {
    }
};
stButtons.trackTwitter = function () {
    if (!stButtons.twitterTracked && typeof(twttr) != "undefined" && typeof(twttr.events) != "undefined" && typeof(twttr.events.bind) != "undefined") {
        stButtons.twitterTracked = true;
        twttr.events.bind("click", function (a) {
            stButtons.trackTwitterEvent("click");
            stLight.callSubscribers("click", "twitter")
        });
        twttr.events.bind("tweet", function () {
            stButtons.trackTwitterEvent("tweet")
        });
        twttr.events.bind("retweet", function () {
            stButtons.trackTwitterEvent("retweet");
            stLight.callSubscribers("click", "retweet")
        });
        twttr.events.bind("favorite", function () {
            stButtons.trackTwitterEvent("favorite");
            stLight.callSubscribers("click", "favorite")
        });
        twttr.events.bind("follow", function () {
            stButtons.trackTwitterEvent("follow");
            stLight.callSubscribers("click", "follow")
        })
    }
};
stButtons.trackTwitterEvent = function (a) {
    stButtons.trackShare("twitter_" + a + "_auto")
};
stButtons.trackShare = function (a, d) {
    if (typeof(d) !== "undefined" && d !== null) {
        var b = d
    } else {
        var b = document.location.href
    }
    stlib.data.resetShareData();
    stlib.data.set("url", b, "shareInfo");
    stlib.data.set("short_url", stWidget.short_url, "shareInfo");
    stlib.data.set("destination", a, "shareInfo");
    stlib.data.set("buttonType", "chicklet", "shareInfo");
    stlib.data.setSource("chicklet");
    stlib.sharer.share()
};
stLight.processSTQ = function () {
    if (typeof(_stq) != "undefined") {
        for (var a = 0; a < _stq.length; a++) {
            var b = _stq[a];
            stLight.options(b)
        }
    } else {
        return false
    }
};
stLight.onDomContentLoaded = function () {
    stLight.onReady();
    stButtons.trackTwitter()
};
stLight.onDomContentLoadedLazy = function () {
    stLight.loadServicesLoggedIn(function () {
        stLight.getAllAppDefault(function () {
            stlib.data.init();
            stButtons.locateElements();
            stButtons.makeButtons()
        })
    })
};
stLight.messageReceiver = function (b) {
    if (b && (b.origin == "http://edge.sharethis.com" || b.origin == "https://ws.sharethis.com")) {
        var d = b.data;
        d = d.split("|");
        if (d[0] == "ShareThis" && d.length > 2) {
            var a = (typeof(d[3]) == "undefined") ? document.location.href : d[3];
            stLight.callSubscribers(d[1], d[2], a)
        }
    }
};
stLight.subscribe = function (b, a) {
    if (b == "click") {
        stLight.clickSubscribers.push(a)
    } else {
        stLight.nonClickSubscribers.push(a)
    }
};
stLight.callSubscribers = function (e, a, b) {
    if (e == "click") {
        for (var d = 0; d < stLight.clickSubscribers.length; d++) {
            stLight.clickSubscribers[d]("click", a, b)
        }
    }
    if (a == "Email" && e == "close") {
        stWidget.closeWidget()
    }
    if (a == "Print" && e == "close") {
        stWidget.closeWidget()
    }
};
stLight.gaTS = function (d, a, b) {
    var e = "";
    var f = "";
    if (a == "fblike") {
        e = "ShareThis_facebook";
        f = "Like"
    } else {
        if (a == "fbunlike") {
            e = "ShareThis_facebook";
            f = "UnLike"
        } else {
            if (a == "fbsend") {
                e = "ShareThis_facebook";
                f = "Send"
            } else {
                if (a == "twitter") {
                    e = "ShareThis_twitter";
                    f = "Share"
                } else {
                    if (a == "retweet") {
                        e = "ShareThis_twitter";
                        f = "ReTweet"
                    } else {
                        if (a == "favorite") {
                            e = "ShareThis_twitter";
                            f = "Favorite"
                        } else {
                            if (a == "follow") {
                                e = "ShareThis_twitter";
                                f = "Follow"
                            } else {
                                e = "ShareThis_" + a;
                                f = "Share"
                            }
                        }
                    }
                }
            }
        }
    }
    if (typeof(ga) !== "undefined") {
        ga("send", "social", e, f, b)
    } else {
        if (typeof(_gaq) != "undefined") {
            _gaq.push(["_trackSocial", e, f, b])
        }
    }
};
stButtons.onReady = function () {
    var h = document.getElementsByTagName("*");
    var b = [];
    var d = new RegExp(/sharethis_smartbuttons/);
    var a = false;
    for (var j = 0; j < h.length; j++) {
        if (typeof(h[j].className) == "string" && h[j].className != "") {
            if (h[j].className.match(d)) {
                a = true;
                break
            }
        }
    }
    if (a) {
        var g = document.getElementsByTagName("head")[0];
        var e = ["return=json", "cb=stButtons.smartifyButtons"];
        e = e.join("&");
        var f = (("https:" == document.location.protocol) ? "https://ws." : "http://wd.") + "sharethis.com/api/getRecentServices.php?" + e;
        var i = document.createElement("script");
        i.setAttribute("type", "text/javascript");
        i.setAttribute("src", f);
        g.appendChild(i);
        setTimeout("stButtons.completeInit()", 2000)
    } else {
        stButtons.completeInit()
    }
    stLight.subscribe("click", stLight.gaTS);
    if (stlib.browser.ieFallback && stlib.browser.getIEVersion() < 9) {
        return
    } else {
        stLight.getAllAppDefault(function () {
            if (stWidget.options.snapsets && typeof(stLight.snapSetsRun) == "undefined") {
                stLight.snapSetsRun = true;
                if (typeof(stlib.p6x) == "undefined") {
                    stLight.odjs("http://w.sharethis.com/button/clipboard.js", function () {
                        stlib.p6x.init()
                    })
                }
            }
        })
    }
};
stLight.domReady = function () {
    stLight.onReady();
    stButtons.trackTwitter();
    __stgetPubGA();
    if (typeof(__stPubGA) !== "undefined" && stLight.readyRun == true && stWidget.frameReady == true) {
        stWidget.sendEvent("publisherGA", __stPubGA)
    }
};
stButtons.goToInit = false;
stButtons.widget = false;
stButtons.widgetArray = [];
stButtons.cbAppQueue = [];
stButtons.queue = [];
stButtons.cbQueue = [];
stButtons.cbNativeQueue = [];
stButtons.cbVal = 0;
stButtons.queuePos = 0;
stButtons.counts = [];
st_showing = false;
stButtons.urlElements = [];
stButtons.publisherTracker = null;
stButtons.plusOneLoaded = false;
stButtons.plusOneLoading = false;
stButtons.xfbmlLoaded = false;
stButtons.xfbmlLoading = false;
stButtons.fbTracked = false;
stButtons.twitterTracked = false;
stButtons.pumpInstance = null;
stButtons.messageQueueInstance = null;
stButtons.countsResp = [];
stButtons.countsNativeResp = [];
stWidget.getMetaTags();
stLight.clickSubscribers = [];
stLight.nonClickSubscribers = [];
var __stPubGA;
if (window.document.readyState == "completed") {
    stLight.domReady()
} else {
    if (typeof(window.addEventListener) != "undefined") {
        window.addEventListener("load", stLight.domReady, false)
    } else {
        if (typeof(document.addEventListener) != "undefined") {
            document.addEventListener("load", stLight.domReady, false)
        } else {
            if (typeof window.attachEvent != "undefined") {
                window.attachEvent("onload", stLight.domReady)
            }
        }
    }
}
if (typeof(window.addEventListener) != "undefined") {
    window.addEventListener("click", function () {
        stWidget.closeWidget()
    }, false)
} else {
    if (typeof(document.addEventListener) != "undefined") {
        document.addEventListener("click", function () {
            stWidget.closeWidget()
        }, false)
    } else {
        if (typeof window.attachEvent != "undefined") {
            window.attachEvent("onclick", function () {
                stWidget.closeWidget()
            })
        }
    }
}
if (typeof(__st_loadLate) == "undefined") {
    if (typeof(window.addEventListener) != "undefined") {
        window.addEventListener("DOMContentLoaded", stLight.onDomContentLoaded, false)
    } else {
        if (typeof(document.addEventListener) != "undefined") {
            document.addEventListener("DOMContentLoaded", stLight.onDomContentLoaded, false)
        }
    }
} else {
    if (typeof(window.addEventListener) != "undefined") {
        window.addEventListener("DOMContentLoaded", stLight.onDomContentLoadedLazy, false)
    } else {
        if (typeof(document.addEventListener) != "undefined") {
            document.addEventListener("DOMContentLoaded", stLight.onDomContentLoadedLazy, false)
        }
    }
}
if (typeof(window.addEventListener) != "undefined") {
    window.addEventListener("message", stLight.messageReceiver, false)
} else {
    if (typeof(document.addEventListener) != "undefined") {
        document.addEventListener("message", stLight.messageReceiver, false)
    } else {
        if (typeof window.attachEvent != "undefined") {
            window.attachEvent("onmessage", stLight.messageReceiver)
        }
    }
}
if (document.readyState == "complete" && stLight.readyRun == false) {
    stLight.domReady()
}
;