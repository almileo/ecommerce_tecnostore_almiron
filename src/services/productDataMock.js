const products = [
    {
        sku: '1',
        title: 'Ledger Nano S',
        category: 'hardware-wallet',
        price: 250,
        productImg: './img/nano-s.png',
        stock: 4,
        description: 'Ledger Nano S is a secure Bitcoin hardware wallet. It connects to any computer through USB and embeds a built-in OLED display to double-check and confirm each transaction with a single tap on its buttons.'
    }, {
        sku: '2',
        title: 'Ledger Nano X',
        category: 'hardware-wallet',
        price: 350,
        productImg: '/img/nano-x.png',
        stock: 5,
        description: 'The Ledger Nano X is up there with the best hardware wallets on the market for securing your cryptocurrency. Supported by well-designed and feature-rich apps for mobile and desktop, the Nano X also makes it simple to manage and add to your portfolio. The main question is whether the improvements on display are worth the additional outlay, as compared with the previous model.'
    }, {
        sku: '3',
        title: 'SafePal S1',
        category: 'hardware-wallet',
        price: 150,
        productImg: '/img/safepal-s1.png',
        stock: 10,
        description: 'The SafePal is a relatively new entrant to the hardware wallet scene, and it’s certainly a unique one. Backed by the likes of Binance Labs, Trust Wallet, and the Litecoin Foundation, the SafePal is an affordable and portable cold storage option.'
    }, {
        sku: '4',
        title: 'Avalon Miner 1246',
        category: 'asic-miner',
        price: 5350,
        productImg: '/img/avalon.png',
        stock: 2,
        description: 'The Avalon 1246 is the latest high efficiency, high hash rate Bitcoin Miner produced by Canaan. The powerful and efficient ASIC miner produced by Canaan generates a hash rate of 90 TH/s and has a power consumption of 3420Watts. The innovative new design is made from a strong alloy material and allows for maximum convenience and space saving flexibility with the ability to be place either horizontally or vertically when mining. With a plug and play deployment, built-in power, excellent stability and a leading hash rate, the Avalon 1246 ASIC Miner is one of the best Bitcoin miners on the market today.'
    }, {
        sku: '5',
        title: 'Whatsminer M30S++',
        category: 'asic-miner',
        price: 3500,
        productImg: '/img/whatsminer.png',
        stock: 5,
        description: 'The Whatsminer M30S++ is a front runner ASIC developed and created by the Shenzhen- based MicroBT. This miner holds an impressive hashrate of 112 Th/s for a power consumption of 3472w.'
    }
];

export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products)
        }, 1000)
    })
}

export const getProductsBySku = (sku) => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products.find((prod) => prod.sku === sku))
        }, 1000)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products.filter((prod) => prod.category === category))
        }, 1000)
    })
}