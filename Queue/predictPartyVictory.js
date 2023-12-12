const Queue = require("./queue.js");
/**
 * In the world of Dota2, there are two parties: the Radiant and the Dire.
 * The Dota2 senate consists of senators coming from two parties. Now the Senate wants to decide on a change in the Dota2 game.
 * The voting for this change is a round-based procedure. In each round, each senator can exercise one of the two rights:
 * Ban one senator's right: A senator can make another senator lose all his rights in this and all the following rounds.
 * Announce the victory: If this senator found the senators who still have rights to vote are all from the same party,
 * he can announce the victory and decide on the change in the game.
 * Given a string senate representing each senator's party belonging. The character 'R' and 'D' represent the Radiant party and the Dire party.
 * Then if there are n senators, the size of the given string will be n.
 * The round-based procedure starts from the first senator to the last senator in the given order. This procedure will last until the end of voting.
 * All the senators who have lost their rights will be skipped during the procedure.
 * Suppose every senator is smart enough and will play the best strategy for his own party.
 * Predict which party will finally announce the victory and change the Dota2 game. The output should be "Radiant" or "Dire".
 *
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  const votingQueue = [];
  let rBan = 0;
  let dBan = 0;

  let rCount = 0;
  let dCount = 0;

  for (let i = 0; i < senate.length; i++) {
    if (senate[i] == "R") {
      rCount++;
    } else {
      dCount++;
    }
    votingQueue.push(senate[i]);
  }

  while (votingQueue.length > 1 && rCount > 0 && dCount > 0) {
    let voter = votingQueue[0];
    if (voter == "D") {
      if (rBan == 0) {
        votingQueue.push(voter);
        dBan++;
      } else {
        rBan--;
        dCount--;
      }
    } else {
      if (voter == "R") {
        if (dBan == 0) {
          votingQueue.push(voter);
          rBan++;
        } else {
          dBan--;
          rCount++;
        }
      }
    }

    votingQueue.shift();
  }

  return votingQueue[0] == "R" ? "Radiant" : "Dire";
};

console.log(predictPartyVictory("RD")); //Radiant
console.log(predictPartyVictory("RDD")); //Dire
console.log(predictPartyVictory("RDDR")); //Radiant
console.log(predictPartyVictory("DRRDRDRDRDDRDRDR")); //Radiant
console.log(predictPartyVictory("DDRRR")); //Dire
