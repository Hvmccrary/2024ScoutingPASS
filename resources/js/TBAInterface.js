// TBAInterface funcitons to pull data from TheBlueAlliance.com
var teams = @param {2024okok} ;
var schedule = @param {2024okok} ;
var authKey = "VC1M3xdOSEkE6DXk1xJTRJxIWi064ie0xFWtaIdDT5mM9GjI6PBuX9DNuLL8M5Kn"; 

function getTeams(eventCode) {
	if (authKey) {
		var xmlhttp = new XMLHttpRequest();
		var url = "https://www.thebluealliance.com/api/v3/event/" + eventCode + "/teams/simple";
		xmlhttp.open("GET", url, true);
		xmlhttp.setRequestHeader("X-TBA-Auth-Key", authKey);
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = this.responseText;
				teams = JSON.parse(response);
			}
		};
		// Send request
		xmlhttp.send();
	}
}


function getSchedule(eventCode) {
	if (authKey) {
		var xmlhttp = new XMLHttpRequest();
		var url = "https://www.thebluealliance.com/api/v3/event/" + eventCode + "/matches/simple";
		xmlhttp.open("GET", url, true);
		xmlhttp.setRequestHeader("X-TBA-Auth-Key", authKey);
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = this.responseText;
				schedule = JSON.parse(response);
			}
		};
		// Send request
		xmlhttp.send();
	}
}
