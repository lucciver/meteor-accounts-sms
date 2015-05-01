Package.describe({
  name: 'dispatch:accounts-sms',
  version: '0.0.1-wip',
  summary: 'Allow users to login with their phone number.',
  git: 'https://github.com/DispatchMe/meteor-accounts-sms.git'
});

Npm.depends({
  twilio: '1.11.1'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');

  api.use([
    'random',
    'jperl:match-ex@1.0.0',
    'mongo'
  ], 'server');

  api.use([
    'accounts-base',
    'check',
    'dispatch:twilio',
    'dispatch:phoneformat.js'
  ], ['client', 'server']);

  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);

  api.addFiles('sms.js', ['client', 'server']);

  api.addFiles('sms_server.js', 'server');
  api.addFiles('sms_client.js', 'client');
});
