// declare module '*.scss' {
//   interface IClassNames {
//     [className: string]: string
//   }
//   const classNames: IClassNames;
//   export = classNames;
// }

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes; // ES-модуль
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

declare module "*.svg" {
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare const __IS_DEV__: boolean;
