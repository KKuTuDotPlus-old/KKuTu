const config = require('../../sub/auth.json');

module.exports.config = {
    strategy: require('passport-amazon').Strategy, // example: amazon, require strategy
    color: '#000000', // example: #1EC800
    fontColor: '#FFFFFF', //example: #FFFFFF
    vendor: 'amazon', // example: amazon
    displayName: 'amazon'
}

module.exports.strategyConfig = { // example: amazon
    clientID: config.amazon.clientID, // 보안을 위해서입니다.
    clientSecret: config.amazon.clientSecret, // 이 방법을 사용하는 것을
    callbackURL: config.amazon.callbackURL, // 적극 권장합니다.
    passReqToCallback: true /*,
    profileFields: ['id' ,'name' , 'gender', 'age_range', 'displayName'], -> require facebook
    scope: ['profile', 'email', 'https://www.googleapis.com/auth/plus.login'], -> require google */
}

module.exports.strategy = (process, MainDB, Ajae) => {
    return (req, accessToken, refreshToken, profile, done) => {
        const $p = {};

        $p.authType = "amazon";
        $p.id = profile.id;
        $p.name = profile.displayName;
        $p.title = profile.displayName;
        $p.image = profile._json.profile_image;
        
        /* 망할 셧다운제
        $p._age = profile._json.age.split('-').map(Number);
        $p._age = { min: ($p._age[0] || 0) - 1, max: $p._age[1] - 1 };
        $p.birth = profile._json.birthday.split('-').map(Number);
        if(MONTH < $p.birth[0] || (MONTH == $p.birth[0] && DATE < $p.birth[1])){
            $p._age.min--;
            $p._age.max--;
        }
        $p.isAjae = Ajae($p.birth, $p._age);
        */
        // $p.sex = profile[0].gender[0];

        process(req, accessToken, MainDB, $p, done);
    } // example amazon
}