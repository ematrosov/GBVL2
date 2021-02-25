class List_Cart {
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
        const url = 'http://localhost:3000/database/data.json'
        return fetch(url);
    }

    render() {
        this._items.forEach(Good => {
            Good.render()
        })
    }
}




class Cart {
    _img = 0
    _name = ''
    _price = 0
    _description = ''
    _quantity = 0
    _size = ''
    _brand = ''
    constructor({ img, name, price, description, quantity, size, brand }) {
        this._img = img
        this._name = name
        this._price = price
        this._description = description
        this._quantity = quantity
        this._size = size
        this._brand = brand
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
        ${this._quantity}
        ${this._size}
        ${this._brand}
                `

            const btn = new Button('Добавить', this.addToCart.bind(this))
            btn.render(block)
            placeToRender.appendChild(block)




        }
    }
}

new List_Cart()

