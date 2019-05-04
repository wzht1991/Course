const { createLogger, format, transports } = require('winston');
const path = require('path');
const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.colorize(),
    format.label({ label: path.basename(module.parent.filename) }),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(
      info => `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`
    )
  ),
  transports: [new transports.Console()]
});

module.exports = logger;