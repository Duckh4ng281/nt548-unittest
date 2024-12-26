import { Publisher, Subjects, TicketCreatedEvent } from '@demo-ticket-app/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
