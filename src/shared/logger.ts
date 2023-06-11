import { createLogger, format, transports } from 'winston';
import path from 'path';
const { combine, timestamp, label, prettyPrint, printf } = format;
import DailyRotateFile from 'winston-daily-rotate-file';
//Custom log formate
const myFormat = printf(({ level, message, timestamp }) => {
  const date = new Date(timestamp);
  const hour = date.getHours();
  const minute = date.getMinutes();
  const seconds = date.getMinutes();

  return `${date.toString()}${hour}:${minute}:${seconds} ${level}: ${message}`;
});

const logger = createLogger({
  level: 'info',
  format: combine(label(), timestamp(), prettyPrint(), myFormat),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'successes',
        'phu-%DATE%-success.log'
      ),
      datePattern: 'YYYY-DD-MM-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
});

const errorLogger = createLogger({
  level: 'error',
  format: combine(label({}), timestamp(), prettyPrint(), myFormat),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'errors',
        'phu-%DATE%-error.log'
      ),
      datePattern: 'YYYY-DD-MM-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
});

export { logger, errorLogger };
