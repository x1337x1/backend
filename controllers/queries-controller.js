const db = require("../models");
const { } = require('./utils/queries');
const { sendKafkaMessage } = require('./eventBus/kafka/producer')

const topic = 'process_koala'

const queriesController = {

	async query(req, res) {
		try {
			const koala_event_query = 'koala_query'
			await sendKafkaMessage(topic, koala_event_query, req.body)
			const data = {
				message: 'Training input successfully sent',
				data: req.body,
			}
			res.status(200).send(data);
		} catch (error) {
			console.error('@@ query @@ error:', e)
		}
	},


};

module.exports = queriesController;