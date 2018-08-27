package org.wso2.carbon.apimgt.core.template;

import org.apache.commons.lang3.StringUtils;
import org.apache.velocity.VelocityContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.wso2.carbon.apimgt.core.models.StreamTemplate;

import java.util.List;

public class ResourceStreamConfigContext extends ConfigContext {

    private ConfigContext configContext;
    private static final Logger log = LoggerFactory.getLogger(ResourceConfigContext.class);
    private List<StreamTemplate> streamResources;

    public ResourceStreamConfigContext(ConfigContext context, List<StreamTemplate> streamResources) {
        this.configContext = context;
        this.streamResources = streamResources;
    }
    @Override
    public void validate() throws APITemplateException {

    }

    @Override
    public VelocityContext getContext() {
        VelocityContext context = configContext.getContext();
        context.put("StringUtils", StringUtils.class);
        context.put("streamResources", this.streamResources);
        return context;
    }
}
