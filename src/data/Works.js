const Works = [
    {
        id: 1,
        name: 'Feather.Finance',
        category: 'current',
        fixedCategory: 'current',
        image: '/assets/images/FF-logo.png',
        background: '/assets/images/single-project-hero.jpg',
        headline: 'An All-In-One Market Overview for DeFi.',
        text: ['Feather Finance is a django-powered decentralized finance browser tailored for delivering concise insights on a variety of projects and platforms.', 'Feather pulls data from over 100 data channels to provide project information, sentiment analysis, community activity information, developmental activity, market data, and more. Feather also supports insights on some centralaized finance products, and protocol information regarding large locked value pools.', 'Feather.Finance is not yet released.'],
        link: [] ,
        date: 'May 1, 2021',
        servicesLeft: ['Decentralized Finance', 'Responsive UI/UX Design' , 'Sentiment Analysis'],
        servicesRight: ['CoinMarketCap Integration', 'Defi Llama Integration', 'CoinGecko Integration'],
        imagesLeft: ['FF-img1.png', 'FF-img2.png'],
        imagesRight: ['FF-img3.png', 'FF-img4.png']
    },
    {   
        id: 2,
        name: 'PassivBot Futures',
        category: 'contributions',
        fixedCategory: 'contributions',
        image: '/assets/images/PB-logo.png',
        background: '/assets/images/single-project-hero-2.jpg',
        headline: 'A quant level trading framework, committed to the public domain.',
        text: ['PassivBot is an open source grid trading framework designed to trade autonomously in cryptocurrency perpetual futures markets. PassivBot supports Binance Perpetual USD-T Futures and Binance Inverse Perpetual Futures, as well as backtesting and self-optimization scripts.', 'PassivBot uses a preferential buy / sell grid to scalp trade indecisive price action. A grid consists of a range of buy and sell orders wherein a position is entered, and doubled down on as the price moves against the trade. This is known as the Martingale Strategy and is a key factor in the underlying approach.Dollar cost averaging into the position averages out the breakeven price closer to the mark price, and when the market rebounds or pulls back, limit “reduce” orders are used to slowly scale out of your position at the average mark price within your take profit range. Grid trading essentially trades volatility in arbitrary ranges set by a certain risk tolerance, margin balance, and aggression coefficient. As such, they can operate fairly quickly, executing order changes up to once per-second and sometimes filling orders even faster.'
               ,'PassivBot Futures is integrated with Binance and Bybit. Not all features may be available to US Citizens. Use at your own discresion, and seek experienced legal counsel if necessary.'],
        link: ['https://github.com/enarjord/passivbot', 'https://github.com/JohnKearney1/PassivBot-Configurations'] ,
        date: 'March 14, 2021',
        servicesLeft: ['Documentation', 'Community Outreach & Support' , 'Branding'],
        servicesRight: ['Derivatives & Perpetual Futures', 'Self Optimization Algorithms', 'Autonomous Trading'],
        imagesLeft: ['PB-img1.png'],
        imagesRight: ['PB-img2.png']
     },
     {
        id: 3,
        name: 'ReVibed.net',
        category: 'previous',
        fixedCategory: 'previous',
        image: '/assets/images/RV-logo.png',
        background: '/assets/images/single-project-hero-3.jpg',
        headline: 'A new e-commerce platform for sound design.',
        text: ['ReVibed is a producer collective focused around community sound production, design, marketing and more. ReVibed runs multiple social media venues where tens of thousands of members collaborate, share, and learn production technique.', 'ReVibed contacted me to design and deploy a simple e-commerce store to market sound design and loop kits. The site has been running since 2020 and generating additional revenue for the members.'],
        link: ['https://revibed.net'] ,
        date: 'November 29, 2020',
        servicesLeft: ['Branding / New Identity', 'UI/UX Design' , 'SuperProgressive Webapp'],
        servicesRight: ['Design Brainstorming', 'Product & Market Research', 'E-Commerce', 'SEO'],
        imagesLeft: ['RV-img1.png'],
        imagesRight: ['RV-img2.png']
     },
     {
        id: 4,
        name: 'Passiv-CLI',
        category: 'previous',
        fixedCategory: 'previous',
        image: '/assets/images/PX-logo.png',
        background: '/assets/images/single-project-hero-4.jpg',
        headline: 'PassivBot integrated CLI for new users.',
        text: ['Passiv-CLI is a fork of PassivBot Futures created to lower the barrier to entry for the application.', 'Python can be confusing, so we packaged everything for you. PassivBot users must read pages of documentation to even setup the application. This CLI was made using PassivBot v2.1.3 (a simpler, older version) and makes adding API keys, configuration, and maintence far easier for non-docker users.'],
        link: ['https://github.com/JohnKearney1/Passiv-CLI', 'https://github.com/JohnKearney1/Passiv-CLI/wiki'] ,
        date: 'March 26, 2021',
        servicesLeft: ['Command Line Interface', 'Automated Trading'],
        servicesRight: ['Version Control', 'Refactored'],
        imagesLeft: ['PX-img1.png'],
        imagesRight: ['PX-img2.png']
     },
     {
        id: 5,
        name: 'SlowLoris',
        category: 'previous',
        fixedCategory: 'previous',
        image: '/assets/images/SL-logo.png',
        background: '/assets/images/single-project-hero-5.jpg',
        headline: 'A suite of penetration testing tools, at your fingertips.',
        text: ['This project is no longer maintained.'],
        link: ['https://github.com/JohnKearney1/SlowLoris'] ,
        date: 'January 16, 2020',
        servicesLeft: ['Github Arctic Code Vault', 'Responsive UI/UX Design' , 'iOS & Android Development'],
        servicesRight: ['Design Brainstorming', 'Product & Market Research', 'Selling & Marketing Strategy'],
        imagesLeft: ['project-5-1.jpg'],
        imagesRight: ['project-5-2.jpg']
     },
     {
      id: 6,
      name: 'Vintage Licks',
      category: 'current',
      fixedCategory: 'current',
      image: '/assets/images/VL.png',
      background: '/assets/images/single-project-hero-5.jpg',
      headline: 'A compilation of jazz, neo-classical, and rap inspired beats',
      text: ['A compilation of beats inspired by MF DOOM and Jazz & Neo-Classical musicians from Michel Petrucciani and Al green to Beau Daikowicz. Featuring vocals from: DOOM, Erykah Badu, Amber Navran, Denzel Curry, Westside Gunn & more.' , 'Cover Art: Matthew Meyers'],
      link: ['https://soundcloud.com/jxhn91/sets/vintage-licks-2021'] ,
      date: 'January 4, 2021',
      servicesLeft: ['Sound Design', 'Sampling' , 'Audio Production'],
      servicesRight: [''],
      imagesLeft: ['VL.png'],
      imagesRight: ['']
   },
]

export default Works