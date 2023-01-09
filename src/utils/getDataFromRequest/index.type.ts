import {ResType} from "@appTypes/index";
import {NonEmptyArrayType} from "@appTypes/utils.type";


export type ObjectKeyType = string

type ObjectKeysType = NonEmptyArrayType<string>
export type GetValueFromRequestType = ObjectKeysType | ((res: ResType) => string | undefined)

export function isObjectKeys(props: GetValueFromRequestType): props is ObjectKeysType {
    return Array.isArray(props)
}
