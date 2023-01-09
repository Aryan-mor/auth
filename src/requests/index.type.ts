import {ApiType} from "@appTypes/index";

export type RequestBaseType = {
    api?: ApiType
}


export type RequestType<ReqProps> = {
    req: <T>(props: ReqProps) => Promise<T>
}
