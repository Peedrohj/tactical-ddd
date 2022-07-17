import EventInterface from "../../@shared/event/event.interface";
import Customer from "../entity/customer";

export default class CustomerCreatedEvent implements EventInterface {
    dataTimeOcurred: Date;
    eventData: Customer;

    constructor(eventData: Customer) {
        this.dataTimeOcurred = new Date();
        this.eventData = eventData;
    }
}