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

// "Stringifies" or "Parses" any char that could mean something in a RegExp string.
// Params.regexConvert("String");
// Params.regexConvert("Parse");
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

//All prototypes Echo's package used for JS does not have.
if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    "use strict";
    if (typeof start !== "number") {
      start = 0;
    }
    
    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}

if (!String.prototype.endsWith) {
	String.prototype.endsWith = function(search, this_len) {
		if (this_len === undefined || this_len > this.length) {
			this_len = this.length;
		}
        return this.substring(this_len - search.length, this_len) === search;
	};
}

if (!String.prototype.startsWith) {
	String.prototype.startsWith = function(search, pos) {
		return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
	};
}

if (!String.prototype.repeat) {
  String.prototype.repeat = function(count) {
    "use strict";
    if (this == null) {
      throw new TypeError("can\"t convert " + this + " to object");
    }
    var str = "" + this;
    count = +count;
    if (count != count) {
      count = 0;
    }
    if (count < 0) {
      throw new RangeError("repeat count must be non-negative");
    }
    if (count == Infinity) {
      throw new RangeError("repeat count must be less than infinity");
    }
    count = Math.floor(count);
    if (str.length == 0 || count == 0) {
      return "";
    }
    // Ensuring count is a 31-bit integer allows us to heavily optimize the
    // main part. But anyway, most current (August 2014) browsers can"t handle
    // strings 1 << 28 chars or longer, so:
    if (str.length * count >= 1 << 28) {
      throw new RangeError("repeat count must not overflow maximum string size");
    }
    var rpt = "";
    for (var i = 0; i < count; i++) {
      rpt += str;
    }
    return rpt;
  }
}

// Following prototypes are used for markdown in Discord™.

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
