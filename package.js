Package.describe({
    summary: "aws-sdk npm packaged for meteor."
});

Package.on_use(function (api) {
    //api.use('jquery', 'client');
    api.add_files([
        'lib/aws-sdk.js'
    ], 'server'
    );

});
Npm.depends({'aws-sdk':"1.3.1"});