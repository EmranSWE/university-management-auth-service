import { createLogger, format, transports } from 'winston'
import path from 'path'
const { combine, timestamp, label, prettyPrint, printf } = format

//Custom log formate
const myFormat = printf(({ level, message, timestamp }) => {
  const date = new Date(timestamp)
  const hour = date.getHours()
  const minute = date.getMinutes()
  const seconds = date.getMinutes()

  return `${date.toString()}${hour}:${minute}:${seconds} ${level}: ${message}`
})

const logger = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'right meow!' }),
    timestamp(),
    prettyPrint(),
    myFormat
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(process.cwd(), 'logs', 'winston', 'success.log'),
      level: 'info',
    }),
  ],
})

const errorLogger = createLogger({
  level: 'error',
  format: combine(
    label({ label: 'right meow!' }),
    timestamp(),
    prettyPrint(),
    myFormat
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(process.cwd(), 'logs', 'winston', 'error.log'),
      level: 'error',
    }),
  ],
})

export { logger, errorLogger }

// logs/winstone/
// success.log
// error.log
