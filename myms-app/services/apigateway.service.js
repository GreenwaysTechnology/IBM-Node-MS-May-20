const { ServiceBroker } = require('moleculer') //returns object,extract ServiceBroker function
const ApiService = require('moleculer-web')

const broker = new ServiceBroker();

broker.createService(ApiService)

broker.start()
broker.repl()
