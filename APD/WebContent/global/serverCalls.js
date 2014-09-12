exa.reuse.serverCall = {		
	call: function(url, async, callback) {
		var xmlhttp;
		xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", url, async);
		if(async) {
			xmlhttp.onreadystatechange = function() {
				if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					//TODO VALIDATE RESPONSE
					if(callback === undefined) {
						return jQuery.parseJSON(xmlhttp.responseText);
					} else {
						callback(jQuery.parseJSON(xmlhttp.responseText));
					}	
				}
			};
			xmlhttp.send();
		} else {
			xmlhttp.open("GET",url,async);
			xmlhttp.send();
			if(callback === undefined) {
				return jQuery.parseJSON(xmlhttp.responseText);
			} else {
				callback(jQuery.parseJSON(xmlhttp.responseText));
			}
		}			
	},
	
	xmlhttp: function(oSettings, fnSuccessCallback, fnErrorCallback) {
		oSettings.success = function(data, textStatus, jqXHR) {
			if(fnSuccessCallback != undefined) {
				fnSuccessCallback(data, textStatus, jqXHR);
			}
		};
		oSettings.error = function(jqXHR, textStatus, error) {
			if(fnErrorCallback != undefined) {
				fnErrorCallback(jqXHR, textStatus, error);
			}
		};
		jQuery.ajax(oSettings);
	}
};