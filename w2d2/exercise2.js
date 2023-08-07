/**● Create a program to create transaction
● Product Class
○ Properties
    ■ Name
    ■ Price
● Transaction Class
    ○ Properties
        ■ Total
        ■ Product
            ● All product data
            ● Qty

    ○ Add to cart method → Add product to transaction
    ○ Show total method → Show total current transaction
    ○ Checkout method → Finalize transaction, return transaction data */
//

//this is a list of product available on the store
class Product {
    //because we need to collect all the product we need a product list
    //we need to add product to the product list which then we will do a transaction
    static productList = [];

    //since we use getter and setter we dont need parameter within the constructor
   constructor() {
    this.productName;
    this.price;
   } 

   //call the product name
   get getProductName() {
    return this.productName;
   }

   //set the parameter on the productname
   set setProductName(productName) {
    this.productName = productName;
   }

   //call the price
   get getPrice() {
    return this.price;
   }

   //set the parameter on the price
   set setPrice(price) {
    this.price = price;
   }
}

//this is class transaction 
class Transaction {
    constructor() {
        this.total = 0;
        this.cart = [];
    }

    addToCart(productName, quantity) {
        for(let item of Product.productList) {
            if(productName == item.productName) {
                let totalPrice = item.price * quantity;
                let billing = {
                    ...item,
                    amount: quantity,
                    total: totalPrice
                };
                this.cart.push(billing);
                this.total = this.total + totalPrice;
                return;
            } 
        }
        console.log(`${productName} is not available, please select other items`);
    }

    get showTotal() {
        return this.total;
    }

    get checkout() {
        Object.freeze(this);
        return this;
    }
}

let product1 =  new Product();
product1.setProductName = "Fallout 3";
product1.setPrice = 180000;

let product2 =  new Product(); 

product2.setProductName = "Fallout 4";
product2.setPrice = 200000;

let product3 =  new Product(); 

product3.setProductName = "Fallout 5";
product3.setPrice = 400000;

Product.productList.push(product1, product2, product3);

let trs1 = new Transaction();
trs1.addToCart("Fallout 4", 3)
trs1.addToCart("Fallout 7", 10)
trs1.addToCart("Fallout 9", 1)
console.log(trs1.checkout);
trs1.addToCart("Fallout 3", 4)
