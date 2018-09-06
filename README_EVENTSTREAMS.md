# APIMGT - Stream Governance POC
This file includes the details of Stream Governance

##Model - Event Stream

###Post

Send a request to `https://10.100.1.239:9443/api/am/publisher/v1.0/stream` 
``` 
{
	"name": "StreamAPI",
	"description": "This is a sample Stream API",
	"version": "3.0.0",
	"provider": "admin",
	"lifeCycleStatus": "Public",
	 "endpoint": "https://localhost:9090/gateway:ws",
	"streamType": ["http","https"],
	"streamAuthorization": ["BASICAUTH","OAUTH"],
	"visibility": "PUBLIC",
	"isProducable": false,
	"canProducerAccessDirectly": false,
	"canProducerAccessViaGateway": false,
	"producerAuthorization": ["BASICAUTH","OAUTH"],
	"producerTransport": ["HTTP", "JMS"],
	"producerMessageType": ["JSON"],
	"isConsumable": true,
	"canConsumerAccessDirectly": true,
	"canConsumerAccessViaGateway": false,
	"consumerAuthorization": ["BASICAUTH","OAUTH"],
	"consumerTransport": ["JMS"],
	"consumerDisplay":["CALLBACK"]
}
```

###Get Stream summaries
Request: https://10.100.1.239:9443/api/am/publisher/v1.0/stream


###Get Stream by StreamID
Request: https://10.100.1.239:9443/api/am/publisher/v1.0/stream/{streamId}