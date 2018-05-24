const { arch, platform, release, tmpdir } = require("os");
const { RequestAPI, UriOptions, UrlOptions } = require("request");
const req = require("request-promise-native");

class GitHubCiClient {
  constructor(githubRepo, githubTokenOfCI) {
    this.githubRepo = githubRepo;
    this.request = req.defaults({
      headers: {
        "User-Agent": "AutoRest CI",
        "Authorization": "token " + githubTokenOfCI
      }
    });
  }

  async getComments(pr) {
    const res = await this.request.get(`https://api.github.com/repos/${this.githubRepo}/issues/${pr}/comments`);
    const comments = JSON.parse(res);
    return comments.map(x => { return { id: x.id, message: x.body, user: x.user.login, url: x.html_url }; });
  }

  async getCommentsWithIndicator(pr, indicator) {
    return (await this.getComments(pr)).filter(comment => comment.message.startsWith(indicator));
  }

  async setComment(id, message) {
    await this.request.post(`https://api.github.com/repos/${this.githubRepo}/issues/comments/${id}`, { body: JSON.stringify({ body: message }) });
  }

  async deleteComment(id) {
    await this.request.delete(`https://api.github.com/repos/${this.githubRepo}/issues/comments/${id}`);
  }

  async tryDeleteComment(id) {
    try { await this.deleteComment(id); } catch (_) { }
  }

  async createComment(pr, message) {
    const res = await this.request.post(`https://api.github.com/repos/${this.githubRepo}/issues/${pr}/comments`, { body: JSON.stringify({ body: message }) });
    return JSON.parse(res).id;
  }

  async getPR(pr) {
    const res = await this.request.get(`https://api.github.com/repos/${this.githubRepo}/pulls/${pr}`);
    return JSON.parse(res);
  }
 }

module.exports = { GitHubCiClient }