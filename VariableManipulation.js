function sortObject(o) {
    var sorted = {},
    key, a = [];

    for (key in o) {
        if (o.hasOwnProperty(key)) {
            a.push(key);
        }
    }

    a.sort();

    for (key = 0; key < a.length; key++) {
        sorted[a[key]] = o[a[key]];
    }
    return sorted;
}

function str(Input) {
	return JSON.stringify(Input);
};

function estr(Input) {
	var special = Input.replace(/(\[)/g, "\\\[");
	special = special.replace(/(\])/g, "\\\]");
	special = special.replace(/(\{)/g, "\\\{");
	special = special.replace(/(\})/g, "\\\}");
	special = special.replace(/(\.)/g, "\\\.");
	special = special.replace(/(\*)/g, "\\\*");
	special = special.replace(/(\+)/g, "\\\+");
	special = special.replace(/(\?)/g, "\\\?");
	special = special.replace(/(\/)/g, "\\\/");
	return special;
};

function prs(Input) {
  return JSON.parse(Input);
};

function word(Input) {
	var newword = ""
	if (typeof Input === "boolean") {
		if (Input === false) {
			newword = "False";
		} else if (Input === true) {
			newword = "True";
		} 
	}
	return newword;
};