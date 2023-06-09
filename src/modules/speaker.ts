import { list, ListConfig } from "@keystone-6/core";
import { BaseListTypeInfo } from "@keystone-6/core/dist/declarations/src/types";
import { text } from "@keystone-6/core/fields";
import { isSuperAdmin, isSuperAdminOrModerator } from "../auth/auth-utils";

export let speakerConfig: ListConfig<BaseListTypeInfo, any> = list({
  fields: {
    speakerName: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
  },
  ui: {
    labelField: 'speakerName',
    searchFields: ['speakerName'],
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