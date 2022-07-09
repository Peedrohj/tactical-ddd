import SendEmailWhenProductIsCreatedHandler from "../product/handler/send-email-when-product-is-created.handler";
import ProductCreatedEvent from "../product/product-created.event";
import EventDispatcher from "./event-dispatcher";

describe("Domain events test", () => {
    it("should register an event handler", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHanlder = new SendEmailWhenProductIsCreatedHandler();

        eventDispatcher.register("ProductCreatedEvent", eventHanlder)
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"]).toBeDefined()
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"].length).toBe(1)
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHanlder)
    })

    it("should unregister an event handler", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHanlder = new SendEmailWhenProductIsCreatedHandler();

        eventDispatcher.register("ProductCreatedEvent", eventHanlder)
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHanlder)
        eventDispatcher.unregister("ProductCreatedEvent", eventHanlder)

        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"]).toBeDefined()
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"].length).toBe(0)
    })

    it("should unregister all event handlers", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHanlder = new SendEmailWhenProductIsCreatedHandler();

        eventDispatcher.register("ProductCreatedEvent", eventHanlder)
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHanlder)
        eventDispatcher.unregisterAll()

        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"]).toBe(undefined)
    })

    it("should notify all event handlers", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHanlder = new SendEmailWhenProductIsCreatedHandler();
        const spyEventHandler = jest.spyOn(eventHanlder, "handle")

        eventDispatcher.register("ProductCreatedEvent", eventHanlder)
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHanlder)

        const productCreatedEvent = new ProductCreatedEvent({
            name: "Product 1",
            description: "Product 1 description",
            price: 10.0

        });

        eventDispatcher.notify(productCreatedEvent);
        expect(spyEventHandler).toHaveBeenCalled()
    })
})