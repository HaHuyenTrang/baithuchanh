class Product{
    id:number
    name:string
    price:number
    constructor(id:number,name:string, price:number){
        this.id=id
        this.name=name
        this.price=price
    }
}
class CartProduct extends Product{
    quantity:number
    constructor(id:number,name:string, price:number, quantity:number){
        super(id,name,price)
        this.quantity = quantity
    }
    calculatePrice():number{
        return this.price * this.quantity
    }
    increaseQuantity(num:number):void{
        this.quantity +=num
    }
    decreaseQuantity(num:number):void{
        this.quantity -=num
    } 
}

class ShopProduct extends Product{
    stock:number
    constructor(id:number,name:string, price:number,stock:number){
        super(id,name,price)
        this.stock = stock
    }
}
class Cart{
    items: CartProduct[];
    constructor(){
        this.items = []
    }
    addItem(product: ShopProduct, quantity:number): void{
        if(quantity > product.stock){
            console.log(`${product.name}`);
            return  
        }
        let cartProduct = new CartProduct(
            product.id,
            product.name,
            product.price,
            quantity
        )
        this.items.push(cartProduct)
        console.log(`${quantity}, ${product.name}`);
    }
    removeItem(product: CartProduct): void {
        const index = this.items.indexOf(product);
        if (index !== -1) {
          this.items.splice(index, 1);
          console.log(`${product.name} `);
        }
      }
    
      getTotal(): number {
        let total = 0;
        for (const item of this.items) {
          total += item.calculatePrice();
        }
        return total;
      }
}




// Tạo ra các sản phẩm bán trong cửa hàng
let products: ShopProduct[] = [
    new ShopProduct(1, "Rau ", 77, 5),
    new ShopProduct(2, "Cà rốt", 20, 33),
    new ShopProduct(3, "quả chuối ", 85, 7)
  ];
  
  // Tạo giỏ hàng
  let cart = new Cart();
  
  // Thêm sản phẩm 
  cart.addItem(products[0], 2); // Thêm 2 sản phẩm 
  cart.addItem(products[1], 4); // Thêm 4 sản phẩm 
  
  // Xóa sản phẩm 
  cart.removeItem(cart.items[0]); // Xóa sản phẩm đầu tiên 
  
  // Tính tổng 
  const total = cart.getTotal();
  console.log("Total:", total);