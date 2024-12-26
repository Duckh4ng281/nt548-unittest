import { Message } from 'node-nats-streaming';
import { Listener, OrderCreatedEvent, Subjects } from '@demo-ticket-app/common';
import { queueGroupName } from './queue-group-name';
import { Ticket } from '../../models/ticket';
import { TicketUpdatedPublisher } from '../publishers/ticket-updated-publisher';

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCreatedEvent['data'], msg: Message) {
    // Tìm vé mà đơn hàng đang đặt
    const ticket = await Ticket.findById(data.ticket.id);

    // Nếu không có ticket thì error
    if (!ticket) {
      throw new Error('Ticket not found');
    }

    // Đánh dấu vé là được reserve bằng cách đặt thuộc tính orderId của ticket
    ticket.set({ orderId: data.id });

    // Lưu vé
    await ticket.save();
    await new TicketUpdatedPublisher(this.client).publish({
      id: ticket.id,
      price: ticket.price,
      title: ticket.title,
      userId: ticket.userId,
      orderId: ticket.orderId,
      version: ticket.version,
    });

    // ack message
    msg.ack();
  }
}
