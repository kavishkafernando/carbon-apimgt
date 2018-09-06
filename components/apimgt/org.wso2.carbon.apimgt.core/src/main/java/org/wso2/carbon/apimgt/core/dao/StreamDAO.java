package org.wso2.carbon.apimgt.core.dao;

import org.wso2.carbon.apimgt.core.exception.APIMgtDAOException;
import org.wso2.carbon.apimgt.core.models.DedicatedStreamGateway;
import org.wso2.carbon.apimgt.core.streams.EventStream;

import java.util.List;

public interface StreamDAO {
    /**
     * Check if an Stream exists for a given streamID
     * @param streamID The UUID that uniquely identifies an Stream
     * @return true if Stream exists else false
     * @throws APIMgtDAOException if error occurs while accessing data layer
     */
    boolean isStreamExists(String streamID) throws APIMgtDAOException;


    /**
     * Add a new instance of an API
     *
     * @param stream The {@link EventStream} object to be added
     * @throws APIMgtDAOException if error occurs while accessing data layer
     *
     */
    void addStream(EventStream stream) throws APIMgtDAOException;

    /**
     * Retrieve a given instance of an Stream
     *
     * @param streamID The UUID that uniquely identifies an Stream
     * @return valid {@link EventStream} object or throws APIMgtDAOException
     * @throws APIMgtDAOException if error occurs while accessing data layer
     *
     */
    EventStream getEventStream(String streamID) throws APIMgtDAOException;

    /**
     * Retrieves summary data of all available Streams.
     *
     * @param user The userName of the current user
     * @return {@code List<EventStream>} matching results
     * @throws APIMgtDAOException if error occurs while accessing data layer
     *
     */
    List<EventStream> getStreams(String user) throws APIMgtDAOException;

    /**
     * Get Container based Gateway
     * @param streamId uuid of Stream
     * @return DedicatedGateway Object
     * @throws APIMgtDAOException if error occurs while accessing data layer
     */
    DedicatedStreamGateway getDedicatedStreamGateway(String streamId) throws APIMgtDAOException;


    /**
     * Get gateway configuration of a given Stream
     *
     * @param streamID The UUID of the respective Stream
     * @return gateway configuration String
     * @throws APIMgtDAOException if error occurs while accessing data layer
     *
     */
    String getGatewayConfigOfStream(String streamID) throws APIMgtDAOException;
}
