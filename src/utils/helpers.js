/**
 * Resets and formats the account URL
 * @param {string} accountUrl full account URL or username
 * @returns {string} Formatted URL
 */
function formatAccountUrl(accountUrl) {
  if (!accountUrl) return "";

  let formattedAccountUrl = accountUrl.trim();

  // if starts with @, remove @
  if (formattedAccountUrl.startsWith("@")) {
    formattedAccountUrl = formattedAccountUrl.substring(1);
  }

  // If it doesn't start with https://, convert it to an X.com URL
  if (!formattedAccountUrl.startsWith("https://")) {
    formattedAccountUrl = `https://x.com/${formattedAccountUrl.replace(
      "https://x.com/",
      ""
    )}`;
  }

  return formattedAccountUrl;
}

/**
 * Show console log for tweet inspection
 * @param {object} tweet Tweet object
 */
function logTweetDetails(tweet) {
  console.log("Tweet detayları:", {
    url: tweet.url,
    isPinned: tweet.isPinned,
    date: tweet.date,
    time: tweet.time,
  });
}

module.exports = {
  formatAccountUrl,
  logTweetDetails,
};
