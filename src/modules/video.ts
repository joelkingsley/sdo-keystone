import { list, ListConfig } from "@keystone-6/core";
import { BaseListTypeInfo } from "@keystone-6/core/dist/declarations/src/types";
import { calendarDay, relationship, text } from "@keystone-6/core/fields";
import { validateForAtleastOneRelatedItem } from "../validators/validateForAtleastOneRelatedItem";
import { isSuperAdmin, isSuperAdminOrModerator } from "../auth/auth-utils";

const isTrue = () => true;

export let videoConfig: ListConfig<BaseListTypeInfo, any> = list({
  fields: {
    title: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
    description: text({ validation: { isRequired: true } }),
    datePublished: calendarDay({ validation: { isRequired: true } }),
    channel: relationship({
      ref: 'Channel.videosInChannel',
      many: false,
      hooks: {
        validateInput: validateForAtleastOneRelatedItem,
      }
    }),
    speaker: relationship({
      ref: 'Speaker',
      many: true,
      hooks: {
        validateInput: validateForAtleastOneRelatedItem,
      }
    }),
    language: relationship({
      ref: 'Language',
      many: false,
      hooks: {
        validateInput: validateForAtleastOneRelatedItem,
      }
    }),
    videoType: relationship({
      ref: 'VideoType',
      many: false,
      hooks: {
        validateInput: validateForAtleastOneRelatedItem,
      }
    }),
    gcpStorageFileName: text({ validation: { isRequired: false } }),
    gcpStorageBucketName: text({ validation: { isRequired: false } }),
    bunnyStorageHlsUrl: text({ validation: { isRequired: false } }),
    thumbnailUrl: text({ validation: { isRequired: false } }),
    urlSlug: text({ validation: { isRequired: false } }),
  },
  ui: {
    searchFields: ['title', 'description'],
  },
  access: {
    operation: {
      query: isSuperAdminOrModerator,
      create: isSuperAdminOrModerator,
      update: isSuperAdminOrModerator,
      delete: isSuperAdmin,
    },
  },
});