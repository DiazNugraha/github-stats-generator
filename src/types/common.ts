export type KeyValueFrom<K extends string | number | symbol, V> = {
  [Key in K]: V;
};

export interface IOption<T> {
  label: string;
  value: T;
}

export interface MainProperties {
  username: string;
  hide: string[];
  show: string[];
  show_icons: string;
  theme: string;
}
