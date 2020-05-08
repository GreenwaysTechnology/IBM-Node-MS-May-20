const { ServiceBroker } = require('moleculer') //returns object,extract ServiceBroker function


//create Service Broker Object
//new ServiceBroker() //constructor call
//takes parameter, we call BrokerConfiguration
//if you dont pass any config, molecular will pass default configuration
//eg: new ServiceBroker({logger:false}) or new ServiceBroker();
const broker = new ServiceBroker();


//service : helloworld service
broker.createService({
    name: 'helloworld',
    //bizlogic
    actions: {
        //methods
        sayHello(ctx) {
            // console.log(ctx);
            // return 'Hello MicroService'
            const { name } = ctx.params;
            // return `Hello ${ctx.params.name}`;
            return `Hello ${name}`;
        }
    }

});
//start the broker

//start returns promise
//broker.start();
// broker.start().then(() => {
//     //once the broker is ready call service method
//     broker.call('helloworld.sayHello')
//         .then(res => { console.log(res) })
//         .catch(err => console.log(err))
// });

async function init() {
    try {
        await broker.start();
        // const result = await broker.call('helloworld.sayHello')
        const result = await broker.call('helloworld.sayHello', 
        { name: 'Subramanian' })
        console.log(result)
    }
    catch (err) {
        console.log(err);
    }
}
init();
