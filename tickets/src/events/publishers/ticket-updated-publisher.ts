import { Publisher, Subjects, TicketUpdatedEvent } from '@demo-ticket-app/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
