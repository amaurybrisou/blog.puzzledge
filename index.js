exports.register = function (plugin, options, next) {
  var path = process.env.puzzledge_blog = __dirname

  plugin.views({
    engines: {
      jade: require('jade')
    },
    path: path + '/views/'
  })

  plugin.bind({
    config: options
  })

  plugin.route(require('./routes'))

  next()
}

exports.register.attributes = {
  name: 'blog.puzzledge.eu',
  version: '0.0.1',
  pkg: require('./package.json')
}