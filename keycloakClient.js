const KcAdminClient = require('keycloak-admin').default;

const kcAdminClient = new KcAdminClient();

kcAdminClient.setConfig({
    baseUrl: 'http://18.221.148.148:8080/auth',
    realmName: 'master'
});

module.exports = kcAdminClient;