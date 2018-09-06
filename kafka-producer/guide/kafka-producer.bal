import ballerina/http;
import wso2/kafka;
import ballerina/io;

type Record record {
    string endpointUrl;
    string streamType;
    string topicName;
};

// Kafka producer endpoint
endpoint kafka:SimpleProducer kafkaProducer {
    bootstrapServers: "localhost:9092",
    clientID: "basic-producer",
    acks: "all",
    noRetries: 3
};

// HTTP service endpoint
endpoint http:Listener listener {
    port: 9090
};


function main(string... args) {
    http:Response response;
    Record streamDetails = { endpointUrl: "/testing", streamType: "hello", topicName: "test"};

    json streamJson = check <json>streamDetails;
    string stringStream =  streamJson.toString();

    byte[] serializedStream = stringStream.toByteArray("UTF-8");
    kafkaProducer->send(serializedStream, "test", partition = 0);
    response.setJsonPayload({ "Status": "Success" });
}
