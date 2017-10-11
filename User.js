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
	for (var i = 0; i < Object.keys(ServerMembers).length; i++) {
		if (ServerMembers[i]["User"]["ID"] === Id) {
			if (ServerMembers[i]["Nick"] !== "") {
				msg = ServerMembers[i]["Nick"];
			} else {
				msg = ServerMembers[i]["User"]["Username"];
			};
		};
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