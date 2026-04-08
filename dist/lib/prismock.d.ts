import type { ActiveConnectorType } from "@prisma/generator-helper";
import { Delegate, DelegateProperties, Item } from "./delegate";
import type { Model } from "@prisma/dmmf";
type OptionsSync = {
    models: Model[];
};
export type Data = Record<string, Item[]>;
export type Properties = Record<string, DelegateProperties>;
export type Delegates = Record<string, Delegate>;
export declare function fetchProvider(schemaPath?: string): Promise<ActiveConnectorType>;
export declare function generateDelegates(options: OptionsSync): Promise<{
    delegates: Delegates;
    getData: () => Promise<Data>;
    setData: (d: Data) => Promise<void>;
}>;
export {};
