// ============================================
//  MOTORLUB — Products Database (50+ items)
// ============================================

const PRODUCTS = [

  // ─── МОТОРНІ ОЛИВИ (автомобілі) ───────────
  {
    id: 1, category: 'motor', featured: true,
    brand: 'Mobil 1', name: 'Mobil 1 5W-40 / 4л',
    desc: 'Повністю синтетична моторна олива для бензинових і дизельних двигунів. Захист при запуску в мороз до -40°C. Для Audi, BMW, Mercedes, VW.',
    specs: ['VW 502.00/505.00','BMW LL-01','MB 229.3','API SN'],
    price: 890, badge: 'badge-hit', badgeText: 'Хіт продажів',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=210&fit=crop',
    emoji: '🛢️'
  },
  {
    id: 2, category: 'motor', featured: true,
    brand: 'Castrol', name: 'Castrol EDGE 10W-40 / 4л',
    desc: 'Синтетика для Toyota, Honda, Nissan, Hyundai з пробігом 100 000+ км. Посилена формула від зношування. Рекомендована для жаркого клімату.',
    specs: ['ACEA A3/B4','API SL/CF','VW 501.01'],
    price: 720, badge: '', badgeText: '',
    img: 'https://images.unsplash.com/photo-1603796846097-bee99e4a601f?w=400&h=210&fit=crop',
    emoji: '🛢️'
  },
  {
    id: 3, category: 'motor', featured: false,
    brand: 'Shell', name: 'Shell Helix Ultra 5W-30 / 4л',
    desc: 'Повна синтетика на базі природного газу (GTL). Для BMW, Ford, Renault з турбодвигунами. Офіційний допуск BMW Longlife-04.',
    specs: ['BMW LL-04','MB 229.51','VW 504.00/507.00','Ford WSS-M2C913'],
    price: 1050, badge: 'badge-new', badgeText: 'Новинка',
    img: 'https://images.unsplash.com/photo-1609952048180-7b35ea6b083b?w=400&h=210&fit=crop',
    emoji: '🛢️'
  },
  {
    id: 4, category: 'motor', featured: true,
    brand: 'Liqui Moly', name: 'Liqui Moly 0W-30 Longlife / 5л',
    desc: 'Лонгліф синтетика для BMW, Mercedes, VW Group. Інтервал заміни до 30 000 км. Економія палива до 3%. Porsche, Audi, Lamborghini.',
    specs: ['BMW LL-04','MB 229.51','VW 504.00/507.00','Porsche C30'],
    price: 1240, badge: '', badgeText: '',
    img: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=400&h=210&fit=crop',
    emoji: '🛢️'
  },
  {
    id: 5, category: 'motor', featured: false,
    brand: 'Total', name: 'Total Quartz 9000 5W-40 / 5л',
    desc: 'Французька синтетика для Peugeot, Citroen, Renault. Відповідає стандартам Euro V/VI. Захист від нагару та лаку.',
    specs: ['ACEA A3/B4','Renault RN0700','PSA B71 2296'],
    price: 810, badge: '', badgeText: '',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=210&fit=crop&sat=-30',
    emoji: '🛢️'
  },
  {
    id: 6, category: 'motor', featured: false,
    brand: 'Mobil', name: 'Mobil Super 3000 5W-40 / 4л',
    desc: 'Синтетика підвищеної якості для турбодизельних двигунів. Відмінний захист у будь-яких умовах — від міста до траси.',
    specs: ['ACEA A3/B4','VW 502.00/505.00','MB 229.3','API SL/CF'],
    price: 760, badge: '', badgeText: '',
    img: '', emoji: '🛢️'
  },
  {
    id: 7, category: 'motor', featured: false,
    brand: 'Castrol', name: 'Castrol GTX 15W-40 / 5л',
    desc: 'Напівсинтетика для бюджетного сегменту. Захист від корозії та зношування для старих бензинових і дизельних авто.',
    specs: ['ACEA A3/B3','API SJ/CF','MB 229.1'],
    price: 540, badge: '', badgeText: '',
    img: '', emoji: '🛢️'
  },
  {
    id: 8, category: 'motor', featured: false,
    brand: 'Shell', name: 'Shell Rimula R4 L 15W-40 / 4л',
    desc: 'Мінеральна олива для атмосферних і турбо дизелів старого покоління. ГАЗ, КАМАЗ, МАЗ, Зіл — ідеальний вибір.',
    specs: ['API CF-4/SG','ACEA E2','MB 228.1','Volvo VDS'],
    price: 430, badge: '', badgeText: '',
    img: '', emoji: '🛢️'
  },

  // ─── НАПІВСИНТЕТИКА ────────────────────────
  {
    id: 9, category: 'motor', featured: false,
    brand: 'Liqui Moly', name: 'Liqui Moly MoS2 10W-40 / 4л',
    desc: 'Напівсинтетика з дисульфідом молібдену. Знижує тертя і знос, ідеальна для авто з великим пробігом. Opel, Skoda, VW.',
    specs: ['ACEA A3/B4','API SL/CF','VW 501.01/505.00'],
    price: 680, badge: '', badgeText: '',
    img: '', emoji: '🛢️'
  },
  {
    id: 10, category: 'motor', featured: false,
    brand: 'Total', name: 'Total Quartz 7000 10W-40 / 5л',
    desc: 'Якісна напівсинтетика для французьких і азійських автомобілів. Renault, Peugeot, Citroen, Toyota. Захист між замінами.',
    specs: ['ACEA A3/B4','Renault RN0700','PSA B71 2295'],
    price: 590, badge: '', badgeText: '',
    img: '', emoji: '🛢️'
  },

  // ─── СІЛЬСЬКА ТЕХНІКА ─────────────────────
  {
    id: 11, category: 'agro', featured: true,
    brand: 'Shell', name: 'Shell Rimula R4 15W-40 / 20л',
    desc: 'Для тракторів John Deere, Fendt, Claas. Захист при важких навантаженнях — польові роботи, орання, жнива. Мінеральна основа.',
    specs: ['API CF-4/SG','CAT TO-2','Komatsu','John Deere'],
    price: 3200, badge: 'badge-hit', badgeText: 'Хіт',
    img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=210&fit=crop',
    emoji: '🚜'
  },
  {
    id: 12, category: 'agro', featured: false,
    brand: 'Total', name: 'Total Multagri Pro 10W-40 / 20л',
    desc: 'Універсальна олива UTTO для тракторів із мокрими гальмами та гідравлікою. МТЗ, ЮМЗ, Т-150, Case, New Holland.',
    specs: ['UTTO','John Deere J20C','Case MS-1210','Allison C4'],
    price: 4100, badge: '', badgeText: '',
    img: '', emoji: '🚜'
  },
  {
    id: 13, category: 'agro', featured: false,
    brand: 'Mobil', name: 'Mobil Delvac MX 15W-40 / 20л',
    desc: 'Преміум мінеральна олива для комбайнів, тракторів і сільгосптехніки. Відмінна стабільність у тривалих робочих циклах.',
    specs: ['API CJ-4','ACEA E9','Cummins CES 20081','Volvo VDS-4'],
    price: 3800, badge: '', badgeText: '',
    img: '', emoji: '🚜'
  },
  {
    id: 14, category: 'agro', featured: false,
    brand: 'Liqui Moly', name: 'Liqui Moly Тракторна 15W-40 / 10л',
    desc: 'Для двигунів МТЗ-80/82, МТЗ-1025, ЮМЗ-6. Захист поршнів та гільз циліндрів. Стабільне давління масла при нагріванні.',
    specs: ['API CF','CCMC D4','MIL-L-2104E'],
    price: 1950, badge: '', badgeText: '',
    img: '', emoji: '🚜'
  },
  {
    id: 15, category: 'agro', featured: false,
    brand: 'Shell', name: 'Shell Spirax S4 TXM 10W-30 / 20л',
    desc: 'UTTO для тракторів зі спільною гідравлічно-трансмісійною системою. Подовжений термін служби, захист від корозії.',
    specs: ['UTTO','John Deere J20C/D','Ford M2C 134-D','ZF TE-ML 06B'],
    price: 4600, badge: '', badgeText: '',
    img: '', emoji: '🚜'
  },
  {
    id: 16, category: 'agro', featured: false,
    brand: 'Castrol', name: 'Castrol Agri MP 15W-40 / 10л',
    desc: 'Для навантажувачів, культиваторів, міні-тракторів. Захищає від надмірного зносу і забезпечує плавність роботи мокрих гальм.',
    specs: ['API CF','UTTO','John Deere J27'],
    price: 2100, badge: '', badgeText: '',
    img: '', emoji: '🚜'
  },
  {
    id: 17, category: 'agro', featured: false,
    brand: 'Total', name: 'Total Dynatrans MPV 10W-40 / 20л',
    desc: 'Для трансмісій і мостів сільгосптехніки. Підтримує рівний хід навіть при екстремальних навантаженнях.',
    specs: ['ZF TE-ML 05C/06B','John Deere J20C','Case MS-1207'],
    price: 4300, badge: '', badgeText: '',
    img: '', emoji: '🚜'
  },
  {
    id: 18, category: 'agro', featured: false,
    brand: 'Mobil', name: 'Mobil Agri Extra 10W-40 / 20л',
    desc: 'Всесезонна олива для двигунів, трансмісій і гідравліки тракторів. Один продукт замість трьох.',
    specs: ['API CJ-4','UTTO','Allison C4','Cat TO-4'],
    price: 3950, badge: 'badge-new', badgeText: 'Новинка',
    img: '', emoji: '🚜'
  },

  // ─── ВАНТАЖІВКИ / ФУРИ ────────────────────
  {
    id: 19, category: 'truck', featured: true,
    brand: 'Shell', name: 'Shell Rimula R6 LM 10W-40 / 20л',
    desc: 'Для вантажівок Euro VI — Scania, Volvo, Mercedes-Benz Actros, MAN, DAF. Підтримує каталізатори та сажові фільтри (DPF).',
    specs: ['ACEA E6/E9','Scania LDF-3','Volvo VDS-4','MB 228.51'],
    price: 6800, badge: 'badge-hit', badgeText: 'Хіт',
    img: 'https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?w=400&h=210&fit=crop',
    emoji: '🚛'
  },
  {
    id: 20, category: 'truck', featured: false,
    brand: 'Mobil', name: 'Mobil Delvac 1 5W-40 / 20л',
    desc: 'Повністю синтетична олива для важких умов. Для Scania, Volvo, MAN Euro V/VI. Розширений інтервал заміни до 100 000 км.',
    specs: ['ACEA E4/E7','Scania LDF-2','Volvo VDS-3','MB 228.5'],
    price: 8200, badge: '', badgeText: '',
    img: '', emoji: '🚛'
  },
  {
    id: 21, category: 'truck', featured: false,
    brand: 'Castrol', name: 'Castrol Vecton 10W-40 / 20л',
    desc: 'Для вантажівок з тривалими пробігами. Технологія System Pro-Tech для стабільності оливи протягом усього інтервалу заміни.',
    specs: ['ACEA E7','Volvo VDS-3','MB 228.3','MAN M3275-1'],
    price: 5900, badge: '', badgeText: '',
    img: '', emoji: '🚛'
  },
  {
    id: 22, category: 'truck', featured: false,
    brand: 'Total', name: 'Total Rubia TIR 8600 10W-40 / 20л',
    desc: 'Напівсинтетика для вантажних автомобілів. Захист при важких умовах — гірські дороги, перевантаження. Renault VI, Iveco.',
    specs: ['ACEA E7/E9','Renault VI RLD-3','MB 228.3','MAN M 3275'],
    price: 5400, badge: '', badgeText: '',
    img: '', emoji: '🚛'
  },
  {
    id: 23, category: 'truck', featured: false,
    brand: 'Liqui Moly', name: 'Liqui Moly Truck 10W-40 / 20л',
    desc: 'Синтетика для вантажівок і автобусів Euro IV/V. Підходить для DAF, Iveco, Scania, Volvo. Знижує витрату палива.',
    specs: ['ACEA E4/E7','Volvo VDS-3','MB 228.5','MAN M3277'],
    price: 7100, badge: '', badgeText: '',
    img: '', emoji: '🚛'
  },
  {
    id: 24, category: 'truck', featured: false,
    brand: 'Shell', name: 'Shell Rimula R3 X 15W-40 / 20л',
    desc: 'Для вантажівок старшого покоління КАМАЗ, МАЗ, ЗіЛ, ГАЗ. Захист у широкому діапазоні температур.',
    specs: ['API CF-4/SG','ACEA E3/B3','Cummins 20077','Volvo VDS-2'],
    price: 3700, badge: '', badgeText: '',
    img: '', emoji: '🚛'
  },
  {
    id: 25, category: 'truck', featured: false,
    brand: 'Mobil', name: 'Mobil Delvac MX Extra 10W-40 / 20л',
    desc: 'Розширена формула для вантажних автомобілів з великим пробігом. Підтримує стабільну в'язкість при тривалій роботі.',
    specs: ['ACEA E7','MB 228.3','Volvo VDS-3','Cummins CES 20076'],
    price: 5100, badge: '', badgeText: '',
    img: '', emoji: '🚛'
  },
  {
    id: 26, category: 'truck', featured: false,
    brand: 'Castrol', name: 'Castrol Vecton Long Drain 10W-40 / 20л',
    desc: 'Для фур з пробігом між замінами 100 000+ км. Забезпечує чистоту двигуна і захист протягом всього інтервалу.',
    specs: ['ACEA E6/E9','Volvo VDS-4.5','Renault VI RLD-4','MB 228.51'],
    price: 7600, badge: '', badgeText: '',
    img: '', emoji: '🚛'
  },
  {
    id: 27, category: 'truck', featured: false,
    brand: 'Total', name: 'Total Rubia TIR 9200 FE 10W-30 / 20л',
    desc: 'Паливоекономічна олива для нових Euro VI вантажівок. Scania, Volvo, Renault Trucks. Скорочення витрати палива до 3%.',
    specs: ['ACEA E6','Scania LDF-4','Volvo VDS-4.5','Renault VI RLD-4'],
    price: 8900, badge: 'badge-new', badgeText: 'Новинка',
    img: '', emoji: '🚛'
  },
  {
    id: 28, category: 'truck', featured: false,
    brand: 'Shell', name: 'Shell Spirax S5 ATEFL 75W / 20л',
    desc: 'Трансмісійна олива для автоматичних коробок передач вантажівок. ZF Astronic, Eaton Fuller.',
    specs: ['ZF TE-ML 02C','MB 236.14','API GL-4'],
    price: 9200, badge: '', badgeText: '',
    img: '', emoji: '🚛'
  },
  {
    id: 29, category: 'truck', featured: false,
    brand: 'Mobil', name: 'Mobil Delvac Synthetic ATF / 20л',
    desc: 'Синтетична рідина для АКПП вантажних авто. Allison TES 468, ZF. Ідеально для автобусів і важких вантажівок.',
    specs: ['Allison TES 468','ZF TE-ML 14C','MB 236.11'],
    price: 7800, badge: '', badgeText: '',
    img: '', emoji: '🚛'
  },

  // ─── ТРАНСМІСІЙНІ ─────────────────────────
  {
    id: 30, category: 'trans', featured: true,
    brand: 'ZF', name: 'ZF LifeguardFluid 8 / 1л',
    desc: 'Оригінальна рідина для АКПП ZF 8HP (BMW, Audi, Porsche, Land Rover, Jaguar, Maserati). Офіційний допуск.',
    specs: ['ZF TE-ML 14B','BMW 83220440214','Audi G 052 529'],
    price: 680, badge: '', badgeText: '',
    img: '', emoji: '⚙️'
  },
  {
    id: 31, category: 'trans', featured: false,
    brand: 'Shell', name: 'Shell Spirax S4 G 75W-90 / 4л',
    desc: 'Синтетична олива для механічних КПП та мостів. Subaru, Mitsubishi, Toyota. Захист в екстремальних умовах.',
    specs: ['API GL-4/GL-5','MT-1','ZF TE-ML 16C'],
    price: 890, badge: '', badgeText: '',
    img: '', emoji: '⚙️'
  },
  {
    id: 32, category: 'trans', featured: false,
    brand: 'Castrol', name: 'Castrol BOT 530 / 4л',
    desc: 'Рідина для АКПП Honda, Acura. Оригінальний аналог Honda ATF Z1. Захищає від зносу фрикційних елементів.',
    specs: ['Honda ATF Z1','Honda ATF DW-1'],
    price: 720, badge: '', badgeText: '',
    img: '', emoji: '⚙️'
  },
  {
    id: 33, category: 'trans', featured: false,
    brand: 'Mobil', name: 'Mobil ATF 3309 / 4л',
    desc: 'Для АКПП Toyota, Lexus, Hyundai, Kia. Замінник Toyota ATF WS, Hyundai SP-IV. Захист від перегрівання.',
    specs: ['Toyota ATF WS','Hyundai SP-IV','Aisin ATF 6+'],
    price: 760, badge: '', badgeText: '',
    img: '', emoji: '⚙️'
  },
  {
    id: 34, category: 'trans', featured: false,
    brand: 'Total', name: 'Total Transmission DUAL 9 FE / 4л',
    desc: 'Паливоекономічна рідина для подвійних зчеплень (DCT/DSG). VW, Audi, BMW, Ford PowerShift.',
    specs: ['VW TL 521 82','BMW 83 22 2 147 477','Ford M2C936-A'],
    price: 1100, badge: 'badge-new', badgeText: 'Новинка',
    img: '', emoji: '⚙️'
  },
  {
    id: 35, category: 'trans', featured: false,
    brand: 'Liqui Moly', name: 'Liqui Moly Top Tec ATF 1800 / 4л',
    desc: 'Для сучасних АКПП. Підходить до більшості автомобілів — замінює Dexron VI, Mercon V, ATF+4.',
    specs: ['Dexron VI','Mercon V','ATF+4','Allison C4'],
    price: 820, badge: '', badgeText: '',
    img: '', emoji: '⚙️'
  },
  {
    id: 36, category: 'trans', featured: false,
    brand: 'Shell', name: 'Shell Spirax S6 GXME 75W-80 / 4л',
    desc: 'Синтетична олива для ручних КПП Mercedes-Benz, MAN, Volvo, Scania. Знижує опір в КПП, зменшує витрату палива.',
    specs: ['MB 235.8','MAN 341 E4','Volvo 97307','ZF TE-ML 02E'],
    price: 1240, badge: '', badgeText: '',
    img: '', emoji: '⚙️'
  },

  // ─── АНТИФРИЗИ ────────────────────────────
  {
    id: 37, category: 'antifreeze', featured: true,
    brand: 'Shell', name: 'Shell Premium Antifreeze G11 / 5л',
    desc: 'Охолоджувальна рідина типу G11 (зелена). Для більшості автомобілів до 2000 року випуску. Захист від -37°C до +135°C.',
    specs: ['ASTM D3306','BS 6580','G11'],
    price: 340, badge: '', badgeText: '',
    img: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=400&h=210&fit=crop',
    emoji: '🧊'
  },
  {
    id: 38, category: 'antifreeze', featured: false,
    brand: 'Total', name: 'Total Coolelf Auto Supra G12+ / 5л',
    desc: 'Антифриз G12+ (рожевий/фіолетовий) для сучасних двигунів. Без силікатів. Renault, Peugeot, VW, BMW. До -40°C.',
    specs: ['G12+','VW TL 774-F','MB 325.6','ASTM D3306'],
    price: 420, badge: '', badgeText: '',
    img: '', emoji: '🧊'
  },
  {
    id: 39, category: 'antifreeze', featured: false,
    brand: 'Castrol', name: 'Castrol Radicool NF / 5л',
    desc: 'Органічний OAT антифриз G12++ без нітритів і амінів. Для двигунів з алюмінієвими блоками. Toyota, Honda, Ford.',
    specs: ['G12++','ASTM D3306','BS 6580','OAT'],
    price: 460, badge: '', badgeText: '',
    img: '', emoji: '🧊'
  },
  {
    id: 40, category: 'antifreeze', featured: false,
    brand: 'Shell', name: 'Shell Antifreeze G13 / 5л',
    desc: 'Найновіший стандарт G13 на основі гліцерину (екологічний). Для VW, Audi, Škoda, SEAT з 2013 року. Фіолетовий колір.',
    specs: ['G13','VW TL 774-J','G13'],
    price: 550, badge: 'badge-new', badgeText: 'Новинка',
    img: '', emoji: '🧊'
  },
  {
    id: 41, category: 'antifreeze', featured: false,
    brand: 'Mobil', name: 'Mobil Antifreeze для вантажівок / 20л',
    desc: 'Антифриз для важких дизельних двигунів вантажівок і тракторів. Захист від кавітації гільз. Преміум OAT формула.',
    specs: ['ASTM D6210','Cummins ES-1','John Deere HJ-200D','Volvo VCS'],
    price: 1800, badge: '', badgeText: '',
    img: '', emoji: '🧊'
  },
  {
    id: 42, category: 'antifreeze', featured: false,
    brand: 'Liqui Moly', name: 'Liqui Moly KFS 2000 SF / 1,5л',
    desc: 'Готовий до використання антифриз G12. Розведений до -30°C. Зручний для доливання у систему без розведення.',
    specs: ['G12','VW TL 774-D','готовий до застосування'],
    price: 180, badge: '', badgeText: '',
    img: '', emoji: '🧊'
  },

  // ─── ЗМАЗКИ ───────────────────────────────
  {
    id: 43, category: 'grease', featured: true,
    brand: 'Shell', name: 'Shell Alvania RL 3 / 4кг',
    desc: 'Літієва змазка для підшипників коліс, шарнірів підвіски, рульових тяг. Захист від вологи і корозії. Широкий діапазон температур.',
    specs: ['NLGI 3','DIN 51825','ISO L-XBCEB3'],
    price: 520, badge: '', badgeText: '',
    img: '', emoji: '🛢️'
  },
  {
    id: 44, category: 'grease', featured: false,
    brand: 'Castrol', name: 'Castrol LMX Li-Complexe / 0.5кг',
    desc: 'Змазка на основі комплексного літію. Для ШРУС, шарнірів і підшипників. Витримує температури до +220°C.',
    specs: ['NLGI 2','DIN 51825 KP2K','ISO L-XBCEB2'],
    price: 160, badge: '', badgeText: '',
    img: '', emoji: '🛢️'
  },
  {
    id: 45, category: 'grease', featured: false,
    brand: 'Liqui Moly', name: 'Liqui Moly Langzeit-Fett 0 / 1кг',
    desc: 'Довгострокова змазка для рульових рейок, напрямних супорта, роз'ємів. Витримує мийку і вібрацію.',
    specs: ['NLGI 0','VKIS 5250'],
    price: 380, badge: '', badgeText: '',
    img: '', emoji: '🛢️'
  },
  {
    id: 46, category: 'grease', featured: false,
    brand: 'Total', name: 'Total Multis EP 2 / 4кг',
    desc: 'Змазка з присадками EP (Extreme Pressure). Для підшипників, хрестовин карданного вала. Для тракторів і вантажівок.',
    specs: ['NLGI 2','DIN 51825 KP2K-30','ASTM D-4950 LB'],
    price: 480, badge: '', badgeText: '',
    img: '', emoji: '🛢️'
  },
  {
    id: 47, category: 'grease', featured: false,
    brand: 'Mobil', name: 'Mobilgrease XHP 222 / 4кг',
    desc: 'Преміум змазка для важких умов. Підшипники коліс великих вантажівок і будівельної техніки. Захист від ударних навантажень.',
    specs: ['NLGI 2','ISO VG 220','SKF LGEP 2'],
    price: 680, badge: '', badgeText: '',
    img: '', emoji: '🛢️'
  },
  {
    id: 48, category: 'grease', featured: false,
    brand: 'Liqui Moly', name: 'Liqui Moly LM 47 Molykote / 0.5кг',
    desc: 'Змазка з молібденом для зубчастих передач і різьбових з'єднань. Захист від заїдання і задирів. Колір: чорний.',
    specs: ['MoS2','DIN 51826 GPM1K-30'],
    price: 210, badge: '', badgeText: '',
    img: '', emoji: '🛢️'
  },
  {
    id: 49, category: 'grease', featured: false,
    brand: 'Shell', name: 'Shell Gadus S3 V220C 2 / 18кг',
    desc: 'Промислова змазка для вузлів з важкими навантаженнями — екскаватори, крани, будівельна техніка, аграрні машини.',
    specs: ['NLGI 2','ISO VG 220','DIN 51825 KP2K-30','ASTM D-4950'],
    price: 2800, badge: '', badgeText: '',
    img: '', emoji: '🛢️'
  },
  {
    id: 50, category: 'grease', featured: false,
    brand: 'Total', name: 'Total Aerosol TS Spray 0.4л',
    desc: 'Аерозольна змазка-антикорозійна для замків, петель, ланцюгів, кабелів. Витісняє вологу. Ефект 6 місяців.',
    specs: ['WD-аналог','витискувач вологи'],
    price: 95, badge: '', badgeText: '',
    img: '', emoji: '🛢️'
  },
  {
    id: 51, category: 'grease', featured: false,
    brand: 'Liqui Moly', name: 'Liqui Moly Copper Spray / 0.25л',
    desc: 'Мідний спрей для гальмівних колодок, різьбових з'єднань, стикових поверхонь. Запобігає прикипанню.',
    specs: ['мідна основа','до +1100°C'],
    price: 145, badge: '', badgeText: '',
    img: '', emoji: '🛢️'
  },
  {
    id: 52, category: 'grease', featured: false,
    brand: 'Castrol', name: 'Castrol Moly Grease / 0.5кг',
    desc: 'Молібденова змазка для ШРУСів і карданних шарнірів. Витримує екстремальні навантаження. Захист від задирів.',
    specs: ['MoS2','NLGI 2','DIN 51825'],
    price: 190, badge: '', badgeText: '',
    img: '', emoji: '🛢️'
  },
];

