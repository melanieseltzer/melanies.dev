import type { DocumentTypeDef } from 'contentlayer/source-files';

export type { DocumentTypes } from 'contentlayer/generated';

export type SchemaFieldDefs<T extends string> = {
  fields?: DocumentTypeDef<T>['fields'];
  computedFields?: DocumentTypeDef<T>['computedFields'];
};
