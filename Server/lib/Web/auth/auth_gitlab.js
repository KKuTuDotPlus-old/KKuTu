const config = require('../../sub/auth.json');

module.exports.config = {
    strategy: require('passport-gitlab').Strategy,
    color: '#00D3C5',
    fontColor: '#FFFFFF',
    vendor: 'gitlab',
    displayName: 'withgitlab'
}

module.exports.strategyConfig = {
    clientID: config.gitlab.clientID,
    clientSecret: config.gitlab.clientSecret,
    callbackURL: config.gitlab.callbackURL,
    passReqToCallback: true,
    scope: "identify"
}

module.exports.strategy = (process, MainDB, Ajae) => {
    return (req, accessToken, refreshToken, profile, done) => {
        const $p = {};

        // var fullname = profile.username+"#"+profile.discriminator;

        $p.authType = "gitlab";
        $p.id = $p.authType+"-"+profile.id;
        $p.name = profile.username;
        $p.title = profile.username;
        $p.image = profile.avatar;

        process(req, accessToken, MainDB, $p, done);
    }
}