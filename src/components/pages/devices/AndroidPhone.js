import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { androidApi } from "../../../services/iPhoneApiService";
import { addToCart } from "../../../store/actions/cart";
import { isEmpty } from "../../../validation/index";
import LoaderSpinner from "../../Loader/loaderSpinner";
import att from './Carrier/att.png';

import cricket from './Carrier/cricket.png';
import sprint from './Carrier/sprint.png';
import tmobile from './Carrier/tmobile.png';
import usCellular from './Carrier/usCellular.png';
import verizon from './Carrier/verizon.png';
import xfinity from './Carrier/xfinity.png';

const deviceList = [
    {
        device: 'Galaxy Z-Fold Series',
        deviceLabel: 'GalaxyZFoldSeries',
        devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/galaxy-z-fold-series.jpg',
        modal: [
            {
                devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/Galaxy+Fold+Black.jpg',
                label: "Galaxy Fold",
                capacity: [],
                carrier: [
                    {
                        label: 'att',
                        img: att
                    },
                    {
                        label: 'unlocked'
                    }
                ],
                imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/Galaxy+Fold+Black.jpg"
            },
            {
                devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/galaxy-z-flip.jpg',
                label: "Galaxy Z-Flip",
                capacity: [],
                carrier: [
                    {
                        label: 'att',
                        img: att
                    },
                    {
                        label: 'sprint',
                        img: sprint
                    },
                    {
                        label: 'unlocked'
                    }
                ],
                imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/galaxy-z-flip.jpg"
            }
        ]
    },
    {
        device: 'Galaxy S Series',
        deviceLabel: 'GalaxySSeries',
        devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/galaxy-s-series.jpg',
        modal: [
            {
                devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/galaxy_s20.jpg',
                label: "Galaxy S20 5G",
                capacity: [],
                carrier: [
                    {
                        label: 'att',
                        img: att
                    },
                    {
                        label: 'sprint',
                        img: sprint
                    },
                    {
                        label: 'tmobile',
                        img: tmobile
                    },

                    {
                        label: 'US Cellular',
                        img: usCellular
                    },
                    {
                        label: 'unlocked'
                    }

                ],
                imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/galaxy_s20.jpg"
            },
            {
                devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/galaxy_s20ultra.jpg',
                label: "Galaxy S20 Ultra 5G",
                capacity: ["128 GB", "512 GB"],
                carrier: [
                    {
                        label: 'att',
                        img: att
                    },
                    {
                        label: 'sprint',
                        img: sprint
                    },
                    {
                        label: 'tmobile',
                        img: tmobile
                    },
                    {
                        label: 'verizon',
                        img: verizon
                    },
                    {
                        label: 'Xfinity',
                        img: xfinity
                    },
                    {
                        label: 'Cricket',
                        img: cricket
                    },
                    {
                        label: 'US Cellular',
                        img: usCellular
                    },
                    {
                        label: 'unlocked'
                    },
                    {
                        label: 'other'
                    }
                ],
                imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/galaxy_s20ultra.jpg"
            },
            {
                devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/galaxy_s20plus.jpg',
                label: "Galaxy S20 5G",
                capacity: [],
                carrier: [
                    {
                        label: 'att',
                        img: att
                    },
                    {
                        label: 'sprint',
                        img: sprint
                    },
                    {
                        label: 'tmobile',
                        img: tmobile
                    },
                    {
                        label: 'verizon',
                        img: verizon
                    },

                    {
                        label: 'US Cellular',
                        img: usCellular
                    },
                    {
                        label: 'unlocked'
                    }
                ],
                imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/galaxy_s20plus.jpg"
            },
            {
                devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/galaxy-s10-lite.jpg',
                label: "Galaxy S10 Lite",
                capacity: [],
                carrier: [],
                imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/galaxy-s10-lite.jpg"
            },
            {
                devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/galaxy-s10-5g.jpg',
                label: "Galaxy S10 5G",
                capacity: ["256 GB", "512 GB"],
                carrier: [
                    {
                        label: 'sprint',
                        img: sprint
                    },
                    {
                        label: 'tmobile',
                        img: tmobile
                    },
                    {
                        label: 'verizon',
                        img: verizon
                    },
                    {
                        label: 'Cricket',
                        img: cricket
                    },
                    {
                        label: 'Xfinity',
                        img: xfinity
                    },
                    {
                        label: 'unlocked'
                    }
                ],
                imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/galaxy-s10-5g.jpg"
            },
            {
                devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/Galaxy-S10+plus.jpg',
                label: "Galaxy S10+",
                capacity: ["128 GB", "512 GB", "1 TB"],
                carrier: [
                    {
                        label: 'att',
                        img: att
                    },
                    {
                        label: 'sprint',
                        img: sprint
                    },
                    {
                        label: 'tmobile',
                        img: tmobile
                    },
                    {
                        label: 'verizon',
                        img: verizon
                    },
                    {
                        label: 'Xfinity',
                        img: xfinity
                    },
                    {
                        label: 'Cricket',
                        img: cricket
                    },
                    {
                        label: 'unlocked'
                    },
                    {
                        label: 'other'
                    }
                ],
                imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/Galaxy-S10+plus.jpg"
            },
            {
                devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/Galaxy-S10+plus.jpg',
                label: "Galaxy S10",
                capacity: ["128 GB", "512 GB"],
                carrier: [
                    {
                        label: 'att',
                        img: att
                    },
                    {
                        label: 'sprint',
                        img: sprint
                    },
                    {
                        label: 'tmobile',
                        img: tmobile
                    },
                    {
                        label: 'verizon',
                        img: verizon
                    },
                    {
                        label: 'Xfinity',
                        img: xfinity
                    },
                    {
                        label: 'Cricket',
                        img: cricket
                    },
                    {
                        label: 'unlocked'
                    },
                    {
                        label: 'other'
                    }
                ],
                imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/Galaxy-S10+plus.jpg"
            },
            {
                devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/Galaxy-S10e.jpg',
                label: "Galaxy S10e",
                capacity: ["128 GB", "256 GB"],
                carrier: [
                    {
                        label: 'att',
                        img: att
                    },
                    {
                        label: 'sprint',
                        img: sprint
                    },
                    {
                        label: 'tmobile',
                        img: tmobile
                    },
                    {
                        label: 'verizon',
                        img: verizon
                    },
                    {
                        label: 'Xfinity',
                        img: xfinity
                    },
                    {
                        label: 'Cricket',
                        img: cricket
                    },
                    {
                        label: 'unlocked'
                    },
                    {
                        label: 'other'
                    }
                ],
                imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/Galaxy-S10e.jpg"
            },
            {
                devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/Galaxy_S9_Plus_Midnight_Black.jpg',
                label: "Galaxy S9+",
                capacity: ["64 GB", "128 GB", "256 GB"],
                carrier: [
                    {
                        label: 'att',
                        img: att
                    },
                    {
                        label: 'sprint',
                        img: sprint
                    },
                    {
                        label: 'tmobile',
                        img: tmobile
                    },
                    {
                        label: 'verizon',
                        img: verizon
                    },
                    {
                        label: 'Xfinity',
                        img: xfinity
                    },
                    {
                        label: 'Cricket',
                        img: cricket
                    },
                    {
                        label: 'unlocked'
                    },
                    {
                        label: 'other'
                    }
                ],
                imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/Galaxy_S9_Plus_Midnight_Black.jpg"
            },
            {
                devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/Galaxy_S9_Plus_Midnight_Black.jpg',
                label: "Galaxy S9",
                capacity: ["64 GB", "128 GB", "256 GB"],
                carrier: [
                    {
                        label: 'att',
                        img: att
                    },
                    {
                        label: 'sprint',
                        img: sprint
                    },
                    {
                        label: 'tmobile',
                        img: tmobile
                    },
                    {
                        label: 'verizon',
                        img: verizon
                    },
                    {
                        label: 'Xfinity',
                        img: xfinity
                    },
                    {
                        label: 'Cricket',
                        img: cricket
                    },
                    {
                        label: 'unlocked'
                    },
                    {
                        label: 'other'
                    }
                ],
                imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/Galaxy_S9_Plus_Midnight_Black.jpg"
            },
            {
                devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/SamsungGalaxyS8_plus+black_160.jpg',
                label: "Galaxy S8+",
                capacity: ["64 GB", "128 GB"],
                carrier: [
                    {
                        label: 'att',
                        img: att
                    },
                    {
                        label: 'sprint',
                        img: sprint
                    },
                    {
                        label: 'tmobile',
                        img: tmobile
                    },
                    {
                        label: 'verizon',
                        img: verizon
                    },
                    {
                        label: 'Xfinity',
                        img: xfinity
                    },
                    {
                        label: 'Cricket',
                        img: cricket
                    },
                    {
                        label: 'unlocked'
                    },
                    {
                        label: 'other'
                    }
                ],
                imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/SamsungGalaxyS8_plus+black_160.jpg"
            },
            {
                devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/SamsungGalaxyS8_plus+black_160.jpg',
                label: "Galaxy S8",
                capacity: ["64 GB", "128 GB"],
                carrier: [
                    {
                        label: 'att',
                        img: att
                    },
                    {
                        label: 'sprint',
                        img: sprint
                    },
                    {
                        label: 'tmobile',
                        img: tmobile
                    },
                    {
                        label: 'verizon',
                        img: verizon
                    },
                    {
                        label: 'Xfinity',
                        img: xfinity
                    },
                    {
                        label: 'Cricket',
                        img: cricket
                    },
                    {
                        label: 'unlocked'
                    },
                    {
                        label: 'other'
                    }
                ],
                imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/SamsungGalaxyS8_plus+black_160.jpg"
            },
            {
                devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/trade-in-galaxy-s8-active.jpg',
                label: "Galaxy S8 Active",
                capacity: [],
                carrier: [
                    {
                        label: 'att',
                        img: att
                    },
                    {
                        label: 'sprint',
                        img: sprint
                    },
                    {
                        label: 'tmobile',
                        img: tmobile
                    },
                    {
                        label: 'verizon',
                        img: verizon
                    },
                    {
                        label: 'Xfinity',
                        img: xfinity
                    },
                    {
                        label: 'Cricket',
                        img: cricket
                    },
                    {
                        label: 'unlocked'
                    },
                    {
                        label: 'other'
                    }
                ],
                imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/trade-in-galaxy-s8-active.jpg"
            },
            {
                devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/SamsungGalaxy_S7.jpg',
                label: "Galaxy S7",
                capacity: ["32 GB", "64 GB"],
                carrier: [
                    {
                        label: 'att',
                        img: att
                    },
                    {
                        label: 'sprint',
                        img: sprint
                    },
                    {
                        label: 'tmobile',
                        img: tmobile
                    },
                    {
                        label: 'verizon',
                        img: verizon
                    },
                    {
                        label: 'unlocked'
                    },
                    {
                        label: 'other'
                    }
                ],
                imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/SamsungGalaxy_S7.jpg"
            },
            {
                devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/SamsungGalaxy_S7Edge.jpg',
                label: "Galaxy S7 Edge",
                capacity: ["32 GB", "64 GB", "128 GB"],
                carrier: [
                    {
                        label: 'att',
                        img: att
                    },
                    {
                        label: 'sprint',
                        img: sprint
                    },
                    {
                        label: 'tmobile',
                        img: tmobile
                    },
                    {
                        label: 'verizon',
                        img: verizon
                    },
                    {
                        label: 'unlocked'
                    },
                    {
                        label: 'other'
                    }
                ],
                imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/SamsungGalaxy_S7Edge.jpg"
            },
            {
                devicePhoto:'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/galaxy-s6.jpg',
                label: "Galaxy S6",
                capacity: ["32 GB", "64 GB", "128 GB"],
                carrier: [
                    {
                        label: 'att',
                        img: att
                    },
                    {
                        label: 'sprint',
                        img: sprint
                    },
                    {
                        label: 'tmobile',
                        img: tmobile
                    },
                    {
                        label: 'verizon',
                        img: verizon
                    },
                    {
                        label: 'Xfinity',
                        img: xfinity
                    },
                    {
                        label: 'Cricket',
                        img: cricket
                    },
                    {
                        label: 'unlocked'
                    },
                    {
                        label: 'other'
                    }
                ],
                imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/galaxy-s6.jpg"
            },
            {
                devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/galaxy_s6_edge_plus-160px.jpg',
                label: "Galaxy S6 Edge+",
                capacity: ["32 GB", "64 GB", "128 GB"],
                carrier: [
                    {
                        label: 'att',
                        img: att
                    },
                    {
                        label: 'sprint',
                        img: sprint
                    },
                    {
                        label: 'tmobile',
                        img: tmobile
                    },
                    {
                        label: 'verizon',
                        img: verizon
                    },
                    {
                        label: 'Xfinity',
                        img: xfinity
                    },
                    {
                        label: 'Cricket',
                        img: cricket
                    },
                    {
                        label: 'unlocked'
                    },
                    {
                        label: 'other'
                    }
                ],
                imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/galaxy_s6_edge_plus-160px.jpg"
            },
            {
                devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/galaxy_s6_edge_plus-160px.jpg',
                label: "Galaxy S6 Edge",
                capacity: ["32 GB", "64 GB", "128 GB"],
                carrier: [
                    {
                        label: 'att',
                        img: att
                    },
                    {
                        label: 'sprint',
                        img: sprint
                    },
                    {
                        label: 'tmobile',
                        img: tmobile
                    },
                    {
                        label: 'verizon',
                        img: verizon
                    },

                    {
                        label: 'unlocked'
                    },
                    {
                        label: 'other'
                    }
                ],
                imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/galaxy_s6_edge_plus-160px.jpg"
            }

        ]
    },
    {
        device: 'Galaxy Note Series',
        deviceLabel: 'GalaxyNoteSeries',
        devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/galaxy-note-series.jpg',
        modal: [
            {
                devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/Galaxy+Note+10+plus160.jpg',
                label: "Galaxy Note 10+",
                capacity: ["256 GB", "512 GB"],
                carrier: [
                    {
                        label: 'att',
                        img: att
                    },
                    {
                        label: 'sprint',
                        img: sprint
                    },
                    {
                        label: 'tmobile',
                        img: tmobile
                    },
                    {
                        label: 'verizon',
                        img: verizon
                    },
                    {
                        label: 'unlocked'
                    },
                    {
                        label: 'other'
                    }
                ],
                imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/Galaxy+Note+10+plus160.jpg"
            },
            {
                devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/galaxy-note10-160.jpg',
                label: "Galaxy Note 10+ 5G",
                capacity: ["256 GB", "512 GB"],
                carrier: [
                    {
                        label: 'att',
                        img: att
                    },
                    {
                        label: 'sprint',
                        img: sprint
                    },
                    {
                        label: 'tmobile',
                        img: tmobile
                    },
                    {
                        label: 'verizon',
                        img: verizon
                    },
                    {
                        label: 'unlocked'
                    },
                    {
                        label: 'other'
                    }
                ],
                imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/galaxy-note10-160.jpg"
            },

            {
                devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/galaxy-note10-160.jpg',
                label: "Galaxy Note 10",
                capacity: [],
                carrier: [
                    {
                        label: 'att',
                        img: att
                    },
                    {
                        label: 'sprint',
                        img: sprint
                    },
                    {
                        label: 'tmobile',
                        img: tmobile
                    },
                    {
                        label: 'verizon',
                        img: verizon
                    },
                    {
                        label: 'Cricket',
                        img: cricket
                    },
                    {
                        label: 'US Cellular',
                        img: usCellular
                    },
                    {
                        label: 'unlocked'
                    },
                    {
                        label: 'other'
                    }
                ],
                imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/galaxy-note10-160.jpg"
            },
            {
                devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/galaxy-note-9.jpg',
                label: "Galaxy Note 9",
                capacity: ["128 GB", "512 GB"],
                carrier: [
                    {
                        label: 'att',
                        img: att
                    },
                    {
                        label: 'sprint',
                        img: sprint
                    },
                    {
                        label: 'tmobile',
                        img: tmobile
                    },
                    {
                        label: 'verizon',
                        img: verizon
                    },
                    {
                        label: 'unlocked'
                    },
                    {
                        label: 'other'
                    }
                ],
                imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/galaxy-note-9.jpg"
            },
            {
                devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/trade-in-samsung-galaxy-note-8-midnight-black.jpg',
                label: "Galaxy Note 8",
                capacity: ["64 GB", "128 GB", "256 GB"],
                carrier: [
                    {
                        label: 'att',
                        img: att
                    },
                    {
                        label: 'sprint',
                        img: sprint
                    },
                    {
                        label: 'tmobile',
                        img: tmobile
                    },
                    {
                        label: 'verizon',
                        img: verizon
                    },
                    {
                        label: 'unlocked'
                    },
                    {
                        label: 'other'
                    }
                ],
                imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Samsung+/trade-in-samsung-galaxy-note-8-midnight-black.jpg"
            }
        ]
    }

]

