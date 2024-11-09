const { Kafka } = require('kafkajs')



const kafka = new Kafka({
  clientId: 'nervana',
  brokers: ['localhost:9092'], 
});

module.exports = kafka;
