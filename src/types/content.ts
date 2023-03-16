// This file mostly contains some re-exports of contentlayer types.
// This allows app imports (of the types) to be decoupled from contentlayer,
// making it easy to switch out the content solution layer if needed.

import type { DocumentTypeNames } from 'contentlayer/generated';

export type { Page } from 'contentlayer/generated';

export type ContentType = DocumentTypeNames;

export type PageName = 'about';
