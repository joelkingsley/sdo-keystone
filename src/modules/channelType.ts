import { list, ListConfig } from "@keystone-6/core";
import { BaseListTypeInfo } from "@keystone-6/core/dist/declarations/src/types";
import { text } from "@keystone-6/core/fields";

const isTrue = () => true;

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
      query: isTrue,
      create: isTrue,
      update: isTrue,
      delete: isTrue,
    },
  },
});