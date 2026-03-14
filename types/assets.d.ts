declare module "*.png" {
  const value: import("react-native").ImageSourcePropType;
  export = value;
}

declare module "*.ttf" {
  const value: number;
  export = value;
}
