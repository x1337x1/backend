const winston = require('winston');
require('winston-daily-rotate-file');
const fs = require('fs');
const path = require('path');
const { combine, timestamp, json, errors, printf } = winston.format;


const logDirectory = path.join(__dirname, 'logs');
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}



  /**
   *  System logs with log rotation
   */
const systemfileRotateTransport = new winston.transports.DailyRotateFile({
    filename: path.join(logDirectory, 'combined-%DATE%.log'), // Save to logs folder
    datePattern: 'YYYY-MM-DD',
    maxFiles: '14d',
  });
  
  const watchTower = winston.createLogger({
    levels: winston.config.syslog.levels,
    level: process.env.LOG_LEVEL || 'info',
    format: combine(timestamp(), json()),
    transports: [systemfileRotateTransport],
  });




  
  /**
   *  Logging errors in Winston
   */
  const errCustomConsoleFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} [${level}]: ${message} ${stack || ''}`;
  });
  const errorFileRotateTransport = new winston.transports.DailyRotateFile({
    filename: path.join(logDirectory, 'panic-%DATE%.log'), // Log filename
    datePattern: 'YYYY-MM-DD',
    maxFiles: '14d', // Keep logs for 14 days
  });
  const panicLogger = winston.createLogger({
    level: 'info',
    format: combine(
      errors({ stack: true }), // Include error stack traces
      timestamp(), // Add timestamp
      // Use JSON format for file logs
      json() // Use json format for file logging
    ),
    transports: [
      new winston.transports.Console({ format: errCustomConsoleFormat }), // Console transport with custom format
      errorFileRotateTransport, // File transport
    ],
  });





  
  /**
   *  Handling uncaught exceptions and uncaught promise rejections
   */
  const fallBackLogger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: winston.format.json(),
    transports: [new winston.transports.Console()],
    exceptionHandlers: [
      new winston.transports.File({ filename: path.join(logDirectory, 'exception.log') }), // Save exception log in logs folder
    ],
    rejectionHandlers: [
      new winston.transports.File({ filename: path.join(logDirectory, 'rejections.log') }), // Save rejections log in logs folder
    ],
  });
  
  module.exports = {
    watchTower,
    panicLogger,
    fallBackLogger,
  };