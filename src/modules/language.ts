import { list, ListConfig } from "@keystone-6/core";
import { BaseListTypeInfo } from "@keystone-6/core/dist/declarations/src/types";
import { text } from "@keystone-6/core/fields";

const isTrue = () => true;

export let languageConfig: ListConfig<BaseListTypeInfo, any> = list({
  fields: {
    languageCode: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
    sourceCountryFlag: text({ validation: { isRequired: true } }),
  },
  ui: {
    labelField: 'languageCode',
    searchFields: ['languageCode'],
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