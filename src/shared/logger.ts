import winston from 'winston'

const logger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //We can control log level
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'info' }),
    new winston.transports.File({ filename: 'combined.log', level: 'error' }),
  ],
})

export default logger
