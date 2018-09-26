import React from 'react';

export default class CustomIcon extends React.Component{
    render() {
        const strokeColor = this.props.strokeColor !== undefined ? this.props.strokeColor : '#8b8e95';
        const width = this.props.width !== undefined ? this.props.width : 32;
        const height = this.props.height !== undefined ? this.props.height : 32;
        const icon = this.props.icon !== undefined ? this.props.icon : 'api';
        if( icon === 'overview' ){
            return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}
            viewBox="0 0 8.5272856 8.5114363" id="svg8">
                <g id="layer2" transform="translate(79.857 -62.367)">
                    <g id="g5726" transform="matrix(.9999 0 0 1.00321 -86.091 38.578)" fill="none"
                    stroke={strokeColor} strokeLinejoin="round">
                        <path id="path5717" transform="scale(.26458)" d="m 29.705078,90.623047 c -2.846282,0 -5.138672,2.290437 -5.138672,5.136719 V 111.5293 c 0,2.84628 2.29239,5.13867 5.138672,5.13867 h 17.177734 l -4.591796,-4.74219 a 8.7230968,9.0089885 0 0 1 -10.539063,-1.41406 8.7230968,9.0089885 0 0 1 0,-12.740236 8.7230968,9.0089885 0 0 1 6.296875,-2.638672 8.7230968,9.0089885 0 0 1 6.041016,2.638672 8.7230968,9.0089885 0 0 1 0,12.740236 8.7230968,9.0089885 0 0 1 -0.609375,0.5664 6.2078361,6.4112926 0 0 0 1.089843,-0.88671 6.2078361,6.4112926 0 0 0 1.50586,-2.53125 l 7.242187,7.47851 c 0.914205,-0.92665 1.480469,-2.19879 1.480469,-3.60937 V 95.759766 c 0,-2.846282 -2.29239,-5.136719 -5.138672,-5.136719 z"
                        strokeWidth="2" />
                        <g transform="scale(.88683 .9159) rotate(-45 -45.67 5.272)" id="g5724"
                        strokeWidth="0.539">
                            <circle id="circle5720" cx="-22.921" cy="63.11" r="2.603" />
                            <path d="m -89.15625,247.73828 v 13.91602 h 6.3125 V 247.74609 A 7,7 0 0 1 -86,248.5 a 7,7 0 0 1 -3.15625,-0.76172 z"
                            transform="scale(.26458)" id="path5722" strokeWidth="2.039" />
                        </g>
                    </g>
                </g>
            </svg>
        } else if ( icon === 'api') {
            return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 8.4666662 8.466666"
            id="svg8">
                <g id="layer2" transform="translate(82.262 -41.963)">
                    <g id="g5764" transform="matrix(.83117 0 0 .83117 193.242 4.456)" fill={strokeColor}
                    fillOpacity="0.933">
                        <path id="path5728" d="m -326.92369,45.126027 c -0.0789,0 -0.14264,0.06373 -0.14264,0.142626 v 1.111562 a 3.9026041,3.9026041 0 0 0 -1.52651,0.635619 l -0.78859,-0.788582 c -0.0558,-0.05579 -0.14576,-0.05579 -0.20154,0 l -0.78084,0.78083 c -0.0558,0.05579 -0.0558,0.145751 0,0.201538 l 0.786,0.785998 a 3.9026041,3.9026041 0 0 0 -0.63098,1.529107 h -1.1136 c -0.0789,0 -0.14264,0.06373 -0.14264,0.142626 v 1.10381 c 0,0.07889 0.0637,0.142626 0.14264,0.142626 h 1.11154 a 3.9026041,3.9026041 0 0 0 0.63564,1.526522 l -0.7886,0.788582 c -0.0558,0.05579 -0.0558,0.145751 0,0.201539 l 0.78084,0.78083 c 0.0558,0.05579 0.14576,0.05579 0.20154,0 l 0.78599,-0.785998 a 3.9026041,3.9026041 0 0 0 1.52911,0.630968 v 1.113629 c 0,0.07889 0.0637,0.142626 0.14264,0.142626 h 1.10379 c 0.0789,0 0.14263,-0.06373 0.14263,-0.142626 v -1.11156 a 3.9026041,3.9026041 0 0 0 1.52652,-0.635622 l 0.78859,0.788583 c 0.0558,0.05579 0.14576,0.05579 0.20153,0 l 0.78084,-0.78083 c 0.0558,-0.05579 0.0558,-0.145751 0,-0.201539 l -0.786,-0.785997 a 3.9026041,3.9026041 0 0 0 0.63098,-1.529107 h 1.1136 c 0.0789,0 0.14264,-0.06373 0.14264,-0.142626 v -1.10381 c 0,-0.07889 -0.0637,-0.142626 -0.14264,-0.142626 h -1.11154 a 3.9026041,3.9026041 0 0 0 -0.63563,-1.526522 l 0.78859,-0.788583 c 0.0558,-0.05579 0.0558,-0.145751 0,-0.201538 l -0.78084,-0.78083 c -0.0558,-0.05579 -0.14576,-0.05579 -0.20153,0 l -0.786,0.785997 a 3.9026041,3.9026041 0 0 0 -1.52911,-0.630967 v -1.113629 c 0,-0.07889 -0.0637,-0.142626 -0.14263,-0.142626 z m 0.55189,2.081527 a 3.0119976,3.0119976 0 0 1 3.01223,3.011702 3.0119976,3.0119976 0 0 1 -3.01223,3.01222 3.0119976,3.0119976 0 0 1 -3.01223,-3.01222 3.0119976,3.0119976 0 0 1 3.01223,-3.011702 z"
                        strokeWidth="0.937" strokeLinejoin="round" />
                        <g transform="matrix(.01024 0 0 .01024 -328.341 48.178)" id="g5762">
                            <path d="m 364.427,259.214 c -14.051,-14.052 -32.733,-21.79 -52.605,-21.79 -10.619,0 -20.888,2.23 -30.302,6.431 -1.076,-1.701 -2.341,-3.298 -3.799,-4.756 l -54.188,-54.188 95.825,-95.825 c 2.645,2.529 5.363,3.085 7.197,3.085 4.06,0 6.8,-2.535 7.308,-3.042 L 356.06,66.932 c 3.771,-3.771 5.563,-7.434 5.477,-11.197 -0.135,-5.897 -4.599,-9.968 -9.767,-14.683 -1.53,-1.395 -3.111,-2.838 -4.7,-4.426 -1.588,-1.588 -3.03,-3.169 -4.426,-4.699 -4.782,-5.243 -8.912,-9.771 -14.939,-9.771 -3.676,0 -7.255,1.793 -10.941,5.48 l -22.281,22.281 c -2.746,2.746 -5.103,9.066 0.122,14.426 l -95.821,95.821 -56.131,-56.131 c 4.012,-9.232 6.137,-19.269 6.137,-29.638 0,-19.872 -7.739,-38.555 -21.791,-52.607 C 112.95,7.737 94.27,0 74.4,0 67.768,0 61.168,0.881 54.785,2.62 c -2.513,0.684 -4.569,2.752 -5.238,5.268 -0.683,2.565 0.096,5.206 2.121,7.232 0.266,0.267 26.668,26.873 35.46,35.665 1.31,1.31 1.193,4.015 1.058,4.81 l -0.069,0.489 c -1.005,10.964 -3.034,24.215 -4.565,27.493 -3.303,1.581 -16.767,3.637 -27.911,4.633 l -0.149,-0.013 -0.302,0.072 c -0.082,0.009 -0.26,0.024 -0.508,0.024 -1.253,0 -3.096,-0.349 -4.758,-2.011 C 40.773,77.13 15.387,51.932 15.145,51.692 13.085,49.632 10.998,49.2 9.609,49.2 6.384,49.2 3.497,51.549 2.587,54.913 -4.357,80.592 3,108.214 21.786,127 c 14.051,14.051 32.733,21.79 52.606,21.79 10.369,0 20.407,-2.126 29.639,-6.137 l 56.131,56.131 -22.013,22.013 c -3.536,-1.853 -7.497,-2.839 -11.618,-2.839 -6.693,0 -12.972,2.592 -17.678,7.298 l -12.282,12.283 c -1.175,-0.166 -2.369,-0.254 -3.578,-0.254 -6.692,0 -12.971,2.592 -17.677,7.298 l -64.351,64.35 c -4.707,4.706 -7.299,10.984 -7.299,17.678 0,6.693 2.592,12.971 7.299,17.678 l 28.44,28.44 c 4.706,4.706 10.984,7.298 17.678,7.298 6.692,0 12.971,-2.592 17.677,-7.298 l 64.35,-64.35 c 4.707,-4.706 7.299,-10.984 7.299,-17.678 0,-1.209 -0.087,-2.404 -0.254,-3.579 l 12.282,-12.282 c 4.707,-4.707 7.299,-10.984 7.299,-17.678 0,-4.121 -0.986,-8.082 -2.839,-11.618 l 22.013,-22.013 54.188,54.188 c 1.458,1.457 3.055,2.723 4.755,3.798 -4.201,9.414 -6.431,19.684 -6.431,30.302 0,19.873 7.739,38.555 21.791,52.607 14.048,14.048 32.729,21.785 52.6,21.786 0.001,0 0.001,0 0.003,0 6.63,0 13.23,-0.882 19.614,-2.62 2.513,-0.684 4.568,-2.752 5.236,-5.268 0.682,-2.565 -0.097,-5.206 -2.122,-7.23 -0.266,-0.267 -26.667,-26.874 -35.459,-35.666 -1.31,-1.31 -1.193,-4.015 -1.058,-4.811 l 0.069,-0.489 c 1.005,-10.964 3.034,-24.214 4.565,-27.493 3.303,-1.581 16.767,-3.637 27.911,-4.633 l 0.149,0.013 0.301,-0.072 c 0.083,-0.009 0.261,-0.024 0.508,-0.024 1.253,0 3.097,0.349 4.76,2.012 9.15,9.151 34.536,34.349 34.778,34.589 2.06,2.06 4.147,2.493 5.536,2.493 3.225,0 6.112,-2.349 7.023,-5.713 6.945,-25.677 -0.413,-53.299 -19.2,-72.086 z m -278.221,70.499 -7.226,7.226 c -7.778,7.778 -20.506,7.778 -28.284,0 l -3.94,-3.941 c -7.778,-7.778 -7.778,-20.506 0,-28.284 l 7.226,-7.226 c 7.778,-7.778 20.506,-7.778 28.284,0 l 3.941,3.941 c 7.777,7.778 7.777,20.506 -10e-4,28.284 z m 159.465,-84.042 c -1.465,1.464 -3.385,2.197 -5.304,2.197 -1.92,0 -3.839,-0.732 -5.304,-2.197 l -88.414,-88.414 c -2.929,-2.929 -2.929,-7.678 0,-10.607 2.931,-2.93 7.679,-2.929 10.607,0 l 27.519,27.519 v 0 l 24.749,24.749 v 0 l 36.146,36.147 c 2.93,2.929 2.93,7.678 0.001,10.606 z"
                            id="path5730" />
                        </g>
                    </g>
                </g>
            </svg>
        } else if( icon === 'credentials') {
            return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} 
                viewBox="0 0 8.4568129 8.4735926" id="svg8">
                    <g id="layer2" transform="translate(84.561 -80.202)">
                        <g id="g5840" transform="matrix(.97554 0 0 1.03848 285.272 10.057)" stroke={strokeColor}
                        strokeLinejoin="round">
                            <path d="m -377.71033,67.636776 c -0.18693,0.0024 -0.33127,0.152437 -0.32364,0.3365 l 0.1328,3.200529 a 1.5884513,1.537829 30 0 0 -1.14659,1.521611 1.5884513,1.537829 30 0 0 1.63897,1.530685 1.5884513,1.537829 30 0 0 1.5103,-1.57034 1.5884513,1.537829 30 0 0 -1.2716,-1.491164 l -0.0444,-1.069873 c 0.009,4.49e-4 0.0187,0.0011 0.0282,9.4e-4 l 1.51839,-0.01912 c 0.18693,-0.0024 0.3318,-0.14008 0.32479,-0.308811 -0.007,-0.168715 -0.16312,-0.302674 -0.35006,-0.300316 l -1.51839,0.01912 c -0.009,2.43e-4 -0.0188,7.96e-4 -0.0281,0.0015 l -0.0632,-1.524018 c -0.008,-0.184093 -0.16428,-0.330359 -0.35121,-0.328012 z m -0.15716,4.17116 c 0.0384,0.15021 0.17816,0.260928 0.34097,0.258879 l 0.0562,-7.39e-4 c 0.1628,-0.0021 0.29322,-0.116162 0.31916,-0.267173 a 0.96441684,0.93368182 30 0 1 0.63403,0.864633 0.96441684,0.93368182 30 0 1 -0.91696,0.953425 0.96441684,0.93368182 30 0 1 -0.9951,-0.929348 0.96441684,0.93368182 30 0 1 0.56169,-0.879674 z"
                            id="path5821" fill={strokeColor} strokeWidth="0.112" />
                            <g transform="translate(.33 3.109)" id="g5834" fill="none" fillOpacity="0.933"
                            strokeLinecap="round">
                                <rect id="rect5823" width="5.051" height="4.49" x="-376.083" y="67.842"
                                ry="0.561" strokeWidth="0.529" paintOrder="stroke markers fill" />
                                <path d="m -78.912749,239.34375 c -3.530924,0 -4.173189,3.15882 -4.173189,4.33403 v 5.56441 h 11.314454 v -5.05373 c 0,-1.17521 -0.640312,-4.84471 -4.171236,-4.84471 z"
                                transform="matrix(.26458 0 0 .26458 -353.07 1.507)" id="rect5825" strokeWidth="3"
                                paintOrder="stroke markers fill" />
                            </g>
                        </g>
                    </g>
            </svg>
        }   else if( icon === 'comments') {
            return <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height}
            viewBox='0 0 8.7174778 8.7393768' id='svg8'>
                <g id='layer2' transform='translate(80.796 -108.97)'>
                    <g id='g13332' transform='matrix(.48727 0 0 .51349 -107.832 57.032)' strokeWidth='1.058'
                    stroke={strokeColor}>
                        <path id='path13328' transform='matrix(.26458 0 0 .26458 0 0)' d='m 243.51367,384.29102 c -17.56897,-4.6e-4 -31.81151,10.10057 -31.81055,22.56054 0.003,9.0356 7.60775,17.19823 19.32618,20.74414 3.03057,1.59565 7.0628,3.84176 10.09375,6.06446 5.3033,3.88905 11.66797,10.95898 11.66797,10.95898 0,0 -1.06089,-8.13231 2.12109,-12.72852 7.64227,-7.92086 20.13217,-12.99077 20.41016,-25.03906 9.6e-4,-12.45943 -14.24039,-22.56024 -31.8086,-22.56054 z'
                        fill='none' strokeWidth='3.998' strokeLinecap='round' strokeLinejoin='round'
                        />
                        <path id='path13330' d='m 59.597397,107.94999 h 9.128125' fill={strokeColor}
                        />
                    </g>
                </g>
            </svg>
        } else if ( icon === 'test'){
            return <svg xmlns="http://www.w3.org/2000/svg"  width={width} height={height}
            viewBox="0 0 8.4809208 8.4427107" id="svg8">
                <g id="layer2" transform="translate(79.833 -138.905)">
                    <g id="g5708" transform="matrix(1.19734 0 0 1.0548 -89.665 113.54)" fill="none"
                    stroke={strokeColor} strokeWidth="0.529">
                        <path id="path5704" d="m 8.6244111,24.214646 3.2203959,3.9527 -3.439584,3.704167"
                        />
                        <path id="path5706" d="M 10.944689,31.765172 H 15.2945" />
                    </g>
                </g>
            </svg>
        } else if ( icon === 'docs') {
            return <svg xmlns="http://www.w3.org/2000/svg"  width={width} height={height}
            viewBox="0 0 8.7235365 8.6012734" id="svg8">
                <g id="layer2" transform="translate(96.939 -160.005)">
                    <g transform="translate(-105.895 83.252)" id="g13502">
                        <path id="path13492" d="m 10.313394,76.75522 c -0.7481907,0 -1.3505042,0.649337 -1.3505042,1.455945 v 4.182632 c 0,0.678745 -0.1020124,1.244445 0.4789962,1.407278 C 9.413435,83.683074 9.396752,83.559883 9.396752,83.432019 v -4.182631 c 0,-0.806608 1.131481,-1.985112 1.879671,-1.985112 h 4.521713 c 0.118615,0 0.23288,0.01799 0.342341,0.04866 -0.151051,-0.626389 -0.675771,-0.557722 -1.30537,-0.557722 z"
                        fill={strokeColor} strokeWidth="0.5" strokeLinejoin="round" />
                        <rect ry="1.456" y="78.01" x="10.207" height="7.095" width="7.223" id="rect13494"
                        fill="none" stroke={strokeColor} strokeWidth="0.5" strokeLinejoin="round" />
                        <path id="path13496" d="m 11.646271,80.642085 h 4.583673" fill="none"
                        stroke={strokeColor} strokeWidth="0.529" />
                        <path d="m 11.646271,82.138794 h 4.583673" id="path13498" fill="none"
                        stroke={strokeColor} strokeWidth="0.529" />
                        <path id="path13500" d="m 11.646271,83.541959 h 4.583673" fill="none"
                        stroke={strokeColor} strokeWidth="0.529" />
                    </g>
                </g>
            </svg>
        } else if (icon === 'sdk'){
            return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 8.3962813 8.4666231"
            id="svg8">
                <g id="layer2" transform="translate(99.686 -182.41)">
                    <g id="g4078" transform="translate(-107.97 77.96)" fill="none" stroke={strokeColor}
                    strokeWidth="0.417">
                        <path d="m 10.662658,104.66064 -2.1402122,4.09743 2.3487482,3.94685" id="path4072"
                        strokeLinecap="round" />
                        <path id="path4074" d="m 14.300967,104.66064 2.140212,4.09743 -2.348749,3.94685"
                        strokeLinecap="round" />
                        <path d="m 11.8866,112.70492 1.39896,-8.04428" id="path4076" />
                    </g>
                </g>
            </svg>
        } else if ( icon === 'subscriptions'){
            return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} 
            viewBox="0 0 8.428752 8.6233671" id="svg8">
                <g id="layer2" transform="translate(105.022 -106.571)">
                    <g transform="matrix(.84802 0 0 .87176 -110.085 63.188)" id="g5876" strokeLinecap="round">
                        <circle id="circle5869" cx="8.138" cy="57.583" r="1.497" fill={strokeColor}
                        strokeWidth="0.529" strokeLinejoin="round" />
                        <path d="m 6.6416492,53.373914 c 2.7091648,-0.363432 5.5994938,2.122181 5.7062048,5.612659"
                        id="path5872" fill="none" stroke={strokeColor} strokeWidth="1.323" />
                        <path id="path5874" d="m 6.7351935,50.47404 c 5.1370835,-0.52388 7.9751195,3.245055 8.5125345,8.512533"
                        fill="none" stroke={strokeColor} strokeWidth="1.323" />
                    </g>
                </g>
            </svg>
        } else if ( icon === 'applications' ){
            return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} 
            viewBox="0 0 8.4505663 8.3507221" id="svg8">
                <g id="layer2" transform="translate(123.263 -67.386)">
                    <g id="g5908" transform="matrix(1.00352 0 0 .99166 -122.928 40.99)" fill={strokeColor}>
                        <circle r="3.946" cy="30.828" cx="3.877" id="circle5894" fill="none" stroke={strokeColor}
                        strokeWidth="0.529" strokeLinecap="round" strokeLinejoin="round" />
                        <g transform="matrix(.70376 0 0 .70376 -3.385 9.22)" id="g5902" strokeWidth="0.529"
                        strokeLinecap="round" strokeLinejoin="round">
                            <path id="path5896" d="M 4.7613342,33.375515 C 4.8631294,33.213704 4.9670191,33.05335 5.0722839,32.893801 5.1386022,32.78256 5.206498,32.671647 5.2840974,32.56775 c 0.046965,-0.06795 0.094122,-0.136253 0.1377834,-0.206412 0.053525,-0.08978 0.087344,-0.188415 0.1309729,-0.282686 0.049209,-0.08677 0.087411,-0.175554 0.1418453,-0.259125 0.038288,-0.082 0.080276,-0.162084 0.1283769,-0.238803 0.066997,-0.0819 0.1429599,-0.15477 0.2044165,-0.241358 0.080426,-0.07808 0.1281639,-0.180477 0.1972413,-0.266009 0.063695,-0.05662 0.072795,-0.137237 0.100606,-0.212228 0.041434,-0.0658 0.05889,-0.140472 0.086826,-0.211693 0.051833,-0.06909 0.063968,-0.154456 0.1048719,-0.228026 0.040122,-0.06828 0.080049,-0.136649 0.11949,-0.205428 0.029448,-0.08488 0.075636,-0.161821 0.1086824,-0.245242 0.011192,-0.08303 0.067464,-0.133776 0.1103789,-0.199088 0.032786,-0.07541 0.07196,-0.14477 0.092765,-0.224954 0.012501,-0.07873 0.079614,-0.127881 0.1025321,-0.20342 0.029945,-0.06213 0.061462,-0.123261 0.09096,-0.185904 0.024508,-0.07918 0.078013,-0.138464 0.098885,-0.219729 0.034286,-0.08109 0.067554,-0.162597 0.1169305,-0.235756 0.042013,-0.08273 0.087005,-0.164219 0.1324602,-0.245597 0.02028,-0.08863 0.061221,-0.161753 0.1139984,-0.234551 0.024455,-0.04246 0.023831,-0.09634 0.023447,-0.144253 0.017671,-0.05197 0.051315,-0.09226 0.074691,-0.142539 0.012774,-0.06633 0.050109,-0.123804 0.07442,-0.18641 0.021384,-0.05539 0.03159,-0.112257 0.034506,-0.171288 -0.00148,-0.05331 0.020579,-0.102108 0.05846,-0.138798 0.027456,-0.04587 0.02797,-0.09933 0.0466,-0.147876 0.03144,-0.06336 0.07198,-0.108405 0.130524,-0.146806 0.03787,-0.05381 0.1015656,-0.07433 0.1381413,-0.128739 0.014124,-0.0475 0.00842,-0.101131 0.00565,-0.150286 0,0 0.6520503,-0.0028 0.6520503,-0.0028 v 0 c 0.00175,0.06224 0.00717,0.125208 -0.00604,0.186708 -0.032643,0.06536 -0.072739,0.105857 -0.1398024,0.134168 -0.040293,0.08802 -0.1033822,0.04113 -0.1292135,0.146264 -0.029212,0.0087 -0.024029,0.118147 -0.046758,0.148227 -0.020328,0.03962 -0.064491,0.0515 -0.057182,0.104778 -0.00642,0.06382 -0.00975,0.12746 -0.037203,0.186812 -0.019886,0.0717 -0.065789,0.124431 -0.071968,0.197628 -0.023556,0.03923 -0.025405,0.100711 -0.07474,0.111283 -0.00119,0.06261 -0.00259,0.125916 -0.024826,0.185481 -0.054673,0.07202 -0.1056624,0.130747 -0.1146701,0.226661 -0.048,0.08249 -0.09728,0.162282 -0.1332887,0.249378 -0.043781,0.0697 -0.08186,0.138652 -0.1156239,0.214963 -0.00864,0.03228 -0.013256,0.06589 -0.025728,0.0969 -0.013534,0.03364 -0.054565,0.06098 -0.065743,0.09292 -0.00487,0.01389 -0.00393,0.02919 -0.00589,0.04378 -0.031382,0.0577 -0.049296,0.120462 -0.09279,0.170043 -0.00909,0.04981 -0.028578,0.111027 -0.066676,0.148291 -0.00731,0.0071 -0.021926,0.0048 -0.027626,0.01334 -0.00789,0.01175 -0.00612,0.02765 -0.00918,0.04147 -0.017571,0.08895 -0.058932,0.162595 -0.091392,0.244393 -0.037048,0.0726 -0.1039921,0.101328 -0.1111927,0.190651 -0.036358,0.08496 -0.078514,0.163587 -0.1088776,0.250698 -0.034831,0.07483 -0.087342,0.14037 -0.1205632,0.216673 -0.061595,0.05065 -0.035616,0.159104 -0.103472,0.21377 -0.036118,0.06573 -0.03606,0.148918 -0.086634,0.209423 -0.037399,0.07874 -0.037097,0.173347 -0.1032523,0.239212 -0.086288,0.05613 -0.1007163,0.194321 -0.1976435,0.249661 -0.052372,0.09375 -0.1280837,0.167971 -0.2028502,0.244875 -0.055168,0.06905 -0.089512,0.154617 -0.1285743,0.233727 -0.0091,0.0168 -0.018203,0.03358 -0.027306,0.05038 -0.010681,0.0098 -0.024593,0.01693 -0.032047,0.02937 -0.031954,0.05328 -0.033363,0.129217 -0.082572,0.174985 -0.050238,0.09091 -0.074362,0.19571 -0.1296654,0.284895 -0.037724,0.0776 -0.097396,0.143473 -0.1407623,0.218334 -0.086158,0.09495 -0.1428337,0.212937 -0.2133743,0.319106 -0.1035939,0.159317 -0.213396,0.31464 -0.3088825,0.479272 0,0 -0.6472568,-0.03501 -0.6472568,-0.03501 z"
                            />
                            <path id="path5898" d="m 8.9406345,27.068147 c 0.03928,0.271561 0.1142992,0.530887 0.2147708,0.785186 0.086483,0.205163 0.1890273,0.401238 0.2603582,0.613516 0.070461,0.218844 0.165,0.427786 0.2477624,0.642119 0.079807,0.194493 0.1480569,0.396275 0.2589356,0.575734 0.076306,0.128944 0.1479585,0.260183 0.2206245,0.391689 0.06479,0.111477 0.143088,0.217355 0.228409,0.31382 0.06375,0.121904 0.141677,0.232738 0.221708,0.343513 0.08297,0.112538 0.148314,0.236686 0.228788,0.350661 0.06197,0.09098 0.08371,0.204687 0.138563,0.298767 0.02459,0.04217 0.05788,0.07879 0.08307,0.120603 0.09339,0.104277 0.162343,0.223009 0.243071,0.336523 0.03683,0.107622 0.113293,0.187598 0.18476,0.273661 0.07603,0.06777 0.116486,0.16972 0.205363,0.22057 0.0099,0.05748 0.07913,0.06809 0.108122,0.102592 0.03135,0.03731 0.03593,0.06919 0.07422,0.10272 0.06019,0.05314 0.104443,0.121745 0.165394,0.173307 0.05538,0.006 0.06625,0.05262 0.100695,0.08493 0.02945,0.02762 0.06865,0.03055 0.09965,0.06016 0.03142,0.104217 0.07447,0.05341 0.114292,0.105209 0.02913,0.05601 0.06914,0.108601 0.13026,0.136141 0.0325,0.08727 0.144098,0.0773 0.186097,0.14378 0,0 -0.650204,0.05069 -0.650204,0.05069 v 0 c -0.07407,-0.02577 -0.12331,-0.08137 -0.1836,-0.128254 -0.05203,-0.04043 -0.08648,-0.09588 -0.132182,-0.142603 -0.05742,-0.0092 -0.07409,-0.06998 -0.11301,-0.105838 -0.0733,-0.04353 -0.130195,-0.105199 -0.200836,-0.152535 -0.05352,-0.05979 -0.110175,-0.116996 -0.166022,-0.174535 -0.05791,-0.0676 -0.111836,-0.136816 -0.179897,-0.195514 -0.07705,-0.07087 -0.133901,-0.1607 -0.206752,-0.236056 -0.07115,-0.08704 -0.13967,-0.175305 -0.184253,-0.279731 -0.07559,-0.116591 -0.156646,-0.228947 -0.241041,-0.339185 -0.0862,-0.133636 -0.14698,-0.276585 -0.221396,-0.416822 C 10.100126,31.00656 10.027374,30.88799 9.9462258,30.774777 9.8650119,30.66615 9.798756,30.549119 9.7251664,30.435309 9.6425603,30.331201 9.556529,30.227995 9.4960391,30.108916 9.424744,29.97831 9.3521796,29.84859 9.2784921,29.719457 9.17104,29.53435 9.1019039,29.330065 9.0209152,29.132479 8.9390618,28.916934 8.8418947,28.707828 8.7716729,28.487875 8.6999415,28.27746 8.5951681,28.083216 8.5139688,27.877201 8.413852,27.617256 8.3449392,27.351371 8.2939018,27.077326 c 0,0 0.6467327,-0.0092 0.6467327,-0.0092 z"
                            />
                            <path id="path5900" d="m 6.0945796,31.324089 c 0.162945,-0.0873 0.3167404,-0.191071 0.4814803,-0.274971 0.086928,-0.06072 0.180439,-0.109873 0.271567,-0.163562 0.071097,-0.01685 0.1371349,-0.04314 0.1975789,-0.08479 0.067101,-0.02778 0.1125578,-0.08835 0.1827927,-0.108316 0.070079,-0.03781 0.1348865,-0.08351 0.1986968,-0.131058 0.050026,-0.04346 0.1099759,-0.06732 0.1687888,-0.0958 0.056322,-0.04479 0.1123673,-0.09074 0.167649,-0.137189 0.062041,-0.05378 0.1304343,-0.1011 0.2009119,-0.143266 0.076139,-0.05258 0.1548376,-0.100124 0.2370079,-0.142679 0.059735,-0.0285 0.1183823,-0.05858 0.1791854,-0.08524 0.067183,-0.03379 0.1317321,-0.07035 0.2059003,-0.09107 0.075807,-0.0091 0.144103,-0.03785 0.2143221,-0.06582 0.067399,-0.0182 0.1190852,-0.05515 0.1763429,-0.09197 0.052224,-0.02864 0.084841,-0.08315 0.1391303,-0.109643 0.023897,-0.04096 0.048641,-0.08841 0.096125,-0.105707 0.05263,-0.01442 0.0918,-0.05441 0.1394135,-0.08159 0.050501,-0.0099 0.084504,-0.04599 0.1271323,-0.07109 0.03788,-0.03183 0.078521,-0.0605 0.1094552,-0.09932 0.033503,-0.04383 0.071352,-0.0394 0.1038249,-0.08697 0.047919,-0.02903 0.09508,-0.0498 0.1405011,-0.08368 0.036571,-0.03275 0.084568,-0.04318 0.1265097,-0.06534 0.028147,-0.0403 0.077267,-0.05122 0.1116494,-0.08328 0.04514,-0.01775 0.09483,-0.0071 0.13997,-0.0223 0.03576,-0.02302 0.01801,-0.01222 0.05317,-0.03249 0,0 0.648075,0.07005 0.648075,0.07005 v 0 c -0.03466,0.01736 -0.01719,0.0085 -0.05241,0.0265 -0.0443,0.04256 -0.08103,0.0525 -0.141238,0.04325 -0.02607,-0.0141 -0.07764,0.03788 -0.108526,0.0449 -0.03409,0.05733 -0.08075,0.05181 -0.129516,0.08694 -0.05165,0.02024 -0.07574,0.07847 -0.138057,0.07179 -0.04044,0.0068 -0.0449,0.122219 -0.101165,0.06317 -0.02491,0.05589 -0.07114,0.08535 -0.112654,0.126471 -0.03778,0.03516 -0.08478,0.06694 -0.1303142,0.09129 -0.060019,0.0073 -0.089149,0.0579 -0.1367521,0.07508 -0.038158,0.02209 -0.086344,0.01545 -0.094571,0.07519 -0.029606,0.05841 -0.1141365,0.07207 -0.142957,0.140753 -0.068018,0.01823 -0.1000321,0.08896 -0.1760328,0.09199 -0.068599,0.03575 -0.1412267,0.06901 -0.2172153,0.08049 -0.07429,0.0097 -0.1531146,0.02669 -0.2034182,0.08653 -0.065558,0.0081 -0.1288876,0.04234 -0.1809867,0.08242 -0.086451,0.01106 -0.1594593,0.08306 -0.2337361,0.12556 -0.064336,0.04627 -0.1354915,0.08366 -0.2001358,0.130652 -0.051199,0.05747 -0.1203698,0.08991 -0.1679459,0.15127 -0.05536,0.04234 -0.122174,0.05093 -0.1696635,0.0958 -0.070371,0.0358 -0.1213287,0.102404 -0.1975231,0.127042 -0.034028,0.03742 -0.051916,0.01484 -0.088635,0.04191 -0.032556,0.024 -0.050493,0.06271 -0.094409,0.07137 -0.064781,0.03469 -0.1235374,0.09695 -0.2003015,0.0954 -0.08813,0.01826 0.015163,-0.0096 -0.077898,0.04203 -0.065611,0.03641 -0.1436725,0.05742 -0.1968458,0.117269 -0.1685594,0.07326 -0.3178233,0.182411 -0.4795059,0.268705 0,0 -0.6447653,-0.06667 -0.6447653,-0.06667 z"
                            />
                        </g>
                        <g id="text5906"
                        fontWeight="400" fontSize="2.238" fontFamily="Silom" letterSpacing="0"
                        wordSpacing="0" strokeWidth="0.153">
                            <path d="m 4.7714347,30.569627 h 0.3737781 v 0.18577 q 0,-0.094 0.047002,-0.138768 0.047002,-0.047 0.1387679,-0.047 h 0.1880081 q 0.1521971,0 0.2618685,0.109671 0.1096714,0.109671 0.1096714,0.261869 v 0.559548 q 0,0.154435 -0.1096714,0.264106 -0.1096714,0.109672 -0.2618685,0.109672 h -0.373778 v 0.373778 H 4.7714347 Z m 0.3737781,1.119096 h 0.1857699 q 0.078337,0 0.1320533,-0.05372 0.055955,-0.05596 0.055955,-0.134291 v -0.559548 q 0,-0.0761 -0.055955,-0.129816 -0.053717,-0.05595 -0.1320533,-0.05595 -0.076098,0 -0.1320533,0.05595 -0.053717,0.05372 -0.053717,0.129816 z"
                            id="path13779" />
                            <path d="m 6.266477,30.569627 h 0.3737781 v 0.18577 q 0,-0.094 0.047002,-0.138768 0.047002,-0.047 0.1387679,-0.047 h 0.1880082 q 0.152197,0 0.2618684,0.109671 0.1096715,0.109671 0.1096715,0.261869 v 0.559548 q 0,0.154435 -0.1096715,0.264106 -0.1096714,0.109672 -0.2618684,0.109672 H 6.6402551 v 0.373778 H 6.266477 Z m 0.3737781,1.119096 H 6.826025 q 0.078337,0 0.1320534,-0.05372 0.055955,-0.05596 0.055955,-0.134291 v -0.559548 q 0,-0.0761 -0.055955,-0.129816 -0.053717,-0.05595 -0.1320534,-0.05595 -0.076098,0 -0.1320533,0.05595 -0.053717,0.05372 -0.053717,0.129816 z"
                             id="path13781" />
                        </g>
                    </g>
                </g>
            </svg>
        } else if ( icon === 'forum'){
            return <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} 
            viewBox='0 0 8.3807926 8.5141972' id='svg8'>
                <g id='layer2' transform='translate(99.1 -122.406)'>
                    <g id='g5232' transform='matrix(.64374 0 0 .84004 -35.293 20.962)' stroke={strokeColor}>
                        <path id='path5713' d='m -91.233427,124.2468 h 2.860358' fill={strokeColor}
                        strokeWidth='0.529' />
                        <g id='g5211' transform='matrix(-.48727 0 0 .51349 -63.367 70.219)' strokeWidth='1.058'>
                            <path id='path5207' transform='matrix(.26458 0 0 .26458 0 0)' d='m 243.51367,388.92759 c -17.56897,-4.6e-4 -31.81151,5.464 -31.81055,17.92397 0.003,9.0356 7.60775,17.19823 19.32618,20.74414 3.03057,1.59565 7.0628,3.84176 10.09375,6.06446 5.3033,3.88905 11.66797,10.95898 11.66797,10.95898 0,0 -1.06089,-8.13231 2.12109,-12.72852 7.64227,-7.92086 20.13217,-12.99077 20.41016,-25.03906 9.6e-4,-12.45943 -14.24039,-17.92367 -31.8086,-17.92397 z'
                            fill='none' strokeWidth='3.998' strokeLinecap='round' strokeLinejoin='round'
                            />
                            <path id='path5209' d='m 63.94133,107.94999 h 4.784192' fill={strokeColor}
                            />
                        </g>
                        <path id='path5215' d='m -90.46618,121.02578 c -1.478217,-4e-5 -3.423998,1.10492 -3.491778,2.0929 1.880264,0.27914 3.2981,0.88779 3.297991,2.37505 -2.06e-4,0.65662 -0.282968,1.27864 -0.775146,1.78955 0.231067,0.14294 0.462103,0.29632 0.660425,0.44959 0.68372,0.52837 1.504301,1.4888 1.504301,1.4888 0,0 -0.136864,-1.10466 0.273368,-1.7291 0.985268,-1.07614 2.595524,-1.76497 2.631364,-3.40186 1.23e-4,-1.69274 -1.835571,-3.06489 -4.100525,-3.06493 z'
                        fill='none' strokeWidth='0.529' strokeLinecap='round' strokeLinejoin='round'
                        />
                        <path id='path5219' d='m -92.406727,125.64996 h -4.447859' fill={strokeColor}
                        strokeWidth='0.529' />
                    </g>
                </g>
            </svg>
        } else if ( icon === 'keys'){
            return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}
            viewBox="0 0 9.8881274 7.2221771" id="svg8">
                <g id="layer25" transform="translate(36.575 -55.028)">
                    <g transform="translate(-43.821 -15.122) scale(.93173)" id="g10309">
                        <g id="g10305" transform="matrix(.59773 0 0 .59773 8.88 46.917)" strokeLinecap="round">
                            <circle r="1.497" cy="57.583" cx="8.138" id="circle10299" fill={strokeColor}
                            strokeWidth="0.529" strokeLinejoin="round" />
                            <path id="path10301" d="m 6.6416492,53.373914 c 2.7091648,-0.363432 5.5994938,2.122181 5.7062048,5.612659"
                            fill="none" stroke={strokeColor} strokeWidth="1.323" />
                            <path d="m 6.7351935,50.47404 c 5.1370835,-0.52388 7.9751195,3.245055 8.5125345,8.512533"
                            id="path10303" fill="none" stroke={strokeColor} strokeWidth="1.323" />
                        </g>
                        <path d="m 13.270424,82.869816 c 0.202009,-0.123999 0.264813,-0.386454 0.140817,-0.588463 l -2.15606,-3.512502 a 1.9966529,1.9966529 0 0 0 0.291837,-2.455259 1.9966529,1.9966529 0 0 0 -2.746164,-0.657136 1.9966529,1.9966529 0 0 0 -0.657136,2.746165 1.9966529,1.9966529 0 0 0 2.32141,0.851187 l 0.720727,1.174159 c -0.01053,0.0054 -0.02102,0.01091 -0.03127,0.0172 l -1.640879,1.007211 c -0.20201,0.123999 -0.273132,0.372901 -0.159465,0.558078 0.113665,0.185175 0.3678,0.234429 0.569812,0.110425 l 1.640878,-1.00721 c 0.01024,-0.0063 0.02,-0.01304 0.0296,-0.01993 l 1.026666,1.672574 c 0.123999,0.202009 0.386454,0.264813 0.588463,0.140817 z m -2.450446,-4.792127 c -0.13624,-0.143956 -0.357939,-0.17773 -0.533882,-0.06973 l -0.06077,0.03731 c -0.175941,0.107998 -0.246189,0.320971 -0.179518,0.507607 a 1.2122535,1.2122535 0 0 1 -1.233611,-0.560605 1.2122535,1.2122535 0 0 1 0.398974,-1.667314 1.2122535,1.2122535 0 0 1 1.667315,0.398975 1.2122535,1.2122535 0 0 1 -0.05853,1.353753 z"
                        id="path10307" fill={strokeColor} stroke={strokeColor} strokeWidth="0.143" strokeLinejoin="round"
                        />
                    </g>
                </g>
            </svg>
        } else if ( icon === 'keys'){
            return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}
            viewBox="0 0 6.5989004 6.5674281" id="svg8">
                <g id="layer25" transform="translate(35.929 -86.734)">
                    <g transform="matrix(.66392 0 0 .66392 -39.893 53.694)" id="g10459" strokeLinecap="round">
                        <circle id="circle10453" cx="8.138" cy="57.583" r="1.497" fill={strokeColor}
                        strokeWidth="0.529" strokeLinejoin="round" />
                        <path d="m 6.6416492,53.373914 c 2.7091648,-0.363432 5.5994938,2.122181 5.7062048,5.612659"
                        id="path10455" fill="none" stroke={strokeColor} strokeWidth="1.323" />
                        <path id="path10457" d="m 6.7351935,50.47404 c 5.1370835,-0.52388 7.9751195,3.245055 8.5125345,8.512533"
                        fill="none" stroke={strokeColor} strokeWidth="1.323" />
                    </g>
                </g>
            </svg>
        }
        
    }
}