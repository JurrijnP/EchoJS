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

function prs(Input) {
  return JSON.parse(Input);
};

function str(Input) {
	return JSON.stringify(Input);
};

String.prototype.regexConvert = function(Type) {
    var rep = this;
    if (Type.toLowerCase() === "string") {
        rep = rep.replace(/(\[)/g, "\\\[");
        rep = rep.replace(/(\])/g, "\\\]");
        rep = rep.replace(/(\{)/g, "\\\{");
        rep = rep.replace(/(\})/g, "\\\}");
        rep = rep.replace(/(\.)/g, "\\\.");
        rep = rep.replace(/(\*)/g, "\\\*");
        rep = rep.replace(/(\+)/g, "\\\+");
        rep = rep.replace(/(\?)/g, "\\\?");
        rep = rep.replace(/(\/)/g, "\\\/");
    } else if (Type.toLowerCase() === "parse") {
        rep = rep.replace(/(\\\[)/g, "\[");
        rep = rep.replace(/(\\\])/g, "\]");
        rep = rep.replace(/(\\\{)/g, "\{");
        rep = rep.replace(/(\\\})/g, "\}");
        rep = rep.replace(/(\\\.)/g, "\.");
        rep = rep.replace(/(\\\*)/g, "\*");
        rep = rep.replace(/(\\\+)/g, "\+");
        rep = rep.replace(/(\\\?)/g, "\?");
        rep = rep.replace(/(\\\/)/g, "\/");
    }
    return rep;
}

String.prototype.noSpace = function() {
    return this.replace(/\s/g, "");
}

String.prototype.includes = function(Has, Start) {
    if (Object.keys(arguments).length === 1) {
        return RegExp(Has.regexConvert("String"), "g").test(this);
    } else if (Object.keys(arguments).length === 2) {
        if (typeof arguments["1"] === "number") {
            return RegExp(Has.regexConvert("String"), "g").test(this.substr(Start, this.length));
        } else {
            return "TypeError";
        }
    }
}

String.prototype.bold = function() {
    return ("**" + this + "**")
}

String.prototype.italic = function() {
    return ("*" + this + "*")
}

String.prototype.underline = function() {
    return ("__" + this + "__")
}

String.prototype.strikethrough = function() {
    return ("~~" + this + "~~")
}

String.prototype.smallCodeblock = function() {
    return ("`" + this + "`")
}

String.prototype.bigCodeblock = function(Language) {
    if (Object.keys(arguments).length === 1) {
        return ("```" + Language + "\n" + this + "```");
    } else {
        return ("```\n" + this + "```");
    }
}