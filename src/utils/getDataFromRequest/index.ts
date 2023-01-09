import {GetValueFromRequestType, isObjectKeys, ObjectKeyType} from "./index.type";

export const getDataFromRequest = (data: Record<any, any>, getter: GetValueFromRequestType): undefined | string => {
    try {
        if (isObjectKeys(getter)) {
            let findObj = data
            console.log("skfjkasjfk", findObj)
            getter.forEach((objKey: ObjectKeyType) => {
                findObj = findObj[objKey]
                console.log("skfjkasjfk 1", {data, findObj, objKey})
            })
            console.log("skfjkasjfk 2", findObj)
            if (!findObj)
                return undefined
            return findObj as unknown as string
        }
        return getter(data)
    } catch (e) {
        console.error("getDataFromRequest", e)
        return undefined
    }

}
