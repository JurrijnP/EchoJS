var newUser = {
    "Name": RawUsername,
    "Level": 1,
    "Cash": 1000,
    "Exp": 0,
    "totalExp": 0,
    "Games": {},
    "Cooldowns": {
        "Battleships": {},
        "Heist": {
            "PreviousPayDay": 0,
            "PreviousVault": 0
        }
    },
    "Bonuses": {
        "BattleShips": [],
        "Heist": []
    }
};

var gameStats = {
    "Played": 0,
    "MoneyBet": 0,
    "AveragePlaytime": 0,
    "TotalDiffPlayers": 0
};

var GlobalStats = {
    "TotalMoney": {
        "Cash": 0,
        "Bank": 0
    },
    "TotalPlayers": 0,
    "TotalGamesPlayed": 0,
    "DifferentGames": 0
}
    
