package org.wso2.carbon.apimgt.core.models;

import org.wso2.carbon.apimgt.core.streams.EventStream;

import java.util.List;
import java.util.Map;
import java.util.Set;

public class StreamTemplate {

    private String name;
    private String version;
    private Map<String, Endpoint> endpoint;
    private Set<String> streamType;
    private List<EventStream.Authorization> streamAuthorization;

    private boolean isProducable;
    private boolean canProducerAccessDirectly;
    private boolean canProducerAccessViaGateway;
    private List<EventStream.Authorization> producerAuthorization;
    private List<EventStream.Transport> producerTransport;
    private List<EventStream.MessageType> producerMessageType;

    private boolean isConsumable;
    private boolean canConsumerAccessDirectly;
    private boolean canConsumerAccessViaGateway;
    private List<EventStream.Authorization> consumerAuthorization;
    private List<EventStream.Transport> consumerTransport;
    private List<EventStream.Display> consumerDisplay;

    private String gatewayConfig;

    public String getGatewayConfig() {
        return gatewayConfig;
    }

    public void setGatewayConfig(String gatewayConfig) {
        this.gatewayConfig = gatewayConfig;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    public Map<String, Endpoint> getEndpoint() {
        return endpoint;
    }

    public void setEndpoint(Map<String, Endpoint> endpoint) {
        this.endpoint = endpoint;
    }

    public Set<String> getStreamType() {
        return streamType;
    }

    public void setStreamType(Set<String> streamType) {
        this.streamType = streamType;
    }

    public List<EventStream.Authorization> getStreamAuthorization() {
        return streamAuthorization;
    }

    public void setStreamAuthorization(List<EventStream.Authorization> streamAuthorization) {
        this.streamAuthorization = streamAuthorization;
    }

    public boolean isProducable() {
        return isProducable;
    }

    public void setProducable(boolean producable) {
        isProducable = producable;
    }

    public boolean isCanProducerAccessDirectly() {
        return canProducerAccessDirectly;
    }

    public void setCanProducerAccessDirectly(boolean canProducerAccessDirectly) {
        this.canProducerAccessDirectly = canProducerAccessDirectly;
    }

    public boolean isCanProducerAccessViaGateway() {
        return canProducerAccessViaGateway;
    }

    public void setCanProducerAccessViaGateway(boolean canProducerAccessViaGateway) {
        this.canProducerAccessViaGateway = canProducerAccessViaGateway;
    }

    public List<EventStream.Authorization> getProducerAuthorization() {
        return producerAuthorization;
    }

    public void setProducerAuthorization(List<EventStream.Authorization> producerAuthorization) {
        this.producerAuthorization = producerAuthorization;
    }

    public List<EventStream.Transport> getProducerTransport() {
        return producerTransport;
    }

    public void setProducerTransport(List<EventStream.Transport> producerTransport) {
        this.producerTransport = producerTransport;
    }

    public List<EventStream.MessageType> getProducerMessageType() {
        return producerMessageType;
    }

    public void setProducerMessageType(List<EventStream.MessageType> producerMessageType) {
        this.producerMessageType = producerMessageType;
    }

    public boolean isConsumable() {
        return isConsumable;
    }

    public void setConsumable(boolean consumable) {
        isConsumable = consumable;
    }

    public boolean isCanConsumerAccessDirectly() {
        return canConsumerAccessDirectly;
    }

    public void setCanConsumerAccessDirectly(boolean canConsumerAccessDirectly) {
        this.canConsumerAccessDirectly = canConsumerAccessDirectly;
    }

    public boolean isCanConsumerAccessViaGateway() {
        return canConsumerAccessViaGateway;
    }

    public void setCanConsumerAccessViaGateway(boolean canConsumerAccessViaGateway) {
        this.canConsumerAccessViaGateway = canConsumerAccessViaGateway;
    }

    public List<EventStream.Authorization> getConsumerAuthorization() {
        return consumerAuthorization;
    }

    public void setConsumerAuthorization(List<EventStream.Authorization> consumerAuthorization) {
        this.consumerAuthorization = consumerAuthorization;
    }

    public List<EventStream.Transport> getConsumerTransport() {
        return consumerTransport;
    }

    public void setConsumerTransport(List<EventStream.Transport> consumerTransport) {
        this.consumerTransport = consumerTransport;
    }

    public List<EventStream.Display> getConsumerDisplay() {
        return consumerDisplay;
    }

    public void setConsumerDisplay(List<EventStream.Display> consumerDisplay) {
        this.consumerDisplay = consumerDisplay;
    }




}
