var msg = "";

function newGame() {
    if (Battleships.newGame === false) {
        Battleships.newGame = true;
        Battleships.newGameQ = RawUserID;
        msg = "<@" + RawUserID + ">, do you want to start a game of Battleships?\n(Answer within 1 minute or question will expire)\n{delme:1m}\n{ars:answerSniffer}";
        return msg;
    } else {
        msg = "Sorry, somebody else is already considiring to start a game.\n{delme:15s}";
        return msg;
    }
}

function newGameAnswer(Answer) {
    if (Battleships.hasOwnProperty("newGameQ")) {
        if (Battleships.newGameQ === RawUserID) {
            if (Answer) {
                makeData(1);
                msg = RawUsername + " you have succesfully started a game of Battleships!";
                delete Battleships.newGameQ;
                Battleships.newGame = false;
            } else if (!Answer) {
                msg = RawUsername + " you have not started a new game.";
                delete Battleships.newGameQ;
                Battleships.newGame = false;
            }
        } else {
            msg = "{del}";
        }
    } else {
        msg = "{del}";
    }
    return msg;
}

function makeData(Player) {
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
}
    if (Player === 1) {
    }
}
