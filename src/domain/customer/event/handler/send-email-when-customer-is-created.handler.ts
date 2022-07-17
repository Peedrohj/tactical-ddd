import EventHandlerInterface from "../../../@shared/event/@shared/event-handler.interface";
import CustomerCreatedEvent from "../customer-created.event";

export default class SendEmailWhenCustomerIsCreated implements EventHandlerInterface<CustomerCreatedEvent>{
    handle(event: CustomerCreatedEvent): void {
        console.log("Sending email ....");
    }
}