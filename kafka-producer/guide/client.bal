
import ballerina/log;
import wso2/kafka;
import ballerina/internal;
import ballerina/io;
import ballerina/http;


@final string GATEWAY = "ws://localhost:9091/gateway/ws";

endpoint http:WebSocketClient wsClientEp {
    url: GATEWAY,
    callbackService: clientCallbackService
};

service<http:WebSocketClientService> clientCallbackService {
    onBinary(endpoint caller, byte[] b) {
        io:println("\nNew binary message received");
        io:print("UTF-8 decoded binary message: ");
        string msg = internal:byteArrayToString(b, "UTF-8");
        io:println(msg);

        caller->pushBinary(b) but {
            error e => log:printError(
                           "Error occurred when sending binary", err = e)
        };
    }
}
