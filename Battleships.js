var msg = "";

// Only use this function if the Battleships database is empty.
function defaultDatabase() {
    var og = {
        New: false,
        Started: false
    };
    Battleships.Game = str(og);
    Battleships.Invite = str({});
    var ob = {
        P1: 0,
        P2: 0
    };
    Battleships.Bets = str(ob);
    msg = "Default values have been set.";
    return msg;
}

function newGame() {
    if (prs(Battleships.Game).New === false) {
        var gObj = prs(Battleships.Game);
        gObj.NewQ = RawUserID;
        msg = "<@" + RawUserID + ">, do you want to start a game of Battleships?\n(Answer within 1 minute or question will expire)\n{delme:1m}\n{ars:answerSniffer}";
        return msg;
    } else if ((prs(Battleships.Game).New === false) && ((prs(Battleships.Game).Started === false)) && (prs(Battleships.Game).hasOwnProperty("NewQ"))) { 
        msg = "Sorry, somebody else is already considiring to start a game.\n{delme:15s}";
    }
}

function newGameAnswer(Answer) {
    if (prs(Battleships.Game).hasOwnProperty("NewQ")) {
        if (prs(Battleships.Game).NewQ === RawUserID) {
            if (Answer) {
                makeData(1);
                msg = RawUsername + " you have succesfully started a game of Battleships!\n{ars:setPermissionsP1_1}";
                var gObj = prs(Battleships.Game);
                delete gObj.NewQ;
                gObj.New = true;
                Battleships.Game = str(gObj);
            } else if (!Answer) {
                msg = RawUsername + " you have not started a new game.";
                var gObj = prs(Battleships.Game);
                delete gObj.NewQ;
                Battleships.Game = str(gObj);
            }
        } else {
            msg = "{del}";
        }
    } else {
        msg = "{del}";
    }
    return msg;
}

function makeData(p) {
    var Player = {
        "User": {
            "ID": "",
            "Name": ""
        },
        "Map": {
            "A": [
                "",
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                }
            ],
            "B": [
                "",
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                }
            ],
            "C": [
                "",
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                }
            ],
            "D": [
                "",
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                }
            ],
            "E": [
                "",
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                }
            ],
            "F": [
                "",
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                }
            ],
            "G": [
                "",
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                }
            ],
            "H": [
                "",
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                }
            ],
            "I": [
                "",
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                }
            ],
            "J": [
                "",
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                },
                {
                    "Placed": {},
                    "Guessed": {}
                }
            ]
        }
    };
    if (p === 1) {
        Player.User.ID = RawUserID;
        Player.User.Name = RawUsername;
        Battleships.P1 = JSON.stringify(Player);
    } else if (p === 2) {
        Player.User.ID = Battleships.Invited.ID;
        Player.User.Name = Battleships.Invited.Name;
        Battleships.P2 = JSON.stringify(Player);
    }
}

function Invite() {
    if (RawUserID === UserID) {
        msg = "Sorry but you can't play on your own.";
        return msg;
    } else if (MiniGameUsers.hasOwnProperty(UserID)) {
        var rnd = Math.floor(Math.random() * 8999) + 1000;
        var Invite = {
            "ID": UserID,
            "Code": rnd
        };
        Battleships = str(Invite);
        msg = "{redirect:390586644991967242}<@" + UserID + ">, " + GetUsername(prs(Battleships.P1).User.ID) + "has invited you to play Battleships!\nType `b?invite accept " + rnd + "` or `b?invite cancel` in <#390563316520452096> to answer.\n{msg:I have invited <@" + UserID + ">! (The invite will expire after 1 minute.)}\
{channelperms:\
    {direct:" + UserID + "}\
    {channel:390563316520452096}\
    {permissions:\
        {allow:read_messages,send_messages}\
        {deny:create_instant_invite}\
    }\
}\
{ars:inviteSniffer}";
    } else {
        msg = "I couldn't find <@" + UserID + "> in the database.\nMake sure the person you are trying to invite has registered in <#390586644991967242> by typing `g?signup.`";
        return msg;
    }
};
