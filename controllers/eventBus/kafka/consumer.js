// services/kafkaConsumer.js
const kafka = require('./index');
let consumer;

async function initConsumer() {
  if (!consumer) {
    consumer = kafka.consumer({ groupId: 'nervana' });
    await consumer.connect();
    console.log('Kafka Consumer connected');
    const topics = ['dispatch_panda']
    
    await consumer.subscribe({ topics: topics });
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        const msg = JSON.parse(message.value.toString());
        console.log(`Received message on topic ${topic}:`, msg);
        // Process the message as needed
      },
    });
  }
}

module.exports = { initConsumer };
