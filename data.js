var APP_DATA = {
  "scenes": [
    {
      "id": "0-upper-lobby",
      "name": "Upper Lobby",
      "levels": [
        {
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
      "linkHotspots": [
        {
          "yaw": -0.2066791194106834,
          "pitch": 0.41466209793178876,
          "rotation": 0,
          "target": "1-upper-balcony"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-upper-balcony",
      "name": "Upper Balcony",
      "levels": [
        {
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
        "yaw": -1.1277589385277444,
        "pitch": 0.016355775639718573,
        "fov": 1.4095469020700806
      },
      "linkHotspots": [
        {
          "yaw": 2.969133576832869,
          "pitch": 0.5473200119805579,
          "rotation": 0,
          "target": "0-upper-lobby"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Kandy Casa",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
