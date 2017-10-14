function posRep(RawID) {
	msg = "";
	if (RawID === UserID) {
		msg += "Please mention somebody";
	} else if (MemberHasRole(UserID, "Support") === false) {
		msg += "Please mention a support member.";
	} else if (MemberHasRole(UserID, "Support") === true && MemberHasRole(UserID, "Admin") === false) {
		var d = new Date();
		if (SupportRep[UserID]) {
			var obj = {
				"Amount": (prs(SupportRep[UserID])["Amount"] + 15),
				"Time": d.toString()
			};
			SupportRep[UserID] = str(obj);
		} else {
			var obj = {
				"Amount": 15,
				"Time": d.toString()
			};
			SupportRep[UserID] = str(obj);
		}
		msg += "You have given <@" + UserID + "> 15 reputation points!";
	}
	return msg;
}

function negRep(RawID) {
	msg = "";
	if (RawID === UserID) {
		msg += "Please mention somebody";
	} else if (MemberHasRole(UserID, "Support") === false) {
		msg += "Please mention a support member.";
	} else if (MemberHasRole(UserID, "Support") === true && MemberHasRole(UserID, "Admin") === false) {
		var d = new Date();
		if (SupportRep[UserID]) {
			var obj = {
				"Amount": (prs(SupportRep[UserID])["Amount"] - 15),
				"Time": d.toString()
			};
			SupportRep[UserID] = str(obj);
		} else {
			var obj = {
				"Amount": -15,
				"Time": d.toString()
			};
			SupportRep[UserID] = str(obj);
		}
		msg += "You have taken 15 reputation points from <@" + UserID + ">.";
	}
	return msg;
}

function repList() {
	var obj = sortObject(SupportRep);
	for (var i = 0; i < Object.keys(obj).length; i++) {
		var ID = Object.keys(obj)[i];
		obj[ID] = prs(obj[ID]);
		obj[ID]["Name"] = GetUsername(ID);
	};
	var arr = [];
	var Names = [];
	var msg = "{embed:\n{type:rich}{desc:\n";
	for (var i = 0; i < Object.keys(obj).length; i++) {
		var ID = Object.keys(obj)[i];
		arr.push(obj[ID]);
	}
	var byAmount = arr.slice(0);
	byAmount.sort(function(a,b) {
		return b.Amount - a.Amount;
	});
	var ct = 1;
	for (var i = 0; i < byAmount.length; i++) {
		if (i < (byAmount.length - 1)) {
			if (byAmount[i]["Amount"] === byAmount[(i + 1)]["Amount"]) {
				msg += "**" + ct + ".** " + byAmount[i]["Name"] + ": *" + byAmount[i]["Amount"] + "*\n";
			} else {
				msg += "**" + (ct + 1) + ".** " + byAmount[i]["Name"] + ": *" + byAmount[i]["Amount"] + "*\n";
				ct++;
			}
		} else {
			msg += "**" + ct + ".** " + byAmount[i]["Name"] + ": *" + byAmount[i]["Amount"] + "*\n";
		}
	}
	msg += "}\n}";
	return msg;
}
