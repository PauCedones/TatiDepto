var APP_DATA = {
  "scenes": [
    {
      "id": "0-balcon",
      "name": "Balcon",
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
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "1-bao",
      "name": "Baño",
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
          "yaw": -0.2826794605019778,
          "pitch": 0.23195164575342808,
          "rotation": 0,
          "target": "6-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-habitacin",
      "name": "Habitación",
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
          "yaw": -2.896707293746285,
          "pitch": 0.09617639408665646,
          "rotation": 0,
          "target": "6-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living-01",
      "name": "Living 01",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.915871925124833,
          "pitch": 0.3352414817076603,
          "rotation": 0,
          "target": "4-living-02"
        },
        {
          "yaw": -3.087627446572993,
          "pitch": 0.012349294420797463,
          "rotation": 0,
          "target": "0-balcon"
        },
        {
          "yaw": -2.368392903168232,
          "pitch": 0.03015154365656514,
          "rotation": 0,
          "target": "6-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-living-02",
      "name": "Living 02",
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
          "yaw": 0.2837133012113515,
          "pitch": 0.08327575727363623,
          "rotation": 0,
          "target": "3-living-01"
        },
        {
          "yaw": 3.0066111179247397,
          "pitch": 0.5210115748119666,
          "rotation": 0,
          "target": "5-living-03"
        },
        {
          "yaw": 2.9899096190162258,
          "pitch": 0.037346672195718966,
          "rotation": 0,
          "target": "0-balcon"
        },
        {
          "yaw": -1.472714400093352,
          "pitch": 0.18815672736657518,
          "rotation": 0,
          "target": "6-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-living-03",
      "name": "Living 03",
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
          "yaw": 2.8269507181533466,
          "pitch": 0.17129321253243646,
          "rotation": 0,
          "target": "0-balcon"
        },
        {
          "yaw": -0.08898886958138164,
          "pitch": 0.60469907558317,
          "rotation": 0,
          "target": "4-living-02"
        },
        {
          "yaw": 0.12508112079709477,
          "pitch": 0.06452971562696419,
          "rotation": 0,
          "target": "3-living-01"
        },
        {
          "yaw": -0.8216544678450823,
          "pitch": 0.03413289662941921,
          "rotation": 0,
          "target": "6-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-pasillo",
      "name": "Pasillo",
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
          "yaw": -0.21472322289402612,
          "pitch": 0.33237838689425914,
          "rotation": 0,
          "target": "4-living-02"
        },
        {
          "yaw": 0.39048827092066496,
          "pitch": 0.32903245181322305,
          "rotation": 0,
          "target": "5-living-03"
        },
        {
          "yaw": -0.5142186392578516,
          "pitch": 0.24962218709283768,
          "rotation": 0,
          "target": "3-living-01"
        },
        {
          "yaw": 1.2645217546407448,
          "pitch": 0.2047999435624721,
          "rotation": 0,
          "target": "2-habitacin"
        },
        {
          "yaw": -2.551631365279917,
          "pitch": 0.11724302610668147,
          "rotation": 0,
          "target": "1-bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-cocina",
      "name": "Cocina",
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
          "yaw": -1.9633037005416742,
          "pitch": 0.14957511942898272,
          "rotation": 0,
          "target": "5-living-03"
        },
        {
          "yaw": -2.2809566553046956,
          "pitch": 0.10445401615003291,
          "rotation": 0,
          "target": "0-balcon"
        },
        {
          "yaw": -1.143960278427219,
          "pitch": 0.051228926956923715,
          "rotation": 0,
          "target": "6-pasillo"
        },
        {
          "yaw": -0.6029696206623214,
          "pitch": 0.047709899911257736,
          "rotation": 0,
          "target": "4-living-02"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Departamento Tati",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
