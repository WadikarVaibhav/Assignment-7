/*eslint-env browser*/

let inventary = new Array(5);
inventary[0] = [4824, 'Shirt', 10, '$15.99'];
inventary[1] = [6343, 'Jeans', 22, '$39.99'];
inventary[2] = [3223, 'Socks', 36, '$9.99'];
inventary[3] = [2233, 'Hat', 12, '$14.99'];
inventary[4] = [9382, 'Jacket', 5, '$49.99'];

console.log('Welcome to Product Inventory Management System');
console.log('choose');
console.log('1. View products');
console.log('2. Update');
console.log('3. Exit');

document.write('Reload to start');

main = () => {
    let cont = true;
    do {
        var choice = prompt('Enter choice');
        switch(choice) {
            case '1':
                show();
                break;
            case '2':
                update();
                break;
            case '3':
                cont = false;
                break;
            default:
                cont = false;
                break;
        }
    } while (cont);
}

show = () => {
    inventary.sort((a, b) => (a[0] > b[0]) ? 1 : -1).map((product) => {
        console.log(product[0]+' '+product[1]+' '+product[2]+' '+product[3]);
    });
}

update = () => {
    let sku = window.prompt('Enter sku number');
    let qty = window.prompt('Enter quantity');
    let index = inventary.findIndex((product) => {
        if (product[0] == sku) {
            return product;
        }
    });
    inventary[index][2] = parseInt(qty);
    show();
}

main();