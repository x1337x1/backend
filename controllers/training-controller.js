const db = require("../models");
const { } = require('./utils/training');
const { sendKafkaMessage } = require('./eventBus/kafka/producer')

const topic = 'process_koala'

const trainingController = {

	async FileTraining(req, res) {
		try {


		} catch (error) {

		}
	},

	async inputTraining(req, res) {
		try {
			const koala_event_input = 'koala_training_input'
			await sendKafkaMessage(topic, koala_event_input, req.body)
			const data = {
				message: 'Training input successfully sent',
				data: req.body,
			}
			res.status(200).send(data);
		} catch (e) {
			console.error('@@ inputTraining @@ error:', e)
		}
	},

	async urlTraining(req, res) {
		try {
			const koala_event_url = 'koala_training_url'
			await sendKafkaMessage(topic, koala_event_url, req.body)
			const data = {
				message: 'Training input successfully sent',
				data: req.body,
			}
			res.status(200).send(data);
		} catch (e) {
			console.error('@@ urlTraining @@ error:', e)
		}
	},

};

module.exports = trainingController;