const AndroidPage = (props) => {
    const dispatch = useDispatch();
    const [selectedDevice, setSelectedDevice] = useState()
    const [offers, setOffers] = useState()
    const [imagePath, setImagePath] = useState()
    const [isLoader, setIsLoader] = useState(false)
    const [deviceDetails, setDeviceDetails] = useState()
    const [isCapacity, setCapCity] = useState(false);
    const [isShowButton, setIsShowButton] = useState(false)

    const [isBrokenOrNo, setIsBrokenOrNo] = useState(false)
    const [isBrokenFiled, setIsBrokenFiled] = useState(false)
    const [isCarrier, setCarrier] = useState(false)

    const selectDevice = (obj) => {
        setSelectedDevice([obj])
    }

    const handelSubmits = (value) => {
        setIsLoader(true);
        const condition = value.condition === 'Brand New' ? '100%' : value.condition === 'Flaw-less' ? '75%' : value.condition === 'Good' ? '50%' : value.condition === 'Fair' ? '30%' : 'Broken'
        let customAmount = 0;
        const deviceType = value.deviceType === 'Galaxy S10+' ? 'Galaxy S10%2B' : value.deviceType === 'Galaxy S9+' ? 'Galaxy S9%2B' : value.deviceType === 'Galaxy S8+' ? 'Galaxy S8%2B' : value.deviceType === 'Galaxy S6 Edge+' ? 'Galaxy S6 Edge%2B' : value.deviceType === 'Galaxy Note 10+' ? 'Galaxy Note 10%2B' : value.deviceType === 'Galaxy Note 10+ 5G' ? 'Galaxy Note 10%2B 5G' : value.deviceType
        const obj = {
            samsung_model: deviceType,
            samsung_capacity: value.capacity,
            samsung_carrier: value.carrier,
            samsung_condition: condition,
            samsung_functional: value.functional,
            samsung_powercord: value.powercord ? 'Yes' : value.powercord === 'No' ? 'No%' : '',
            samsung_box: value.box ? 'Yes' : value.box === 'No' ? 'No%' : '',
            samsung_headset: value.headsets ? 'Yes' : value.headsets === 'No' ? 'No%' : '',
            samsung_screenburn: '',
            samsung_isunlock: ''
        }
        if (value.deviceType === "Galaxy S7 Edge") {
            obj.samsung_capacity = "32 GB";
            obj.samsung_carrier = "att"
            obj.samsung_powercord = '';
            obj.samsung_box = '';
            obj.samsung_headset = '';
            customAmount += 5;
            if (value.box) {
                customAmount += 1;
            }
            if (value.headsets) {
                customAmount += 1;
            }
            if (value.powercord) {
                customAmount += 1;
            }
        } else if (value.deviceType === "Galaxy S7") {
            obj.samsung_capacity = "32 GB";
            obj.samsung_carrier = "att"
            customAmount += 5;

            if (condition === '100%' && value.carrier === 'sprint') {
                obj.samsung_carrier = "sprint"
            }
            if (value.box) {
                customAmount += 1;
            }
            if (value.headsets) {
                customAmount += 1;
            }
            if (value.powercord) {
                customAmount += 1;
            }
        } else if (value.deviceType === "Galaxy S8+") {
            obj.samsung_capacity = "64 GB";
            obj.samsung_carrier = value.carrier === "other" ? "other" : value.carrier === "sprint" ? "sprint" : value.carrier === "Xfinity" || value.carrier === "Cricket" ? "Cricket" : "att"
            customAmount += 5;
            obj.samsung_powercord = '';
            obj.samsung_box = '';
            obj.samsung_headset = '';
            if (value.box) {
                customAmount += 1;
            }
            if (value.headsets) {
                customAmount += 1;
            }
            if (value.powercord) {
                customAmount += 1;
            }
        } else if (value.deviceType === "Galaxy S8 Active") {
            obj.samsung_capacity = "";
            obj.samsung_carrier = value.carrier === "other" ? "other" : value.carrier === "sprint" || value.carrier === "tmobile" ? "sprint" : value.carrier === "Xfinity" || value.carrier === "Cricket" ? "Cricket" : "att"
            obj.samsung_powercord = '';
            obj.samsung_box = '';
            obj.samsung_headset = '';
            customAmount += 5;
            if (value.box) {
                customAmount += 1;
            }
            if (value.headsets) {
                customAmount += 1;
            }
            if (value.powercord) {
                customAmount += 1;
            }
        } else if (value.deviceType === "Galaxy S8") {
            obj.samsung_capacity = "64 GB";
            obj.samsung_functional = "";
            obj.samsung_powercord = '';
            obj.samsung_box = '';
            obj.samsung_headset = '';
            obj.samsung_carrier = value.carrier === "sprint" ? "sprint" : value.carrier === "tmobile" ? "tmobile" : "att"
        } else if (value.deviceType === "Galaxy S9+") {
            obj.samsung_powercord = '';
            obj.samsung_box = '';
            obj.samsung_headset = '';
            obj.samsung_capacity = "64 GB";
            obj.samsung_carrier = value.carrier === "other" ? "other" : value.carrier === "tmobile" ? "tmobile" : value.carrier === "sprint" || value.carrier === "Xfinity" || value.carrier === "Cricket" ? "sprint" : "att"
            if (value.capacity === "64 GB" || value.capacity === "128 GB") {
                customAmount += 10;
            }
            if (value.box) {
                customAmount += 1;
            }
            if (value.headsets) {
                customAmount += 1;
            }
            if (value.powercord) {
                customAmount += 1;
            }
        } else if (value.deviceType === "Galaxy S9") {
            obj.samsung_capacity = "64 GB";
            obj.samsung_carrier = value.carrier === "other" ? "other" : value.carrier === "sprint" || value.carrier === "tmobile" || value.carrier === "Xfinity" || value.carrier === "Cricket" ? "sprint" : "att"
            obj.samsung_powercord = '';
            obj.samsung_box = '';
            obj.samsung_headset = '';
            if (value.capacity === "64 GB" || value.capacity === "128 GB") {
                customAmount += 20;
            }
            if (value.box) {
                customAmount += 1;
            }
            if (value.headsets) {
                customAmount += 1;
            }
            if (value.powercord) {
                customAmount += 1;
            }
        } else if (value.deviceType === "Galaxy S10 5G") {
            customAmount += 20;
            obj.samsung_capacity = "256 GB";
            obj.samsung_carrier = "sprint"
            obj.samsung_powercord = '';
            obj.samsung_box = '';
            obj.samsung_headset = '';
            if (value.carrier === 'Cricket' || value.carrier === 'Xfinity') {
                customAmount -= 30;
            }
            if (value.box) {
                customAmount += 1;
            }
            if (value.headsets) {
                customAmount += 1;
            }
            if (value.powercord) {
                customAmount += 1;
            }
        } else if (value.deviceType === "Galaxy S10") {
            obj.samsung_powercord = '';
            obj.samsung_box = '';
            obj.samsung_headset = '';
            obj.samsung_capacity = "128 GB";
            customAmount += 50;
            if (value.carrier === "unlocked") {
                obj.samsung_carrier = "verizon"
            }
            if (value.carrier === "Xfinity") {
                obj.samsung_carrier = "Cricket"
            }
            if (value.box) {
                customAmount += 1;
            }
            if (value.headsets) {
                customAmount += 1;
            }
            if (value.powercord) {
                customAmount += 1;
            }
        } else if (value.deviceType === "Galaxy S10+") {
            obj.samsung_powercord = '';
            obj.samsung_box = '';
            obj.samsung_headset = '';

            if (value.capacity === "128 GB" || value.capacity === "512 GB") {
                customAmount += 60;
            }

            if (value.capacity === "1 TB") {
                customAmount += 70;
            }

            if (value.carrier === "unlocked") {
                obj.samsung_carrier = "verizon"
            }

            if (value.carrier === "Xfinity") {
                obj.samsung_carrier = "Cricket"
            }

            if (value.carrier === "tmobile") {
                obj.samsung_carrier = "sprint"
            }

            if (value.box) {
                customAmount += 1;
            }
            if (value.headsets) {
                customAmount += 1;
            }
            if (value.powercord) {
                customAmount += 1;
            }
        } else if (value.deviceType === "Galaxy S10e") {
            obj.samsung_powercord = '';
            obj.samsung_box = '';
            obj.samsung_headset = '';
            if (value.capacity === "128 GB" || value.capacity === "256 GB") {
                customAmount += 30;
            }

            if (value.carrier === "tmobile") {
                obj.samsung_carrier = "sprint"
                customAmount += 5;
            }

            if (value.carrier === "verizon" || value.carrier === "unlocked") {
                obj.samsung_carrier = "sprint"
                customAmount += 10;
            }

            if (value.carrier === "Xfinity" || value.carrier === "Cricket") {
                obj.samsung_carrier = "sprint"
                customAmount -= 20;
            }

            if (value.box) {
                customAmount += 1;
            }
            if (value.headsets) {
                customAmount += 1;
            }
            if (value.powercord) {
                customAmount += 1;
            }
        } else if (value.deviceType === "Galaxy S10 Lite") {
            obj.samsung_capacity = '';
            obj.samsung_carrier = '';
            obj.samsung_condition = condition;
            obj.samsung_functional = value.functional;
            obj.samsung_powercord = '';
            obj.samsung_box = '';
            obj.samsung_headset = '';
            if (value.box) {
                customAmount += 1;
            }
            if (value.headsets) {
                customAmount += 1;
            }
            if (value.powercord) {
                customAmount += 1;
            }
        }
        else if (value.deviceType === "Galaxy S20+ 5G") {
            obj.samsung_capacity = "128 GB";
            customAmount += 80;

            if (value.carrier === "unlocked" || value.carrier === "verizon") {
                obj.samsung_carrier = "att"
                customAmount += 10;
            }

            if (value.carrier === "sprint") {
                obj.samsung_carrier = "att"
                customAmount -= 60;
            }

            if (value.carrier === "tmobile") {
                customAmount -= 30;
                obj.samsung_carrier = "att"
            }

            if (value.carrier === "US Cellular") {
                customAmount -= 40;
                obj.samsung_carrier = "att"
            }

            if (value.box) {
                customAmount += 1;
            }
            if (value.headsets) {
                customAmount += 1;
            }
            if (value.powercord) {
                customAmount += 1;
            }
        } else if (value.deviceType === "Galaxy S20 5G") {
            obj.samsung_powercord = '';
            obj.samsung_box = '';
            obj.samsung_headset = '';

            if (value.carrier === "unlocked" || value.carrier === "verizon") {
                obj.samsung_carrier = "sprint"
                customAmount += 50;
            }

            if (value.carrier === "tmobile") {
                obj.samsung_carrier = "att"
            }

            if (value.carrier === "US Cellular") {
                obj.samsung_carrier = "sprint"
            }

            if (value.box) {
                customAmount += 1;
            }
            if (value.headsets) {
                customAmount += 1;
            }
            if (value.powercord) {
                customAmount += 1;
            }
        } else if (value.deviceType === "Galaxy S20 Ultra 5G") {
            obj.samsung_capacity = "128 GB";
            customAmount += 50;
            obj.samsung_carrier = "att"
            obj.samsung_powercord = '';
            obj.samsung_box = '';
            obj.samsung_headset = '';

            if (value.carrier === "unlocked" || value.carrier === "verizon") {
                customAmount += 30;
            }

            if (value.carrier === "tmobile" || value.carrier === "sprint") {
                customAmount -= 50;
            }

            if (value.carrier === "US Cellular") {
                customAmount += 20;
            }

            if (value.box) {
                customAmount += 1;
            }

            if (value.headsets) {
                customAmount += 1;
            }

            if (value.powercord) {
                customAmount += 1;
            }

        } else if (value.deviceType === "Galaxy Note 10") {
            obj.samsung_powercord = '';
            obj.samsung_box = '';
            obj.samsung_headset = '';
            if (value.carrier === "tmobile" || value.carrier === "sprint") {
                obj.samsung_carrier = "att"
                customAmount -= 25;
            }

            if (value.carrier === "unlocked" || value.carrier === "verizon") {
                obj.samsung_carrier = "att"
                customAmount -= 25;
            }

            if (value.carrier === "US Cellular" || value.carrier === "Cricket" || value.carrier === "Xfinity") {
                obj.samsung_carrier = "att"
                customAmount -= 50;
            }

            if (value.carrier === "other") {
                obj.samsung_carrier = "att"
                customAmount -= 150;
            }
        } else if (value.deviceType === "Galaxy Note 10+") {
            obj.samsung_powercord = '';
            obj.samsung_box = '';
            obj.samsung_headset = '';
            customAmount += 30;

            if (value.carrier === "tmobile" || value.carrier === "sprint") {
                obj.samsung_carrier = "att"
                customAmount -= 15;
            }

            if (value.carrier === "unlocked") {
                obj.samsung_carrier = "att"
                customAmount += 5;
            }

            if (value.carrier === "verizon") {
                obj.samsung_carrier = "att"
                customAmount += 5;
            }

        } else if (value.deviceType === "Galaxy Note 9") {
            customAmount += 50;
            obj.samsung_powercord = '';
            obj.samsung_box = '';
            obj.samsung_headset = '';
            if (value.carrier === "sprint") {
                obj.samsung_carrier = "att"
                customAmount -= 30;
            }

            if (value.carrier === "tmobile") {
                obj.samsung_carrier = "att"
                customAmount -= 10;
            }

            if (value.carrier === "unlocked" || value.carrier === "verizon") {
                obj.samsung_carrier = "att"
                customAmount += 15;
            }
            if (value.carrier === "other") {
                obj.samsung_carrier = "att"
                customAmount -= 70;
            }
        } else if (value.deviceType === "Galaxy Note 10+ 5G") {
            customAmount += 25;
            obj.samsung_carrier = "att"
            obj.samsung_powercord = '';
            obj.samsung_box = '';
            obj.samsung_headset = '';

        } else if (value.deviceType === "Galaxy Note 8") {
            obj.samsung_powercord = '';
            obj.samsung_box = '';
            obj.samsung_headset = '';
            obj.samsung_capacity = "64 GB"
            obj.samsung_condition = "100%"
            customAmount += 25;
            if (value.carrier === "sprint" || value.carrier === "tmobile") {
                obj.samsung_carrier = "att"
                customAmount -= 10;
            }
            if (value.carrier === "unlocked" || value.carrier === "verizon") {
                obj.samsung_carrier = "att"
                customAmount += 20;
            }
            if (value.carrier === "other") {
                obj.samsung_carrier = "att"
                customAmount -= 50;
            }
        } else if (value.deviceType === "Galaxy S6") {
            obj.samsung_capacity = "64 GB"
            obj.samsung_condition = "100%"
            customAmount += 25;
            obj.samsung_powercord = '';
            obj.samsung_box = '';
            obj.samsung_headset = '';
            if (value.carrier === "sprint" || value.carrier === "tmobile") {
                obj.samsung_carrier = "att"
                customAmount -= 10;
            }
            if (value.carrier === "unlocked" || value.carrier === "verizon") {
                obj.samsung_carrier = "att"
                customAmount += 20;
            }
            if (value.carrier === "other") {
                obj.samsung_carrier = "att"
                customAmount -= 50;
            }
        } else if (value.deviceType === "Galaxy S6 Edge+") {
            if (value.carrier === "128 GB") {
                obj.samsung_capacity = "64 GB"
            }
            if (value.carrier === "other") {
                obj.samsung_carrier = "att"
            }
            obj.samsung_powercord = '';
            obj.samsung_box = '';
            obj.samsung_headset = '';
        } else if (value.deviceType === "Galaxy S6 Edge") {
            if (value.carrier === "128 GB") {
                obj.samsung_capacity = "64 GB"
            }
            if (value.carrier === "other") {
                obj.samsung_carrier = "att"
            }
            obj.samsung_powercord = '';
            obj.samsung_box = '';
            obj.samsung_headset = '';
        }
        androidApi(obj).then(res => {
            if (!isEmpty(res.data && res.data.results)) {
                let offer = +res.data.results[0].offer
                offer = offer + customAmount;
                setOffers([{ ...res.data.results[0], offer }])
                if (offer <= 0) {
                    setIsBrokenOrNo(true)
                }
            }
            setIsLoader(false)
        }).catch(err => {
            console.log(err);
            setIsLoader(false)
        })
    }

    const addCart = (value) => {
        const data = {
            deviceType: "Android",
            deviceModel: value.samsung_model,
            deviceCapacity: value.samsung_capacity,
            deviceCarrier: value.samsung_carrier,
            deviceCondition: value.samsung_condition,
            deviceYear: "",
            deviceProcessor: "",
            deviceOffer: parseInt(value.offer),
            deviceGeneration: "",
            deviceSize: "",
            deviceEdition: "",
            deviceBand: "",
            deviceEngraving: "",
            imagePath: imagePath,
            id: value.id
        }
        dispatch(addToCart(data))
        props.history.push("/cart");
    }

    const devicesDetails = (value) => {
        setImagePath(value.imagePath)
        setDeviceDetails(value)
        if (value.capacity.length > 0) {
            setCapCity(true)
        } else {
            setCapCity(false)
        }
        if (value.carrier.length > 0) {
            setCarrier(true)
        } else {
            setCarrier(false)
        }
    }

    const selectIWatchCondition = (value) => {
        if (value === 'Broken') {
            setIsBrokenOrNo(false)
            setIsBrokenFiled(false)
        } else if (value === 'Brand New') {
            setIsShowButton(true)
            setIsBrokenOrNo(false)
            setIsBrokenFiled(false)
        } else if (value === 'Flaw-less') {
            setIsBrokenOrNo(false)
            setIsBrokenFiled(false)
        } else if (value === 'Good') {
            setIsBrokenOrNo(false)
            setIsBrokenFiled(false)
        } else if (value === 'Fair') {
            setIsBrokenOrNo(false)
            setIsBrokenFiled(false)
        } else {
            return null;
        }
    }

    return (
        <div className="sell-a-device-container">
            <div className={!isEmpty(selectedDevice) ? 'device-selected' : ''}>
                {
                    isEmpty(selectedDevice) &&
                    <>
                        <div className="row mt-5">
                            {
                                !isEmpty(deviceList) && deviceList.map((item, index) => (
                                    <div className={`device-item-div col-sm-4 col-md-3 d-flex flex-column cursor-pointer justify-content-space-between ${selectedDevice && selectedDevice[0].devicePhoto === item.devicePhoto ? 'active' : ''}`} key={index}>
                                        <div className="mt-2 text-center">
                                            <img height="200" src={item.devicePhoto} onClick={() => selectDevice(item)} />
                                        </div>
                                        <div className="text-center mt-1">
                                            <label className="w-100" onClick={() => selectDevice(item)} variant="warning">{item.device}</label>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </>}
            </div>
            <Formik
                initialValues={{
                    carrier: "",
                    condition: "",
                    deviceType: "",
                    functional: "",
                    box: "",
                    powercord: "",
                    headsets: "",
                    capacity: ""
                }}
                onSubmit={handelSubmits}
            >
                {({ values, handleChange }) => (
                    <Form>
                        {
                            selectedDevice &&
                            <div>
                                {selectedDevice[0].device &&
                                    <div>
                                        <div className="d-flex align-items-center">
                                            <h4>{selectedDevice[0].device} </h4> <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                handleChange({
                                                    target: {
                                                        name: "deviceType",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "carrier",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "condition",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "capacity",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "functional",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "box",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "powercord",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "headsets",
                                                        value: '',
                                                    }
                                                })
                                                setSelectedDevice()
                                                setDeviceDetails()
                                                setIsBrokenFiled(false)
                                                setOffers()
                                                setIsBrokenOrNo(false)
                                                setIsShowButton(false)
                                            }} >/ Change Model</span>
                                        </div>
                                        {
                                            selectedDevice[0].device && !values.deviceType &&
                                            <>
                                                <hr />
                                                <div>
                                                    <h4>Select your {selectedDevice[0].device} model</h4>
                                                </div>
                                                <div role="group" className="row mt-3" aria-labelledby="my-radio-group">
                                                    {
                                                        !isEmpty(selectedDevice) && selectedDevice[0].modal.map((x, i) => (
                                                            <div className="mt-2 col-md-3 col-sm-4 text-center" key={i}>
                                                                <label className="w-100 mt-1 mr-4">
                                                                    <div className="w-100">
                                                                        <img src={x.devicePhoto} height="150" className="cursor-pointer" />
                                                                    </div>
                                                                    <Field className="mr-2" type="radio" name="deviceType" value={x.label} onClick={() => devicesDetails(x)} />
                                                                    {x.label}
                                                                </label>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </>
                                        }
                                    </div>
                                }
                                {
                                    selectedDevice[0].device && values.deviceType && <>
                                        <hr />
                                        <div className="d-flex align-items-center">
                                            <h4>{values.deviceType} </h4>
                                            <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                handleChange({
                                                    target: {
                                                        name: "deviceType",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "carrier",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "condition",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "capacity",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "functional",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "box",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "powercord",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "headsets",
                                                        value: '',
                                                    }
                                                })
                                                setOffers()
                                                setDeviceDetails()
                                                setIsShowButton(false)
                                                setIsBrokenFiled(false)
                                                setIsBrokenOrNo(false)
                                            }} > / Change model</span>
                                        </div>
                                        <hr />
                                        {!values.carrier && isCarrier &&
                                            <div>
                                                <h4>Select your Carrier</h4>
                                            </div>
                                        }
                                        {!values.condition && !isCarrier &&
                                            <div>
                                                <h4>Select Your condition</h4>
                                            </div>
                                        }
                                    </>
                                }


                                {selectedDevice[0].device && values.deviceType && !values.carrier && isCarrier &&
                                    <div role="group" aria-labelledby="my-radio-group">
                                        <div>
                                            {deviceDetails && deviceDetails.carrier.map((x, i) => (
                                                <>
                                                    {
                                                        (x.label != "unlocked" || x.label != "other") &&
                                                        <label className="ml-3 mt-4 cursor-pointer  border-dark-white rounded p-4">
                                                            <img className="mb-5" src={x.img} height="50" />
                                                            <Field className="mr-2 d-none" type="radio" name="carrier" value={x.label} />
                                                        </label>
                                                    }
                                                    {
                                                        x.label === "unlocked" &&
                                                        <label className="ml-3 mt-4 cursor-pointer border text-center border-dark-white rounded p-4">
                                                            <Field className="mr-2 d-none" type="radio" name="carrier" value="unlocked" />
                                                            <div className="mt-3">
                                                                <h4>
                                                                    Factory
                                                                 </h4>
                                                            </div>
                                                            <div>
                                                                <h4>
                                                                    Unlocked
                                                                 </h4>
                                                            </div>
                                                        </label>
                                                    }

                                                    {
                                                        x.label === "other" &&
                                                        <label className="ml-3 mt-4 cursor-pointer border text-center border-dark-white rounded p-4">
                                                            <Field className="mr-2 d-none" type="radio" name="carrier" value="other" />
                                                            <div>
                                                                <b>Other Carrier</b>
                                                            </div>
                                                            <div className="margin-5">
                                                                if you don't know
                                                            </div>
                                                            <div className="margin-5">
                                                                the carrier
                                                            </div>
                                                            <div className="margin-5 mb-1">
                                                                or not listed here
                                                             </div>
                                                        </label>
                                                    }
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                }
                                {
                                    selectedDevice[0].device && values.deviceType && isCarrier && values.carrier && !isCapacity && <>
                                        <div className="d-flex align-items-center">
                                            <h4>Type of carrier: {values.carrier} </h4>
                                            <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                handleChange({
                                                    target: {
                                                        name: "carrier",
                                                        value: '',
                                                    }
                                                })
                                                setOffers()
                                                setIsBrokenFiled(false)
                                                setIsBrokenOrNo(false)
                                                setIsShowButton(false)
                                            }} > / Change Carrier</span>
                                        </div>
                                        <hr />
                                        {values.carrier && !values.condition &&
                                            <div>
                                                <h4>Select Your condition</h4>
                                            </div>
                                        }
                                    </>
                                }

                                {
                                    selectedDevice[0].device && values.deviceType && isCarrier && values.carrier && isCapacity && <>
                                        <div className="d-flex align-items-center">
                                            <h4>Type of carrier: {values.carrier} </h4>
                                            <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                handleChange({
                                                    target: {
                                                        name: "carrier",
                                                        value: '',
                                                    }
                                                })
                                                setOffers()
                                                setIsBrokenFiled(false)
                                                setIsBrokenOrNo(false)
                                            }} > / Change Carrier</span>
                                        </div>
                                        <hr />
                                        {!values.capacity &&
                                            <div>
                                                <h4>Select the phone's capacity</h4>
                                            </div>
                                        }
                                    </>
                                }

                                {selectedDevice[0].device && values.deviceType && (isCarrier ? (values.carrier ? true : false) : true) && isCapacity && !values.capacity &&
                                    <>
                                        <div role="group" aria-labelledby="my-radio-group">
                                            <div>
                                                {
                                                    deviceDetails.capacity.map((x, i) => (
                                                        <label key={i} className="ml-4 border mt-4 cursor-pointer rounded p-4">
                                                            <Field className="mr-2 d-none" type="radio" name="capacity" onChange={handleChange} value={x} />
                                                            {x}
                                                        </label>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </>
                                }

                                {
                                    selectedDevice[0].device && values.deviceType && (isCarrier ? (values.carrier ? true : false) : true) && isCapacity && values.capacity && <>
                                        <div className="d-flex align-items-center">
                                            <h4>Type of capacity: {values.capacity} </h4>
                                            <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                handleChange({
                                                    target: {
                                                        name: "capacity",
                                                        value: '',
                                                    }
                                                })
                                                setOffers()
                                                setIsBrokenFiled(false)
                                            }} > / Change capacity</span>
                                        </div>
                                        <hr />
                                        {values.capacity && isCapacity && !values.condition &&
                                            <div>
                                                <h4>Select your condition</h4>
                                            </div>
                                        }
                                    </>
                                }

                                {selectedDevice[0].device && values.deviceType && !values.condition && (isCapacity ? (values.capacity ? true : false) : true) && (isCarrier ? (values.carrier ? true : false) : true) &&
                                    <div className="mt-4 ml-3 mr-3 row" role="group" aria-labelledby="my-radio-group">
                                        <div className="col-md-2 ml-2 mb-2 border py-2">
                                            <div className="d-flex justify-content-between">
                                                <label className="h5"> Brand New</label>
                                                <Field className="mt-1" type="radio" name="condition" onClick={() => {
                                                    selectIWatchCondition('Brand New')
                                                    handleChange({
                                                        target: {
                                                            name: "functional",
                                                            value: '',
                                                        }
                                                    })
                                                    handleChange({
                                                        target: {
                                                            name: "box",
                                                            value: '',
                                                        }
                                                    })
                                                    handleChange({
                                                        target: {
                                                            name: "powercord",
                                                            value: '',
                                                        }
                                                    })
                                                    handleChange({
                                                        target: {
                                                            name: "headsets",
                                                            value: '',
                                                        }
                                                    })

                                                    setIsShowButton(true)
                                                }} value="Brand New" />
                                            </div>
                                            <label className="mt-2">
                                                Phone still in factory original packaging. Comes with the box and all accessories sealed/untouched.
                                        </label>
                                        </div>

                                        <div className="col-md-2 ml-2 mb-2 border py-2">
                                            <div className="d-flex justify-content-between">
                                                <label className="h5"> Flaw-less</label>
                                                <Field className="mt-1" type="radio" name="condition" onClick={() => {
                                                    selectIWatchCondition('Flaw-less')
                                                }} value="Flaw-less" />
                                            </div>
                                            <label className="mt-2">
                                                Looks brand new. Contains no dents, dings or scratches.
                                        </label>
                                        </div>

                                        <div className="col-md-2 ml-2 mb-2 border py-2">
                                            <div className="d-flex justify-content-between">
                                                <label className="h5"> Good</label>
                                                <Field className="mt-1" type="radio" name="condition" onClick={() => {
                                                    selectIWatchCondition('Good')
                                                }} value="Good" />
                                            </div>
                                            <label className="mt-2">
                                                Shows light to moderate signs of wear. Contains many light scratches and/or dents.
                                        </label>
                                        </div>

                                        <div className="col-md-2 ml-2 mb-2 border py-2">
                                            <div className="d-flex justify-content-between">
                                                <label className="h5"> Fair</label>
                                                <Field className="mt-1" type="radio" name="condition" onClick={() => {
                                                    selectIWatchCondition('Fair')
                                                }} value="Fair" />
                                            </div>
                                            <label className="mt-2">
                                                Shows moderate to excessive signs of wear. Contains numerous light to moderate scratches and/or dents.
                                        </label>
                                        </div>
                                        <div className="col-md-2 ml-2 mb-2 border py-2">
                                            <div className="d-flex justify-content-between">
                                                <label className="h5"> Broken</label>
                                                <Field className="mt-1" type="radio" name="condition" onClick={() => {
                                                    selectIWatchCondition('Broken')
                                                    handleChange({
                                                        target: {
                                                            name: "functional",
                                                            value: '',
                                                        }
                                                    })
                                                    handleChange({
                                                        target: {
                                                            name: "box",
                                                            value: '',
                                                        }
                                                    })
                                                    handleChange({
                                                        target: {
                                                            name: "powercord",
                                                            value: '',
                                                        }
                                                    })
                                                    handleChange({
                                                        target: {
                                                            name: "headsets",
                                                            value: '',
                                                        }
                                                    })
                                                    setIsShowButton(true)
                                                }} value="Broken" />
                                            </div>
                                            <label className="mt-2">
                                                Deep cracks or broken parts on either screen or body of the item.
                                        </label>
                                        </div>
                                    </div>
                                }

                                {
                                    selectedDevice[0].device && values.deviceType && values.condition && (isCarrier ? (values.carrier ? true : false) : true) && (isCapacity ? (values.capacity ? true : false) : true) && <>
                                        <div className="d-flex align-items-center">
                                            <h4>Type of condition: {values.condition} </h4>
                                            <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                handleChange({
                                                    target: {
                                                        name: "condition",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "functional",
                                                        value: '',
                                                    }
                                                })
                                                setOffers()
                                                setIsShowButton(false)
                                                setIsBrokenOrNo(false)
                                            }} > / Change condition</span>
                                        </div>
                                        <hr />
                                        {!values.functional && values.condition && values.condition != 'Brand New' &&
                                            <div>
                                                <h4>Select your phone fully functional</h4>
                                            </div>
                                        }
                                    </>
                                }


                                {
                                    selectedDevice[0].device && values.deviceType && values.condition && (isCarrier ? (values.carrier ? true : false) : true) && !values.functional && (isCapacity ? (values.capacity ? true : false) : true) && values.condition != 'Brand New' &&
                                    <>
                                        <div className="mt-4 col-md-12" role="group" aria-labelledby="my-radio-group">
                                            <div className="border col-md-4">
                                                <div className="float-right">
                                                    <Field className="mt-1" type="radio" name="functional" onClick={() => { setIsShowButton(true) }} value='Yes' />
                                                </div>
                                                <label className="mt-1">
                                                    Yes
                                                 </label>
                                            </div>
                                            <div className="border col-md-4">
                                                <div className="float-right">
                                                    <Field className="mt-1" type="radio" onClick={() => {
                                                        setIsBrokenOrNo(true)
                                                    }}
                                                        name="functional" value='No' />
                                                </div>
                                                <label className="mt-1">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </>
                                }

                                {
                                    selectedDevice[0].device && values.deviceType && values.condition && (isCarrier ? (values.carrier ? true : false) : true) && values.functional && (isCapacity ? (values.capacity ? true : false) : true) && <>
                                        <div className="d-flex align-items-center">
                                            <h4>Type of functional: {values.functional} </h4>
                                            <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                handleChange({
                                                    target: {
                                                        name: "functional",
                                                        value: '',
                                                    }
                                                })
                                                setIsBrokenOrNo(false)
                                                setOffers()
                                            }} > / Change phone fully functional</span>
                                        </div>
                                        <hr />
                                        {!isBrokenOrNo && isEmpty(offers) &&
                                            <div>
                                                <h4>Select your phone accessories included</h4>
                                            </div>
                                        }
                                    </>
                                }

                                {
                                    !isBrokenOrNo && isEmpty(offers) && selectedDevice[0].device && values.deviceType && values.condition && (isCarrier ? (values.carrier ? true : false) : true) && (isCapacity ? (values.capacity ? true : false) : true) && values.functional &&
                                    <div className="row">
                                        <div className="mt-4 col-md-12">
                                            <div className="border col-md-4">
                                                <div className="float-right">
                                                    <Field className="mt-1" onChange={handleChange} checked={values.box} type="checkbox" name="box" />
                                                </div>
                                                <label className="mt-1">
                                                    Include Original Box
                                                </label>
                                            </div>
                                            <div className="border col-md-4">
                                                <div className="float-right">
                                                    <Field className="mt-1" onChange={handleChange} checked={values.headsets} type="checkbox" name="headsets" />
                                                </div>
                                                <label className="mt-1">
                                                    New Original Headsets
                                                </label>
                                            </div>
                                            <div className="border col-md-4">
                                                <div className="float-right">
                                                    <Field className="mt-1" onChange={handleChange} type="checkbox" checked={values.powercord} name="powercord" />
                                                </div>
                                                <label className="mt-1">
                                                    include Charging Cable and Adaptor
                                               </label>
                                            </div>
                                        </div>
                                    </div>

                                }

                                {
                                    !isBrokenOrNo && selectedDevice[0].device && values.deviceType && values.condition && (isCarrier ? (values.carrier ? true : false) : true) && values.functional && (isCapacity ? (values.capacity ? true : false) : true) && !isEmpty(offers) &&
                                    <>
                                        <div>
                                            <h4>Accessories Include :</h4>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <h4>Original Box : {values.box && "Yes" || "No"} </h4>
                                            </div>

                                            <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                handleChange({
                                                    target: {
                                                        name: "box",
                                                        value: '',
                                                    }
                                                })
                                                setOffers()
                                            }} > / Change </span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <h4>
                                                    New Original Headsets : {values.headsets && "Yes" || "No"}</h4>
                                            </div>
                                            <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                handleChange({
                                                    target: {
                                                        name: "headsets",
                                                        value: '',
                                                    }
                                                })
                                                setOffers()
                                            }} > / Change </span>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <div>
                                                <h4> Charging Cable and Adaptor : {values.powercord && "Yes" || "No"}</h4>
                                            </div>
                                            <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                handleChange({
                                                    target: {
                                                        name: "powercord",
                                                        value: '',
                                                    }
                                                })
                                                setOffers()
                                            }} > / Change </span>
                                        </div>
                                    </>
                                }
                                {
                                    ((values.condition === 'Brand New' && !values.functional && isShowButton && isEmpty(offers)) ||
                                        (isEmpty(offers) && (isCarrier ? (values.carrier ? true : false) : true) && (isCapacity ? (values.capacity ? true : false) : true) && selectedDevice[0].device && values.condition && values.functional && !isBrokenFiled && isShowButton)) &&
                                    <div className="col-md-12">
                                        <div className="d-flex justify-content-center">
                                            <div className="col-md-6 mt-4 text-center">
                                                <Button variant="outline-secondary" className="w-100" type="submit">Show my Offer</Button>
                                            </div>
                                        </div>
                                    </div>
                                }

                                {
                                    isBrokenFiled && isShowButton &&
                                    <div className="col-md-12">
                                        <div className="d-flex justify-content-center">
                                            <div className="col-md-6 mt-4 text-center">
                                                <Button variant="outline-secondary" className="w-100" onClick={() => {
                                                    setIsBrokenOrNo(true)
                                                    setIsBrokenFiled(false)
                                                }} >Show my Offer</Button>
                                            </div>
                                        </div>
                                    </div>
                                }

                                {isLoader && isEmpty(offers) &&
                                    <div className="text-center col-md-12">
                                        <LoaderSpinner></LoaderSpinner>
                                    </div>
                                }

                                {!isEmpty(offers) && !isBrokenOrNo &&
                                    <div className="mt-4 col-md-12 text-center">
                                        <div className="d-flex justify-content-center">
                                            <div className="col-md-2">
                                                <h1 className="border p-4 m-0">
                                                    $ {offers[0].offer}
                                                </h1>
                                                <div className="border-right p-1 border-bottom border-left">
                                                    <h5 className="mt-1">Your Offer </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <div className="mt-4 col-md-6">
                                                <Button variant="outline-primary" className="w-100" onClick={() => addCart(offers[0])} type="submit">Sell Now</Button>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <p className="mb-0">*Offered value of the device is subject to device review </p>
                                            <p className="mb-0">We may requote you with higher offer value if we find the cosmetic condition of the device better than what you thought of and vice versa </p>
                                            <p className="mb-0">We process the payment immediately after receiving your device we offer free express shipping. </p>
                                            <p className="mb-0">We don’t pay for the devices that have been reported lost or stolen</p>
                                        </div>
                                    </div>
                                }

                                {isBrokenOrNo &&
                                    <div className="mt-4 col-md-12 text-center">
                                        <div className="mt-3 bg-custom-danger">
                                            <p className="mb-0">Currently we’re not able to offer any value for the selected device in described condition but </p>
                                            <p className="mb-0">we can safely recycle it in a way which won’t harm environment in any way and leave zero carbon footprint but</p>
                                            <p className="mb-0">We’re glad to offer you $5 bonus on you next device trade/sell worth in offer value more than $100 use promocode RECYCLE at checkout to avail the bonus. </p>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <div className="mt-4 col-md-6">
                                                <Button variant="outline-primary" className="w-100"
                                                    onClick={() => addCart({
                                                        offer: 0,
                                                        samsung_capacity: values.capacity,
                                                        samsung_carrier: values.carrier,
                                                        samsung_condition: values.condition,
                                                        id: values.condition,
                                                        imagePath: imagePath,
                                                        samsung_model: values.deviceType
                                                    })}
                                                >Recycle now</Button>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        }
                    </Form>
                )}
            </Formik>
        </div >
    )
}

export default AndroidPage
