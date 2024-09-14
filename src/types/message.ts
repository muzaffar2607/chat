export interface IMessage {
  chat_room_id: number;
  created_date: string;
  message: string;
  message_type: string;
  message_unique_id: string;
  reply_message: null;
  sender_id: number;
  sender_name: string;
}

export interface ISendMessage {
  action: string;
  payload?: {
    chat_room_id: number;
    message: string;
    reply_message: {
      id: number;
      message_unique_id: number;
      message: string;
      sender_id: number;
    } | null;
  };
  query?: {
    page?: number;
    page_size?: number;
  };
}
