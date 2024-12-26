import { Publisher, OrderCreatedEvent, Subjects } from '@demo-ticket-app/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
