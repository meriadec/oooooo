require("babel-polyfill");

const TransportNodeHid = require("@ledgerhq/hw-transport-node-hid-noevents")
  .default;

TransportNodeHid.create()
  .then(transport => {
    console.log(transport);
  })
  .catch(err => {
    console.log(err);
  });
