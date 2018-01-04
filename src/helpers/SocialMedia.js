function SocialMedia () { }

SocialMedia.prototype.loadTwitterScript = function () {
  window.twttr = (function (d, s, id) {
    var js
    var fjs = d.getElementsByTagName(s)[0]
    var t = window.twttr || {}

    if (d.getElementById(id)) return t
    js = d.createElement(s)
    js.id = id
    js.src = 'https://platform.twitter.com/widgets.js'
    fjs.parentNode.insertBefore(js, fjs)
    t._e = []
    t.ready = function (f) {
      t._e.push(f)
    }

    return t
  }(document, 'script', 'twitter-wjs'))
}

SocialMedia.prototype.updateTwitterContent = function () {
  window.twttr.widgets.load()
}

SocialMedia.prototype.loadFacebookScript = function () {
  (function (d, s, id) {
    var js
    var fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) return
    js = d.createElement(s)
    js.id = id
    js.src = '//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.4&appId=xxx'
    fjs.parentNode.insertBefore(js, fjs)
  }(document, 'script', 'facebook-jssdk'))
}

SocialMedia.prototype.updateFacebookContent = function () {
  // eslint-disable-next-line
  FB.XFBML.parse()
}

SocialMedia.prototype.loadAll = function () {
  this.loadTwitterScript()
  this.loadFacebookScript()
}

SocialMedia.prototype.updateAll = function () {
  this.updateTwitterContent()
  this.updateFacebookContent()
}

module.exports = new SocialMedia()
