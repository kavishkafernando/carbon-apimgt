/*
 * Copyright (c) 2019, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
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
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import green from '@material-ui/core/colors/green';
import LaunchIcon from '@material-ui/icons/Launch';

const useStyles = makeStyles(theme => ({
    buttonsWrapper: {
        marginTop: 40,
    },
    stateButton: {
        marginRight: theme.spacing.unit,
    },
    paperCenter: {
        padding: theme.spacing.unit * 2,
        display: 'block',
        alignItems: 'left',
        justifyContent: 'center',
    },
    subHeading: {
        fontSize: '1rem',
        fontWeight: 400,
        display: 'inline-block',
    },
    heading: {
        fontSize: '1rem',
        fontWeight: 800,
        marginTop: theme.spacing.unit * 2,
        display: 'inline-flex',
        lineHeight: '38px',
        justifyContent: 'center',
    },
    iconTrue: {
        color: green[500],
        marginRight: theme.spacing(1),
        display: 'block',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    iconFalse: {
        color: theme.palette.grey[500],
        marginRight: theme.spacing(1),
        display: 'block',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    mainTitle: {
        fontSize: '1rem',
        fontWeight: 800,
        display: 'inline-flex',
        justifyContent: 'center',
        marginLeft: theme.spacing.unit * 15,
    },
    captionText: {
        fontSize: '0.3rem',
        fontWeight: 800,
        display: 'inline-flex',
        justifyContent: 'center',
        marginLeft: theme.spacing.unit * 12,
    },
    grid: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'left',
    },
}));
/**
 *
 * @param {*} props
 */
export default function CheckboxLabels(props) {
    const classes = useStyles();
    const { api } = props;
    const isEndpointAvailable = api.endpointConfig !== null;
    const isTierAvailable = api.policies.length !== 0;
    const isPrototypedAvailable =
        api.endpointConfig !== null && api.endpointConfig.implementation_status === 'prototyped';

    return (
        <Paper className={classes.paperCenter}>
            <Grid xs={12}>
                <Typography className={classes.mainTitle}>
                    <FormattedMessage
                        id='Apis.Details.Configuration.Configuration.requirements'
                        defaultMessage='Requirements'
                    />
                </Typography>
                <Typography className={classes.captionText}>
                    <FormattedMessage
                        id='Apis.Details.Configuration.Configuration.requirements'
                        defaultMessage='Requirements for next state transition'
                    />
                </Typography>
            </Grid>
            {(api.lifeCycleStatus === 'CREATED' || api.lifeCycleStatus === 'PROTOTYPED') && (
                <React.Fragment>
                    <Grid xs={12}>
                        <Typography className={classes.heading}>
                            <FormattedMessage
                                id='Apis.Details.Configuration.Configuration.publisher'
                                defaultMessage='Publish'
                            />
                        </Typography>
                    </Grid>
                    <Grid xs={12}>
                        <Grid xs={12} className={classes.grid}>
                            {isEndpointAvailable ? (
                                <CheckIcon className={classes.iconTrue} />
                            ) : (
                                <CloseIcon className={classes.iconFalse} />
                            )}
                            <Typography className={classes.subHeading}>Endpoint provided</Typography>
                            <Link to={'/apis/' + api.id + '/endpoints'}>
                                <LaunchIcon style={{ marginLeft: '2px' }} fontSize='small' />
                            </Link>
                        </Grid>
                        <Grid xs={12} className={classes.grid}>
                            {isTierAvailable ? (
                                <CheckIcon className={classes.iconTrue} />
                            ) : (
                                <CloseIcon className={classes.iconFalse} />
                            )}
                            <Typography className={classes.subHeading}>Tiers selected</Typography>
                            <Link to={'/apis/' + api.id + '/subscriptions'}>
                                <LaunchIcon style={{ marginLeft: '2px' }} fontSize='small' />
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid xs={12}>
                        <Typography className={classes.heading}>
                            <FormattedMessage
                                id='Apis.Details.Configuration.Configuration.prototype'
                                defaultMessage='Deploy as a Prototype'
                            />
                        </Typography>
                    </Grid>
                    <Grid xs={12}>
                        <Grid xs={12} className={classes.grid}>
                            {isPrototypedAvailable ? (
                                <CheckIcon className={classes.iconTrue} />
                            ) : (
                                <CloseIcon className={classes.iconFalse} />
                            )}
                            <Typography className={classes.subHeading}>Prototype Endpoint provided</Typography>
                            <Link to={'/apis/' + api.id + '/endpoints'}>
                                <LaunchIcon style={{ marginLeft: '2px' }} fontSize='small' />
                            </Link>
                        </Grid>
                    </Grid>
                </React.Fragment>
            )}
            {api.lifeCycleStatus === 'PUBLISHED' && (
                <React.Fragment>
                    <Grid xs={12}>
                        <Typography className={classes.heading}>
                            <FormattedMessage
                                id='Apis.Details.Configuration.Configuration.prototype'
                                defaultMessage='Deploy as a Prototype'
                            />
                        </Typography>
                    </Grid>
                    <Grid xs={12}>
                        <Grid xs={12} className={classes.grid}>
                            {isPrototypedAvailable ? (
                                <CheckIcon className={classes.iconTrue} />
                            ) : (
                                <CloseIcon className={classes.iconFalse} />
                            )}
                            <Typography className={classes.subHeading}>Prototype Endpoint provided</Typography>
                            <Link to={'/apis/' + api.id + '/endpoints'}>
                                <LaunchIcon style={{ marginLeft: '2px' }} fontSize='small' />
                            </Link>
                        </Grid>
                    </Grid>
                </React.Fragment>
            )}
        </Paper>
    );
}

CheckboxLabels.propTypes = {
    classes: PropTypes.shape({}).isRequired,
    api: PropTypes.shape({}).isRequired,
    intl: PropTypes.shape({
        formatMessage: PropTypes.func,
    }).isRequired,
};
