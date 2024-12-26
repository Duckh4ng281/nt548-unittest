import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@demo-ticket-app/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
