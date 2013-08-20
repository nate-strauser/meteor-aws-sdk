Package.describe({
    summary: "aws-sdk npm packaged for meteor."
});

Package.on_use(function (api) {
    api.add_files([
        'lib/aws-sdk.js'
    ], 'server'
    );
    if (typeof api.export !== 'undefined') {
		api.export("AWS", "server");
	}
});
Npm.depends({'aws-sdk':"1.5.0"});