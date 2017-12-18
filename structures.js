var newUser = {
    "Name": "",
    "Level": 1,
    "Cash": 1000,
    "Vault": 0,
    "Exp": 0,
    "totalExp": 0,
    "Games": {
        "TriviaTown": {
            "CorrectAnswers": 0,
            "WrongAnswers": 0,
            "WinStreak": 0,
            "BestStreak": 0
        },
        "Battleships": {
            "Wins": 0,
            "Lost": 0,
            "AveragePlaytime": [],
            "TotalCashBet": 0
        }
    },
    "Cooldowns": {
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
        "Vault": 0
    },
    "TotalPlayers": 0,
    "TotalGamesPlayed": 0,
    "DifferentGames": 0
}
    
var gameMasters = ["167717172343209984", "146046383726657536", "181536513631191050", "281115734023733249"];
