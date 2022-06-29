import Address from "./entity/address";
import Customer from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/orderItem";

const customer = new Customer("1", "Pedro Henrique");
const address = new Address("Rua dois", 1, "12345-678", "Recife");

customer.address = address;
customer.activate();


const item1 = new OrderItem("1", "Item 1", 10);
const item2 = new OrderItem("2", "Item 2", 15);

const order = new Order("1", "1", [item1, item2]);