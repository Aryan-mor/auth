export type ElementType = JSX.Element | string | JSX.Element[]
export type ConnectChildrenType<T> = T & {
    children?: ElementType;
};

export type ApiType = string
export type PermissionType = string
export type ResType = Record<any, any>




