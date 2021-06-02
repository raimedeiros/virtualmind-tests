var PlayerService = {
  getPlayerTeamId(playerId) {
    return new Promise(function(resolve,reject){
      $.ajax({
        url: "/player/" + playerId + "/team",
        success: function (team) {
          resolve(team.id)
        },
        error: function (error) {
          reject(error)
        },
      });
    });
  },
  getPlayers(teamId) {
    return new Promise(function(resolve, reject){
      $.ajax({
        url: "/team/" + teamId + "/player",
        success: function(data){
          resolve(data)
        },
        error: function (error) {
          reject(error)
        },
      });
    })
  }
};

var PlayerDetailsController = {
  playerId: 8,
  showTeammatesClick: async function () {
    const PlayerTeamId = await PlayerService.getPlayerTeamId(this.playerId);
    const Players = await PlayerService.getPlayers(PlayerTeamId);
    // Render playerList
  }
};