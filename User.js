function GetRoleName(Id) {
  var Role = "";
  for (var i = 0; i < ServerRoles.length; i++) {
    if (ServerRoles[i].id === Id) {
      Role = ServerRoles[i].name;
    };
  };
  return Role;
};

function GetUsername(Id) {
    var msg = "";
    var arr = [];
    var loop = Math.floor((Object.keys(ServerMembers).length) / 100);
    var last = (((Object.keys(ServerMembers).length) / 100) - loop) * 100;
    var ct = 0;
    var usr = "";
    for (var i = 0; i < (loop + 1); i++) {
        if (i < loop) {
            for (var j = (0 + (100 * ct)); j < ((100 * ct) + 100); j++) {
                arr.push(ServerMembers[j]["User"]["ID"]);
            }
        } else {
            for (var j = (0 + (100 * ct)); j < ((100 * ct) + last); j++) {
                arr.push(ServerMembers[j]["User"]["ID"]);
            }
        }
        if (arr.indexOf(Id) > -1) {
            usr = ((100 * ct) + arr.indexOf(Id));
            break;
        } else {
            arr = [];
            ct++;
            continue;
        }
    }
    if (ServerMembers[usr]["Nick"] !== "") {
        msg = ServerMembers[usr]["Nick"];
    } else {
        msg = ServerMembers[usr]["User"]["Username"];
    };
    return msg;
};

function GetUserID(Name) {
	var msg = "";
	for (var i = 0; i < ServerMembers.length; i++) {
		if (ServerMembers[i]["User"]["Username"] == Name) {
			msg = ServerMembers[i]["User"]["ID"];
		} else if (ServerMembers[i]["Nick"] !== "") {
			if (ServerMembers[i]["Nick"] === Name) {
				msg = ServerMembers[i]["User"]["ID"];
			}
		}
	};
	return msg;
};
