package org.wso2.carbon.apimgt.core.template;

import org.apache.commons.lang3.StringUtils;
import org.apache.velocity.VelocityContext;
import org.wso2.carbon.apimgt.core.exception.ExceptionCodes;
import org.wso2.carbon.apimgt.core.streams.EventStream;


public class StreamConfigContext extends ConfigContext{

    private String name;
    private String version;
    private String id;
    private String packageName;
    private String serviceNamePrefix = "";

    public StreamConfigContext(EventStream stream, String packageName) {
        this.name = stream.getName();
        this.version = stream.getVersion();
        this.packageName = packageName;
        this.id = stream.getId();
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
        String serviceName = serviceNamePrefix + this.name + "_" + id.replaceAll("-", "_");
        if (serviceName.contains(" ")) {
            serviceName = serviceName.replaceAll(" ", "_");
        }
        context.put("serviceName", serviceName);
        context.put("package", packageName);
        return context;
    }
}

