const { ServiceBroker } = require('moleculer') //returns object,extract ServiceBroker function

const broker = new ServiceBroker({
    transporter: "nats://localhost:4222",
    //Load balancer configuration
    registry: {
        strategy: "Random"
    }
});

broker.createService({
    name: 'hai',
    actions: {
        sayHai(ctx) {
            const { name } = ctx.params;
            return `Hai ${name} : from ${broker.nodeID}`
        }
    }

});
broker.start()
broker.repl();
