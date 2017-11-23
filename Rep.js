function posRep() {
	msg = "";
	if (RawUserID === UserID) {
		msg += "Please mention somebody.";
	} else if (JSON.parse(Rep["BanList"]).indexOf(RawUserID) > -1) {
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
	} else if (JSON.parse(Rep["BanList"]).indexOf(RawUserID) > -1) {
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
    var msg = "";
    if (MemberHasRole(RawUserID, "Management") === true) {
        if (Params.length === 0) {
            msg = "Insert a number you fool.";
        } else if (RegExp("[^0-9]+", "g").test(Params)) {
            if (Params.toLowerCase() === "everybody") {
                Rep.rll = "Everybody";
                msg = "Everybody will be shown.";
            } else {
                msg = "Only numbers, idiot.";
            }
        } else if (prs(Params) < 1) {
            msg = "How can I show nothing or a negative amount???";
        } else {
            Rep.rll = Params;
            msg = "Replist will now show the *Top " + Params + "*";
        }
    }
    return msg;
}

function repList() {
    if (Object.keys(Rep).length > 2) {
        var obj = sortObject(Rep);
        delete obj.BanList;
        delete obj.rll;
        for (var i = 0; i < Object.keys(obj).length; i++) {
            var ID = Object.keys(obj)[i];
            obj[ID] = prs(obj[ID]);
            if (GetUsername(ID) !== null) {
                obj[ID]["Name"] = GetUsername(ID);
            } else {
                delete Rep[ID];
                delete obj[ID];
            };
        };
        var arr = [];
        var Names = [];
        var emb = {};
        var Colors = ["FFC800", "FF0F7F", "FF0F1A", "2EF65C", "F5F404", "DA1E8", "FFA200", "D96AF2"];
        var RandColor = Colors[(Math.floor(Math.random() * Colors.length) + 1)];
        emb.color = HTML2Int(RandColor);
        emb.description = "";
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
                emb.title = "Showing *Top " + lb +"*:";
            }
        } else {
            lb = Object.keys(obj).length;
        }
        var ct = 1;
        var ctn = 0;
        for (var i = 0; i < lb; i++) {
            if (byAmount[i]["Amount"] > 0) {
                if (i > 0) {
                    if (byAmount[i]["Amount"] === byAmount[(i - 1)]["Amount"]) {
                        emb.description += "**" + ct + ".** " + byAmount[i]["Name"] + ": *" + byAmount[i]["Amount"] + "*\n";
                    } else {
                        emb.description += "**" + (ct + 1) + ".** " + byAmount[i]["Name"] + ": *" + byAmount[i]["Amount"] + "*\n";
                        ct++;
                    }
                } else {
                    emb.description += "**" + ct + ".** " + byAmount[i]["Name"] + ": *" + byAmount[i]["Amount"] + "*\n";
                }
            } else {
                ctn++;
            }
        }
        if (emb.description.length > 0) {
            if (ctn > 0) {
                if (emb.description.length > 0) {
                    emb.description += "\n*People with 0 reputation points are not shown.*"
                }
            }
            return emb;
        } else {
            var msg = "I couldn't find any users yet in the database."
            return msg;
        }
    } else {
        var msg = "I couldn't find any users yet in the database."
        return msg;
    }
}
