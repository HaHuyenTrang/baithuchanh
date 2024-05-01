class MenuItem{
    id:number
    name:string
    price:number
    constructor(id:number,name:string,price:number){
        this.id = id
        this.name = name
        this.price = price
    }

}

class Table{
    id:number
    capacity:number
    available:boolean
    constructor(id:number,capacity:number,available:boolean){
        this.id = id
        this.capacity = capacity
        this.available = available
    }
}

class Reservation{
    id:number
    customerName:string
    tableId:number
    constructor( id:number,customerName:string,tableId:number){
        this.id = id
        this.customerName =customerName
        this.tableId = tableId
    }

}

class Order {
    id: number
    tableId: number
    items: MenuItem[]
    constructor(id: number, tableId: number, items: MenuItem[]) {
      this.id = id
      this.tableId = tableId
      this.items = items
    }
    getTotal():number{
        let total = 0
        for(let item of this.items){
            total += item.price
        }
        return total
    }
  }
  class Restaurant {
    menu: MenuItem[];
    tables: Table[];
    reservations: Reservation[];
    orders: Order[];
  
    constructor() {
      this.menu = [];
      this.tables = [];
      this.reservations = [];
      this.orders = [];
    }
  
    addMenuItem(menuItem: MenuItem): void {
      this.menu.push(menuItem);
    }
  
    addTable(table: Table): void {
      this.tables.push(table);
    }
  
    makeReservation(reservation: Reservation): void {
        let table = this.tables.find((t) => t.id === reservation.tableId);
        if (table) {
          if (table.available) {
            table.available = false;
            this.reservations.push(reservation);
          } else {
            console.log('Bàn đã được đặt trước!');
          }
        } else {
          console.log('Bàn không tồn tại!!!');
        }
      }
    
      generateBill(orderId: number): number {
        const order = this.orders.find((o) => o.id === orderId);
        if (!order) {
          throw new Error('Đơn hàng không tồn tại!!!');
        }
    
        const total = order.getTotal();
        const table = this.tables.find((t) => t.id === order.tableId);
        if (table) {
          table.available = true;
        }
        return total;
      }
    }
 