import { list, ListConfig } from "@keystone-6/core";
import { BaseListTypeInfo } from "@keystone-6/core/dist/declarations/src/types";
import { relationship, text } from "@keystone-6/core/fields";

const isTrue = () => true;

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
  ui: {
    labelField: 'userEmail',
    searchFields: ['userUuid', 'userEmail'],
  },
  access: {
    operation: {
      query: isTrue,
      create: isTrue,
      update: isTrue,
      delete: isTrue,
    },
  },
});