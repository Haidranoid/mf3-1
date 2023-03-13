import faker from 'faker'

const mount = (el) => {
    let products = ''

    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`
    }

    el.innerHTML = products
}

// Context/Situation #1
// we are running this file in development in isolation
// we are using our local index.html file
// which definitely has an element with an id of 'dev-products'
// we want to immediately render our app into that element
if (process.env.NODE_ENV === 'development') {
    const el = document.getElementById('dev-products')
    console.log({el})
    if (el) {
        mount(el)
    }
}

// Context/Situation #2
// we are running this file in development or production
// through the CONTAINER app
// NO GUARANTEE THAT an element with an id of 'dev-products' exists
// WE DON'T WANT TRY TO IMMEDIATELY render the app
export {mount}