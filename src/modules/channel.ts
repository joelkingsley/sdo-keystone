import { list, ListConfig } from "@keystone-6/core";
import { BaseListTypeInfo } from "@keystone-6/core/dist/declarations/src/types";
import { relationship, text } from "@keystone-6/core/fields";

const isTrue = () => true;

export let channelConfig: ListConfig<BaseListTypeInfo, any> = list({
  fields: {
    channelName: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
    channelType: relationship({ ref: 'ChannelType' }),
    locationLat: text({ validation: { isRequired: true } }),
    locationLong: text({ validation: { isRequired: true } }),
    regionCode: text({ validation: { isRequired: true } }),
    shortIdentifier: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
    websiteUrl: text({ validation: { isRequired: true } }),
    addressText: text({ validation: { isRequired: true } }),
    videosInChannel: relationship({ ref: 'Video.channel', many: true }),
  },
  ui: {
    labelField: 'channelName',
    searchFields: ['channelName'],
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