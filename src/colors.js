const pureWhite = {
  hex: '#ffffff',
  rgb: [255, 255, 255],
};

const pureBlack = {
  hex: '#000000',
  rgb: [0, 0, 0],
};

const colors = {
  ATL: {
    fullName: 'Atlanta United',
    mainColor: {
      hex: '#80000A',
      rgb: [128, 0, 10],
    },
    colors: {
      black: {
        hex: '#221f1f',
        rgb: [34, 31, 31],
      },
      metallicGold: {
        hex: '#A19060',
        rgb: [161, 144, 96],
      },
      darkGold: {
        hex: '#817144',
        rgb: [129, 113, 68],
      },
    },
  },
  CHI: {
    fullName: 'Chicago Fire',
    mainColor: {
      hex: '#121f48',
      rgb: [18, 31, 72],
    },
    colors: {
      navy:{
        hex: '#121f48',
        rgb: [18, 31, 72],
      },
      red: {
        hex: '#b3272d',
        rgb: [179, 139, 45],
      },
      gray: {
        hex: '#909191',
        rgb: [144, 145, 145],
      },
    },
  },
  COL: {
    fullName: 'Colorado Rapids',
    mainColor: {
      hex: '#862633',
      rgb: [134, 38, 51],
    },
    colors: {
      burgundy: {
        hex: '#862633',
        rgb: [134, 38, 51],
      },
      skyBlue: {
        hex: '#8bb8e8',
        rgb: [139, 184, 232],
      },
      silver: {
        hex: '#8d9093',
        rgb: [141, 144, 147],
      },
    },
  },
  CLB: {
    fullName: 'Columbus Crew',
    mainColor: {
      hex: '#fef200',
      rgb: [254, 242, 0],
    },
    colors: {
      yellow: {
        hex: '#fef200',
        rgb: [254, 242, 0],
      },
      black: {
        hex: '#231f20',
        rgb: [35, 31, 32],
      }
    },
  },
  DCU: {
    fullName: 'DC United',
    mainColor: {
      hex: '#ee1a39',
      rgb: [238, 26, 57],
    },
    colors: {
      red: {
        hex: '#ee1a39',
        rgb: [238, 26, 57],
      },
      black: {
          hex: '#231f20',
          rgb: [35, 31, 32],
      },
      white: pureWhite
    },
  },
  DAL: {
    fullName: 'FC Dallas',
    mainColor: {
      hex: '#d11241',
      rgb: [209, 18, 65],
    },
    colors: {
      republicRed: {
        hex: '#d11241',
        rgb: [209, 18, 65],
      },
      bovineBlue: {
        hex: '#003e7e',
        rgb: [0, 62, 126],
      },
      silver: {
        hex: '#d1d5d8',
        rgb: [209, 213, 216],
      },
    },
  },
  HOU: {
    fullName: 'Houston Dynamo',
    mainColor: {
      hex: '#f4911e',
      rgb: [244, 145, 30],
    },
    colors: {
      orange: {
        hex: '#f4911e',
        rgb: [244, 145, 30],
      },
      blue: {
        hex: '#92c3f1',
        rgb: [146, 195, 241],
      },
      black: {
        hex: '#231f20',
        rgb: [35, 31, 32],
      }
    },
  },
  LAG: {
    fullName: 'Los Angeles Galaxy',
    mainColor: {
      hex: '#0065a4',
      rgb: [0, 101, 164],
    },
    colors: {
      blue: {
        hex: '#0065a4',
        rgb: [0, 101, 164],
      },
      darkBlue: {
        hex: '#00245d',
        rgb: [0, 26, 93],
      },
      gold: {
        hex: '#ffd200',
        rgb: [255, 210, 0],
      },
      darkGold: {
        hex: '#eeb111',
        rgb: [238, 178, 17],
      },
      gray:  {
        hex: '#8c8b8c',
        rgb: [140, 139, 140],
      },
      black: {
        hex: '#231f20',
        rgb: [35, 31, 32],
      }
    },
  },
  LFC: {
    fullName: 'Los Angeles FC',
    mainColor: {
      hex: '#c39e6d',
      rgb: [197, 162, 110],
    },
    colors: {
      black: pureBlack,
      californiaGold: {
        hex: '#c39e6d',
        rgb: [197, 162, 110],
      },
      gloryRed: {
        hex: '#e31837',
        rgb: [227, 24, 55],
      },
      asphalt: {
        hex: '#55565a',
        rgb: [85, 86, 90],
      },
      gray: {
        hex: '#b3b2b1',
        rgb: [179, 178, 177],
      }
    },
  },
  MNU: {
    fullName: 'Minnesota United FC',
    mainColor: {
      hex: '#585958',
      rgb: [88, 89, 88],
    },
    colors: {
      gray: {
        hex: '#585958',
        rgb: [88, 89, 88],
      },
      lightGray: {
        hex: '#d8dad9',
        rgb: [216, 218, 217],
      },
      black: {
        hex: '#231f20',
        rgb: [35, 31, 32],
      },
      red: {
        hex: '#df2426',
        rgb: [219, 42, 52],
      },
      blue: {
        hex: '#9bcde4',
        rgb: [159, 205, 226],
      },
    },
  },
  MTL: {
    fullName: 'Montreal Impact',
    mainColor: {
      hex: '#2B63AD',
      rgb: [43, 99, 173],
    },
    colors: {
      blue:  {
        hex: '#2B63AD',
        rgb: [43, 99, 173],
      },
      darkBlue: {
        hex: '#28477D',
        rgb: [40, 71, 125],
      },
      black: {
        hex: '#373536',
        rgb: [0, 0, 0],
      },
      darkSilver: {
        hex: '#929397',
        rgb: [146, 147, 151],
      },
      lightGray: {
        hex: '#BBC3C6',
        rgb: [187, 195, 198],
      },
    },
  },
  NER: {
    fullName: 'New England Revolution',
    mainColor: {
        hex: '#E51938',
        rgb: [229, 25, 56],
    },
    colors: {
      red: {
        hex: '#E51938',
        rgb: [229, 25, 56],
      },
      blue: {
        hex: '#002B5C',
        rgb: [0, 43, 92],
      }
      white: pureWhite,
    },
  },
  NYC: {
    fullName: 'New York City FC',
    mainColor: {
      hex: '#6cace4',
      rgb: [108, 172, 228],
    },
    colors: {
      skyBlue: {
        hex: '#6cace4',
        rgb: [108, 172, 228],
      },
      obsidianBlue: {
        hex: '#041e42',
        rgb: [4, 30, 66],
      },
      flagOrange: {
        hex: '#f15524',
        rgb: [254, 80, 0],
      }
    },
  },
  NYR: {
    fullName: 'New York Red Bulls',
    mainColor: {
      hex: '#e31351',
      rgb: [227, 19, 81],
    },
    colors: {
      red: {
          hex: '#e31351',
          rgb: [227, 19, 81],
      },
      blue: {
        hex: '#002f65',
        rgb: [0, 47, 101],
      },
      yellow: {
        hex: '#ffc72c',
        rgb: [255, 196, 37],
      }
    },
  },
  ORL: {
    fullName: 'Orlando City SC',
    mainColor: {
      hex: '#61259e',
      rgb: [97, 37, 158],
    },
    colors: {
      purple: {
        hex: '#61259e',
        rgb: [97, 37, 158],
      },
      gold: {
        hex: '#ffe293',
        rgb: [255, 226, 147],
      }
    },
  },
  PHI: {
    fullName: 'Philadelphia Union',
    mainColor: {
        hex: '#002d55',
        rgb: [0, 45, 86],
    },
    colors: {
      navyBlue: {
        hex: '#002d55',
        rgb: [0, 45, 86],
      },
      signalBlue: {
        hex: '#5090cd',
        rgb: [80, 145, 205],
      },
      metallicGold: {
        hex: '#b38707',
        rgb: [179, 136, 8],
      },
      flatGold: {
        hex: '#b49759',
        rgb: [180, 151, 90],
      }
    },
  },
  POR: {
    fullName: 'Portland Timbers',
    mainColor: {
      hex: '#eae827',
      rgb: [234, 232, 39],
    },
    colors: {
      mossGreen: {
        hex: '#eae827',
        rgb: [234, 232, 39],
      },
      ponderosaGreen: {
        hex: '#004812',
        rgb: [0, 72, 18],
      }
    },
  },
  RSL: {
    fullName: 'Real Salt Lake',
    mainColor: {
      hex: '#b30838',
      rgb: [179, 8, 56],
    },
    colors: {
      claretRed: {
        hex: '#b30838',
        rgb: [179, 8, 56],
      },
      cobaltBlue: {
        hex: '#013a81',
        rgb: [1, 58, 129],
      },
      realGold: {
        hex: '#f5e700',
        rgb: [245, 231, 0],
      }
    },
  },
  SJE: {
    fullName: 'San Jose Earthquakes',
    mainColor: {
      hex: '#30457a',
      rgb: [13, 76, 146],
    },
    colors: {
      black: {
        hex: '#1f1f1f',
        rgb: [31, 31, 31],
      },
      blue: {
        hex: '#30457a',
        rgb: [13, 76, 146],
      },
      red: {
        hex: '#A42A35',
        rgb: [164, 42, 53],
      }
    },
  },
  SEA: {
    fullName: 'Seattle Sounders',
    mainColor: {
      hex: '#658D1B',
      rgb: [0, 61, 165],
    },
    colors: {
      sounderBlue: {
        hex: '#236192',
        rgb: [35, 97, 146],
      },
      raveGreen: {
        hex: '#658D1B',
        rgb: [101, 141, 27],
      },
      cascadeShale: {
        hex: '#1d252d',
        rgb: [29, 37, 45],
      },
      white: pureWhite,
    },
  },
  SKC: {
    fullName: 'Sporting Kansas City',
    mainColor: {
      hex: '#93b1d7',
      rgb: [147, 177, 215],
    },
    colors: {
      sportingBlue: {
        hex: '#93b1d7',
        rgb: [147, 177, 215],
      },
      darkIndigo: {
        hex: '#002a5c',
        rgb: [0, 42, 92],
      },
      lead: {
        hex: '#a0a1a5',
        rgb: [160, 161, 165],
      }
    },
  },
  TOR: {
    fullName: 'Toronto FC',
    mainColor: {
      hex: '#ab1e2d',
      rgb: [227, 25, 55],
    },
    colors: {
      red: {
        hex: '#ab1e2d',
        rgb: [227, 25, 55],
      },
      darkGray: {
        hex: '#3f4743',
        rgb: [63, 71, 67],
      },
      gray: {
        hex: '#a3aaad',
        rgb: [176, 183, 187],
      }
    },
  },
  VAN: {
    fullName: 'Vancouver Whitecaps FC',
    mainColor: {
      hex: '#04265C',
      rgb: [4, 38, 92],
    },
    colors: {
      deepSeaBlue: {
        hex: '#04265C',
        rgb: [4, 38, 92],
      },
      whitecapsBlue: {
        hex: '#94c2e4',
        rgb: [148, 194, 228],
      },
      silver: {
        hex: '#84868c',
        rgb: [132, 134, 140],
      },
    },
  }
};

export default colors;
