import { Block } from "../../utils";
import template from "./Link.hbs";

interface ILinkProps {
  className?: string;
  innerLink: string;
  onClick?: () => void;
  events?: Record<string, Record<string, (event: Event) => void> | unknown>;
}

export class MainLink extends Block<ILinkProps> {
  static componentName = 'MainLink';
  constructor({ className, innerLink, onClick }: ILinkProps) {
    super({ className, innerLink, events: { click: onClick } });
  }
  protected render(): string {
    return template({ ...this.props });
  }
}
