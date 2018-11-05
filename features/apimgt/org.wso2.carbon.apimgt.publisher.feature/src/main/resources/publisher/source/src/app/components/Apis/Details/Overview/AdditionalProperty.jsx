/*
 * Copyright (c) 2018, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';

/**
 * @class AdditionalProperty
 */
const AdditionalProperty = ({
    isEditable, property, onDelete, onUpdate, index,
}) => {
    return (
        <Grid item lg={5}>
            <TextField
                style={{
                    justifyContent: 'space-between',
                    marginRight: 25,
                }}
                id='api-property-key'
                label={isEditable && 'key'}
                value={property.key}
                placeholder='My Property'
                margin='normal'
                onChange={value => onUpdate(index, value.target.value, '')}
                InputProps={{
                    readOnly: !isEditable,
                }}
            />
            <TextField
                style={{
                    justifyContent: 'space-between',
                    marginLeft: 25,
                }}
                id='api-property-value'
                label={isEditable && 'value'}
                value={property.value}
                placeholder='Property Value'
                margin='normal'
                InputProps={{
                    readOnly: !isEditable,
                }}
            />
            <IconButton
                id='delete'
                aria-label='Remove'
                onClick={() => { onDelete(index); }}
            >
                <DeleteIcon />
            </IconButton>
        </Grid>
    );
};

/**
 * @class Prop types of Additional properties.
 */
AdditionalProperty.propTypes = {
    property: PropTypes.shape({
        key: PropTypes.string,
        value: PropTypes.string,
    }).isRequired,
    isEditable: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
};


export default AdditionalProperty;
