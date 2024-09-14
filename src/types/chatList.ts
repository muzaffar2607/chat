import { IUser } from "./user";

export interface IChatList {
  id: number;
  is_mute: boolean;
  last_message: {
    created_at: string;
    is_read: boolean;
    message: string;
    sender_id: number | null;
  };
  member: IUser;
  unread: number;
}
