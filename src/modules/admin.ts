import { list, ListConfig } from "@keystone-6/core";
import { BaseListTypeInfo } from "@keystone-6/core/dist/declarations/src/types";
import { password, select, text } from "@keystone-6/core/fields";
import { isSuperAdmin, isSuperAdminOrModerator } from "../auth/auth-utils";

export let adminConfig: ListConfig<BaseListTypeInfo, any> = list({
  fields: {
    name: text({ validation: { isRequired: true }}),
    email: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
    password: password({validation: { isRequired: true }}),
    type: select({
        type: 'enum',
        options: [
            { label: 'Super Admin', value: 'super_admin' },
            { label: 'Super Moderator', value: 'super_moderator' },
        ],
        defaultValue: 'super_moderator',
        validation: { isRequired: true, },
        ui: { displayMode: 'select' },
    })
  },
  ui: {
    labelField: 'email',
    searchFields: ['email', 'name'],
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