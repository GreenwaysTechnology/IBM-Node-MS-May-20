//event driven programming
const EventEmitter = require('events') //returns function/class
const { log } = console;
/**
 * Event driven programming actors
 *  1.publisher
 *     publish data , send signal(event) when certain activity is finished
 *  2.consumer/listener
 *    listens for data , data is available based on event published
 */

//Create EventEmitter object
const emitter = new EventEmitter();

//Register subscribers
emitter.on('greet', function (data) {
    log(data)
});

//publisher: emit event(greet event),send data
setTimeout(() => {
    emitter.emit('greet', 'Welcome')
}, 1000)
//////////////////////////////////////////////////////////////////////////

class TriggerService extends EventEmitter {
    constructor() {
        super();
        //Register subscribers
        this.on('warning', function (data) {
            log(data)
        });
    } 
    trigger(message) {
        //emit some event
        this.emit('warning', message);
    }
}
let triggerService = new TriggerService();
setTimeout(() => {
    triggerService.trigger('Stay Home,Save Life')
}, 2000)



