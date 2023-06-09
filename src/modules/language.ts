import { list, ListConfig } from "@keystone-6/core";
import { BaseListTypeInfo } from "@keystone-6/core/dist/declarations/src/types";
import { text } from "@keystone-6/core/fields";
import { isSuperAdmin, isSuperAdminOrModerator } from "../auth/auth-utils";

const isTrue = () => true;

export let languageConfig: ListConfig<BaseListTypeInfo, any> = list({
  fields: {
    languageCode: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
    name: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
    sourceCountryFlag: text({ validation: { isRequired: true } }),
  },
  ui: {
    labelField: 'name',
    searchFields: ['name', 'languageCode'],
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