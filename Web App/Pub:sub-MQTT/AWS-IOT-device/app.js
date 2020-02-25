var awsIot = require("aws-iot-device-sdk");

var device = awsIot.device({
  keyPath: "e33876fed6-private.pem.key",
  certPath: "e33876fed6-certificate.pem.crt",
  caPath: "rootCA.pem",
  clientId: "testawsconnection",
  host: "a1qe4tqb66b3fi-ats.iot.us-east-2.amazonaws.com"
});

device.on("connect", function() {
  console.log("connect");
//  device.subscribe("topic_2");
  device.publish("topic_2", JSON.stringify({ Simerpreet: 2 }));
});

device.on("message", function(topic, payload) {
  console.log("message", topic, payload.toString());
});
