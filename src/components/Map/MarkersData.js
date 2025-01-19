const markersData = [
    {
        id: 1,
        name: "Vancouver Zero Waste Centre",
        position: {
            lat: 49.20853773519324,
            lng: -123.1150572043907
        },
        address: "8588 Yukon St, Vancouver, BC V5X 2R6",
        tags: ['paper', 'plastic', 'glass', 'metal', 'electronics', 'appliances_s', 'appliances_l', 'batteries', 'lightbulbs', 'styrofoam', 'beverages'],
        type: "Other",
        description: "Large recycling facility for wide range of materials"
    },
    {
        id: 2,
        name: "UNA Green Depot",
        position: {
            lat: 49.25765230807364,
            lng: -123.2366974434652
        },
        address: "3335 Webber Ln, Vancouver, BC V6S 0H3",
        tags: ['paper', 'plastic', 'electronics', 'appliances_s', 'batteries', 'lightbulbs', 'styrofoam', 'beverages'],
        type: "Other",
        description: "Locally-run recycling depot"
    },
    {
        id: 3,
        name: "Computie Electronics Recycling Depot",
        position: {
            lat: 49.21154435084133,
            lng: -123.11081130498673
        },
        address: "260 SW Marine Dr, Vancouver, BC V5X 2R5",
        tags: ['electronics', 'appliances_s', 'appliances_l', 'batteries'],
        type: "Other",
        description: "Large recycling depot for electronics"
    },
    {
        id: 4,
        name: "Return-It Express & GO, UBC",
        position: {
            lat: 49.26153375780316,
            lng: -123.24530753830878
        },
        address: "2465 Health Sciences Mall, Vancouver, BC V6T 1Z3",
        tags: ['beverages'],
        type: "return-it",
        description: "Solar-powered beverage drop-off station"
    },
    {
        id: 5,
        name: "Return-It Express, Yaletown",
        position: {
            lat: 49.27501038938575,
            lng: -123.12714279834694
        },
        address: "1387 Richards St, Vancouver, BC V6B 3G6",
        tags: ['beverages'],
        type: "return-it",
        description: "Recycling depot chain for beverages and electronics"
    },
    {
        id: 6,
        name: "Return-It Depot, Mt Pleasant",
        position: {
            lat: 49.26460328393285,
            lng: -123.09301988828238
        },
        address: "501 E Broadway, Vancouver, BC V5T 1X5",
        tags: ['paper', 'containers', 'glass', 'electronics', 'appliances_s', 'batteries', 'lightbulbs', 'beverages'],
        type: "return-it",
        description: ""
    },
    {
        id: 7,
        name: "Return-It Depot, Vancouver West",
        position: {
            lat: 49.203761569993034,
            lng: -123.13295291730415
        },
        address: "1253 W 75th Ave, Vancouver, BC V6P 3G3",
        tags: ['electronics', 'appliances_s', 'beverages'],
        type: "return-it",
        description: ""
    },
    {
        id: 8,
        name: "Return-It Depot, Vancover Central",
        position: {
            lat: 49.24061831784529,
            lng: -123.0506496317836
        },
        address: "2639 Kingsway, Vancouver, BC V5R 5H4",
        tags: ['electronics', 'appliances_s', 'beverages'],
        type: "return-it",
        description: ""
    },
    {
        id: 9,
        name: "Return-It Depot, Vancouver",
        position: {
            lat: 49.26907868450023,
            lng: -123.10595995005252
        },
        address: "7 East 7th Ave, Vancouver, BC V5T 1M4",
        tags: ['electronics', 'appliances_s', 'beverages', 'paint'],
        type: "return-it",
        description: ""
    },
    {
        id: 10,
        name: "United We Can Bottle Depot",
        position: {
            lat: 49.270316008278876,
            lng: -123.09378484442422
        },
        address: "449 Industrial Avenue, Vancouver, BC V6A 2P3",
        tags: ['electronics', 'beverages'],
        type: "Other",
        description: "Recycling depot"
    },
    {
        id: 11,
        name: "South Van Bottle Depot",
        position: {
            lat: 49.21011121897264,
            lng: -123.10549566408531
        },
        address: "34 East 69th Avenue, Vancouver, BC V5X 4K6",
        tags: ['paper', 'containers', 'glass', 'electronics', 'appliances_s', 'beverages', 'paint'],
        type: "Other",
        description: "Recycling depot for bottles"
    },
    {
        id: 12,
        name: "Regional Recycling Vancover Bottle Depot",
        position: {
            lat: 49.272069624034245,
            lng: -123.08226809499187
        },
        address: "960 Evans Avenue, Vancouver, BC V6A 2L2",
        tags: ['electronics', 'appliances_l', 'appliances_s', 'batteries', 'beverages', 'paint'],
        type: "Other",
        description: "Recycling depot"
    },
    {
        id: 13,
        name: "London Drugs Kitsilano",
        position: {
            lat: 49.264437591357485,
            lng: -123.15612237573913
        },
        address: "2230 W Broadway, Vancouver, BC V6K 2E3",
        tags: ['plastic', 'styrofoam', 'batteries', 'beverages'],
        type: "london drugs",
        description: "Grocery store with recycling services"
    },
    {
        id: 14,
        name: "London Drugs Kerrisdale",
        position: {
            lat: 49.235656489213696,
            lng: -123.15419183712135
        },
        address: "2091 W 42nd Ave, Vancouver, BC V6M 2B4",
        tags: ['plastic', 'styrofoam', 'batteries', 'beverages'],
        type: "london drugs",
        description: "Grocery store with recycling services"
    },
    {
        id: 15,
        name: "London Drugs Victoria Dr",
        position: {
            lat: 49.23578629703083,
            lng: -123.06711627087192
        },
        address: "5639 Victoria Dr, Vancouver, BC V5P 3W2",
        tags: ['plastic', 'styrofoam', 'batteries', 'beverages'],
        type: "london drugs",
        description: "Grocery store with recycling services"
    },
    {
        id: 16,
        name: "London Drugs Olympic Village",
        position: {
            lat: 49.27175617334182,
            lng: -123.10622362018202
        },
        address: "1622 Salt St, Vancouver, BC V5Y 0E4",
        tags: ['plastic', 'styrofoam', 'batteries', 'beverages'],
        type: "london drugs",
        description: "Grocery store with recycling services"
    },
    {
        id: 17,
        name: "London Drugs Davie St",
        position: {
            lat: 49.28709686498916,
            lng: -123.13927560171474
        },
        address: "1650 Davie St, Vancouver, BC V6G 1V9",
        tags: ['plastic', 'styrofoam', 'batteries', 'beverages'],
        type: "london drugs",
        description: "Grocery store with recycling services"
    },
    {
        id: 18,
        name: "London Drugs Robson St",
        position: {
            lat: 49.286521995676914,
            lng: -123.12617930900058
        },
        address: "1187 Robson St, Vancouver, BC V6E 1B5",
        tags: ['plastic', 'styrofoam', 'batteries', 'beverages'],
        type: "london drugs",
        description: "Grocery store with recycling services"
    },
    {
        id: 19,
        name: "London Drugs Vancouver City Centre",
        position: {
            lat: 49.28265718071896,
            lng: -123.11799301976414
        },
        address: "710 Granville St, Vancouver, BC V6Z 1E4",
        tags: ['plastic', 'styrofoam', 'batteries', 'beverages'],
        type: "london drugs",
        description: "Grocery store with recycling services"
    },
    {
        id: 20,
        name: "London Drugs Gastown",
        position: {
            lat: 49.28259901592187,
            lng: -123.10790029654994
        },
        address: "351 Abbott St Suite 150, Vancouver, BC V6B 0G6",
        tags: ['plastic', 'styrofoam', 'batteries', 'beverages'],
        type: "london drugs",
        description: "Grocery store with recycling services"
    },
    {
        id: 21,
        name: "London Drugs Joyce-Collingwood",
        position: {
            lat: 49.23415878889493,
            lng: -123.03558658916457
        },
        address: "3328 Kingsway, Vancouver, BC V5R 5L1",
        tags: ['plastic', 'styrofoam', 'batteries', 'beverages'],
        type: "london drugs",
        description: "Grocery store with recycling services"
    },
    {
        id: 22,
        name: "London Drugs Dunbar",
        position: {
            lat: 49.24945689393331,
            lng: -123.18335396383868
        },
        address: "4588 Dunbar St, Vancouver, BC V6S 2G6",
        tags: ['plastic', 'styrofoam', 'batteries', 'beverages'],
        type: "london drugs",
        description: "Grocery store with recycling services"
    },
    {
        id: 23,
        name: "London Drugs Cambie",
        position: {
            lat: 49.267297882096265,
            lng: -123.11643705350012
        },
        address: "525 W Broadway, Vancouver, BC V5Z 1E6",
        tags: ['plastic', 'styrofoam', 'batteries', 'beverages'],
        type: "london drugs",
        description: "Grocery store with recycling services"
    },
    {
        id: 24,
        name: "London Drugs Hastings",
        position: {
            lat: 49.28364645599661,
            lng: -123.04866588473173
        },
        address: "2696 E Hastings St, Vancouver, BC V5K 1Z1",
        tags: ['plastic', 'styrofoam', 'batteries', 'beverages'],
        type: "london drugs",
        description: "Grocery store with recycling services"
    },
    
];

export default markersData;