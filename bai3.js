"use strict";
class MenuItem {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Table {
    constructor(id, capacity, available) {
        this.id = id;
        this.capacity = capacity;
        this.available = available;
    }
}
class Reservation {
    constructor(id, customerName, tableId) {
        this.id = id;
        this.customerName = customerName;
        this.tableId = tableId;
    }
}
class Order {
    constructor(id, tableId, items) {
        this.id = id;
        this.tableId = tableId;
        this.items = items;
    }
    getTotal() {
        let total = 0;
        for (let item of this.items) {
            total += item.price;
        }
        return total;
    }
}
class Restaurant {
    constructor() {
        this.menu = [];
        this.tables = [];
        this.reservations = [];
        this.orders = [];
    }
    addMenuItem(menuItem) {
        this.menu.push(menuItem);
    }
    addTable(table) {
        this.tables.push(table);
    }
    makeReservation(reservation) {
        let table = this.tables.find((t) => t.id === reservation.tableId);
        if (table) {
            if (table.available) {
                table.available = false;
                this.reservations.push(reservation);
            }
            else {
                console.log('Bàn đã được đặt trước!');
            }
        }
        else {
            console.log('Bàn không tồn tại!!!');
        }
    }
    generateBill(orderId) {
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
