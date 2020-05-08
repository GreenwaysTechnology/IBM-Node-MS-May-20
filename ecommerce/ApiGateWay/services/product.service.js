"use strict";

module.exports = {
    name: "product",
    actions: {
        findAll: {
            rest: {
                method: "GET",
                path: "/findAll"
            },
            async handler(ctx) {
                const result = await ctx.call("inventory.findAll")
                return result;
            }
        }
    }

};
