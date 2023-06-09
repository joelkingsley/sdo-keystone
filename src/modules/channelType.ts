import { list, ListConfig } from "@keystone-6/core";
import { BaseListTypeInfo } from "@keystone-6/core/dist/declarations/src/types";
import { text } from "@keystone-6/core/fields";
import { isSuperAdmin, isSuperAdminOrModerator } from "../auth/auth-utils";

export let channelTypeConfig: ListConfig<BaseListTypeInfo, any> = list({
  fields: {
    channelTypeCode: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
  },
  ui: {
    labelField: 'channelTypeCode',
    searchFields: ['channelTypeCode'],
  },
  access: {
    operation: {
      query: isSuperAdminOrModerator,
      create: isSuperAdmin,
      update: isSuperAdmin,
      delete: isSuperAdmin,
    },
  },
});