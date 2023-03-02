import { TPropsDefault } from './../../types/Interfaces';
import { BlockClass } from '../Block';
import store, { StoreEvents } from './store';

type Indexed<T = any> = {
  [key in string]: T;
};
type TProps = {} & TPropsDefault;

export function withstore<P extends TProps>(WrappedBlock: BlockClass<P>) {
  // @ts-expect-error No base constructor has the specified
  return class extends WrappedBlock<P> {
    public static componentName = WrappedBlock.componentName || WrappedBlock.name;

    constructor(props: any) {
      super({ ...props, store: window.store });
    }

    __onChangestoreCallback = () => {
      // @ts-expect-error this is not typed
      this.setProps({ ...this.props, store: window.store });
    }

    componentDidMount(props: P) {
      super.componentDidMount(props);
      store.on(StoreEvents.Updated, this.__onChangestoreCallback);
    }

    componentWillUnmount() {
      super.componentWillUnmount();
      store.off(StoreEvents.Updated, this.__onChangestoreCallback);
    }

  } as BlockClass<Omit<P, 'store'>>;
}
