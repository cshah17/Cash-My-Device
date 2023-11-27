import { Field, Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import { useDispatch } from 'react-redux';
import { mackBookApi } from "../../../services/iPhoneApiService";
import { addToCart } from "../../../store/actions/cart";
import { isEmpty } from "../../../validation/index";
import LoaderSpinner from "../../Loader/loaderSpinner";

const deviceList = [
    {
        devicePhoto: 'https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/Macbook/Macbook-12.jpg.webp',
        deviceName: "MacBook",
        label: "Macbook",
        size: [
            {
                size: "12",
                sizeLabel: "MacBook 12",
                years: [
                    {
                        year: "Early 2015",
                        Condition: [{ name: 'Brand New', label: 'Brand new device. Comes with the box and all accessories sealed/untouched.' }, { name: 'Flaw-less', label: 'Looks brand new. Contains no dents, dings or scratches.' }, { name: 'Good', label: 'Shows light to moderate signs of wear. Contains light scratches and/or dents.' }, { name: 'Fair', label: 'Shows moderate to excessive signs of wear. Contains moderate scratches, dings, or dents.' }, { name: 'Broken', label: 'Deep cracks or broken parts on either screen or body of the item.' }],
                        processor: [
                            {
                                name: "1.1Ghz", // changed M 1.1Ghz to 1.1Ghz as epr the DB
                                GCard: []
                            },
                            {
                                name: "1.2Ghz",
                                GCard: []
                            },
                            {
                                name: "1.3Ghz",
                                GCard: []
                            }
                        ],
                        ram: ["8 GB", "16 GB"],
                        gb: ["256 GB", "512 GB"]
                    },
                    {
                        year: "Early 2016",
                        Condition: [{ name: 'Brand New', label: 'Brand new device. Comes with the box and all accessories sealed/untouched.' }, { name: 'Flaw-less', label: 'Looks brand new. Contains no dents, dings or scratches.' }, { name: 'Good', label: 'Shows light to moderate signs of wear. Contains light scratches and/or dents.' }, { name: 'Fair', label: 'Shows moderate to excessive signs of wear. Contains moderate scratches, dings, or dents.' }, { name: 'Broken', label: 'Deep cracks or broken parts on either screen or body of the item.' }],
                        processor: [
                            {
                                name: "m3 1.1Ghz",
                                GCard: []
                            },
                            {
                                name: "m5 1.2Ghz",
                                GCard: []
                            },
                            {
                                name: "m7 1.3Ghz",
                                GCard: []
                            }
                        ],
                        ram: ["8 GB", "16 GB"],
                        gb: ["256 GB", "512 GB"]
                    },
                    {
                        year: "2017",
                        Condition: [{ name: 'Brand New', label: 'Brand new device. Comes with the box and all accessories sealed/untouched.' }, { name: 'Flaw-less', label: 'Looks brand new. Contains no dents, dings or scratches.' }, { name: 'Good', label: 'Shows light to moderate signs of wear. Contains light scratches and/or dents.' }, { name: 'Fair', label: 'Shows moderate to excessive signs of wear. Contains moderate scratches, dings, or dents.' }, { name: 'Broken', label: 'Deep cracks or broken parts on either screen or body of the item.' }],
                        processor: [
                            {
                                name: "m3 1.2Ghz",
                                GCard: []
                            },
                            {
                                name: "i5 1.3Ghz ",
                                GCard: []
                            },
                            {
                                name: "i7 1.4Ghz",
                                GCard: []
                            }
                        ],
                        ram: ["8 GB", "16 GB"],
                        gb: ["256 GB", "512 GB"]
                    }
                ]
            }
        ],
        imagePath: "https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/Macbook/Macbook-12.jpg.webp"
    },

    {
        devicePhoto: 'https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/Macbook/Macbook-air.png',
        deviceName: "MacBook Air ",
        label: "Macbook Air",
        size: [
            {
                size: "13",
                sizeLabel: "MacBook Air 13 (2018 - 2020)",
                years: [
                    {
                        year: "2018",
                        Condition: [{ name: 'Brand New', label: 'Brand new device. Comes with the box and all accessories sealed/untouched.' }, { name: 'Flaw-less', label: 'Looks brand new. Contains no dents, dings or scratches.' }, { name: 'Good', label: 'Shows light to moderate signs of wear. Contains light scratches and/or dents.' }, { name: 'Fair', label: 'Shows moderate to excessive signs of wear. Contains moderate scratches, dings, or dents.' }, { name: 'Broken', label: 'Deep cracks or broken parts on either screen or body of the item.' }],
                        processor: [],
                        ram: ["8 GB", "16 GB"],
                        gb: ["128 GB SSD", "256 GB SSD", "512 GB SSD", "1.5 TB SSD"]
                    },
                    {
                        year: "2019",
                        Condition: [{ name: 'Brand New', label: 'Brand new device. Comes with the box and all accessories sealed/untouched.' }, { name: 'Flaw-less', label: 'Looks brand new. Contains no dents, dings or scratches.' }, { name: 'Good', label: 'Shows light to moderate signs of wear. Contains light scratches and/or dents.' }, { name: 'Fair', label: 'Shows moderate to excessive signs of wear. Contains moderate scratches, dings, or dents.' }, { name: 'Broken', label: 'Deep cracks or broken parts on either screen or body of the item.' }],
                        processor: [],
                        ram: ["8 GB", "16 GB"],
                        gb: ["128 GB", "256 GB", "512 GB", "1 TB"]
                    },
                    {
                        year: "2020",
                        Condition: [{ name: 'Brand New', label: 'Brand new device. Comes with the box and all accessories sealed/untouched.' }, { name: 'Flaw-less', label: 'Looks brand new. Contains no dents, dings or scratches.' }, { name: 'Good', label: 'Shows light to moderate signs of wear. Contains light scratches and/or dents.' }, { name: 'Fair', label: 'Shows moderate to excessive signs of wear. Contains moderate scratches, dings, or dents.' }, { name: 'Broken', label: 'Deep cracks or broken parts on either screen or body of the item.' }],
                        processor: [
                            {
                                name: "i3",
                                GCard: []
                            }, {
                                name: "i5",
                                GCard: []
                            }, {
                                name: "i7",
                                GCard: []
                            }],
                        ram: ["8 GB", "16 GB"],
                        gb: ["256 GB", "512 GB", "1 TB", "2 TB"]
                    }
                ]
            },
            {
                size: "13",
                sizeLabel: "MacBook Air (2018 - 2020)",
                years: [
                    {
                        year: "Early 2014",
                        Condition: [{ name: 'Brand New', label: 'Brand new device. Comes with the box and all accessories sealed/untouched.' }, { name: 'Flaw-less', label: 'Looks brand new. Contains no dents, dings or scratches.' }, { name: 'Good', label: 'Shows light to moderate signs of wear. Contains light scratches and/or dents.' }, { name: 'Fair', label: 'Shows moderate to excessive signs of wear. Contains moderate scratches, dings, or dents.' }, { name: 'Broken', label: 'Deep cracks or broken parts on either screen or body of the item.' }],
                        processor: [
                            {
                                name: "Core 2 Duo",
                                GCard: []
                            },
                            {
                                name: "i5",
                                GCard: []
                            },
                            {
                                name: "i7",
                                GCard: []
                            }
                        ],
                        gb: ["64 GB SSD", "128 GB SSD", "256 GB SSD", "512 GB SSD"],
                        ram: ["2 GB", "4 GB", "8 GB"],
                    },
                    {
                        year: "Early 2015",
                        Condition: [{ name: 'Brand New', label: 'Brand new device. Comes with the box and all accessories sealed/untouched.' }, { name: 'Flaw-less', label: 'Looks brand new. Contains no dents, dings or scratches.' }, { name: 'Good', label: 'Shows light to moderate signs of wear. Contains light scratches and/or dents.' }, { name: 'Fair', label: 'Shows moderate to excessive signs of wear. Contains moderate scratches, dings, or dents.' }, { name: 'Broken', label: 'Deep cracks or broken parts on either screen or body of the item.' }],
                        processor: [
                            {
                                name: "Core 2 Duo",
                                GCard: []
                            },
                            {
                                name: "i5",
                                GCard: []
                            },
                            {
                                name: "i7",
                                GCard: []
                            }
                        ],
                        gb: ["64 GB SSD", "128 GB SSD", "256 GB SSD", "512 GB SSD"],
                        ram: ["2 GB", "4 GB", "8 GB"],
                    }

                ]
            },
            {
                size: "13",
                sizeLabel: "MacBook Air (2012 - 2017)",
                years: [
                    {
                        year: "Early 2014",
                        Condition: [{ name: 'Brand New', label: 'Brand new device. Comes with the box and all accessories sealed/untouched.' }, { name: 'Flaw-less', label: 'Looks brand new. Contains no dents, dings or scratches.' }, { name: 'Good', label: 'Shows light to moderate signs of wear. Contains light scratches and/or dents.' }, { name: 'Fair', label: 'Shows moderate to excessive signs of wear. Contains moderate scratches, dings, or dents.' }, { name: 'Broken', label: 'Deep cracks or broken parts on either screen or body of the item.' }],
                        processor: [
                            {
                                name: "1.4Ghz",
                                GCard: []
                            },
                            {
                                name: "1.7Ghz",
                                GCard: []
                            }
                        ],
                        ram: ["2 GB", "4 GB", "8 GB"],
                        gb: ["256 GB", "512 GB", "1 TB", "2 TB"]
                    },
                    {
                        year: "Early 2015",
                        Condition: [{ name: 'Brand New', label: 'Brand new device. Comes with the box and all accessories sealed/untouched.' }, { name: 'Flaw-less', label: 'Looks brand new. Contains no dents, dings or scratches.' }, { name: 'Good', label: 'Shows light to moderate signs of wear. Contains light scratches and/or dents.' }, { name: 'Fair', label: 'Shows moderate to excessive signs of wear. Contains moderate scratches, dings, or dents.' }, { name: 'Broken', label: 'Deep cracks or broken parts on either screen or body of the item.' }],
                        processor: [
                            {
                                name: "1.6GHz",
                                GCard: []
                            },
                            {
                                name: "2.2GHz",
                                GCard: []
                            }
                        ],
                        ram: ["2 GB", "4 GB", "8 GB"],
                        gb: ["256 GB", "512 GB", "1 TB", "2 TB"]
                    },
                    {
                        year: "2017",
                        Condition: [{ name: 'Brand New', label: 'Brand new device. Comes with the box and all accessories sealed/untouched.' }, { name: 'Flaw-less', label: 'Looks brand new. Contains no dents, dings or scratches.' }, { name: 'Good', label: 'Shows light to moderate signs of wear. Contains light scratches and/or dents.' }, { name: 'Fair', label: 'Shows moderate to excessive signs of wear. Contains moderate scratches, dings, or dents.' }, { name: 'Broken', label: 'Deep cracks or broken parts on either screen or body of the item.' }],
                        processor: [
                            {
                                name: "1.8Ghz",
                                GCard: []
                            },
                            {
                                name: "2.2Ghz",
                                GCard: []
                            }
                        ],
                        ram: ["2 GB", "4 GB", "8 GB"],
                        gb: ["256 GB", "512 GB", "1 TB", "2 TB"]
                    }
                ]
            }
        ],
        imagePath: "https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/Macbook/Macbook-air.png"
    },

    {
        devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Macbook/macbook-pro-no-touch-bar.jpg',
        deviceName: "MacBook Pro - Retina (2012 - 2015)",
        label: "Macbook Pro",
        size: [
            {
                size: "13",
                sizeLabel: "MacBook Pro Retina 13",
                years: [
                    {
                        year: "Mid 2014",
                        Condition: [{ name: 'Brand New', label: 'Brand new device. Comes with the box and all accessories sealed/untouched.' }, { name: 'Flaw-less', label: 'Looks brand new. Contains no dents, dings or scratches.' }, { name: 'Good', label: 'Shows light to moderate signs of wear. Contains light scratches and/or dents.' }, { name: 'Fair', label: 'Shows moderate to excessive signs of wear. Contains moderate scratches, dings, or dents.' }, { name: 'Broken', label: 'Deep cracks or broken parts on either screen or body of the item.' }],
                        processor: [
                            {
                                name: "2.6 GHz Intel Core i5",
                                GCard: []
                            },
                            {
                                name: "2.8 GHz Intel Core i5",
                                GCard: []
                            },
                            {
                                name: "3.0 GHz Intel Core i7",
                                GCard: []
                            }
                        ],
                        ram: ["8 GB", "16 GB"],
                        gb: ["128 GB", "256 GB", "512 GB", "1 TB"]
                    },
                    {
                        year: "Early 2015",
                        Condition: [{ name: 'Brand New', label: 'Brand new device. Comes with the box and all accessories sealed/untouched.' }, { name: 'Flaw-less', label: 'Looks brand new. Contains no dents, dings or scratches.' }, { name: 'Good', label: 'Shows light to moderate signs of wear. Contains light scratches and/or dents.' }, { name: 'Fair', label: 'Shows moderate to excessive signs of wear. Contains moderate scratches, dings, or dents.' }, { name: 'Broken', label: 'Deep cracks or broken parts on either screen or body of the item.' }],
                        processor: [
                            {
                                name: "2.7 GHz Intel Core i5",
                                GCard: []
                            },
                            {
                                name: "2.9 GHz Intel Core i5",
                                GCard: []
                            },
                            {
                                name: "3.1 GHz Intel Core i7",
                                GCard: []
                            }
                        ],
                        ram: ["8 GB", "16 GB"],
                        gb: ["128 GB", "256 GB", "512 GB", "1 TB"]
                    }
                ]
            },
            {
                size: "15",
                sizeLabel: "MacBook Pro Retina 15",
                years: [
                    {
                        year: "Mid 2014",
                        Condition: [{ name: 'Brand New', label: 'Brand new device. Comes with the box and all accessories sealed/untouched.' }, { name: 'Flaw-less', label: 'Looks brand new. Contains no dents, dings or scratches.' }, { name: 'Good', label: 'Shows light to moderate signs of wear. Contains light scratches and/or dents.' }, { name: 'Fair', label: 'Shows moderate to excessive signs of wear. Contains moderate scratches, dings, or dents.' }, { name: 'Broken', label: 'Deep cracks or broken parts on either screen or body of the item.' }],
                        processor: [
                            {
                                name: "2.2 GHz Intel Core i7",
                                GCard: []
                            },
                            {
                                name: "2.5 GHz Intel Core i7",
                                GCard: []
                            },
                            {
                                name: "2.8 GHz Intel Core i7",
                                GCard: []
                            }
                        ],
                        gb: ["256 GB SSD", "512 GB SSD", "768 GB", "1 TB"],
                        ram: ["8 GB", "16 GB"],
                    },
                    {
                        year: "Mid 2015",
                        Condition: [{ name: 'Brand New', label: 'Brand new device. Comes with the box and all accessories sealed/untouched.' }, { name: 'Flaw-less', label: 'Looks brand new. Contains no dents, dings or scratches.' }, { name: 'Good', label: 'Shows light to moderate signs of wear. Contains light scratches and/or dents.' }, { name: 'Fair', label: 'Shows moderate to excessive signs of wear. Contains moderate scratches, dings, or dents.' }, { name: 'Broken', label: 'Deep cracks or broken parts on either screen or body of the item.' }],
                        processor: [
                            {
                                name: "2.2 GHz Intel Core i7",
                                GCard: []
                            },
                            {
                                name: "2.5 GHz Intel Core i7",
                                GCard: []
                            },
                            {
                                name: "2.8 GHz Intel Core i7",
                                GCard: []
                            }
                        ],
                        gb: ["256 GB SSD", "512 GB SSD", "768 GB", "1 TB"],
                        ram: ["8 GB", "16 GB"],
                    }
                ]
            }
        ],
        imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Macbook/macbook-pro-no-touch-bar.jpg"
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Macbook/macbook-pro-no-touch-bar.jpg',
        deviceName: "MacBook Pro - No Touch Bar (2016 - Present)",
        label: "Macbook Pro",
        size: [
            {
                size: "13",
                sizeLabel: "MacBook Pro Retina 13",
                years: [
                    {
                        year: "2016",
                        Condition: [{ name: 'Brand New', label: 'Brand new device. Comes with the box and all accessories sealed/untouched.' }, { name: 'Flaw-less', label: 'Looks brand new. Contains no dents, dings or scratches.' }, { name: 'Good', label: 'Shows light to moderate signs of wear. Contains light scratches and/or dents.' }, { name: 'Fair', label: 'Shows moderate to excessive signs of wear. Contains moderate scratches, dings, or dents.' }, { name: 'Broken', label: 'Deep cracks or broken parts on either screen or body of the item.' }],
                        processor: [
                            {
                                name: "2.0 GHz Intel Core i5",
                                GCard: []
                            },
                            {
                                name: "2.4 GHz Intel Core i7",
                                GCard: []
                            }
                        ],
                        ram: ["8 GB", "16 GB"],
                        gb: ["128 GB", "256 GB", "512 GB", "1 TB"]
                    },
                    {
                        year: "2017",
                        Condition: [{ name: 'Brand New', label: 'Brand new device. Comes with the box and all accessories sealed/untouched.' }, { name: 'Flaw-less', label: 'Looks brand new. Contains no dents, dings or scratches.' }, { name: 'Good', label: 'Shows light to moderate signs of wear. Contains light scratches and/or dents.' }, { name: 'Fair', label: 'Shows moderate to excessive signs of wear. Contains moderate scratches, dings, or dents.' }, { name: 'Broken', label: 'Deep cracks or broken parts on either screen or body of the item.' }],
                        processor: [
                            {
                                name: "2.3 GHz Intel Core i7",
                                GCard: []
                            },
                            {
                                name: "2.5 GHz Intel Core i7",
                                GCard: []
                            }
                        ],
                        ram: ["8 GB", "16 GB"],
                        gb: ["128 GB", "256 GB", "512 GB", "1 TB"]
                    }
                ]
            }
        ],
        imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Macbook/macbook-pro-no-touch-bar.jpg"
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Macbook/macbook-pro-touch-bar.jpg',
        deviceName: "MacBook Pro - Touch Bar (2016 - Present)",
        label: "Macbook Pro",
        size: [
            {
                size: "16",
                sizeLabel: "MacBook Pro 16",
                years: [
                    {
                        year: "2019",
                        Condition: [{ name: 'Brand New', label: 'Brand new device. Comes with the box and all accessories sealed/untouched.' }, { name: 'Flaw-less', label: 'Looks brand new. Contains no dents, dings or scratches.' }, { name: 'Good', label: 'Shows light to moderate signs of wear. Contains light scratches and/or dents.' }, { name: 'Fair', label: 'Shows moderate to excessive signs of wear. Contains moderate scratches, dings, or dents.' }, { name: 'Broken', label: 'Deep cracks or broken parts on either screen or body of the item.' }],
                        processor: [
                            {
                                name: "2.6 GHz 6-core Intel Core i7",
                                GCard: ["AMD Radeon Pro 5300M w/ 4GB", "AMD Radeon Pro 5500M w/ 4GB", "AMD Radeon Pro 5500M w/ 8GB", "AMD Radeon Pro 5600M w/ 8GB HBM2"]
                            },
                            {
                                name: "2.3 GHz 8-core Intel Core i9",
                                GCard: ["AMD Radeon Pro 5500M w/ 4GB", "AMD Radeon Pro 5500M w/ 8GB", "AMD Radeon Pro 5600M w/ 8GB HBM2"]
                            },
                            {
                                name: "2.4 GHz 8-core Intel Core i9",
                                GCard: ["AMD Radeon Pro 5300M w/ 4GB", "AMD Radeon Pro 5500M w/ 4GB", "AMD Radeon Pro 5500M w/ 8GB", "AMD Radeon Pro 5600M w/ 8GB HBM2"]
                            }
                        ],
                        ram: ["16 GB", "32 GB", "64 GB"],
                        gb: ["512 GB", "1 TB", "2 TB", "4 TB", "8 TB"]
                    }
                ]
            },
            {
                size: "13",
                sizeLabel: "MacBook Pro 13 - Touch Bar",
                years: [
                    {
                        year: "2016",
                        Condition: [{ name: 'Brand New', label: 'Brand new device. Comes with the box and all accessories sealed/untouched.' }, { name: 'Flaw-less', label: 'Looks brand new. Contains no dents, dings or scratches.' }, { name: 'Good', label: 'Shows light to moderate signs of wear. Contains light scratches and/or dents.' }, { name: 'Fair', label: 'Shows moderate to excessive signs of wear. Contains moderate scratches, dings, or dents.' }, { name: 'Broken', label: 'Deep cracks or broken parts on either screen or body of the item.' }],
                        processor: [
                            {
                                name: "2.9 GHz Intel Core i5",
                                GCard: []
                            },
                            {
                                name: "3.1 GHz Intel Core i5",
                                GCard: []
                            },
                            {
                                name: "3.3 GHz Intel Core i7",
                                GCard: []
                            }
                        ],
                        ram: ["8 GB", "16 GB"],
                        gb: ["128 GB", "256 GB", "512 GB", "1 TB", "2 TB"]
                    },
                    {
                        year: "2017",
                        Condition: [{ name: 'Brand New', label: 'Brand new device. Comes with the box and all accessories sealed/untouched.' }, { name: 'Flaw-less', label: 'Looks brand new. Contains no dents, dings or scratches.' }, { name: 'Good', label: 'Shows light to moderate signs of wear. Contains light scratches and/or dents.' }, { name: 'Fair', label: 'Shows moderate to excessive signs of wear. Contains moderate scratches, dings, or dents.' }, { name: 'Broken', label: 'Deep cracks or broken parts on either screen or body of the item.' }],
                        processor: [
                            {
                                name: "3.1 GHz Intel Core i5",
                                GCard: []
                            },
                            {
                                name: "3.3 GHz Intel Core i5",
                                GCard: []
                            },
                            {
                                name: "3.5 GHz Intel Core i7",
                                GCard: []
                            }
                        ],
                        ram: ["8 GB", "16 GB"],
                        gb: ["128 GB", "256 GB", "512 GB", "1 TB", "2 TB"]
                    },
                    {
                        year: "2018",
                        Condition: [{ name: 'Brand New', label: 'Brand new device. Comes with the box and all accessories sealed/untouched.' }, { name: 'Flaw-less', label: 'Looks brand new. Contains no dents, dings or scratches.' }, { name: 'Good', label: 'Shows light to moderate signs of wear. Contains light scratches and/or dents.' }, { name: 'Fair', label: 'Shows moderate to excessive signs of wear. Contains moderate scratches, dings, or dents.' }, { name: 'Broken', label: 'Deep cracks or broken parts on either screen or body of the item.' }],
                        processor: [
                            {
                                name: "2.3 GHz Intel Core i5",
                                GCard: []
                            },
                            {
                                name: "2.7 GHz Intel Core i7",
                                GCard: []
                            }
                        ],
                        ram: ["8 GB", "16 GB"],
                        gb: ["128 GB", "256 GB", "512 GB", "1 TB", "2 TB"]
                    },
                    {
                        year: "2019",
                        Condition: [{ name: 'Brand New', label: 'Brand new device. Comes with the box and all accessories sealed/untouched.' }, { name: 'Flaw-less', label: 'Looks brand new. Contains no dents, dings or scratches.' }, { name: 'Good', label: 'Shows light to moderate signs of wear. Contains light scratches and/or dents.' }, { name: 'Fair', label: 'Shows moderate to excessive signs of wear. Contains moderate scratches, dings, or dents.' }, { name: 'Broken', label: 'Deep cracks or broken parts on either screen or body of the item.' }],
                        processor: [
                            {
                                name: "1.4 GHz Intel Core i5",
                                GCard: []
                            },
                            {
                                name: "1.7 GHz Intel Core i7",
                                GCard: []
                            },
                            {
                                name: "2.4 GHz Intel Core i5",
                                GCard: []
                            },
                            {
                                name: "2.8 GHz Intel Core i7",
                                GCard: []
                            }
                        ],
                        ram: ["8 GB", "16 GB"],
                        gb: ["128 GB", "256 GB", "512 GB", "1 TB", "2 TB"]
                    },
                    {
                        year: "2020",
                        Condition: [{ name: 'Brand New', label: 'Brand new device. Comes with the box and all accessories sealed/untouched.' }, { name: 'Flaw-less', label: 'Looks brand new. Contains no dents, dings or scratches.' }, { name: 'Good', label: 'Shows light to moderate signs of wear. Contains light scratches and/or dents.' }, { name: 'Fair', label: 'Shows moderate to excessive signs of wear. Contains moderate scratches, dings, or dents.' }, { name: 'Broken', label: 'Deep cracks or broken parts on either screen or body of the item.' }],
                        processor: [
                            {
                                name: "1.4 GHz Intel Core i5",
                                GCard: []
                            },
                            {
                                name: "1.7 GHz Intel Core i7",
                                GCard: []
                            },
                            {
                                name: "2.0 GHz Intel Core i5",
                                GCard: []
                            },
                            {
                                name: "2.3 GHz Intel Core i7",
                                GCard: []
                            }
                        ],
                        ram: ["8 GB", "16 GB", "32 GB"],
                        gb: ["256 GB", "512 GB", "1 TB", "2 TB", "4 TB"]
                    }
                ]
            },
            {
                size: "15",
                sizeLabel: "MacBook Pro 15 - Touch Bar",
                years: [
                    {
                        year: "2016",
                        Condition: [{ name: 'Brand New', label: 'Brand new device. Comes with the box and all accessories sealed/untouched.' }, { name: 'Flaw-less', label: 'Looks brand new. Contains no dents, dings or scratches.' }, { name: 'Good', label: 'Shows light to moderate signs of wear. Contains light scratches and/or dents.' }, { name: 'Fair', label: 'Shows moderate to excessive signs of wear. Contains moderate scratches, dings, or dents.' }, { name: 'Broken', label: 'Deep cracks or broken parts on either screen or body of the item.' }],
                        processor: [
                            {
                                name: "2.6 GHz Intel Core i7",
                                GCard: []
                            },
                            {
                                name: "2.7 GHz Intel Core i7",
                                GCard: []
                            },
                            {
                                name: "2.9 GHz Intel Core i7",
                                GCard: []
                            }
                        ],
                        ram: ["8 GB", "16 GB", "32 GB"],
                        gb: ["256 GB", "512 GB", "1 TB", "2 TB", "4 TB"]
                    },
                    {
                        year: "2017",
                        Condition: [{ name: 'Brand New', label: 'Brand new device. Comes with the box and all accessories sealed/untouched.' }, { name: 'Flaw-less', label: 'Looks brand new. Contains no dents, dings or scratches.' }, { name: 'Good', label: 'Shows light to moderate signs of wear. Contains light scratches and/or dents.' }, { name: 'Fair', label: 'Shows moderate to excessive signs of wear. Contains moderate scratches, dings, or dents.' }, { name: 'Broken', label: 'Deep cracks or broken parts on either screen or body of the item.' }],
                        processor: [
                            {
                                name: "2.8 GHz Intel Core i7",
                                GCard: ["AMD Radeon Pro 555", "AMD Radeon Pro 560"]
                            },
                            {
                                name: "2.9 GHz Intel Core i7",
                                GCard: []
                            },
                            {
                                name: "3.1 GHz Intel Core i7",
                                GCard: ["AMD Radeon Pro 555", "AMD Radeon Pro 560"]
                            }
                        ],
                        ram: ["8 GB", "16 GB", "32 GB"],
                        gb: ["256 GB", "512 GB", "1 TB", "2 TB", "4 TB"]
                    },
                    {
                        year: "2018",
                        Condition: [{ name: 'Brand New', label: 'Brand new device. Comes with the box and all accessories sealed/untouched.' }, { name: 'Flaw-less', label: 'Looks brand new. Contains no dents, dings or scratches.' }, { name: 'Good', label: 'Shows light to moderate signs of wear. Contains light scratches and/or dents.' }, { name: 'Fair', label: 'Shows moderate to excessive signs of wear. Contains moderate scratches, dings, or dents.' }, { name: 'Broken', label: 'Deep cracks or broken parts on either screen or body of the item.' }],
                        processor: [
                            {
                                name: "2.2 GHz Intel Core i7",
                                GCard: ["AMD Radeon Pro 555X", "AMD Radeon Pro 560X", "AMD Radeon Pro Vega 16", "AMD Radeon Pro Vega 20"]
                            },
                            {
                                name: "2.6 GHz Intel Core i7",
                                GCard: ["AMD Radeon Pro 555X", "AMD Radeon Pro 560X", "AMD Radeon Pro Vega 16", "AMD Radeon Pro Vega 20"]
                            },
                            {
                                name: "2.9 GHz Intel Core i9",
                                GCard: ["AMD Radeon Pro 555X", "AMD Radeon Pro 560X", "AMD Radeon Pro Vega 16", "AMD Radeon Pro Vega 20"]
                            }
                        ],
                        ram: ["8 GB", "16 GB", "32 GB"],
                        gb: ["256 GB", "512 GB", "1 TB", "2 TB", "4 TB"]
                    },
                    {
                        year: "2019",
                        Condition: [{ name: 'Brand New', label: 'Brand new device. Comes with the box and all accessories sealed/untouched.' }, { name: 'Flaw-less', label: 'Looks brand new. Contains no dents, dings or scratches.' }, { name: 'Good', label: 'Shows light to moderate signs of wear. Contains light scratches and/or dents.' }, { name: 'Fair', label: 'Shows moderate to excessive signs of wear. Contains moderate scratches, dings, or dents.' }, { name: 'Broken', label: 'Deep cracks or broken parts on either screen or body of the item.' }],
                        processor: [
                            {
                                name: "2.6 GHz Intel Core i7",
                                GCard: ["AMD Radeon Pro 555X", "AMD Radeon Pro 560X", "AMD Radeon Pro Vega 16", "AMD Radeon Pro Vega 20"]
                            },
                            {
                                name: "2.3 GHz 8-core Intel Core i9",
                                GCard: ["AMD Radeon Pro 555X", "AMD Radeon Pro 560X", "AMD Radeon Pro Vega 16", "AMD Radeon Pro Vega 20"]
                            },
                            {
                                name: "2.4 GHz 8-core Intel Core i9",
                                GCard: ["AMD Radeon Pro 555X", "AMD Radeon Pro 560X", "AMD Radeon Pro Vega 16", "AMD Radeon Pro Vega 20"]
                            }
                        ],
                        ram: ["8 GB", "16 GB", "32 GB"],
                        gb: ["256 GB", "512 GB", "1 TB", "2 TB", "4 TB"]
                    }
                ]
            }
        ],
        imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Macbook/macbook-pro-touch-bar.jpg"
    }
]


const MacBook = (props) => {
    const dispatch = useDispatch();
    const [selectedDevice, setSelectedDevice] = useState()
    const [selectedDeviceSize, setSelectedDeviceSize] = useState()
    const [selectedDeviceYear, setSelectedDeviceYear] = useState()
    const [selectedDeviceProcessor, setSelectedDeviceProcessor] = useState()

    const [offers, setOffers] = useState()
    const [imagePath, setImagePath] = useState()
    const [isLoader, setIsLoader] = useState(false)

    const [isBrokenOrNo, setIsBrokenOrNo] = useState(false)
    const [isBrandNew, setIsBrandNew] = useState(false)
    const [isBrokenFiled, setIsBrokenFiled] = useState(false)
    const [isProcessor, setIsProcessor] = useState(false)
    const [isGCard, setIsGCard] = useState(false)
    let { model } = useParams();

    useEffect(() => {
        if (model) {
            deviceList.filter(x => {
                if(x.label === model) {
                    setSelectedDevice([x])
                }
            })
        }
    }, [model])

    const selectDevice = (obj) => {
        setSelectedDevice([obj]);
        setImagePath(obj.imagePath);
    }

    const handelSubmits = (value) => {
        setIsLoader(true);
        const condition = value.condition === 'Brand New' ? '100%' : value.condition === 'Flaw-less' ? '75%' : value.condition === 'Good' ? '50%' : value.condition === 'Fair' ? '30%' : 'Broken'
        const obj = {
            macbook_model: selectedDevice[0].label,
            screen_size: value.size,
            year: value.year,
            processer: value.processor,
            cosmetic_condition: condition,
            ram_capacity: value.ram,
            storage_capacity: value.capacity,
            battery_health: value.batteryHealth,
            macbook_functional: value.functional,
            macbook_powercord: value.powercord,
            graphics_card: value.GCard,
            touch: ""
        }
        let customAmount = 0;

        console.log(obj);
        if (selectedDeviceSize.sizeLabel === "MacBook Air 13 (2018 - 2020)" && (value.year === "2018" || value.year === "2019")) {
            obj.storage_capacity = "128 GB SSD"
            obj.ram_capacity = "8 GB"
            obj.battery_health = "Good"
            obj.processer = ""
            obj.graphics_card = ""
            obj.macbook_powercord = "Yes"
            obj.macbook_functional = "Yes"

            if (obj.cosmetic_condition === "100%") {
                obj.battery_health = ""
            }

            if (value.capacity === "256 GB SSD") {
                customAmount += 20;
            }
            if (value.capacity === "512 GB SSD") {
                customAmount += 30;
            }
            if (value.capacity === "1.5 TB SSD") {
                customAmount += 200;
            }
            if (value.ram === "16 GB") {
                customAmount += 65;
            }
            if (value.capacity === "1.5 TB SSD" && value.year === "2019") {
                customAmount += 250;
            }
            if (value.batteryHealth === "Fair") {
                customAmount += 75;
            }
            if (value.batteryHealth === "Poor") {
                customAmount += 50;
            }
            if (value.powercord === "No") {
                customAmount -= 15;
            }

        } else if (selectedDeviceSize.sizeLabel === "MacBook Air 13 (2018 - 2020)" && value.year === "2020") {
            obj.storage_capacity = "256 GB"
            obj.ram_capacity = "8 GB"
            obj.processer = "1.1Ghz"
            obj.battery_health = ''
            obj.macbook_powercord = ''
            obj.macbook_functional = ''
            if (value.capacity === "512 GB") {
                customAmount += 100;
            }
            if (value.capacity === "1 TB") {
                customAmount += 150;
            }
            if (value.capacity === "2 TB") {
                customAmount += 250;
            }
            if (value.ram === "16 GB") {
                customAmount += 100;
            }
            if (value.processor === "i5") {
                customAmount += 100;
            }
            if (value.processor === "i7") {
                customAmount += 300;
            }
            if (value.MagicMouse) {
                customAmount += 20;
            }
            if (value.MagicTrackpad) {
                customAmount += 20;
            }
            if (value.MagicKeyboard) {
                customAmount += 20;
            }
            if (value.MagicTrackpad) {
                customAmount += 20;
            }
        } else if (selectedDeviceSize.sizeLabel === "MacBook Air 11" && value.year === "Early 2014") {
            obj.storage_capacity = "64 GB SSD"
            obj.ram_capacity = "2 GB"
            obj.processer = "Core 2 Duo"
            obj.battery_health = "Good"
            obj.graphics_card = ""

            if (obj.cosmetic_condition === "Broken") {
                obj.battery_health = ""
                obj.macbook_powercord = ""
                obj.macbook_functional = ""
                obj.ram_capacity = ""
                obj.storage_capacity = ""
            }

            if (value.capacity === "128 GB SSD") {
                customAmount += 35;
            }
            if (value.capacity === "256 GB SSD") {
                customAmount += 35;
            }
            if (value.capacity === "512 GB SSD") {
                customAmount += 250;
            }

            if (value.powercord === "No") {
                customAmount -= 25;
            }

            if (value.batteryHealth === "Fair") {
                customAmount += 40;
            }

            if (value.batteryHealth === "Poor") {
                customAmount += 35;
            }

            if (value.ram === "8 GB") {
                customAmount += 25;
            }

            if (value.processor === "i7") {
                customAmount += 50;
            }
        } else if (selectedDeviceSize.sizeLabel === "MacBook Air 11" && value.year === "Early 2015") {
            obj.processer = "Core 2 Duo"
            obj.ram_capacity = "2 GB"
            obj.graphics_card = ""
            obj.battery_health = "Good"
            obj.storage_capacity = "64 GB SSD"

            if (value.processor === "i7") {
                customAmount += 50;
            }
            if (obj.cosmetic_condition === "Broken") {
                obj.macbook_powercord = ""
                obj.macbook_functional = ""
                obj.processer = ""
                obj.ram_capacity = ""
                obj.graphics_card = ""
                obj.battery_health = ""
                obj.storage_capacity = ""
            }

            if (value.capacity === "128 GB SSD") {
                customAmount += 35;
            }
            if (value.capacity === "256 GB SSD") {
                customAmount += 35;
            }
            if (value.capacity === "512 GB SSD") {
                customAmount += 250;
            }

            if (value.powercord === "No") {
                customAmount -= 25;
            }

            if (value.batteryHealth === "Fair") {
                customAmount += 40;
            }

            if (value.batteryHealth === "Poor") {
                customAmount += 35;
            }

            if (value.ram === "8 GB") {
                customAmount += 25;
            }

            if (value.processor === "i7") {
                customAmount += 50;
            }
        } else if (selectedDeviceSize.sizeLabel === "MacBook Air 13 (2009 - 2017)" && value.year === "Early 2014") {
            obj.storage_capacity = "80 GB"
            obj.ram_capacity = "2 GB"
            obj.processer = "1.4Ghz"
            obj.battery_health = "Good"
            obj.graphics_card = ""

            if (obj.cosmetic_condition === "Broken") {
                obj.battery_health = ""
                obj.macbook_powercord = ""
                obj.macbook_functional = ""
                obj.ram_capacity = ""
                obj.storage_capacity = ""
            }

            if (value.ram === "8 GB") {
                customAmount += 20;
            }
            if (value.powercord === "No") {
                customAmount -= 25;
            }
            if (value.capacity === "256 GB SSD") {
                customAmount += 20;
            }
            if (value.capacity === "512 GB SSD") {
                customAmount += 20;
            }
            if (value.processer === "1.7Ghz") {
                customAmount += 30;
            }
            if (value.batteryHealth === "Fair") {
                customAmount += 40;
            }

            if (value.batteryHealth === "Poor") {
                customAmount += 35;
            }
        } else if (selectedDeviceSize.sizeLabel === "MacBook Air 13 (2009 - 2017)" && value.year === "Early 2015") {
            obj.storage_capacity = "80 GB"
            obj.ram_capacity = "2 GB"
            obj.processer = "1.6Ghz"
            obj.battery_health = "Good"
            obj.graphics_card = ""

            if (obj.cosmetic_condition === "Broken") {
                obj.battery_health = ""
                obj.macbook_powercord = ""
                obj.macbook_functional = ""
                obj.ram_capacity = ""
                obj.storage_capacity = ""
            }

            if (value.ram === "8 GB") {
                customAmount += 20;
            }
            if (value.powercord === "No") {
                customAmount -= 25;
            }
            if (value.capacity === "256 GB SSD") {
                customAmount += 20;
            }
            if (value.capacity === "512 GB SSD") {
                customAmount += 20;
            }
            if (value.processer === "2.2GHz") {
                customAmount += 30;
            }
            if (value.batteryHealth === "Fair") {
                customAmount += 40;
            }

            if (value.batteryHealth === "Poor") {
                customAmount += 35;
            }
        } else if (selectedDeviceSize.sizeLabel === "MacBook Air 13 (2009 - 2017)" && value.year === "2017") {
            obj.storage_capacity = "80 GB"
            obj.ram_capacity = "2 GB"
            obj.processer = "1.8Ghz"
            obj.battery_health = "Good"
            obj.graphics_card = ""

            if (obj.cosmetic_condition === "Broken") {
                obj.battery_health = ""
                obj.macbook_powercord = ""
                obj.macbook_functional = ""
            }

            if (value.ram === "8 GB") {
                customAmount += 20;
            }
            if (value.powercord === "No") {
                customAmount -= 25;
            }
            if (value.capacity === "256 GB SSD") {
                customAmount += 20;
            }
            if (value.capacity === "512 GB SSD") {
                customAmount += 20;
            }
            if (value.processer === "2.2GHz") {
                customAmount += 30;
            }
            if (value.batteryHealth === "Fair") {
                customAmount += 40;
            }

            if (value.batteryHealth === "Poor") {
                customAmount += 35;
            }

        } else if (selectedDeviceSize.sizeLabel === "MacBook Pro 16" && value.year === "2019") {
            obj.storage_capacity = "512 GB"
            obj.ram_capacity = "16 GB"
            obj.processer = "2.3Ghz"
            obj.graphics_card = "AMD Radeon Pro 5500M w/4GB"
            obj.touch = "Yes"
            obj.battery_health = "Good"
            if (obj.cosmetic_condition === "100%") {
                obj.macbook_powercord = ""
                obj.macbook_functional = "Yes"
                obj.battery_health = ""
            }

            if (obj.cosmetic_condition === "50%") {
                obj.storage_capacity = "512 GB SSD"
            }

            if (obj.cosmetic_condition === "Broken") {
                obj.macbook_powercord = ""
                obj.macbook_functional = "Yes"
                obj.battery_health = ""
                obj.storage_capacity = "512 GB SSD"
            }

            if (value.GCard === "AMD Radeon Pro 5500M w/ 4GB") {
                customAmount += 50;
            }

            if (value.GCard === "AMD Radeon Pro 5500M w/ 8GB") {
                customAmount += 100;
            }

            if (value.GCard === "AMD Radeon Pro 5600M w/ 8GB HBM2") {
                customAmount += 250;
            }

            if (value.processer === "2.4 GHz 8-core Intel Core i9") {
                customAmount += 100;
            }

            if (value.processer === "2.6 GHz 6-core Intel Core i7") {
                customAmount += 30;
            }

            if (value.powercord === "No") {
                customAmount -= 40;
            }

            if (value.batteryHealth === "Fair") {
                customAmount += 75;
            }

            if (value.batteryHealth === "Poor") {
                customAmount += 50;
            }

            if (value.ram === "32 GB" || value.ram === "64 GB") {
                customAmount += 200;
            }
            if (value.capacity === "1 TB") {
                customAmount += 100;
            }
            if (value.capacity === "2 TB" || value.capacity === "4 TB") {
                customAmount += 250;
            }
            if (value.capacity === "8 TB") {
                customAmount += 900;
            }

        } else if (selectedDeviceSize.sizeLabel === "MacBook Pro Retina 13" && value.year === "2016") {
            obj.storage_capacity = "128 GB "
            obj.ram_capacity = "8 GB"
            obj.processer = "2.0Ghz"
            obj.touch = "No%"
            obj.graphics_card = ""
            obj.battery_health = "Good"
            if (obj.cosmetic_condition === "100%") {
                obj.battery_health = ""
                obj.macbook_functional = ""
                obj.macbook_powercord = ""
            }

            if (value.powercord === "No") {
                customAmount -= 25;
            }

            if (value.processer === "2.4 GHz Intel Core i7") {
                customAmount += 110;
            }

            if (value.batteryHealth === "Fair") {
                customAmount += 75;
            }

            if (value.batteryHealth === "Poor") {
                customAmount += 50;
            }

            if (value.ram === "16 GB") {
                customAmount += 20;
            }

            if (value.capacity === "256 GB") {
                customAmount += 15;
            }

            if (value.capacity === "512 GB") {
                customAmount += 35;
            }

            if (value.capacity === "1 TB") {
                customAmount += 100;
            }

        } else if (selectedDeviceSize.sizeLabel === "MacBook Pro Retina 13" && value.year === "2017") {
            obj.storage_capacity = "128 GB "
            obj.ram_capacity = "8 GB"
            obj.processer = "3.1Ghz"
            obj.touch = "Yes"
            obj.graphics_card = ""
            obj.battery_health = "Good"

            if (obj.cosmetic_condition === "100%") {
                obj.battery_health = ""
                obj.macbook_functional = ""
                obj.macbook_powercord = ""
            }

            if (value.powercord === "No") {
                customAmount -= 25;
            }


            if (value.batteryHealth === "Fair") {
                customAmount += 75;
            }

            if (value.batteryHealth === "Poor") {
                customAmount += 50;
            }

            if (value.ram === "16 GB") {
                customAmount += 20;
            }

            if (value.capacity === "256 GB") {
                customAmount += 15;
            }

            if (value.capacity === "512 GB") {
                customAmount += 35;
            }

            if (value.capacity === "1 TB") {
                customAmount += 100;
            }

        } else if (selectedDeviceSize.sizeLabel === "MacBook Pro 13 - Touch Bar" && value.size === "13" && value.year === "2016") {
            obj.storage_capacity = "128 GB "
            obj.ram_capacity = "8 GB"
            obj.processer = "2.9Ghz"
            obj.battery_health = "Good"
            obj.graphics_card = ""

            if (obj.cosmetic_condition === "100%") {
                obj.battery_health = ""
            }

            if (value.batteryHealth === "Fair") {
                customAmount += 75;
            }

            if (value.batteryHealth === "Poor") {
                customAmount += 50;
            }

            if (value.powercord === "No") {
                customAmount -= 25;
            }

            if (value.ram === "16 GB") {
                customAmount += 50;
            }

            if (value.capacity === "256 GB") {
                customAmount += 20;
            }

            if (value.capacity === "512 GB") {
                customAmount += 50;
            }

            if (value.capacity === "1 TB") {
                customAmount += 100;
            }

            if (value.capacity === "1 TB") {
                customAmount += 250;
            }

            if (value.processer === "3.1 GHz Intel Core i5") {
                customAmount += 50;
            }

            if (value.processer === "3.3 GHz Intel Core i7") {
                customAmount += 150;
            }

        } else if (selectedDeviceSize.sizeLabel === "MacBook Pro 13 - Touch Bar" && value.size === "13" && value.year === "2017") {
            obj.storage_capacity = "128 GB "
            obj.ram_capacity = "8 GB"
            obj.processer = "3.1Ghz"
            obj.battery_health = "Good"
            obj.graphics_card = ""
            obj.touch = "Yes"

            if (obj.cosmetic_condition === "100%") {
                obj.macbook_powercord = ""
                obj.macbook_functional = ""
                obj.battery_health = ""
            }

            if (value.processer === "3.3 GHz Intel Core i5") {
                customAmount += 100;
            }

            if (value.processer === "3.5 GHz Intel Core i7") {
                customAmount += 250;
            }

            if (value.ram === "16 GB") {
                customAmount += 50;
            }

            if (value.capacity === "256 GB") {
                customAmount += 20;
            }

            if (value.capacity === "512 GB") {
                customAmount += 70;
            }

            if (value.capacity === "1 TB") {
                customAmount += 170;
            }

            if (value.capacity === "2 TB") {
                customAmount += 420;
            }

        }
        else if (selectedDeviceSize.sizeLabel === "MacBook Pro 13 - Touch Bar" && value.size === "13" && value.year === "2018") {
            obj.storage_capacity = "128 GB "
            obj.ram_capacity = "8 GB"
            obj.processer = "2.3Ghz"
            obj.battery_health = "Good"
            obj.graphics_card = ""
            obj.touch = "Yes"

            if (obj.cosmetic_condition === "100%") {
                obj.macbook_powercord = ""
                obj.macbook_functional = ""
                obj.battery_health = ""
            }

            if (value.processer === "2.7 GHz Intel Core i7") {
                customAmount += 200;
            }

            if (value.ram === "16 GB") {
                customAmount += 50;
            }

            if (value.capacity === "256 GB") {
                customAmount += 20;
            }

            if (value.capacity === "512 GB") {
                customAmount += 70;
            }

            if (value.capacity === "1 TB") {
                customAmount += 170;
            }

            if (value.capacity === "2 TB") {
                customAmount += 420;
            }

        } else if (selectedDeviceSize.sizeLabel === "MacBook Pro 13 - Touch Bar" && value.size === "13" && value.year === "2019") {
            obj.storage_capacity = "128 GB "
            obj.ram_capacity = "8 GB"
            obj.processer = "1.4Ghz"
            obj.battery_health = "Good"
            obj.graphics_card = ""
            obj.touch = "Yes"

            if (obj.cosmetic_condition === "100%") {
                obj.macbook_powercord = ""
                obj.macbook_functional = ""
                obj.battery_health = ""
            }
            if (value.processer === "1.7 GHz Intel Core i7") {
                customAmount += 330;
            }

            if (value.processer === "2.4 GHz Intel Core i7") {
                customAmount += 300;
            }

            if (value.processer === "2.8 GHz Intel Core i7") {
                customAmount += 550;
            }

            if (value.ram === "16 GB") {
                customAmount += 50;
            }

            if (value.capacity === "256 GB") {
                customAmount += 20;
            }

            if (value.capacity === "512 GB") {
                customAmount += 70;
            }

            if (value.capacity === "1 TB") {
                customAmount += 170;
            }

            if (value.capacity === "2 TB") {
                customAmount += 320;
            }
        } else if (selectedDeviceSize.sizeLabel === "MacBook Pro 13 - Touch Bar" && value.size === "13" && value.year === "2020") {
            obj.storage_capacity = "256 GB"
            obj.ram_capacity = "8 GB"
            obj.processer = "1.4Ghz"
            obj.battery_health = "Good"
            obj.graphics_card = ""
            obj.touch = "Yes"

            if (obj.cosmetic_condition === "100%") {
                obj.macbook_powercord = ""
                obj.macbook_functional = ""
                obj.battery_health = ""
            }

            if (value.processer === "1.7 GHz Intel Core i7") {
                customAmount += 200;
            }

            if (value.processer === "2.0 GHz Intel Core i5") {
                customAmount += 100;
            }

            if (value.processer === "2.3 GHz Intel Core i7") {
                customAmount += 250;
            }

            if (value.ram === "16 GB") {
                customAmount += 50;
            }

            if (value.ram === "32 GB") {
                customAmount += 300;
            }

            if (value.capacity === "512 GB") {
                customAmount += 100;
            }

            if (value.capacity === "1 TB") {
                customAmount += 250;
            }

            if (value.capacity === "2 TB") {
                customAmount += 500;
            }

            if (value.capacity === "4 TB") {
                customAmount += 900;
            }

        } else if (selectedDeviceSize.sizeLabel === "MacBook Pro 15 - Touch Bar" && value.size === "15" && value.year === "2016") {
            obj.storage_capacity = "256 GB"
            obj.ram_capacity = "8 GB"
            obj.processer = "2.6Ghz"
            obj.battery_health = "Good"
            obj.graphics_card = ""
            obj.touch = "Yes"
            if (obj.cosmetic_condition === "100%") {
                obj.macbook_powercord = ""
                obj.macbook_functional = ""
                obj.battery_health = ""
            }


            if (value.powercord === "No") {
                customAmount -= 40;
            }

            if (value.batteryHealth === "Fair") {
                customAmount += 75;
            }

            if (value.batteryHealth === "Poor") {
                customAmount += 50;
            }

            if (value.ram === "16 GB") {
                customAmount += 30;
            }

            if (value.ram === "32 GB") {
                customAmount += 50;
            }

            if (value.capacity === "512 GB") {
                customAmount += 100;
            }

            if (value.capacity === "1 TB") {
                customAmount += 70;
            }

            if (value.capacity === "2 TB") {
                customAmount += 100;
            }

            if (value.capacity === "4 TB") {
                customAmount += 200;
            }

            if (value.processer === "2.7 GHz Intel Core i7") {
                customAmount += 40;
            }

            if (value.processer === "2.9 GHz Intel Core i7") {
                customAmount += 90;
            }


        } else if (selectedDeviceSize.sizeLabel === "MacBook Pro 15 - Touch Bar" && value.size === "15" && value.year === "2017") {
            obj.storage_capacity = "256 GB"
            obj.ram_capacity = "8 GB"
            obj.processer = "2.8Ghz"
            obj.battery_health = "Good"
            obj.graphics_card = "AMD Radeon Pro 555X"
            obj.touch = "Yes"

            if (obj.cosmetic_condition === "100%") {
                obj.macbook_powercord = ""
                obj.macbook_functional = ""
                obj.battery_health = ""
            }

            if (value.GCard === "AMD Radeon Pro 560") {
                customAmount += 20;
            }

            if (value.processer === "3.1 GHz Intel Core i7") {
                customAmount += 130;
            }

            if (value.processer === "2.9 GHz Intel Core i7") {
                customAmount += 80;
            }

            if (value.powercord === "No") {
                customAmount -= 40;
            }

            if (value.batteryHealth === "Fair") {
                customAmount += 75;
            }

            if (value.batteryHealth === "Poor") {
                customAmount += 50;
            }

            if (value.ram === "16 GB") {
                customAmount += 30;
            }

            if (value.ram === "32 GB") {
                customAmount += 50;
            }

            if (value.capacity === "512 GB") {
                customAmount += 100;
            }

            if (value.capacity === "1 TB") {
                customAmount += 70;
            }

            if (value.capacity === "2 TB") {
                customAmount += 100;
            }

            if (value.capacity === "4 TB") {
                customAmount += 200;
            }

        } else if (selectedDeviceSize.sizeLabel === "MacBook Pro 15 - Touch Bar" && value.size === "15" && value.year === "2018") {
            obj.storage_capacity = "256 GB"
            obj.ram_capacity = "8 GB"
            obj.processer = "2.2Ghz"
            obj.battery_health = "Good"
            obj.graphics_card = "AMD Radeon Pro 555X"
            obj.touch = "Yes"

            if (obj.cosmetic_condition === "100%") {
                obj.macbook_powercord = ""
                obj.macbook_functional = ""
                obj.battery_health = ""
            }

            if (value.GCard === "AMD Radeon Pro 555X" || value.GCard === "AMD Radeon Pro 560X") {
                customAmount += 50;
            }

            if (value.GCard === "AMD Radeon Pro Vega 20") {
                customAmount += 50;
            }

            if (value.GCard === "AMD Radeon Pro Vega 16") {
                customAmount += 150;
            }

            if (value.processer === "2.9 GHz Intel Core i9") {
                customAmount += 200;
            }

            if (value.processer === "2.6 GHz Intel Core i7") {
                customAmount += 100;
            }

            if (value.powercord === "No") {
                customAmount -= 40;
            }

            if (value.batteryHealth === "Fair") {
                customAmount += 75;
            }

            if (value.batteryHealth === "Poor") {
                customAmount += 50;
            }

            if (value.ram === "16 GB") {
                customAmount += 30;
            }

            if (value.ram === "32 GB") {
                customAmount += 50;
            }

            if (value.capacity === "512 GB") {
                customAmount += 100;
            }

            if (value.capacity === "1 TB") {
                customAmount += 70;
            }

            if (value.capacity === "2 TB") {
                customAmount += 100;
            }

            if (value.capacity === "4 TB") {
                customAmount += 200;
            }

        } else if (selectedDeviceSize.sizeLabel === "MacBook Pro 15 - Touch Bar" && value.size === "15" && value.year === "2019") {
            obj.storage_capacity = "256 GB"
            obj.ram_capacity = "8 GB"
            obj.processer = "2.6Ghz"
            obj.battery_health = "Good"
            obj.graphics_card = "AMD Radeon Pro 555X"
            obj.touch = "Yes"

            if (obj.cosmetic_condition === "100%") {
                obj.macbook_powercord = ""
                obj.macbook_functional = ""
                obj.battery_health = ""
            }

            if (value.GCard === "AMD Radeon Pro 555X" || value.GCard === "AMD Radeon Pro 560X") {
                customAmount += 50;
            }

            if (value.GCard === "AMD Radeon Pro Vega 20") {
                customAmount += 50;
            }

            if (value.GCard === "AMD Radeon Pro Vega 16") {
                customAmount += 150;
            }

            if (value.processer === "2.3 GHz 8-core Intel Core i9") {
                customAmount += 100;
            }

            if (value.processer === "2.4 GHz 8-core Intel Core i9") {
                customAmount += 250;
            }


            if (value.powercord === "No") {
                customAmount -= 40;
            }

            if (value.batteryHealth === "Fair") {
                customAmount += 75;
            }

            if (value.batteryHealth === "Poor") {
                customAmount += 50;
            }

            if (value.ram === "16 GB") {
                customAmount += 30;
            }

            if (value.ram === "32 GB") {
                customAmount += 50;
            }

            if (value.capacity === "512 GB") {
                customAmount += 100;
            }

            if (value.capacity === "1 TB") {
                customAmount += 70;
            }

            if (value.capacity === "2 TB") {
                customAmount += 100;
            }

            if (value.capacity === "4 TB") {
                customAmount += 200;
            }

        } else if (selectedDeviceSize.sizeLabel === "MacBook Pro Retina 13" && value.size === "13" && value.year === "Mid 2014") {
            obj.storage_capacity = "128 GB "
            obj.ram_capacity = "8 GB"
            obj.processer = "2.6Ghz"
            obj.battery_health = "Good"
            obj.graphics_card = ""

            if (obj.cosmetic_condition === "100%") {
                obj.macbook_powercord = ""
                obj.macbook_functional = ""
                obj.battery_health = ""
            }

            if (value.processer === "2.8 GHz Intel Core i5") {
                customAmount += 30;
            }

            if (value.processer === "3.0 GHz Intel Core i7") {
                customAmount += 130;
            }

            if (value.powercord === "No") {
                customAmount -= 25;
            }

            if (value.batteryHealth === "Fair") {
                customAmount += 75;
            }

            if (value.batteryHealth === "Poor") {
                customAmount += 50;
            }

            if (value.ram === "16 GB") {
                customAmount += 30;
            }

            if (value.ram === "16 GB") {
                customAmount += 40;
            }

            if (value.capacity === "256 GB") {
                customAmount += 20;
            }

            if (value.capacity === "512 GB") {
                customAmount += 30;
            }

            if (value.capacity === "1 TB") {
                customAmount += 80;
            }
        } else if (selectedDeviceSize.sizeLabel === "MacBook Pro Retina 13" && value.size === "13" && value.year === "Early 2015") {

            obj.storage_capacity = "128 GB "
            obj.ram_capacity = "8 GB"
            obj.processer = "2.7Ghz"
            obj.battery_health = "Good"
            obj.graphics_card = ""

            if (obj.cosmetic_condition === "100%") {
                obj.macbook_powercord = ""
                obj.macbook_functional = ""
                obj.battery_health = ""
            }

            if (value.processer === "2.9 GHz Intel Core i5") {
                customAmount += 20;
            }

            if (value.processer === "3.1 GHz Intel Core i7") {
                customAmount += 80;
            }

            if (value.powercord === "No") {
                customAmount -= 25;
            }

            if (value.batteryHealth === "Fair") {
                customAmount += 75;
            }

            if (value.batteryHealth === "Poor") {
                customAmount += 50;
            }

            if (value.ram === "16 GB") {
                customAmount += 30;
            }

            if (value.ram === "16 GB") {
                customAmount += 40;
            }

            if (value.capacity === "256 GB") {
                customAmount += 20;
            }

            if (value.capacity === "512 GB") {
                customAmount += 30;
            }

            if (value.capacity === "1 TB") {
                customAmount += 80;
            }


        } else if (selectedDeviceSize.sizeLabel === "MacBook Pro Retina 15" && value.size === "15" && value.year === "Mid 2014") {
            obj.storage_capacity = "256 GB"
            obj.ram_capacity = "8 GB"
            obj.battery_health = "Good"
            obj.processer = "2.2Ghz"

            if (value.processer === "2.5 GHz Intel Core i7") {
                customAmount += 30;
            }

            if (value.processer === "2.8 GHz Intel Core i7") {
                customAmount += 170;
            }

            if (value.powercord === "No") {
                customAmount -= 15;
            }

            if (value.batteryHealth === "Fair") {
                customAmount += 75;
            }

            if (value.batteryHealth === "Poor") {
                customAmount += 50;
            }

            if (value.ram === "16 GB") {
                customAmount += 20;
            }

            if (value.capacity === "768 GB") {
                customAmount += 30;
            }

            if (value.capacity === "512 GB") {
                customAmount += 230;
            }

            if (value.capacity === "1 TB") {
                customAmount += 60;
            }

        } else if (selectedDeviceSize.sizeLabel === "MacBook Pro Retina 15" && value.size === "15" && value.year === "Mid 2015") {
            obj.storage_capacity = "256 GB"
            obj.ram_capacity = "8 GB"
            obj.battery_health = "Good"
            obj.processer = "2.2Ghz"

            if (value.processer === "2.5 GHz Intel Core i7") {
                customAmount += 40;
            }

            if (value.processer === "2.8 GHz Intel Core i7") {
                customAmount += 95;
            }

            if (value.powercord === "No") {
                customAmount -= 15;
            }

            if (value.batteryHealth === "Fair") {
                customAmount += 75;
            }

            if (value.batteryHealth === "Poor") {
                customAmount += 50;
            }

            if (value.ram === "16 GB") {
                customAmount += 115;
            }

            if (value.capacity === "768 GB") {
                customAmount += 30;
            }

            if (value.capacity === "512 GB") {
                customAmount += 60;
            }

            if (value.capacity === "1 TB") {
                customAmount += 60;
            }

        } else if (selectedDeviceSize.sizeLabel === "MacBook 12" && value.year === "Early 2015") {
            obj.storage_capacity = "256 GB"
            obj.ram_capacity = "8 GB"
            obj.battery_health = ""
            obj.graphics_card = ""

            if (value.ram === "16 GB") {
                customAmount += 50;
            }

            if (value.capacity === "512 GB") {
                customAmount += 50;
            }

            if (value.powercord === "No") {
                customAmount -= 20;
            }
        } else if (selectedDeviceSize.sizeLabel === "MacBook 12" && value.year === "Early 2016") {
            obj.storage_capacity = "256 GB"
            obj.ram_capacity = "8 GB"
            obj.battery_health = ""
            obj.graphics_card = ""
            if (obj.processer === "m7 1.3Ghz") {
                obj.processer = "m5 1.2Ghz"
            }

            if (value.capacity === "512 GB") {
                customAmount += 50;
            }

            if (value.powercord === "No") {
                customAmount -= 20;
            }

        } else if (selectedDeviceSize.sizeLabel === "MacBook 12" && value.year === "2017") {
            obj.storage_capacity = "256 GB"
            obj.ram_capacity = "8 GB"
            obj.battery_health = ""
            obj.graphics_card = ""
            if (value.ram === "16 GB") {
                customAmount += 50;
            }
            if (value.capacity === "512 GB") {
                customAmount += 50;
            }

            if (value.powercord === "No") {
                customAmount -= 20;
            }
        }

        mackBookApi(obj).then(res => {
            if (!isEmpty(res.data && res.data.results)) {
                setOffers(res.data.results)
            }
            setIsLoader(false)
            if (!isEmpty(res.data && res.data.results)) {
                let offer = +res.data.results[0].offer

                if (offer >= 100 && offer < 200) {
                    offer = offer + 5;
                } else if (offer >= 200 && offer < 500) {
                    offer = offer + 10;
                } else if (offer >= 500) {
                    offer = offer + 15;
                }
                offer = offer + customAmount;
                setOffers([{ ...res.data.results[0], offer }])
                if (offer <= 0) {
                    setIsBrokenOrNo(true)
                }
            }
        }).catch(err => {
            console.log(err);
            setIsLoader(false)
        })
    }

    const deviceByYear = (x) => {
        if (x.processor.length > 0) {
            setIsProcessor(true)
        } else {
            setIsProcessor(false)
        }
        setSelectedDeviceYear(x)
    }

    const deviceProcessor = (x) => {
        if (x.GCard.length > 0) {
            setIsGCard(true)
        } else {
            setIsGCard(false)
        }
        setSelectedDeviceProcessor(x)
    }

    const addCart = (value) => {
        const data = {
            deviceType: "Mackbook",
            deviceModel: value.macbook_model,
            deviceCapacity: value.storage_capacity,
            deviceCarrier: "",
            deviceCondition: value.cosmetic_condition,
            deviceYear: value.year,
            deviceProcessor: value.processer,
            deviceOffer: parseInt(value.offer),
            deviceGeneration: "",
            deviceSize: value.screen_size,
            deviceEdition: "",
            deviceBand: "",
            deviceEngraving: "",
            imagePath: imagePath,
            id: value.id
        }
        dispatch(addToCart(data))
        props.history.push("/cart");
    }

    const selectIWatchCondition = (value) => {
        if (value === 'Broken') {
            setIsBrandNew(false)
        } else if (value === 'Brand New') {
            setIsBrandNew(true)
        } else if (value === 'Flaw-less') {
            setIsBrandNew(false)
        } else if (value === 'Good') {
            setIsBrandNew(false)
        } else if (value === 'Fair') {
            setIsBrandNew(false)
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
                                    <div className="device-item-div col-sm-4 col-md-4 d-flex flex-column cursor-pointer justify-content-space-between" key={index}>
                                        <div className="mt-2 text-center">
                                            <img height="200" src={item.devicePhoto} onClick={() => selectDevice(item)} />
                                        </div>
                                        <div className="text-center mt-1">
                                            <label className="w-100" onClick={() => selectDevice(item)} variant="warning">{item.deviceName}</label>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </>
                }
            </div>
            <Formik
                initialValues={{
                    year: "",
                    condition: "",
                    size: "",
                    capacity: "",
                    ram: "",
                    powercord: "",
                    batteryHealth: "",
                    functional: "",
                    processor: "",
                    GCard: "",
                    ChargingAdapter: "",
                    MagicMouse: "",
                    MagicTrackpad: "",
                    MagicKeyboard: ""
                }}
                onSubmit={handelSubmits}
            >
                {({ handleChange, values }) => (
                    <Form>
                        {
                            selectedDevice &&
                            <div>
                                {selectedDevice[0].deviceName &&
                                    <div>
                                        <div className="d-flex align-items-center">
                                            <h4>{selectedDevice[0].deviceName} </h4> <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                handleChange({
                                                    target: {
                                                        name: "year",
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
                                                        name: "size",
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
                                                        name: "ram",
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
                                                        name: "batteryHealth",
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
                                                        name: "processor",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "GCard",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "MagicKeyboard",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "MagicTrackpad",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "MagicMouse",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "ChargingAdapter",
                                                        value: '',
                                                    }
                                                })
                                                setSelectedDevice()
                                                setOffers()
                                                setIsBrandNew(false)
                                            }} >/ Change Model</span>
                                        </div>
                                        <hr />
                                        {!values.size &&
                                            <div>
                                                <h4>Select modal size</h4>
                                            </div>
                                        }
                                    </div>
                                }

                                {selectedDevice[0].deviceName && !values.size &&
                                    <div role="group" aria-labelledby="my-radio-group">
                                        <div>
                                            {selectedDevice[0].size.map((x, i) => (
                                                <>
                                                    <label key={i} className="ml-4 border mt-4 cursor-pointer rounded p-4">
                                                        <Field className="mr-2 d-none" type="radio" name="size" onClick={() => setSelectedDeviceSize(x)} value={x.size} />
                                                        {x.sizeLabel}
                                                    </label>
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                }

                                {
                                    selectedDevice[0].deviceName && values.size && <>
                                        <div className="d-flex align-items-center">
                                            <h4>Type of size: {selectedDeviceSize.sizeLabel} </h4>
                                            <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                handleChange({
                                                    target: {
                                                        name: "year",
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
                                                        name: "size",
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
                                                        name: "ram",
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
                                                        name: "batteryHealth",
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
                                                        name: "processor",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "GCard",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "MagicKeyboard",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "MagicTrackpad",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "MagicMouse",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "ChargingAdapter",
                                                        value: '',
                                                    }
                                                })
                                                setOffers()
                                                setSelectedDeviceSize();
                                                setIsBrandNew(false)
                                            }} > / Change size</span>
                                        </div>
                                        <hr />
                                        {values.size && !values.year &&
                                            <div>
                                                <h4>Select modal year</h4>
                                            </div>
                                        }
                                    </>
                                }

                                {selectedDeviceSize && values.size && !values.year &&
                                    <div role="group" aria-labelledby="my-radio-group">
                                        <div>
                                            {selectedDeviceSize.years.map((x, i) => (
                                                <>
                                                    <label key={i} className="ml-4 border mt-4 cursor-pointer rounded p-4">
                                                        <Field className="mr-2 d-none" type="radio" name="year" onClick={() => deviceByYear(x)
                                                        } value={x.year} />
                                                        {x.year}
                                                    </label>
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                }

                                {
                                    selectedDeviceSize && values.size && values.year && <>
                                        <div className="d-flex align-items-centecondition">
                                            <h4>Type of year: {values.year} </h4 >
                                            <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                handleChange({
                                                    target: {
                                                        name: "year",
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
                                                        name: "ram",
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
                                                        name: "batteryHealth",
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
                                                        name: "processor",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "GCard",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "MagicKeyboard",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "MagicTrackpad",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "MagicMouse",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "ChargingAdapter",
                                                        value: '',
                                                    }
                                                })
                                                setOffers()
                                                setSelectedDeviceYear()
                                                setIsBrandNew(false)
                                            }} > / Change year</span>
                                        </div>
                                        <hr />
                                        {values.year && !values.condition &&
                                            <div>
                                                <h4>Select modal Condition</h4>
                                            </div>
                                        }
                                    </>
                                }


                                {selectedDeviceYear && values.size && values.year && !values.condition &&
                                    <div className="mt-4 ml-3 mr-3 row" role="group" aria-labelledby="my-radio-group">
                                        {
                                            selectedDeviceYear.Condition.map((x, i) => (
                                                <div key={i} className="col-md-2 ml-2 mb-2 border py-2">
                                                    <div className="d-flex justify-content-between">
                                                        <label className="h5">  {x.name}</label>
                                                        <Field className="mt-1" type="radio" name="condition" onClick={() => {
                                                            selectIWatchCondition(x.name)
                                                            if (x.name === "Brand New" || x.name === "Broken") {
                                                                handleChange({
                                                                    target: {
                                                                        name: "capacity",
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
                                                                        name: "ram",
                                                                        value: '',
                                                                    }
                                                                })
                                                                handleChange({
                                                                    target: {
                                                                        name: "batteryHealth",
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
                                                                        name: "MagicKeyboard",
                                                                        value: '',
                                                                    }
                                                                })
                                                                handleChange({
                                                                    target: {
                                                                        name: "MagicTrackpad",
                                                                        value: '',
                                                                    }
                                                                })
                                                                handleChange({
                                                                    target: {
                                                                        name: "MagicMouse",
                                                                        value: '',
                                                                    }
                                                                })
                                                                handleChange({
                                                                    target: {
                                                                        name: "ChargingAdapter",
                                                                        value: '',
                                                                    }
                                                                })
                                                            }
                                                        }} value={x.name} />
                                                    </div>
                                                    <label className="mt-2">
                                                        {x.label}
                                                    </label>
                                                </div>
                                            ))
                                        }
                                    </div>
                                }

                                {
                                    selectedDeviceSize && values.size && values.year && values.condition && <>
                                        <div className="d-flex align-items-centecondition">
                                            <h4>Type of condition: {values.condition} </h4>
                                            <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                handleChange({
                                                    target: {
                                                        name: "condition",
                                                        value: '',
                                                    }
                                                })
                                                setIsBrokenFiled(false)
                                                setIsBrokenOrNo(false)
                                                setIsBrandNew(false)
                                                setIsBrandNew(false)
                                                setOffers()
                                            }} > / Change condition</span>
                                        </div>
                                        <hr />
                                        {values.year && !values.capacity && (values.condition === "Brand New" ? false : true) && !isProcessor &&
                                            <div>
                                                <h4>Select modal storage capacity</h4>
                                            </div>
                                        }
                                        {values.year && (values.condition === "Brand New" ? false : true) && isProcessor && !values.processor &&
                                            <div>
                                                <h4>Select modal Processor</h4>
                                            </div>
                                        }
                                    </>
                                }

                                {(selectedDeviceYear && values.size && values.year && values.condition && (values.condition === "Brand New" ? false : true) && (isProcessor && !values.processor)) &&
                                    <div role="group" aria-labelledby="my-radio-group">
                                        <div>
                                            {selectedDeviceYear.processor.map((x, i) => (
                                                <>
                                                    <label key={i} className="ml-4 border mt-4 cursor-pointer rounded p-4">
                                                        <Field className="mr-2 d-none" type="radio" name="processor" onClick={() => deviceProcessor(x)} value={x.name} />
                                                        {x.name}
                                                    </label>
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                }


                                {selectedDeviceYear && values.size && values.year && values.condition && (values.condition === "Brand New" ? false : true) && isProcessor && values.processor && <>
                                    <div className="d-flex align-items-centecondition">
                                        <h4>Type of processor: {values.processor} </h4>
                                        <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                            handleChange({
                                                target: {
                                                    name: "processor",
                                                    value: '',
                                                }
                                            })
                                            handleChange({
                                                target: {
                                                    name: "GCard",
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
                                                    name: "ram",
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
                                                    name: "batteryHealth",
                                                    value: '',
                                                }
                                            })
                                            handleChange({
                                                target: {
                                                    name: "MagicKeyboard",
                                                    value: '',
                                                }
                                            })
                                            handleChange({
                                                target: {
                                                    name: "MagicTrackpad",
                                                    value: '',
                                                }
                                            })
                                            handleChange({
                                                target: {
                                                    name: "MagicMouse",
                                                    value: '',
                                                }
                                            })
                                            handleChange({
                                                target: {
                                                    name: "ChargingAdapter",
                                                    value: '',
                                                }
                                            })
                                            setOffers()
                                            setSelectedDeviceProcessor()
                                            setIsGCard(false)
                                            setIsBrandNew(false)
                                        }} > / Change processor</span>
                                    </div>
                                    <hr />
                                    {values.year && !values.capacity && (values.condition === "Brand New" ? false : true) && values.processor && !isGCard &&
                                        <div>
                                            <h4>Select modal storage capacity</h4>
                                        </div>
                                    }
                                    {values.year && (values.condition === "Brand New" ? false : true) && values.processor && isGCard && !values.GCard &&
                                        <div>
                                            <h4>Select modal Garlic Card</h4>
                                        </div>
                                    }
                                </>
                                }

                                {selectedDeviceProcessor && values.size && values.year && values.condition && (values.condition === "Brand New" ? false : true) && values.processor && isGCard && !values.GCard &&
                                    <div role="group" aria-labelledby="my-radio-group">
                                        <div>
                                            {selectedDeviceProcessor.GCard.map((x, i) => (
                                                <>
                                                    <label key={i} className="ml-4 border mt-4 cursor-pointer rounded p-4">
                                                        <Field className="mr-2 d-none" type="radio" name="GCard" value={x} />
                                                        {x}
                                                    </label>
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                }

                                {selectedDeviceYear && values.size && values.year && values.condition && (values.condition === "Brand New" ? false : true) && isProcessor && values.processor && values.GCard && <>
                                    <div className="d-flex align-items-centecondition">
                                        <h4>Type of Graphics Card: {values.GCard} </h4>
                                        <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                            handleChange({
                                                target: {
                                                    name: "GCard",
                                                    value: '',
                                                }
                                            })
                                            setOffers()
                                            setIsBrandNew(false)
                                        }} > / Change Graphics Card</span>
                                    </div>
                                    <hr />
                                    {values.GCard && !values.capacity &&
                                        <div>
                                            <h4>Select modal storage capacity</h4>
                                        </div>
                                    }
                                </>
                                }

                                {selectedDeviceYear && values.size && values.year && !values.capacity && values.condition && (values.condition === "Brand New" ? false : true) && (isProcessor ? (values.processor ? true : false) : true) && (isGCard ? (values.GCard ? true : false) : true) &&
                                    <div role="group" aria-labelledby="my-radio-group">
                                        <div>
                                            {selectedDeviceYear.gb.map((x, i) => (
                                                <>
                                                    <label key={i} className="ml-4 border mt-4 cursor-pointer rounded p-4">
                                                        <Field className="mr-2 d-none" type="radio" name="capacity" value={x} />
                                                        {x}
                                                    </label>
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                }

                                {
                                    selectedDeviceYear && values.size && values.year && values.capacity && values.condition && !isBrokenFiled && (isProcessor ? (values.processor ? true : false) : true) && (isGCard ? (values.GCard ? true : false) : true) && <>
                                        <div className="d-flex align-items-center">
                                            <h4>Type of Storage capacity: {values.capacity} </h4>
                                            <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                handleChange({
                                                    target: {
                                                        name: "capacity",
                                                        value: '',
                                                    }
                                                })
                                                setOffers()
                                                setIsBrokenOrNo(false)
                                                setIsBrandNew(false)

                                            }} > / Change Storage capacity</span>
                                        </div>
                                        <hr />
                                        {values.capacity && !values.ram &&
                                            <div>
                                                <h4>Select modal Ram capacity</h4>
                                            </div>
                                        }
                                    </>
                                }

                                {selectedDeviceYear && values.size && values.year && values.capacity && !values.ram && values.condition && (isProcessor ? (values.processor ? true : false) : true) && (isGCard ? (values.GCard ? true : false) : true) &&
                                    <div role="group" aria-labelledby="my-radio-group">
                                        <div>
                                            {selectedDeviceYear.ram.map((x, i) => (
                                                <>
                                                    <label key={i} className="ml-4 border mt-4 cursor-pointer rounded p-4">
                                                        <Field className="mr-2 d-none" type="radio" name="ram" value={x} />
                                                        {x}
                                                    </label>
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                }

                                {
                                    selectedDeviceYear && values.size && values.year && values.capacity && values.ram && values.condition && (isProcessor ? (values.processor ? true : false) : true) && (isGCard ? (values.GCard ? true : false) : true) && <>
                                        <div className="d-flex align-items-center">
                                            <h4>Type of Ram capacity: {values.ram} </h4>
                                            <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                handleChange({
                                                    target: {
                                                        name: "ram",
                                                        value: '',
                                                    }
                                                })
                                                setOffers()
                                                setIsBrokenOrNo(false)
                                                setIsBrandNew(false)
                                            }} > / Change Ram capacity</span>
                                        </div>
                                        <hr />
                                        {values.ram && !values.functional &&
                                            <div>
                                                <h4>Is the laptop fully functional?</h4>
                                            </div>
                                        }
                                    </>
                                }

                                {

                                    selectedDeviceYear && values.size && values.year && values.capacity && values.ram && values.condition && !values.functional && (isProcessor ? (values.processor ? true : false) : true) && (isGCard ? (values.GCard ? true : false) : true) &&
                                    <>
                                        <div className="mt-4 col-md-12" role="group" aria-labelledby="my-radio-group">
                                            <div className="border col-md-4">
                                                <div className="float-right">
                                                    <Field className="mt-1" type="radio" name="functional" value='Yes' />
                                                </div>
                                                <label className="mt-1">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="border col-md-4">
                                                <div className="float-right">
                                                    <Field className="mt-1" type="radio"
                                                        onClick={() => {
                                                            setIsBrokenOrNo(true)
                                                            handleChange({
                                                                target: {
                                                                    name: "powercord",
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
                                                                    name: "batteryHealth",
                                                                    value: '',
                                                                }
                                                            })
                                                            handleChange({
                                                                target: {
                                                                    name: "MagicKeyboard",
                                                                    value: '',
                                                                }
                                                            })
                                                            handleChange({
                                                                target: {
                                                                    name: "MagicTrackpad",
                                                                    value: '',
                                                                }
                                                            })
                                                            handleChange({
                                                                target: {
                                                                    name: "MagicMouse",
                                                                    value: '',
                                                                }
                                                            })
                                                            handleChange({
                                                                target: {
                                                                    name: "ChargingAdapter",
                                                                    value: '',
                                                                }
                                                            })
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
                                    selectedDeviceYear && values.size && values.year && values.capacity && values.ram && values.condition && values.functional && (isProcessor ? (values.processor ? true : false) : true) && (isGCard ? (values.GCard ? true : false) : true) && <>
                                        <div className="d-flex align-items-center">
                                            <h4>Type of functional: {values.functional} </h4>
                                            <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                handleChange({
                                                    target: {
                                                        name: "functional",
                                                        value: '',
                                                    }
                                                })
                                                setOffers()
                                                setIsBrokenOrNo(false)
                                                setIsBrandNew(false)
                                            }} > / Change functional</span>
                                        </div>
                                        <hr />
                                        {values.ram && !values.batteryHealth && !isBrokenOrNo && selectedDevice[0].label != "Macbook" &&
                                            <div>
                                                <h4>Select laptop's battery health</h4>
                                            </div>
                                        }
                                        {values.ram && !values.powercord && !isBrokenOrNo && selectedDevice[0].label === "Macbook" &&
                                            <div>
                                                <h4>Will you be including the charger</h4>
                                            </div>
                                        }
                                    </>
                                }

                                {selectedDeviceYear && values.size && values.year && values.capacity && values.ram && values.condition && !values.batteryHealth && selectedDevice[0].label != "Macbook" && values.functional && !isBrokenOrNo && (isProcessor ? (values.processor ? true : false) : true) && (isGCard ? (values.GCard ? true : false) : true) &&
                                    <div role="group" className="d-flex" aria-labelledby="my-radio-group">
                                        <div className="col-md-2 ml-2 mb-2 border py-2">
                                            <div className="d-flex justify-content-between">
                                                <label className="h5"> Good</label>
                                                <Field className="mt-1" type="radio" name="batteryHealth" value="Good" />
                                            </div>
                                            <label className="mt-2">
                                                <span className="extra-txt ng-binding" ng-show="answer.tooltip.length">
                                                    4000mAh or higher and Normal Condition.
                                                </span>
                                            </label>
                                        </div>
                                        <div className="col-md-2 ml-2 mb-2 border py-2">
                                            <div className="d-flex justify-content-between">
                                                <label className="h5"> Fair</label>
                                                <Field className="mt-1" type="radio" name="batteryHealth" value="Fair" />
                                            </div>
                                            <label className="mt-2">
                                                3160-3999mAh or Service Battery or Check Battery Warning.
                                        </label>
                                        </div>
                                        <div className="col-md-2 ml-2 mb-2 border py-2">
                                            <div className="d-flex justify-content-between">
                                                <label className="h5"> Poor</label>
                                                <Field className="mt-1" type="radio" name="batteryHealth" value="Poor" />
                                            </div>
                                            <label className="mt-2">
                                                0-3159mAh or Replace Now or Replace Soon warning..
                                        </label>
                                        </div>
                                    </div>
                                }

                                {
                                    selectedDeviceYear && values.size && values.year && values.capacity && values.ram && values.condition && values.functional && values.batteryHealth && !isBrokenOrNo && (isProcessor ? (values.processor ? true : false) : true) && (isGCard ? (values.GCard ? true : false) : true) && <>
                                        <div className="d-flex align-items-center">
                                            <h4>Type of battery health: {values.batteryHealth} </h4>
                                            <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                handleChange({
                                                    target: {
                                                        name: "batteryHealth",
                                                        value: '',
                                                    }
                                                })
                                                setOffers()
                                            }} > / Change Battery Health</span>
                                        </div>
                                        <hr />
                                        {values.batteryHealth && !values.powercord && (selectedDevice[0].label === "Macbook Air" && values.size === "13" && values.year === "2020" ? false : true) &&
                                            <div>
                                                <h4>Will you be including the charger</h4>
                                            </div>
                                        }
                                    </>
                                }

                                {

                                    selectedDeviceYear && values.size && values.year && values.capacity && values.ram && values.condition && (selectedDevice[0].label != "Macbook" ? (values.batteryHealth ? true : false) : true) &&
                                    !values.powercord && values.functional && !isBrokenOrNo && (isProcessor ? (values.processor ? true : false) : true) && (isGCard ? (values.GCard ? true : false) : true) && (selectedDevice[0].label === "Macbook Air" && values.size === "13" && values.year === "2020" ? false : true) &&
                                    <>
                                        <div className="mt-4 col-md-12" role="group" aria-labelledby="my-radio-group">
                                            <div className="border col-md-4">
                                                <div className="float-right">
                                                    <Field className="mt-1" type="radio" name="powercord" value='Yes' />
                                                </div>
                                                <label className="mt-1">
                                                    Yes
                                               </label>
                                            </div>
                                            <div className="border col-md-4">
                                                <div className="float-right">
                                                    <Field className="mt-1" type="radio"
                                                        name="powercord" value='No' />
                                                </div>
                                                <label className="mt-1">
                                                    No
                                               </label>
                                            </div>
                                        </div>
                                    </>
                                }

                                {
                                    selectedDeviceYear && values.size && values.year && values.capacity && values.ram && values.condition && (selectedDevice[0].label != "Macbook" ? (values.batteryHealth ? true : false) : true) && values.powercord && values.functional && (isProcessor ? (values.processor ? true : false) : true) && (isGCard ? (values.GCard ? true : false) : true) && (selectedDevice[0].label === "Macbook Air" && values.size === "13" && values.year === "2020" ? false : true) && <>
                                        <div className="d-flex align-items-center">
                                            <h4>Type of including the charger: {values.powercord} </h4>
                                            <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                handleChange({
                                                    target: {
                                                        name: "powercord",
                                                        value: '',
                                                    }
                                                })
                                                setOffers()
                                                setIsBrandNew(false)
                                            }} > / Change including the charger</span>
                                        </div>
                                    </>
                                }

                                {

                                    selectedDeviceYear && values.size && values.year && values.capacity && values.ram && values.condition && (selectedDevice[0].label != "Macbook" ? (values.batteryHealth ? true : false) : true) &&
                                    !values.powercord && values.functional && !isBrokenOrNo && (isProcessor ? (values.processor ? true : false) : true) && (isGCard ? (values.GCard ? true : false) : true) && (selectedDevice[0].label === "Macbook Air" && values.size === "13" && values.year === "2020" ? true : false) &&
                                    <>
                                        {
                                            isEmpty(offers) && <>
                                                <h4>What Apple OEM accessories will you be including?</h4>
                                                <div className="row">
                                                    <div className="mt-4 col-md-12">
                                                        <div className="border col-md-4">
                                                            <div className="float-right">
                                                                <Field className="mt-1" onChange={handleChange} checked={values.ChargingAdapter} type="checkbox" name="ChargingAdapter" />
                                                            </div>
                                                            <label className="mt-1">
                                                                Original Charging Adapter
                                                        </label>
                                                        </div>
                                                        <div className="border col-md-4">
                                                            <div className="float-right">
                                                                <Field className="mt-1" onChange={handleChange} type="checkbox" checked={values.MagicMouse} name="MagicMouse" />
                                                            </div>
                                                            <label className="mt-1">
                                                                Magic Mouse
                                                        </label>
                                                        </div>
                                                        <div className="border col-md-4">
                                                            <div className="float-right">
                                                                <Field className="mt-1" onChange={handleChange} type="checkbox" checked={values.MagicTrackpad} name="MagicTrackpad" />
                                                            </div>
                                                            <label className="mt-1">
                                                                Magic Trackpad
                                                        </label>
                                                        </div>
                                                        <div className="border col-md-4">
                                                            <div className="float-right">
                                                                <Field className="mt-1" onChange={handleChange} type="checkbox" checked={values.MagicKeyboard} name="MagicKeyboard" />
                                                            </div>
                                                            <label className="mt-1">
                                                                Magic Keyboard
                                                        </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        }
                                    </>
                                }

                                {(values.ChargingAdapter || values.MagicMouse || values.MagicTrackpad
                                    || values.MagicKeyboard) && !isEmpty(offers) &&
                                    <>
                                        <div>
                                            <h4>OEM accessories</h4>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <h4>Charging Adapter : {values.ChargingAdapter && "Yes" || "No"} </h4>
                                            </div>

                                            <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                handleChange({
                                                    target: {
                                                        name: "ChargingAdapter",
                                                        value: '',
                                                    }
                                                })
                                                setOffers()
                                            }} > / Change </span>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <div>
                                                <h4>Magic Mouse : {values.MagicMouse && "Yes" || "No"}</h4>
                                            </div>
                                            <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                handleChange({
                                                    target: {
                                                        name: "MagicMouse",
                                                        value: '',
                                                    }
                                                })
                                                setOffers()
                                            }} > / Change </span>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <div>
                                                <h4>Magic Trackpad : {values.MagicTrackpad && "Yes" || "No"}</h4>
                                            </div>
                                            <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                handleChange({
                                                    target: {
                                                        name: "MagicTrackpad",
                                                        value: '',
                                                    }
                                                })
                                                setOffers()
                                            }} > / Change </span>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <div>
                                                <h4>Magic Keyboard : {values.MagicKeyboard && "Yes" || "No"}</h4>
                                            </div>
                                            <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                handleChange({
                                                    target: {
                                                        name: "MagicKeyboard",
                                                        value: '',
                                                    }
                                                })
                                                setOffers()
                                            }} > / Change </span>
                                        </div>
                                    </>
                                }

                                {
                                    ((isEmpty(offers) && isBrandNew) || (isEmpty(offers) && selectedDeviceYear && values.size && values.year && values.capacity && values.ram && values.condition && (selectedDevice[0].label != "Macbook" ? (values.batteryHealth ? true : false) : true) && (selectedDevice[0].label === "Macbook Air" && values.size === "13" && values.year === "2020" ? true : values.powercord ? true : false) && values.functional && (isProcessor ? (values.processor ? true : false) : true) && (isGCard ? (values.GCard ? true : false) : true) && !isBrokenFiled)) &&
                                    <div className="col-md-12">
                                        <div className="d-flex justify-content-center">
                                            <div className="col-md-6 mt-4 text-center">
                                                <Button variant="outline-secondary" className="w-100" type="submit">Show my Offer</Button>
                                            </div>
                                        </div>
                                    </div>
                                }

                                {
                                    isBrokenFiled &&
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
                                            <div className="col-md-3">
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
                                                        cosmetic_condition: values.condition,
                                                        graphics_card: values.GCard,
                                                        id: selectedDevice[0].label,
                                                        macbook_functional: values.functional,
                                                        macbook_model: selectedDevice[0].label,
                                                        macbook_powercord: values.powercord,
                                                        processer: values.processor,
                                                        ram_capacity: values.ram,
                                                        screen_size: values.size,
                                                        storage_capacity: values.capacity,
                                                        year: values.year
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

export default MacBook
