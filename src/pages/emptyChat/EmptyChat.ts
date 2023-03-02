import { ChatItem } from './../../components/chatItem/chatItem';
import { UserChatController } from "../../controllers/chatController";
import { TPropsDefault } from "../../types/Interfaces";
import { Block } from "../../utils";
import { connect } from "../../utils/HOC";
// import store from "../../utils/Store/store";
import { StoreEvents } from "../../utils/Store/store";
import { withstore } from "../../utils/Store/withStore";



type TProps = {} & TPropsDefault;
export class Chats extends Block<TProps> {
  static componentName = 'EmptyChat';
  constructor(props) {
    UserChatController.getAllChats()
    super(props);
    this.setState({
      chats: this.props.store.getState().chatsItems,
    });
  }
  protected render(): string {
    console.log(this.state.state);

    return `
	  {{#LayoutChat chats = this.state.state}}
    <div class="messandger-content messandger-content_empty">
      <div class="messandger-content__description">
        <p>Select a chat to send a message</p>
      </div>
    </div>
    {{/LayoutChat }}
    `;
  }
}

export const EmptyChat = withstore(Chats);



