class GoodItem {
    name = ''
    price = 0

    // в аргументах применена деструктуризация (ссылка на статью ниже)
    constructor({ name, price }) {
        this.name = name
        this.price = price
    }

    render() {
        // находим место куда рендерить
        const placeToRender = document.querySelector('.catalogJS')
        if (placeToRender) {
            // создаем блок, в который помещаем информацию о товаре
            const block = document.createElement('div')
            block.innerHTML = `Товар: ${this.name} = ${this.price}`

            // помещаем созданный блок на страницу
            placeToRender.appendChild(block)
        }
    }
}