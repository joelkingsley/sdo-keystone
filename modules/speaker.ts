import { list, ListConfig } from "@keystone-6/core";
import { BaseListTypeInfo } from "@keystone-6/core/dist/declarations/src/types";
import { text } from "@keystone-6/core/fields";

const isTrue = () => true;

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
      query: isTrue,
      create: isTrue,
      update: isTrue,
      delete: isTrue,
    },
  },
});