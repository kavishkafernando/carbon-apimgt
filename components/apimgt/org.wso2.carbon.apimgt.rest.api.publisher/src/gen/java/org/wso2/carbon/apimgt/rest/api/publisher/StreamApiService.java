package org.wso2.carbon.apimgt.rest.api.publisher;

import org.wso2.carbon.apimgt.core.streams.EventStream;
import org.wso2.carbon.apimgt.rest.api.publisher.*;
import org.wso2.carbon.apimgt.rest.api.publisher.dto.*;

import org.wso2.msf4j.formparam.FormDataParam;
import org.wso2.msf4j.formparam.FileInfo;
import org.wso2.msf4j.Request;

import org.wso2.carbon.apimgt.rest.api.publisher.dto.ErrorDTO;
import org.wso2.carbon.apimgt.rest.api.publisher.dto.StreamDTO;
import org.wso2.carbon.apimgt.rest.api.publisher.dto.StreamListDTO;

import java.util.List;
import org.wso2.carbon.apimgt.rest.api.publisher.NotFoundException;

import java.io.InputStream;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;

public abstract class StreamApiService {
    public abstract Response streamGet(Integer limit
 ,Integer offset
 ,String query
 ,String ifNoneMatch
  ,Request request) throws NotFoundException;
    public abstract Response streamPost(EventStream stream
  ,Request request) throws NotFoundException;
    public abstract Response streamStreamIdGet(String streamId
 ,String ifNoneMatch
 ,String ifModifiedSince
  ,Request request) throws NotFoundException;
}
