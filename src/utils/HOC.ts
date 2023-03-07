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

export function connect<P extends TProps>(WrappedBlock: BlockClass<P>) {
  // @ts-expect-error No base constructor has the specified
  return class extends WrappedBlock<P> {
    public static componentName = WrappedBlock.componentName || WrappedBlock.name;

    constructor(props: P) {
      super({ ...props, store: store.getState() });
    }

    __onChangeStoreCallback = () => {
      /**
       * TODO: проверить что стор реально обновлен
       * и прокидывать не целый стор, а необходимые поля
       * с помощью метода mapStateToProps
       */
      console.log(store);


      // @ts-expect-error this is not typed
      this.setProps({ ...this.props, store: store.getState() });
    }

    componentDidMount(props: P) {
      super.componentDidMount(props);
      store.on(StoreEvents.Updated, this.__onChangeStoreCallback);
    }

    componentWillUnmount() {
      super.componentWillUnmount();
      store.on(StoreEvents.Updated, this.__onChangeStoreCallback);
    }

  } as BlockClass<Omit<P, 'store'>>;
}
