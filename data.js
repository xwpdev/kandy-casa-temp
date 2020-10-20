var APP_DATA = {
    "scenes": [{
        "id": "0-entrance",
        "name": "Entrance",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "yaw": 1.606658745535002,
            "pitch": -0.05844583600528708,
            "fov": 1.4134061960355204
        },
        "linkHotspots": [{
            "yaw": 1.2280909450173887,
            "pitch": 0.3816260819596966,
            "rotation": 1.5707963267948966,
            "target": "8-outside-view"
        },
        {
            "yaw": 1.2071000534663003,
            "pitch": 0.22309443442805232,
            "rotation": 1.5707963267948966,
            "target": "9-outside-view-2"
        },
        {
            "yaw": -0.6940686266290399,
            "pitch": 0.27662431949360133,
            "rotation": 4.71238898038469,
            "target": "2-room-1-entrance"
        },
        {
            "yaw": -0.4918169043356482,
            "pitch": 0.2394539030822287,
            "rotation": 0,
            "target": "3-staircase"
        }
        ],
        "infoHotspots": []
    },
    {
        "id": "1-lobby",
        "name": "Lobby",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "pitch": 0,
            "yaw": 0,
            "fov": 1.5707963267948966
        },
        "linkHotspots": [{
            "yaw": 0.08723180461696955,
            "pitch": 0.3200368653176042,
            "rotation": 0,
            "target": "3-staircase"
        },
        {
            "yaw": -0.20451143476883438,
            "pitch": 0.36427914981315546,
            "rotation": 4.71238898038469,
            "target": "2-room-1-entrance"
        },
        {
            "yaw": 1.7919999475470405,
            "pitch": 0.4144569433609142,
            "rotation": 1.5707963267948966,
            "target": "7-lobby-view"
        }
        ],
        "infoHotspots": []
    },
    {
        "id": "2-room-1-entrance",
        "name": "Room 1 Entrance",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "pitch": 0,
            "yaw": 0,
            "fov": 1.5707963267948966
        },
        "linkHotspots": [{
            "yaw": -1.5315284873254207,
            "pitch": 0.6590244568520021,
            "rotation": 0,
            "target": "13-room-1---entrance"
        },
        {
            "yaw": 0.9624265756627004,
            "pitch": 0.7468770179806103,
            "rotation": 5.497787143782138,
            "target": "3-staircase"
        },
        {
            "yaw": 3.0331151260244082,
            "pitch": 0.25514330475283487,
            "rotation": 0,
            "target": "0-entrance"
        }
        ],
        "infoHotspots": []
    },
    {
        "id": "3-staircase",
        "name": "Staircase",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "pitch": 0,
            "yaw": 0,
            "fov": 1.5707963267948966
        },
        "linkHotspots": [{
            "yaw": 1.6934519087068196,
            "pitch": 0.47302842405932743,
            "rotation": 7.0685834705770345,
            "target": "4-lobby"
        },
        {
            "yaw": 1.764655698321275,
            "pitch": 0.18780728325930696,
            "rotation": 4.71238898038469,
            "target": "5-dining-area"
        },
        {
            "yaw": -0.30140943565871403,
            "pitch": 0.002120464798069932,
            "rotation": 0,
            "target": "10-staircase"
        },
        {
            "yaw": 2.866384210616018,
            "pitch": 0.2625334498910803,
            "rotation": 0,
            "target": "0-entrance"
        }
        ],
        "infoHotspots": []
    },
    {
        "id": "4-lobby",
        "name": "Lobby",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "pitch": 0,
            "yaw": 0,
            "fov": 1.5707963267948966
        },
        "linkHotspots": [{
            "yaw": 0.9836691739116326,
            "pitch": 0.3698610844726833,
            "rotation": 0,
            "target": "5-dining-area"
        },
        {
            "yaw": -2.3199597028576164,
            "pitch": 0.43274351864502236,
            "rotation": 0,
            "target": "3-staircase"
        }
        ],
        "infoHotspots": []
    },
    {
        "id": "5-dining-area",
        "name": "Dining Area",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "pitch": 0,
            "yaw": 0,
            "fov": 1.5707963267948966
        },
        "linkHotspots": [{
            "yaw": 2.9617600790488545,
            "pitch": 0.3886786086341516,
            "rotation": 0,
            "target": "9-outside-view-2"
        },
        {
            "yaw": -1.039988566271262,
            "pitch": 0.40001175761329577,
            "rotation": 0,
            "target": "1-lobby"
        }
        ],
        "infoHotspots": []
    },
    {
        "id": "6-lobby",
        "name": "Lobby",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "pitch": 0,
            "yaw": 0,
            "fov": 1.5707963267948966
        },
        "linkHotspots": [],
        "infoHotspots": []
    },
    {
        "id": "7-lobby-view",
        "name": "Lobby View",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "pitch": 0,
            "yaw": 0,
            "fov": 1.5707963267948966
        },
        "linkHotspots": [],
        "infoHotspots": []
    },
    {
        "id": "8-outside-view",
        "name": "Outside View",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "yaw": -3.1395487840452247,
            "pitch": 0.054971360530048585,
            "fov": 1.4134061960355204
        },
        "linkHotspots": [],
        "infoHotspots": []
    },
    {
        "id": "9-outside-view-2",
        "name": "Outside View 2",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "yaw": 3.0007154388515644,
            "pitch": 0.033045337813661035,
            "fov": 1.4134061960355204
        },
        "linkHotspots": [{
            "yaw": -1.7181543767917837,
            "pitch": 0.45092184891645637,
            "rotation": 4.71238898038469,
            "target": "8-outside-view"
        }],
        "infoHotspots": []
    },
    {
        "id": "10-staircase",
        "name": "Staircase",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "pitch": 0,
            "yaw": 0,
            "fov": 1.5707963267948966
        },
        "linkHotspots": [{
            "yaw": 2.063614794860996,
            "pitch": 0.07794616700949497,
            "rotation": 0,
            "target": "11-first-floor---lobby"
        },
        {
            "yaw": 1.5973724136197243,
            "pitch": 0.3383008464950432,
            "rotation": 0,
            "target": "0-entrance"
        }
        ],
        "infoHotspots": []
    },
    {
        "id": "11-first-floor---lobby",
        "name": "First Floor - Lobby",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "pitch": 0,
            "yaw": 0,
            "fov": 1.5707963267948966
        },
        "linkHotspots": [{
            "yaw": 1.3818679909853735,
            "pitch": 0.896486431475676,
            "rotation": 0,
            "target": "22-room-2---entrance"
        },
        {
            "yaw": -0.6661611333934907,
            "pitch": 0.6005222130739671,
            "rotation": 0,
            "target": "12-first-floor---lobby"
        }
        ],
        "infoHotspots": []
    },
    {
        "id": "12-first-floor---lobby",
        "name": "First Floor - Lobby",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "pitch": 0,
            "yaw": 0,
            "fov": 1.5707963267948966
        },
        "linkHotspots": [{
            "yaw": -0.09717519784322093,
            "pitch": 0.7929695823752034,
            "rotation": 0,
            "target": "29-room-3---entrance"
        },
        {
            "yaw": -0.8649641262251642,
            "pitch": 0.7787236700946139,
            "rotation": 0,
            "target": "34-room-4---entrance"
        }
        ],
        "infoHotspots": []
    },
    {
        "id": "13-room-1---entrance",
        "name": "Room 1 - Entrance",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "yaw": -2.241439734539499,
            "pitch": 0.35100258828656905,
            "fov": 1.4134061960355204
        },
        "linkHotspots": [{
            "yaw": -1.5508548728918132,
            "pitch": 0.847764847526765,
            "rotation": 0,
            "target": "14-room-1---stairs"
        }],
        "infoHotspots": []
    },
    {
        "id": "14-room-1---stairs",
        "name": "Room 1 - Stairs",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "yaw": -3.003942013938392,
            "pitch": -0.06405776101255611,
            "fov": 1.4134061960355204
        },
        "linkHotspots": [{
            "yaw": -2.9457145944275034,
            "pitch": 0.3807808524182086,
            "rotation": 0,
            "target": "15-room-1---inside"
        }],
        "infoHotspots": []
    },
    {
        "id": "15-room-1---inside",
        "name": "Room 1 - Inside",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "yaw": 0.3776358888410183,
            "pitch": 0.13553641407789563,
            "fov": 1.4134061960355204
        },
        "linkHotspots": [{
            "yaw": 2.8594389122849133,
            "pitch": 0.560960378348824,
            "rotation": 0,
            "target": "17-room-1---view--2"
        },
        {
            "yaw": -1.3576120136936503,
            "pitch": 0.3973564987840206,
            "rotation": 0,
            "target": "16-room-1---view"
        }
        ],
        "infoHotspots": []
    },
    {
        "id": "16-room-1---view",
        "name": "Room 1 - View",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "yaw": 1.5488380092554674,
            "pitch": 0.04866801170619439,
            "fov": 1.4134061960355204
        },
        "linkHotspots": [],
        "infoHotspots": []
    },
    {
        "id": "17-room-1---view--2",
        "name": "Room 1 - View  2",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "yaw": -1.809109807338194,
            "pitch": 0.43289746836351384,
            "fov": 1.4134061960355204
        },
        "linkHotspots": [],
        "infoHotspots": []
    },
    {
        "id": "18-room-1---view-3",
        "name": "Room 1 - View 3",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "pitch": 0,
            "yaw": 0,
            "fov": 1.5707963267948966
        },
        "linkHotspots": [{
            "yaw": 0.09641669339728764,
            "pitch": 0.7725287596886528,
            "rotation": 0,
            "target": "19-room-1---balcony-2"
        }],
        "infoHotspots": []
    },
    {
        "id": "19-room-1---balcony-2",
        "name": "Room 1 - Balcony 2",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "pitch": 0,
            "yaw": 0,
            "fov": 1.5707963267948966
        },
        "linkHotspots": [],
        "infoHotspots": []
    },
    {
        "id": "20-room-1---balcony-view",
        "name": "Room 1 - Balcony View",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "yaw": -2.2596880491997204,
            "pitch": -0.19871801333384198,
            "fov": 1.4134061960355204
        },
        "linkHotspots": [],
        "infoHotspots": []
    },
    {
        "id": "21-room-1---bed",
        "name": "Room 1 - Bed",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "yaw": -3.1079689471762393,
            "pitch": 0.39440839209152756,
            "fov": 1.4134061960355204
        },
        "linkHotspots": [],
        "infoHotspots": []
    },
    {
        "id": "22-room-2---entrance",
        "name": "Room 2 - Entrance",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "yaw": 0.9718561889159343,
            "pitch": 0.22034130096538362,
            "fov": 1.4134061960355204
        },
        "linkHotspots": [],
        "infoHotspots": []
    },
    {
        "id": "23-room-2---view",
        "name": "Room 2 - View",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "pitch": 0,
            "yaw": 0,
            "fov": 1.5707963267948966
        },
        "linkHotspots": [{
            "yaw": -0.23327639022161506,
            "pitch": 0.3708819625009667,
            "rotation": 0,
            "target": "23-room-2---view"
        }],
        "infoHotspots": []
    },
    {
        "id": "24-room-2---view-2",
        "name": "Room 2 - View 2",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "yaw": 1.9884750114543017,
            "pitch": 0.39694190122679984,
            "fov": 1.4134061960355204
        },
        "linkHotspots": [{
            "yaw": 2.5016766873572944,
            "pitch": 0.4248043611150365,
            "rotation": 0,
            "target": "23-room-2---view"
        },
        {
            "yaw": -0.07687034232559498,
            "pitch": 0.6418546766012785,
            "rotation": 0,
            "target": "25-room-2---outside-view"
        },
        {
            "yaw": 2.867824887129939,
            "pitch": 0.37986806138112783,
            "rotation": 0,
            "target": "28-room-3---balcony"
        }
        ],
        "infoHotspots": []
    },
    {
        "id": "25-room-2---outside-view",
        "name": "Room 2 - Outside view",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "yaw": -0.3136359310309089,
            "pitch": -0.022304961466026896,
            "fov": 1.4134061960355204
        },
        "linkHotspots": [{
            "yaw": -0.3545472108946317,
            "pitch": 0.8545863240415628,
            "rotation": 0,
            "target": "26-room-2---balcony"
        }],
        "infoHotspots": []
    },
    {
        "id": "26-room-2---balcony",
        "name": "Room 2 - Balcony",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "yaw": -0.993571912245983,
            "pitch": 0.064446328298013,
            "fov": 1.4134061960355204
        },
        "linkHotspots": [],
        "infoHotspots": []
    },
    {
        "id": "27-room-2---bathroom",
        "name": "Room 2 - Bathroom",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "yaw": -0.9426561783027996,
            "pitch": 0.3263763086738063,
            "fov": 1.4134061960355204
        },
        "linkHotspots": [],
        "infoHotspots": []
    },
    {
        "id": "28-room-3---balcony",
        "name": "Room 3 - Balcony",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "yaw": 1.0017185580070365,
            "pitch": 0.10292684912613836,
            "fov": 1.4134061960355204
        },
        "linkHotspots": [],
        "infoHotspots": []
    },
    {
        "id": "29-room-3---entrance",
        "name": "Room 3 - Entrance",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "yaw": 0.5114054387288984,
            "pitch": 0.21623287631538446,
            "fov": 1.4134061960355204
        },
        "linkHotspots": [{
            "yaw": 0.6768929090817046,
            "pitch": 0.359810536198351,
            "rotation": 0,
            "target": "30-room-3---view"
        }],
        "infoHotspots": []
    },
    {
        "id": "30-room-3---view",
        "name": "Room 3 - View",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "pitch": 0,
            "yaw": 0,
            "fov": 1.5707963267948966
        },
        "linkHotspots": [{
            "yaw": -2.631974140419249,
            "pitch": 0.449273712584759,
            "rotation": 0,
            "target": "29-room-3---entrance"
        },
        {
            "yaw": -0.3706418724023077,
            "pitch": 0.38361429175268924,
            "rotation": 0,
            "target": "31-room-3---view-2"
        }
        ],
        "infoHotspots": []
    },
    {
        "id": "31-room-3---view-2",
        "name": "Room 3 - View 2",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "yaw": 0.7138978177758553,
            "pitch": -0.014231092690414116,
            "fov": 1.4134061960355204
        },
        "linkHotspots": [{
            "yaw": 2.4027894922935404,
            "pitch": 0.41581873355468346,
            "rotation": 0,
            "target": "30-room-3---view"
        },
        {
            "yaw": 2.6073139596436974,
            "pitch": 0.7378155246682265,
            "rotation": 0,
            "target": "32-room-3---beds"
        },
        {
            "yaw": 0.7202202754020881,
            "pitch": 0.8119173069493453,
            "rotation": 0,
            "target": "28-room-3---balcony"
        }
        ],
        "infoHotspots": []
    },
    {
        "id": "32-room-3---beds",
        "name": "Room 3 - Beds",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "yaw": -2.3348370076459197,
            "pitch": 0.1916387771496666,
            "fov": 1.4134061960355204
        },
        "linkHotspots": [],
        "infoHotspots": []
    },
    {
        "id": "33-room-3---balcony",
        "name": "Room 3 - Balcony",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "yaw": 0.047185752937723535,
            "pitch": -0.018350099990108504,
            "fov": 1.4134061960355204
        },
        "linkHotspots": [],
        "infoHotspots": []
    },
    {
        "id": "34-room-4---entrance",
        "name": "Room 4 - Entrance",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "yaw": -3.0493280181190645,
            "pitch": 0.06367300582611257,
            "fov": 1.4134061960355204
        },
        "linkHotspots": [{
            "yaw": -3.1127200849431453,
            "pitch": 0.8950366696057515,
            "rotation": 0,
            "target": "35-room-4---view"
        }],
        "infoHotspots": []
    },
    {
        "id": "35-room-4---view",
        "name": "Room 4 - View",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "yaw": 2.2053851133233398,
            "pitch": 0.32454252998940447,
            "fov": 1.4134061960355204
        },
        "linkHotspots": [{
            "yaw": 2.8178209784529047,
            "pitch": 0.7591101734901251,
            "rotation": 0,
            "target": "36-room-4---bed"
        }],
        "infoHotspots": []
    },
    {
        "id": "36-room-4---bed",
        "name": "Room 4 - Bed",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "yaw": 1.0160393080763157,
            "pitch": 0.18373007332450442,
            "fov": 1.4134061960355204
        },
        "linkHotspots": [{
            "yaw": 0.9826106965367316,
            "pitch": 0.46863465466472043,
            "rotation": 0,
            "target": "37-room-4---bed-2"
        }],
        "infoHotspots": []
    },
    {
        "id": "37-room-4---bed-2",
        "name": "Room 4 - Bed 2",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "yaw": -0.47719181999148397,
            "pitch": 0.4542401724972045,
            "fov": 1.4134061960355204
        },
        "linkHotspots": [{
            "yaw": -2.2534188079590933,
            "pitch": 0.4148654919186079,
            "rotation": 0,
            "target": "38-room-4---view"
        }],
        "infoHotspots": []
    },
    {
        "id": "38-room-4---view",
        "name": "Room 4 - View",
        "levels": [{
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
        },
        {
            "tileSize": 512,
            "size": 512
        },
        {
            "tileSize": 512,
            "size": 1024
        },
        {
            "tileSize": 512,
            "size": 2048
        }
        ],
        "faceSize": 1440,
        "initialViewParameters": {
            "yaw": 1.8746959875359224,
            "pitch": 0.2828632233157169,
            "fov": 1.4134061960355204
        },
        "linkHotspots": [{
            "yaw": -0.38571509773345447,
            "pitch": 0.19989005849179264,
            "rotation": 0,
            "target": "11-first-floor---lobby"
        }],
        "infoHotspots": []
    }
    ],
    "name": "Kandy Casa",
    "settings": {
        "mouseViewMode": "drag",
        "autorotateEnabled": true,
        "fullscreenButton": true,
        "viewControlButtons": false
    }
};