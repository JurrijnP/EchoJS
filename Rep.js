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

function repBan(Type) {
    var msg = "";
	if (RawUserID === UserID) {
		msg += "Please mention somebody";
    };
    if (Type === "add") {
        if (MemberHasRole(RawUserID, "Management") === true && ChannelID === "365154401456881666" && MemberHasRole(UserID, "Staff") === false) {
            var bl = JSON.parse(SupportRep.BanList);
            if (bl.indexOf(UserID) > -1) {
                msg += "User is already banned from the reputation system.";
            } else {
                bl.push(UserID);
                SupportRep.BanList = JSON.stringify(bl);
                msg += "User has been banned from the reputation system.";
            }
        }
    } else if (Type === "remove") {
        if (MemberHasRole(RawUserID, "Management") === true && ChannelID === "365154401456881666" && MemberHasRole(UserID, "Staff") === false) {
            var bl = JSON.parse(SupportRep.BanList);
            if (bl.indexOf(UserID) > -1) {
                bl.splice(bl.indexOf(UserID), 1);
                SupportRep.BanList = JSON.stringify(bl);
                msg += "User can now use the reputation system again.";
            } else {
                msg += "User could not be found in the list of people that have been banned from the reputation system.";
            }
        }
    }
    return msg;
};

function repList() {
	var obj = sortObject(SupportRep);
    delete obj.BanList;
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
	for (var i = 0; i < byAmount.length; i++) {
		msg += "**" + (i + 1) + ".** " + byAmount[i]["Name"] + ": *" + byAmount[i]["Amount"] + "*\n";
	}
	msg += "}\n}";
	return msg;
}
