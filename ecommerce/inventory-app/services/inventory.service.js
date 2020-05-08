"use strict";


module.exports = {
    name: "inventory",

    actions: {

        findAll: {
            async handler(ctx) {
                return `Inventory Serverice ${this.broker.nodeID}`
            }
        },


    },



};
