# Kafka Producer

This project includes the 
- kafka producer
- gateway file exposed as a websocket service
- client 

Pre-requisites:
- Install apache kafka v1.1.0
- Run zookeeper server
- Run kafka server
- Create test topic

Steps to run the project:
1. Run the `gateway-file.bal` ballerina file - This will initiate the websocket server
2. Run the `client.bal` ballerina file - You can run multiple clients if needed
3. Finally run the `kafka-producer.bal` file - This produces messages to the kafka topic.



