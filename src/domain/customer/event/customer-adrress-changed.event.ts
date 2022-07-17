import Customer from "../../entity/customer";
import EventInterface from "../../event/@shared/event.interface";

export default class CustomerAddressChangedEvent implements EventInterface {
    dataTimeOcurred: Date;
    eventData: Customer;

    constructor(eventData: Customer) {
        this.dataTimeOcurred = new Date();
        this.eventData = eventData;
    }
}