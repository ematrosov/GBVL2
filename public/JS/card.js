class List {
    _items = []

    constructor() {
        let goods = this.fetchGoods()
        goods = goods.map(item => {
            return new GoodItem(item)
        })
        this._items = goods
        this.render()
    }

    fetchGoods() {
        return [
            { name: 'ELLERY X M O CAPSULE', price: '$ 52.00', img: '/img/product.jpg', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' },
            { name: 'ELLERY X M O CAPSULE', price: '$ 52.00', img: '/img/product.jpg', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' },
            { name: 'ELLERY X M O CAPSULE', price: '$ 52.00', img: '/img/product.jpg', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' },



        ]
    }

    render() {
        this._items.forEach(Good => {
            Good.render()
        })
    }
}


class GoodItem {

    _img = 0
    _name = ''
    _price = 0
    _description = ''

    constructor({ name, price, img, description }) {

        this._img = img
        this._name = name

        this._description = description
        this._price = price
    }

    addToCart() {
        console.log('Added!', this._name)
    }

    render() {
        const placeToRender = document.querySelector('.catalogJS')
        if (placeToRender) {
            const block = document.createElement('div')
            block.innerHTML = `
            
            <img src="${this._img}" />
            ${this._name} 
            ${this._description}
            ${this._price}
            `

            const btn = new Button('Добавить в корзину', this.addToCart.bind(this))
            btn.render(block)
            placeToRender.appendChild(block)
        }
    }
}

new List()
