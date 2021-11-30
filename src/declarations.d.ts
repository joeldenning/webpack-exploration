declare module "*.css" {
  interface IClassNames {
    default: {
      [className: string]: string;
    };
  }
  const classNames: IClassNames;
  export = classNames;
}
