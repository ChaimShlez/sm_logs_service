const serviceDb = require("./serviceDb");
const Hashes = require("jshashes");
const SHA256 = new Hashes.SHA256();






 
  async function getActivities(userId) {
    let activities = await serviceDb.getActivities(userId);
  
    return activities;
  }
  
  async function createUserLog(userLog) {
    let log = await serviceDb.createUserLog(userLog);
  
    return log;
  }
  
  module.exports = {
    createUserLog,
    getActivities,
  };