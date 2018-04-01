function Ajax(method, url, flag, data, callback){
	// data = name=kfc&age=20;
	var xml = null;
	//兼容性
	if(window.XMLHttpRequest) {
		xml = new XMLHttpRequest();
	}else {
		xml = new ActiveXObject('Microsoft.XMLHTTP');
	}
	//将method值变为大写
	method = method.toUpperCase();

	if(method === 'GET'){
		xml.open(method, url + '?' + data, flag);
		xml.send();
	}else if(method === 'POST'){
		xml.open(method, url, flag);
		xml.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xml.send(data);
	}

	//监听
	xml.onreadystatechange = function () {
		if(xml.readyState === 4) {
			if(xml.status === 200) {
				callback(xml.responseText);
			}else{
				alert('error');
			}
		}
	}
}