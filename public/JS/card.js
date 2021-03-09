class List {
    _items = []

    constructor() {
        this.fetchGoods()
            .then(res => {
                return res.json()
            })
            .then(data => {
                const goods = data.data.map(item => {
                    return new GoodItem(item)
                })
                this._items = goods
                this.render()
            })
    }

    fetchGoods() {

        const url = '/database/data.json'
        return fetch(url);
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

    constructor({ gender, brand, name, price, img, description }) {

        this._img = img
        this._name = name

        this._description = description
        this._price = price
        this._gender = gender
        this._brand = brand
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



