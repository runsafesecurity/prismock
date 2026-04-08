import type { DMMF as DMMFV7 } from '@prisma/generator-helper-v7';
import type { DMMF as DMMFV6 } from '@prisma/generator-helper-v6';
import type { ConfigMetaFormat } from '@prisma/internals/dist/engine-commands/getConfig';
export declare function generateDMMF(schemaPath?: string): Promise<DMMFV7.Document | DMMFV6.Document>;
export declare function generateConfig(schemaPath: string): Promise<ConfigMetaFormat>;
