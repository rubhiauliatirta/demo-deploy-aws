module.exports = {
  apps : [{
    name: 'HTTP API',
    script: 'demo-deploy-aws/bin/http.js',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      PRIVATE_KEY:'/etc/letsencrypt/live/demo.rubhiauliatirta.com/privkey.pem',
      CERTIFICATE:'/etc/letsencrypt/live/demo.rubhiauliatirta.com/cert.pem',
      CHAIN:'/etc/letsencrypt/live/yourdomain.com/chain.pem',
      PORT : 80,
      NODE_ENV: 'production'
    }
  }, {
    name: 'HTTPS API',
    script: 'demo-deploy-aws/bin/https.js',
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      PRIVATE_KEY:'/etc/letsencrypt/live/demo.rubhiauliatirta.com/privkey.pem',
      CERTIFICATE:'/etc/letsencrypt/live/demo.rubhiauliatirta.com/cert.pem',
      CHAIN:'/etc/letsencrypt/live/yourdomain.com/chain.pem',
      PORT : 443,
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};