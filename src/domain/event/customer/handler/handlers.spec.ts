import Address from "../../../entity/address";
import Customer from "../../../entity/customer";
import EventDispatcher from "../../@shared/event-dispatcher";
import CustomerAddressChangedEvent from "../customer-adrress-changed.event";
import CustomerCreatedEvent from "../customer-created.event";
import SendEmailWhenAddresIsChanged from "./send-email-when-address-is-changed.handler";
import SendEmailWhenCustomerIsCreated from "./send-email-when-customer-is-created.handler";

describe("Customer Handlers tests", () => {
    it("should notify all event handlers when customer is created", () => {
        const eventDispatcher = new EventDispatcher();
        const SendEmailEventHanlder = new SendEmailWhenCustomerIsCreated();
        const spySendEmail = jest.spyOn(SendEmailEventHanlder, "handle")
        eventDispatcher.register("CustomerCreatedEvent", SendEmailEventHanlder)

        const SendNotificationEventHanlder = new SendEmailWhenCustomerIsCreated();
        const spySendNotification = jest.spyOn(SendNotificationEventHanlder, "handle")
        eventDispatcher.register("CustomerCreatedEvent", SendNotificationEventHanlder)

        const customer = new Customer("1", "John")
        const customerCreatedEvent = new CustomerCreatedEvent(customer);

        eventDispatcher.notify(customerCreatedEvent);

        expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"]).toMatchObject([SendEmailEventHanlder,
            SendNotificationEventHanlder])
        expect(spySendEmail).toHaveBeenCalled()
        expect(spySendNotification).toHaveBeenCalled()
    })

    it("should notify all event handlers when customer address is changed", () => {
        const eventDispatcher = new EventDispatcher();
        const SendEmailEventHanlder = new SendEmailWhenAddresIsChanged();
        const spySendEmail = jest.spyOn(SendEmailEventHanlder, "handle")
        eventDispatcher.register("CustomerAddressChangedEvent", SendEmailEventHanlder)

        const customer = new Customer("1", "John")
        const address = new Address("Rua", 1, "000000000", "Cidade")
        customer.changeAddress(address)

        const customerCreatedEvent = new CustomerAddressChangedEvent(customer);

        eventDispatcher.notify(customerCreatedEvent);

        expect(eventDispatcher.getEventHandlers["CustomerAddressChangedEvent"]).toMatchObject([SendEmailEventHanlder])
        expect(spySendEmail).toHaveBeenCalled()
    })
})