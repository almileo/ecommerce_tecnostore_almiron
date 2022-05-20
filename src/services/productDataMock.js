const products = [
    {
        id: '1',
        title: 'Ledger Nano S',
        category: 'hardware-wallet',
        price: 250,
        productImg: './img/nano-s.png',
        stock: 4
    }, {
        id: '2',
        title: 'Ledger Nano X',
        category: 'hardware-wallet',
        price: 350,
        productImg: '/img/nano-x.png',
        stock: 5
    }, {
        id: '3',
        title: 'SafePal S1',
        category: 'hardware-wallet',
        price: 150,
        productImg: '/img/safepal-s1.png',
        stock: 10
    }, {
        id: '4',
        title: 'Avalon Miner 1246',
        category: 'asic-miner',
        price: 5350,
        productImg: '/img/avalon.png',
        stock: 2
    }, {
        id: '5',
        title: 'Whatsminer M30S++',
        category: 'asic-miner',
        price: 3500,
        productImg: '/img/whatsminer.png',
        stock: 5
    }
];

export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products)
        }, 2500)
    })
}