import $ from 'jquery'

let util_browser = {
	getParameterByName: function(name, url) {
	    if (!url) url = window.location.href;

		name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	},

	getParam: function(key) {
		return util_browser.getParameterByName(key)
	},

	setParam: function(key, value) {
	    var baseUrl = window.location.href.split("?")[0],
	    	url = window.location.href,
	    	newUrl,
	        param,
	        params_arr = [],
	        queryString = (url.indexOf("?") !== -1) ? url.split("?")[1] : "";
	    if (queryString !== "") {
	    	var pExists = queryString.split('&').find((p) => {
	        	return p.split('=')[0] === key
	        })

	        params_arr = queryString.split('&').map((p) => {
	        	if (p.split('=')[0] === key) {
	        		return p.split('=')[0] + '=' + value
	        	}

	        	return p
	        })
	       
	        if (!pExists) {params_arr.push(key + '=' + value)}

	        newUrl = baseUrl + "?" + params_arr.join("&");
	    } else {
	    	newUrl = baseUrl + "?" + key + '=' + value
	    }

		history.replaceState({foo:"bar"}, "page", newUrl)
	},

	removeParam: function(key) {
	    var baseUrl = window.location.href,
	    	rtn = baseUrl.split("?")[0],
	        param,
	        params_arr = [],
	        queryString = (baseUrl.indexOf("?") !== -1) ? baseUrl.split("?")[1] : "";
	    if (queryString !== "") {
	        params_arr = queryString.split("&");
	        for (var i = params_arr.length - 1; i >= 0; i -= 1) {
	            param = params_arr[i].split("=")[0];
	            if (param === key) {
	                params_arr.splice(i, 1);
	            }
	        }
	        rtn = rtn + "?" + params_arr.join("&");
	    }
	    
		history.replaceState({foo:"bar"}, "page", rtn)
	},

	setCookie: function(cname, cvalue, exdays) {
	    var d = new Date();
	    d.setTime(d.getTime() + (exdays*24*60*60*1000));
	    var expires = "expires="+d.toUTCString();
	    document.cookie = cname + "=" + cvalue + "; " + expires;
	},

	getCookie: function(cname) {
	    var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0; i<ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1);
	        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	    }
	    return "";
	},

	checkCookie: function() {
	    var user = getCookie("username");
	    if (user != "") {
	        alert("Welcome again " + user);
	    } else {
	        user = prompt("Please enter your name:", "");
	        if (user != "" && user != null) {
	            setCookie("username", user, 365);
	        }
	    }
	},


	isMobile: function() {
		return $('body').hasClass('mobile')
	},

	debounce: function(func, wait, immediate) {
		var timeout

		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		}
	},

	convertUrl: function(notRootDirectory) {
		// reformat URLs 
		// relative and absolute urls not working
		// because sometimes we use same html url from root
		// othertimes in /content directory
		let regex = new RegExp(notRootDirectory, 'i')
		let isNotRootDirectory = location.href.search(regex)
		console.log('foobar', isNotRootDirectory)
		if (isNotRootDirectory == -1)
		  return;
	  
		let links = $('.convert-url a')
			
		links.toArray().forEach(function(el) {
			console.log(el)
		  let old = el.getAttribute('href')
		  el.setAttribute('href', '../' + old)
		})
		
		$('.convert-url').removeClass('convert-url')
	},

	turboXml: async function(url, xsl) {
		let xmlDoc = await $.get({
			url: url, 
			dataType: 'xml'
		})
		let xslDoc

		if (! util_browser.xslDoc) {
			xslDoc = await $.get({
				url: xsl,
				dataType: 'xml'
			})
		} else {
			xslDoc = util_browser.xslDoc
		}

		let result = new XSLTProcessor()
		result.importStylesheet(xslDoc)
		return result.transformToDocument(xmlDoc)
	}
}

export default util_browser