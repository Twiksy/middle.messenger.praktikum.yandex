
import store from "../utils/Store/store"
import { ChatApi } from '../api/chatAPI';
import { getAllSiblings } from '../helpers/helpers';
import { ChatController } from './messagesController';


export class UserChatController {
  static deleteUserFromChat(userId) {
    // const userId = window.prompt('Введите ID пользователя для удаления из чата');
    if (!userId) {
      return;
    }
    const data = {
      chatId: store.getState().active.chat.id,
      users: [Number(userId)],
    };

    ChatApi.deleteUsers(data);
  }

  static addUserFromChat(userId) {
    // const userId = window.prompt('Введите ID пользователя для добавления в чат');
    if (!userId) {
      return;
    }
    const data = {
      chatId: store.getState().active.chat.id,
      users: [Number(userId)],
    };

    ChatApi.addUsers(data);
  }

  static createChat(chatName) {
    // const chatName = window.prompt('Введите имя нового чата');
    if (!chatName) {
      return;
    }
    const data = {
      title: chatName,
    };
    ChatApi.create(data)
      .then((response: any) => {
        if (response.status === 200) {
          this.getAllChats();
        }
      })
      .catch((error: any) => {
        console.log(error.reason || 'Ошибка ответа от сервера');
      });
  }

  static deleteChat() {
    if (!window.confirm('Are you sure')) {
      return;
    }
    const data = {
      chatId: store.getState().active.chat.id,
    };
    ChatApi.delete(data)
      .then((response: any) => {
        if (response.status === 200) {
          const wrapper = document.querySelector('.chats-wrapper') as HTMLElement;
          wrapper.classList.remove('active');
          this.getAllChats();
        }
      })
      .catch((error: any) => {
        console.log(error.reason || 'Ошибка ответа от сервера');
      });
  }

  static getAllChats() {
    return ChatApi.request()
      .then((response: any) => {
        try {
          const data = JSON.parse(response.responseText);
          store.set('chatsItems', data);
          store.set('filteredChats', data);
          return data;
        } catch {
          console.log('Ошибка извлечения данных');
        }
      })
      .catch((error: any) => {
        console.log(error.reason || 'Ошибка ответа от сервера');
      });
  }

  static setActiveChat(chatItem: HTMLElement, userId?: string) {
    chatItem.classList.add('active');
    getAllSiblings(chatItem, false).forEach((item: HTMLElement) => {
      item.classList.remove('active');
    });

    store.set('active.chat', {});

    const activeChatObj: any = this.getActiveChat(chatItem.id);

    if (activeChatObj.id !== store.getState()?.active?.chat?.id) {
      store.set('active.chat', activeChatObj);
      ChatController.createSessionsMessage(chatItem.id, userId);
    }
  }

  static getActiveChat(chatId: string) {
    let currentItem;
    store.getState().chats.forEach((item: any) => {
      if (item.id.toString() === chatId) {
        currentItem = item;
      }
    });
    return currentItem;
  }
}

