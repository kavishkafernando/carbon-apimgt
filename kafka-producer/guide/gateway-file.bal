
import ballerina/log;
import wso2/kafka;
import ballerina/internal;
import ballerina/io;
import ballerina/http;
map<http:WebSocketListener> connectionsMap;

@http:WebSocketServiceConfig {
    path: "/gateway/ws",
    subProtocols: ["xml", "json"],
    idleTimeoutInSeconds: 120
}
service<http:WebSocketService> basic bind { port: 9091 } {
    onOpen(endpoint caller) {
        connectionsMap[caller.id] = caller;

    }
    onClose(endpoint caller, int statusCode, string reason) {
        _ = connectionsMap.remove(caller.id);
    }
}

function broadcast(byte[] text) {
    endpoint http:WebSocketListener ep;
    foreach id, con in connectionsMap {
        ep = con;
        ep->pushBinary(text) but {
            error e => log:printError("Error sending message", err = e)
        };
    }
}

endpoint kafka:SimpleConsumer consumer {
    bootstrapServers: "localhost:9092, localhost:9093",
    groupId: "inventorySystemd",
    topics: ["test"],
    pollingInterval:1000
};

service<kafka:Consumer> kafkaService bind consumer {
    // Triggered whenever a message added to the subscribed topic
    onMessage(kafka:ConsumerAction consumerAction, kafka:ConsumerRecord[] records) {
        foreach entry in records {
            byte[] serializedMsg = entry.value;
            string msg = internal:byteArrayToString(serializedMsg, "UTF-8");
            log:printInfo("Topic: " + entry.topic + "; Received Message: " + msg);
            broadcast(serializedMsg);
        }
    }
}
