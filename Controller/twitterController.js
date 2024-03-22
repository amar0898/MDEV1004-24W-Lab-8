// twitterController.js
const TwitterModel = require("../Model/twitterModel");

class TwitterController {
  constructor() {
    this.twitterModel = new TwitterModel();
  }

  async createTweet(text) {
    try {
      const timestamp = new Date().getTime();
      const uniqueText = `${text} (${timestamp})`;
      await this.twitterModel.tweet(uniqueText);
      console.log(`tweet created - ${uniqueText}`)
      return "Tweet created successfully";
    }catch (error) {
      throw error;
    }
  }
}

module.exports = TwitterController;
