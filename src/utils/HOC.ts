import Block, { BlockClass } from './Block';
import store, { StoreEvents } from './Store/store';
import { isEqual } from '../helpers/helpers';
import { TPropsDefault } from '../types/Interfaces';

type Indexed<T = any> = {
  [key in string]: T;
};
type TProps = {} & TPropsDefault;
// export function connect(mapStateToProps: (state: Indexed) => Indexed) {
//   return function (Component: typeof Block<TProps>) {
//     return class extends Component {
//       constructor(...props: any) {
//         let state = mapStateToProps(store.getState());
//         super(...props);
//         store.on(StoreEvents.Updated, () => {
//           const newState = mapStateToProps(store.getState());
//           if (!isEqual(state, newState)) {
//             this.setProps({ ...newState });
//           }
//           state = newState;
//         });
//       }
//     };
//   };
// }
export function connect(Component, mapStateToProps) {
  return class extends Component {
    constructor(tag, props = {}) {

      super(tag, { ...props, ...mapStateToProps(store.getState()) });

      store.on(StoreEvents.Updated, () => {
        this.setProps({ ...mapStateToProps(store.getState()) });
      });
    }
  };
}
