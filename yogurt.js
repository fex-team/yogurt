var fis = module.exports = require('fis');

// 让 jello 打头的先加载。
fis.require.prefixes.unshift('yogurt');

fis.cli.name = 'yogurt';
fis.cli.info = fis.util.readJSON(__dirname + '/package.json');

fis.config.merge({
    statics: '/public',

    server: {
        clean: {
            exclude: "controllers/*,config/config.json,config/development.json,locales/*,models/*,server.js"
        }
    },

    modules: {

        parser: {
            less: 'less',
            sass: 'sass',
            scss: 'sass',
            tmpl: 'bdtmpl',
            po: 'po'
        },

        preprocessor: {
            tpl: 'extlang'
        },

        postprocessor: {
            tpl: 'require-async',
            js: 'jswrapper, require-async'
        }
    },

    roadmap: {
        ext: {
            less: 'css',
            sass: 'css',
            scss: 'css',
            tmpl: 'js',
            po: 'json'
        },

        path: [

            {
                reg: /^\/widget\/(.*\.tpl)$/i,
                isMod: true,
                url: '${namespace}/widget/$1',
                release: '/views/${namespace}/widget/$1'
            },

            {
                reg: /^\/widget\/(.*\.(js|css))$/i,
                isMod: true,
                url: '/${namespace}/widget/$1',
                release: '${statics}/${namespace}/widget/$1'
            },

            {
                reg: /^\/page\/(.+\.tpl)$/i,
                isMod: true,
                release: '/views/${namespace}/$1',
                url: '${namespace}/$1',
                extras: {
                    isPage: true
                }
            },

            {
                reg: /^\/(static)\/(.*)/i,
                url: '/${namespace}/$2',
                release: '${statics}/${namespace}/$2'
            },

            {
                reg: /^\/(test)\/(.*)/i,
                isMod: false,
                release: '/$1/${namespace}/$2'
            },

            {
                reg: 'server.conf',
                release: '/config/server.conf'
            },

            {
                reg: "build.sh",
                release: false
            },

            {
                reg: '${namespace}-map.json',
                release: '/config/${namespace}-map.json'
            },

            {
                reg: /^.+$/,
                url: '/${namespace}$&',
                release: '${statics}/${namespace}$&'
            }
        ]
    },

    settings: {
        postprocessor: {
            jswrapper: {
                type: 'amd'
            }
        }
    }
});