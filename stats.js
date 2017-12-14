var msg = "";
function globalStats() {
    if (Params.length === 0) {
        msg = "Use `.globalStats help`.";
    } else if (Params.toLowerCase() === "help") {
        msg = "__**Possible commands for** `.gameStats <Sub command>`**:**__\n```\n- help     | Show all possible subcommands.\n- reset    | Resets global stats, Echo will ask for confirmation if global stats are present.\n- view     | Show the global stats.\n- create   | Creates global stats.\n- updatedb | Adds new sub-variables if found.\n- refresh  | Refreshes stats.```";
    } else if (Params.toLowerCase() === "reset") {
        if (Stats.hasOwnProperty("Global")) {
            var ct = 0;
            var tObj = prs(Stats.Global);
            for (i = 0; i < Object.keys(tObj).length; i++) {
                if (Object.keys(tObj)[i] === "TotalMoney") {
                    if (tObj.TotalMoney.Cash !== 0) {
                        ct++;
                    } else if (tObj.TotalMoney.Bank !== 0) { 
                        ct++
                    } else {
                        continue;
                    }
                } else {
                    if (tObj[Object.keys(tObj)[i]] !== 0) {
                        ct++;
                    } else {
                        continue;
                    }
                }
            }
            if (ct > 0) {
                msg = "Are you sure you want to reset global stats?\n(Type `.globalStats confirm` or `.globalStats cancel`)\n{ars:grSniffer}";
                Stats.GlobalReset = RawUserID;
            } else if (ct === 0) {
                msg = "Global stats are already on default values, no further action.";
            }
        } else {
            msg = "`Stats` database did not contain global stats, they have been created now.";
            Stats.Global = str(GlobalStats);
        }
    } else if (Params.toLowerCase() === "confirm") {
        if (Stats.hasOwnProperty("GlobalReset")) {
            if (RawUserID === Stats.GlobalReset) {
                msg = "Global stats have been reset.";
                delete Stats.GlobalReset;
                Stats.Global = str(GlobalStats);
            }
        } else {
            msg = "{del}";
        }
    } else if (Params.toLowerCase() === "cancel") {
        if (Stats.hasOwnProperty("GlobalReset")) {
            if (RawUserID === Stats.GlobalReset) {
                msg = "Global stats have **not** been reset.";
                delete Stats.GlobalReset;
            }
        } else {
            msg = "{del}";
        }
    } else if (Params.toLowerCase() === "create") {
        if (Stats.hasOwnProperty("Global")) {
            msg = "Global stats already exist.";
        } else {
            msg = "Global stats have been created.";
            Stats.Global = str(GlobalStats);
        }
    } else if (Params.toLowerCase() === "refresh") {
        RefreshGlobal();
        msg = "Global stats have been refreshed.";
    } else if (Params.toLowerCase() === "update") {
        if (Stats.hasOwnProperty("Global")) {
            var Cobj = prs(Stats.Global);
            var ct = 0;
            for (var i = 0; i < Object.keys(GlobalStats); i++) {
                if (Cobj.hasOwnProperty(Object.keys(GlobalStats)[i])) {
                    continue;
                } else {
                    Cobj[Object.keys(GlobalStats)[i]] = GlobalStats[Object.keys(GlobalStats)[i]];
                    ct++;
                }
            }
            if (ct === 0) {
                msg = "Global stats were already up to date.";
            } else {
                msg = ct + " new sub-variables found. Global stats are up to date now.";
            }
        } else {
            msg = "`Stats` database did not contain global stats, they have been created now and therefore updated as well.";
            Stats.Global = str(GlobalStats);
        }
    }
    return msg;
}

function RefreshGlobal() {
    var temp = GlobalStats;
    
    // Total Money
    for (i = 0; i < Object.keys(MiniGameUsers).length; i++) {
        temp.TotalMoney.Cash += prs(MiniGameUsers[Object.keys(MiniGameUsers)[i]]).Cash;
        temp.TotalMoney.Bank += prs(MiniGameUsers[Object.keys(MiniGameUsers)[i]]).Bank;
    }
    temp.TotalPlayers = Object.keys(MiniGameUsers).length;
    Stats.Global = str(temp);
}
