const KcAdminClient = require('keycloak-admin').default;

const kcAdminClient = new KcAdminClient();

kcAdminClient.setConfig({
    baseUrl: 'http://3.15.140.59:8080/auth',
    realmName: 'master'
});

module.exports = kcAdminClient;