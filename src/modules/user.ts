import { list, ListConfig } from "@keystone-6/core";
import { BaseListTypeInfo } from "@keystone-6/core/dist/declarations/src/types";
import { relationship, text } from "@keystone-6/core/fields";
import { isSuperAdmin } from "../auth/auth-utils";

export let userConfig: ListConfig<BaseListTypeInfo, any> = list({
  fields: {
    userUuid: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
    userEmail: text({ validation: { isRequired: true } }),
    likedVideos: relationship({
      ref: 'Video',
      many: true,
    }),
    dislikedVideos: relationship({
      ref: 'Video',
      many: true,
    }),
  },
  db: {
    idField: {
      kind: 'uuid',
    },
  },
  ui: {
    labelField: 'userEmail',
    searchFields: ['userUuid', 'userEmail'],
  },
  access: {
    operation: {
      query: isSuperAdmin,
      create: isSuperAdmin,
      update: isSuperAdmin,
      delete: isSuperAdmin,
    },
  },
});