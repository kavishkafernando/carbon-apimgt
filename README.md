# About this repository

|  Branch | Build Status(Jenkins) | Build Status(TravisCI) |
| :------------ |:------------- |:-------------
| master      | [![Build Status](https://wso2.org/jenkins/job/platform-builds/job/carbon-apimgt/badge/icon)](https://wso2.org/jenkins/job/platform-builds/job/carbon-apimgt/) | [![Build Status](https://api.travis-ci.org/wso2/carbon-apimgt.svg?branch=master)](https://travis-ci.org/wso2/carbon-apimgt) |

 This repository contains major components which are used to build the API Manager product.

## Building from the source

If you want to build carbon-apimgt from the source code:

1. Install Java 8 (http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
1. Install Apache Maven 3.x.x (https://maven.apache.org/download.cgi#)
1. Get a clone or download the source from this repository (https://github.com/wso2/carbon-apimgt.git).
1. Run the Maven command ``mvn clean install`` from the ``carbon-apimgt`` directory.


## Running Integration tests in docker containers(Optional)


1. Install docker
1. Go inside to the carbon-apimgt directory
1. Run integration test by giving following commands

    * mvn clean install -P local-h2
    * mvn clean install -P local-mysql
    * mvn clean install -P local-postgres
    * mvn clean install -P local-mssql
    * mvn clean install -P local-oracle

## Start integration tests in debug mode

 ### For docker based tests:

    * mvn -P local-mysql -Dmaven.failsafe.debug verify
      Note: local-mysql is the profile. Use other profiles accordingly.

 ### For unit tests:

    * mvn -Dmaven.surefire.debug="-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=y,address=8000 -Xnoagent -Djava.compiler=NONE" test

## How to create a new REST API in C5:

    1. Build following repositories.

        * https://github.com/swagger-api/swagger-codegen
        * https://github.com/sanjeewa-malalgoda/swagger2MSF4J

    2. If you going to add or modify the publisher REST API then add your API definition changes into the publisher-api.yaml
       Likewise, if you are going to add or modify the store REST API then add your API definition changes into the store-api.yaml


    3 Build the org.wso2.carbon.apimgt.rest.api.publisher or org.wso2.carbon.apimgt.rest.api.store REST API components with following command.
       * mvn swagger2msf4j:generate

        NOTE: This command will erase some existing classes. Please filter relevant changes which regard to your modification.


    4. Increase the service count by number of APIs that you create(This requires only if you add new API).
        <carbon.component>
           osgi.service; objectClass="org.wso2.msf4j.Microservice"; serviceCount="5"
        </carbon.component>

# APIMGT - Stream Governance POC

This project is about extending the WSO2 API Manager product to support event driven architecture such that it can also provide stream governance. 

## How to test event streams.

1. Build the carbon-apimgt repository
2. Build the product-apimgt repository (Replace the <carbon.apimt.core> version of the pom.xml with the version of carbon-apimgt)
3. Run the apimgt server (carbon.sh)
4. Navigate to /Users/kavishka/Documents/StreamGovernance/product-apim/modules/gateway/target/ , unzip wso2apim-gateway-3.0.0-SNAPSHOT and start the gateway using bin/ballerina run service services.bsz
5. Generate a token
    i. Send a POST request to 'https://localhost:9443/api/identity/oauth2/dcr/v1.0/register' with the following body,
``` 
    {
       "redirect_uris": [
         "http://localhost"
       ],
       "client_name": "name_1",
       "grant_types": [
         "password"
       ]
     }
``` 
.
    ii. Use the following curl  'curl -k -X POST --header 'Content-Type: application/x-www-form-urlencoded' --basic -u <client_id>:<client_secret> 'https://localhost:9443/api/auth/oauth2/v1.0/token' -d "grant_type=password&username=admin&password=admin&scope=apim:stream_create"'
    
6. Test the following endpoints 

### Post - Create a new event stream
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

### Get Stream summaries
Request: https://localhost:9443/api/am/publisher/v1.0/stream


### Get Stream by StreamID
Request: https://localhost:9443/api/am/publisher/v1.0/stream/{streamId}

## Gateway 

1. Run the gateway and send a post request to create a stream. It will create a .bal file.
2. The gateway is exposed as a websocket service.
3. How to run the gatewayfile can be found 'https://github.com/kavishkafernando/carbon-apimgt/blob/stream/kafka-producer/README.md'

## Implementation

Model: /carbon-apimgt/components/apimgt/core/src/main/java/org/wso2/carbon/apimgt/core/streams/EventStream.java
Stream Endpoints: /carbon-apimgt/components/apimgt/org.wso2.carbon.apimgt.rest.api.publisher/src/main/java/org/wso2/carbon/apimgt/rest/api/publisher/impl/StreamApiServiceImpl.java
Adding to db: /carbon-apimgt/components/apimgt/.core/src/main/java/org/wso2/carbon/apimgt/core/dao/impl/StreamDAOImpl.java
Adding to publisher: /carbon-apimgt/components/apimgt/core/src/main/java/org/wso2/carbon/apimgt/core/impl/APIPublisherImpl.java
Gateway code: Gateway module