// ──── Utility Functions ────────────────────

function productCard(p) {
  const imgHtml = p.img
    ? `<img src="${p.img}" alt="${p.name}" onerror="this.parentElement.innerHTML='<div class=\\'product-no-img\\'>${p.emoji}</div>'">`
    : `<div class="product-no-img">${p.emoji}</div>`;

  const badgeHtml = p.badge
    ? `<div class="product-badge ${p.badge}">${p.badgeText}</div>` : '';

  const specsHtml = p.specs.map(s => `<span class="spec-tag">${s}</span>`).join('');

  return `
    <div class="product-card" data-id="${p.id}">
      <div class="product-img-wrap">
        ${imgHtml}
        ${badgeHtml}
      </div>
      <div class="product-body">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-specs">${specsHtml}</div>
        <div class="product-footer">
          <div>
            <div class="product-price">${p.price.toLocaleString('uk-UA')} <span class="product-price-unit">грн</span></div>
          </div>
          <button class="btn-order" onclick="openModal('${p.name.replace(/'/g, "\\'")}')">ЗАМОВИТИ</button>
        </div>
      </div>
    </div>
  `;
}

const CATEGORY_LABELS = {
  all: 'Всі товари',
  motor: 'Моторні оливи',
  agro: 'Сільська техніка',
  truck: 'Вантажівки / Фури',
  trans: 'Трансмісійні',
  antifreeze: 'Антифризи',
  grease: 'Змазки та спреї',
};

const CATEGORY_COUNTS = {};
Object.keys(CATEGORY_LABELS).forEach(k => {
  CATEGORY_COUNTS[k] = k === 'all' ? PRODUCTS.length : PRODUCTS.filter(p => p.category === k).length;
});
