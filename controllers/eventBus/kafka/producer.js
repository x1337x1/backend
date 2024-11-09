// services/kafkaProducer.js
const kafka = require('./index');
let producer;

async function initProducer() {
  if (!producer) {
    producer = kafka.producer();
    await producer.connect();
    console.log('Kafka Producer connected');
  }
}

async function sendKafkaMessage(topic, event, message) {
  await initProducer(); 
  try {
    const formattedMessage = {
      event: event,
      data: message,
    };

    await producer.send({
      topic,
      messages: [{ value: JSON.stringify(formattedMessage) }],
    });
    console.log(`Message sent to ${topic}`);
  } catch (error) {
    console.error('Error in sending message:', error);
  }
}


module.exports = { sendKafkaMessage, initProducer };
