Package.describe({
	name: 'genroa:nb-ct-text',
	version: '0.0.1',
	// Brief, one-line summary of the package.
	summary: 'Formated Text content type package for Nebula Builder',
	// URL to the Git repository containing the source code for this package.
	git: '',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: null
});

Package.onUse(function(api) {
	api.versionsFrom('1.4.3.1');
	api.use('ecmascript');
	api.use('jagi:astronomy');
	api.use('blaze-html-templates');
	api.use('genroa:nb-ct-base');

	api.add_files("classes.js");
	api.export('TextContent');

	api.add_files("text_content_template.html");
	api.add_files("text_content_template.js");

	api.mainModule('nb-ct-text.js');
});

Package.onTest(function(api) {
	api.use('ecmascript');
	api.use('tinytest');
	api.use('genroa:nb-ct-text');
	api.mainModule('nb-ct-text-tests.js');
});