function posRep() {
	msg = "";
	if (RawUserID === UserID) {
		msg += "Please mention somebody.";
	} else if (JSON.parse(SupportRep["BanList"]).indexOf(RawUserID) > -1) {
        msg += "You are not allowed to use this.";
	} else if (isBot() === true) {
		msg += "Bots don't like reputation sorry.";
	} else {
		var d = new Date();
		if (Rep.hasOwnProperty(UserID)) {
			var obj = {
				"Amount": (prs(Rep[UserID])["Amount"] + 15),
				"Time": d.toString()
			};
			Rep[UserID] = str(obj);
		} else {
			var obj = {
				"Amount": 15,
				"Time": d.toString()
			};
			Rep[UserID] = str(obj);
		}
		msg += "You have given <@" + UserID + "> 15 reputation points!";
	}
	return msg;
}

function negRep() {
	msg = "";
	if (RawUserID === UserID) {
		msg += "Please mention somebody.";
	} else if (JSON.parse(SupportRep["BanList"]).indexOf(RawUserID) > -1) {
        msg += "You are not allowed to use this.";
	} else if (isBot() === true) {
		msg += "Bots don't like reputation sorry.";
	} else {
		var d = new Date();
		if (Rep.hasOwnProperty(UserID)) {
			var obj = {
				"Amount": (prs(Rep[UserID])["Amount"] - 15),
				"Time": d.toString()
			};
			Rep[UserID] = str(obj);
		} else {
			var obj = {
				"Amount": -15,
				"Time": d.toString()
			};
			Rep[UserID] = str(obj);
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
            var bl = JSON.parse(Rep["BanList"]);
            if (bl.indexOf(UserID) > -1) {
                msg += "User is already banned from the reputation system.";
            } else {
                bl.push(UserID);
                Rep["BanList"] = JSON.stringify(bl);
                msg += "User has been banned from the reputation system.";
            }
        }
    } else if (Type === "remove") {
        if (MemberHasRole(RawUserID, "Management") === true && ChannelID === "365154401456881666" && MemberHasRole(UserID, "Staff") === false) {
            var bl = JSON.parse(Rep["BanList"]);
            if (bl.indexOf(UserID) > -1) {
                bl.splice(bl.indexOf(UserID), 1);
                Rep["BanList"] = JSON.stringify(bl);
                msg += "User can now use the reputation system again.";
            } else {
                msg += "User could not be found in the list of people that have been banned from the reputation system.";
            }
        }
    }
    return msg;
};

function banList() {
    var msg = "";
    var bl = JSON.parse(Rep["BanList"]);
    if (bl.length > 0) {
        msg += "*Users that are banned from the reputation system:*```";
        for (var i = 0; i < bl.length; i++) {
            if ((i + 1) < bl.length) {
                msg += GetUserName(bl[i]) + ", ";
            } else {
                msg += GetUserName(bl[i]);
            }
        }
        msg += "```";
    } else {
        msg += "No users have been banned from the reputation system.";
    }
    return msg;
}

function repListLength() {
    if (MemberHasRole(RawUserID, "Management") === true) {
        if (Params.length === 0) {
            resp = "Insert a number you fool.";
        } else if (RegExp("[^0-9]+", "g").test(Params)) {
            if (Params.toLowerCase() === "everybody") {
                Rep.rll = "Everybody";
                resp = "Everybody will be shown.";
            } else {
                resp = "Only numbers, idiot.";
            }
        } else if (prs(Params) < 1) {
            resp = "How can I show nothing or a negative amount???";
        } else {
            Rep.rll = Params;
            resp = "Replist will now show the *Top " + Params + "*";
        }
    }
}

function repList() {
	var obj = sortObject(Rep);
    delete obj.BanList;
    delete obj.rll;
	for (var i = 0; i < Object.keys(obj).length; i++) {
		var ID = Object.keys(obj)[i];
		obj[ID] = prs(obj[ID]);
		obj[ID]["Name"] = GetUsername(ID);
	};
	var arr = [];
	var Names = [];
    var emb = {};
    emb.type = "rich";
	for (var i = 0; i < Object.keys(obj).length; i++) {
		var ID = Object.keys(obj)[i];
		arr.push(obj[ID]);
	}
	var byAmount = arr.slice(0);
	byAmount.sort(function(a,b) {
		return b.Amount - a.Amount;
	});
    var lb = 0;
    if (Rep.hasOwnProperty("rll")) {
        if (Rep.rll === "Everybody") {
            lb = Object.keys(obj).length;
        } else if (Object.keys(obj).length < JSON.parse(Rep.rll)) {
            lb = Object.keys(obj).length;
        } else {
            lb = JSON.parse(Rep.rll);
            emb.title = "Showing *Top" + lb +"*:";
        }
    } else {
        lb = Object.keys(obj).length;
    }
    var ct = 1;
	for (var i = 0; i < lb; i++) {
        if (i > 0) {
            if (byAmount[i]["Amount"] === byAmount[(i - 1)]["Amount"]) {
                emb.description += "**" + ct + ".** " + byAmount[i]["Name"] + ": *" + byAmount[i]["Amount"] + "*\n";
                lb++;
            } else {
                emb.description += "**" + (ct + 1) + ".** " + byAmount[i]["Name"] + ": *" + byAmount[i]["Amount"] + "*\n";
                ct++;
            }
        } else {
            emb.description += "**" + ct + ".** " + byAmount[i]["Name"] + ": *" + byAmount[i]["Amount"] + "*\n";
            lb++;
        }
    }
	return msg;
}
