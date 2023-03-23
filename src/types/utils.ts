export type KeysUndefinedToNull<T> = {
  [P in keyof T]-?: undefined extends T[P] ? T[P] | null : T[P];
};
