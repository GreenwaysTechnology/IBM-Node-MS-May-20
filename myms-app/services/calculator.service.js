const { ServiceBroker } = require('moleculer') //returns object,extract ServiceBroker function
const broker = new ServiceBroker();


//add service
broker.createService({
    name: 'adder',
    actions: {

        add(ctx) {
            const { a, b } = ctx.params
            return a + b;
        }

    }
})

//substract service
broker.createService({
    name: 'substract',
    actions: {

        sub(ctx) {
            const { a, b } = ctx.params
            return a - b;
        }

    }
})


async function init() {
    try {
        await broker.start();
        const addResult = await broker.call('adder.add',
            { a: 10, b: 20 })
        console.log(`Add Result ${addResult}`)
        const substractResult = await broker.call('substract.sub',
            { a: 10, b: 8 })
        console.log(`Substrct Result ${substractResult}`)
    }
    catch (err) {
        console.log(err);
    }
}
init();