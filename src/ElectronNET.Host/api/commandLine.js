"use strict";
const main_js_1 = require("../main.js");
let electronSocket;
module.exports = (socket, app) => {
    electronSocket = socket;
    socket.on('appCommandLineAppendSwitch', (the_switch, value) => {
        app.commandLine.appendSwitch(the_switch, value);
        (0, main_js_1.setArg)(the_switch, value);
    });
    socket.on('appCommandLineRemoveSwitch', (the_switch) => {
        (0, main_js_1.removeArg)(the_switch);
    });
    socket.on('appCommandLineAppendArgument', (value) => {
        app.commandLine.appendArgument(value);
    });
    socket.on('appCommandLineHasSwitch', (value) => {
        const hasSwitch = app.commandLine.hasSwitch(value);
        electronSocket.emit('appCommandLineHasSwitchCompleted', hasSwitch);
    });
    socket.on('appCommandLineGetSwitchValue', (the_switch) => {
        const value = app.commandLine.getSwitchValue(the_switch);
        electronSocket.emit('appCommandLineGetSwitchValueCompleted', value);
    });
};
//# sourceMappingURL=commandLine.js.map