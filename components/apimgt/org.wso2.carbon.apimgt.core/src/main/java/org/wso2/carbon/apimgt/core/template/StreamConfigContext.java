package org.wso2.carbon.apimgt.core.template;

import org.apache.commons.lang3.StringUtils;
import org.apache.velocity.VelocityContext;
import org.wso2.carbon.apimgt.core.exception.ExceptionCodes;
import org.wso2.carbon.apimgt.core.models.Endpoint;
import org.wso2.carbon.apimgt.core.streams.EventStream;

import java.util.List;
import java.util.Map;
import java.util.Set;


public class StreamConfigContext extends ConfigContext{

    private String name;
    private String version;
    private String id;
    private String packageName;
    private String serviceNamePrefix = "";
    private String endpoint;
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


    public StreamConfigContext(EventStream stream, String packageName) {
        this.name = stream.getName();
        this.version = stream.getVersion();
        this.packageName = packageName;
        this.id = stream.getId();
        this.endpoint = stream.getEndpoint();
        this.streamType = stream.getStreamType();
        this.streamAuthorization = stream.getStreamAuthorization();
        this.isProducable = stream.isProducable();
        this.canProducerAccessDirectly = stream.isCanProducerAccessDirectly();
        this.canProducerAccessViaGateway = stream.isCanProducerAccessViaGateway();
        this.producerAuthorization = stream.getProducerAuthorization();
        this.producerTransport = stream.getProducerTransport();
        this.producerMessageType = stream.getProducerMessageType();
        this.isConsumable = stream.isConsumable();
        this.canConsumerAccessDirectly = stream.isCanConsumerAccessDirectly();
        this.canConsumerAccessViaGateway = stream.isCanConsumerAccessViaGateway();
        this.consumerAuthorization = stream.getConsumerAuthorization();
        this.consumerTransport = stream.getConsumerTransport();
        this.consumerDisplay = stream.getConsumerDisplay();

    }

    @Override
    public void validate() throws APITemplateException {
        //see if api name ,version, context sets
        if (StringUtils.isEmpty(name) ||  StringUtils.isEmpty(version)) {
            throw new APITemplateException("Stream property validation failed", ExceptionCodes.TEMPLATE_EXCEPTION);
        }

        //adding string prefix if stream name starting with a number
        if (Character.isDigit(name.charAt(0))) {
            serviceNamePrefix = "prefix_";
        }
    }

    @Override
    public VelocityContext getContext() {
        VelocityContext context = new VelocityContext();
        context.put("name", name);
        context.put("version", version);
        context.put("streamEndpoint", endpoint);
        context.put("streamType", String.valueOf(streamType));
        context.put("streamAuthorization", String.valueOf(streamAuthorization));
        context.put("isProducable", isProducable);
        context.put("canProducerAccessDirectly", canProducerAccessDirectly);
        context.put("canProducerAccessViaGateway", canProducerAccessViaGateway);
        context.put("producerAuthorization", producerAuthorization);
        context.put("producerTransport", producerTransport);
        context.put("producerMessageType", producerMessageType);
        context.put("producerTransport", producerTransport);
        context.put("isConsumable", isConsumable);
        context.put("canConsumerAccessDirectly", canConsumerAccessDirectly);
        context.put("canConsumerAccessViaGateway", canConsumerAccessViaGateway);
        context.put("consumerAuthorization", consumerAuthorization);
        context.put("consumerTransport", consumerTransport);
        context.put("consumerDisplay", consumerDisplay);

        String serviceName = serviceNamePrefix + this.name + "_" + id.replaceAll("-", "_");
        if (serviceName.contains(" ")) {
            serviceName = serviceName.replaceAll(" ", "_");
        }
        context.put("serviceName", serviceName);
        context.put("package", packageName);
        return context;
    }
}

