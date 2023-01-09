import {ProviderKeyType, ProviderType} from "@authProviders/index.type";
import {StorageConfigType} from "@storage/index.type";
import {ApiType} from "@appTypes/index";
import {PartialRecord} from "@appTypes/utils.type";

export type ProvidersKey = PartialRecord<ProviderKeyType, ProviderType>

export type BaseWrapperPropsType = {
    api: ApiType,
    providers: ProvidersKey
    storageConfig: StorageConfigType,
}
