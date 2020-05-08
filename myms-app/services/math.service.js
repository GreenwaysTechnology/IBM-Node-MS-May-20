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
// math service which talks to adder and substract

// broker.createService({
//     name: 'math',
//     actions: {

//         async calculate(ctx) {
//             const { a, b } = ctx.params
//             const result = await ctx.call('adder.add', { a: a, b: b });
//             return `add result ${result}`
//         }

//     }
// })

//verbose action methods
broker.createService({
    name: 'math',
    actions: {
        //verbose pattern
        calculate: {
            //validation
            params: {
                a: "number", // a must benumber
                b: "number"
            },
            async handler(ctx) {

                try {
                    const { a, b } = ctx.params;
                    //call method on MathService
                    return await ctx.call('adder.add', { a: a, b: b });
                }
                catch (err) {
                    console.log(err);
                }
            }

        }


    }
})

broker.start()
broker.repl();

// async function init() {
//     try {
//         await broker.start();
//         const mathresult = await broker.call('math.calculate', { a: 10, b: 20 })
//         console.log(`mathresult ${mathresult}`)
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// init();