module.exports = {
  apps: [{
    name: 'shop-cloudgm',
    script: './server/index.js',
    env: {
      NODE_ENV: 'development',
      PORT: 3300
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 3300
    },
    watch: true,
    ignore_watch: ['node_modules', 'logs'],
    instances: 1,
    exec_mode: 'fork',
    autorestart: true,
    max_memory_restart: '1G',
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    merge_logs: true,
    log_date_format: 'YYYY-MM-DD HH:mm:ss'
  }]
}