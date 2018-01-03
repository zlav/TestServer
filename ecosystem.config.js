module.exports = {
  apps: [{
    name: 'Server Git Connected',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'zach',
      host: 'ec2-18-220-88-186.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/zRebelEC2',
      ref: 'origin/master',
      repo: 'git@github.com:zlav/TestServer',
      path: '/home/zach/TestServer',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
