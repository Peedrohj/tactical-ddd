import EventHandlerInterface from "../../@shared/event-handler.interface";
import CustomerCreatedEvent from "../customer-created.event";

export default class SendEmailWhenAddresIsChanged implements EventHandlerInterface<CustomerCreatedEvent>{
    handle(event: CustomerCreatedEvent): void {
        console.log(`Client ${event.eventData.id} - ${event.eventData.name}, change address to ${event.eventData.address}`);
    }

}