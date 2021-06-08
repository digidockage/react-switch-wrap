/// <reference types="react" />
interface SwitchWrapProps {
  when: string | ((mixedProps) => string);
  wraps: (children: JSX.Element) => JSX.Element;
  defaultWrap: (children: JSX.Element) => JSX.Element;
  children: JSX.Element;
}
declare const _default: ({ when, wraps, defaultWrap, children }: SwitchWrapProps) => JSX.Element;
export default _default;
