const { ServiceBroker } = require('moleculer') //returns object,extract ServiceBroker function

const broker = new ServiceBroker({
    transporter: "nats://localhost:4222",
    //Load balancer
    registry: {
        strategy: "Random"
    }
});


broker.createService({
    name: 'greeter',
    actions: {
        async sayHai(ctx) {
            const { name } = ctx.params;
            const message = await this.getMessage('Greeter App')
            console.log(message);
            return await ctx.call('hai.sayHai', { name: name });
        }
    },
    methods: {
        //private methods
        getMessage(message) {
            return new Promise((resolve, reject) => {
                resolve(message);
            });
        }
    }

});
broker.start()
broker.repl();
