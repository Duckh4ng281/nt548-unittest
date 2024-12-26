import { Subjects, Publisher, OrderCancelledEvent } from '@demo-ticket-app/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
