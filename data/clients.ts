export interface Brand { name: string; logo: string }

// 44 real brand & agency logos from the moizzaidi.com portfolio.
export const brands: Brand[] = [
  { name: 'Bank Alfalah', logo: '/brands/bank-alflah.png' },
  { name: 'Bata', logo: '/brands/bata.png' },
  { name: 'Bisconni', logo: '/brands/bisconni.jpg' },
  { name: 'Cadbury', logo: '/brands/cadbury.png' },
  { name: 'Coca-Cola', logo: '/brands/coca-cola.png' },
  { name: 'Diamond Supreme Foam', logo: '/brands/diamond-supreme-foam.jpg' },
  { name: 'Dulux', logo: '/brands/dulux.jpeg' },
  { name: 'EasyPaisa', logo: '/brands/easypaisa.png' },
  { name: 'foodpanda', logo: '/brands/foodpanda.png' },
  { name: 'Hilal Foods', logo: '/brands/hilal-foods-logo.png' },
  { name: 'Hyundai', logo: '/brands/hyundai.png' },
  { name: 'JazzCash', logo: '/brands/jazz-cash.png' },
  { name: 'JS Bank', logo: '/brands/jsbank.png' },
  { name: 'Kashmir Oil', logo: '/brands/kashmir-oil.jpg' },
  { name: 'Kia', logo: '/brands/kia.png' },
  { name: "Lay's", logo: '/brands/lays.png' },
  { name: 'Lemon Max', logo: '/brands/lemon-max.png' },
  { name: "McDonald's", logo: '/brands/macD.png' },
  { name: 'National Foods', logo: '/brands/national-foods-logo.png' },
  { name: 'Nescafé', logo: '/brands/nescafe.png' },
  { name: 'Netflix', logo: '/brands/netflix.png' },
  { name: 'Peugeot', logo: '/brands/peugeot.jpeg' },
  { name: 'Safeguard', logo: '/brands/safeguard.png' },
  { name: 'Shoop', logo: '/brands/shoop.png' },
  { name: 'Sooper', logo: '/brands/sooper.jpg' },
  { name: 'Sprite', logo: '/brands/sprite.png' },
  { name: 'Surf Excel', logo: '/brands/surf-excel.png' },
  { name: 'Suzuki', logo: '/brands/suzuki.png' },
  { name: 'Tang', logo: '/brands/tang.png' },
  { name: 'Tapal', logo: '/brands/tapal.png' },
  { name: 'Telenor', logo: '/brands/telenor.png' },
  { name: 'Toyota', logo: '/brands/toyota.png' },
  { name: 'Ufone', logo: '/brands/ufone.png' },
  { name: 'XCell Mobile', logo: '/brands/xcell-mobile.jpg' },
  { name: 'Zameen', logo: '/brands/zameen.jpg' },
  { name: 'Gluco', logo: '/brands/gluco.jpg' },
  { name: 'K&Ns', logo: '/brands/kns.jpg' },
  { name: 'Ogilvy', logo: '/brands/oglivi.jpeg' },
  { name: 'Sachi', logo: '/brands/sachi.jpeg' },
  { name: 'Manhattan', logo: '/brands/manhatten.png' },
  { name: 'BBDO', logo: '/brands/bbdo.jpeg' },
  { name: 'Adcom Leo', logo: '/brands/adcomleo.jpg' },
  { name: 'WRT', logo: '/brands/wrt.jpeg' },
  { name: 'Mobily', logo: '/brands/mobily.jpeg' }
]

// keep a few text-only marquee terms for the homepage cinema strip
export const marqueeTerms = [
  'Direction',
  'Production',
  'Commercials',
  'Brand Films',
  'Music Video',
  'Documentary'
] as const

// legacy alias used by some pages
export const clients = brands.map(b => b.name)
