import type { DocumentTypeDef } from 'contentlayer/source-files';

export type SchemaFieldDefs<T extends string> = {
  fields?: DocumentTypeDef<T>['fields'];
  computedFields?: DocumentTypeDef<T>['computedFields'];
};
