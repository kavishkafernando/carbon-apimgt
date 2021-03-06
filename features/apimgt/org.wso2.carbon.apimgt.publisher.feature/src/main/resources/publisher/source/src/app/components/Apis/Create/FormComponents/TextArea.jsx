/*
 * Copyright (c) 2017, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
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
import React from 'react';
import PropTypes from 'prop-types';

const TextArea = props => (
    <div className='form-group'>
        <label htmlFor={props.name} className='form-label'>
            {props.title}
            <textarea
                className='form-input'
                style={props.resize ? null : { resize: 'none' }}
                name={props.name}
                rows={props.rows}
                value={props.content}
                onChange={props.controlFunc}
                placeholder={props.placeholder}
            />
        </label>
    </div>
);

TextArea.propTypes = {
    title: PropTypes.string.isRequired,
    rows: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    resize: PropTypes.bool.isRequired,
    placeholder: PropTypes.string.isRequired,
    controlFunc: PropTypes.func.isRequired,
};

export default TextArea;
