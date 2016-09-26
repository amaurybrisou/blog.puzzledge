var controllers = require('../controllers'),
  path = process.env.puzzledge_blog
  /**
   * Hapi Routes : http://hapijs.com/api#serverrouteoptions
   * @type {Array}
   */
routes = [{
  method: '*',
  path: '/{p*}',
  handler: controllers.notFound
}, {
  path: "/stylesheets/images/{path?}",
  method: "GET",
  handler: {
    directory: {
      path: path + "/public/stylesheets/images",
      listing: false,
      index: false
    }
  }
}, {
  path: "/font/{path?}",
  method: "GET",
  handler: {
    directory: {
      path: path + "/public/font/Office-Code-Pro/Fonts/OfficeCodePro/WOFF/",
      listing: false,
      index: false
    }
  }
}, {
  path: "/stylesheets/{path?}",
  method: "GET",
  handler: {
    directory: {
      path: path + "/public/stylesheets/",
      listing: false,
      index: false
    }
  }
}, {
  path: "/images/{path*}",
  method: "GET",
  handler: {
    directory: {
      path: path + "/public/images/",
      listing: false,
      index: false
    }
  }
}, {
  path: "/javascripts/{path*}",
  method: "GET",
  handler: {
    directory: {
      path: path + "/public/javascripts/",
      listing: false,
      index: false
    }
  }
}, {
  path: "/files/{path*}",
  method: "GET",
  handler: {
    directory: {
      path: path + "/public/files/",
      listing: true,
      index: false
    }
  }
}, {
  path: '/',
  method: 'GET',
  handler: controllers.index,
}, {
  path: '/words/random',
  method: 'GET',
  handler: controllers.getWord,
}, {
  path: "/blog",
  method: "GET",
  handler: controllers.index
}, {
  path: "/rss",
  method: "GET",
  handler: controllers.rss
}, {
  path: "/page/{page}",
  method: "GET",
  handler: controllers.page
}, {
  path: "/blog/{year}/{month}/{day}",
  method: "GET",
  handler: controllers.archive
}, {
  path: "/blog/{year}/{month}/{day}/{article}",
  method: "GET",
  handler: controllers.article

}, {
  path: "/twits",
  method: "GET",
  handler: controllers.twits
}];

module.exports = routes;