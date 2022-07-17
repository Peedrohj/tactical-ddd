import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import CustomerAddressChangedEvent from "../customer-adrress-changed.event";

export default class SendEmailWhenAddresIsChanged implements EventHandlerInterface<CustomerAddressChangedEvent>{
    handle(event: CustomerAddressChangedEvent): void {
        console.log(`Client ${event.eventData.id} - ${event.eventData.name}, change address to ${event.eventData.address}`);
    }
}