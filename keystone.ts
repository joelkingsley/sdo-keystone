import { config, list } from '@keystone-6/core';
import { bigInt, calendarDay, relationship, text } from '@keystone-6/core/fields';

const isTrue = () => true;

const lists = {
  Speaker: list({
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
  }),
  Language: list({
    fields: {
      languageCode: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
      sourceCountryFlag: text({ validation: { isRequired: true } }),
    },
    access: {
      operation: {
        query: isTrue,
        create: isTrue,
        update: isTrue,
        delete: isTrue,
      },
    },
  }),
  ChannelType: list({
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
  }),
  Channel: list({
    fields: {
      channelName: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
      channelType: relationship({ ref: 'ChannelType' }),
      locationLat: text({ validation: { isRequired: true } }),
      locationLong: text({ validation: { isRequired: true } }),
      regionCode: text({ validation: { isRequired: true } }),
      shortIdentifier: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
      websiteUrl: text({ validation: { isRequired: true } }),
      addressText: text({ validation: { isRequired: true } }),
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
  }),
  User: list({
    fields: {
      userUuid: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
      userEmail: text({ validation: { isRequired: true } }),
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
  }),
  VideoType: list({
    fields: {
      videoTypeName: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
    },
    ui: {
      labelField: 'videoTypeName',
      searchFields: ['videoTypeName'],
    },
    access: {
      operation: {
        query: isTrue,
        create: isTrue,
        update: isTrue,
        delete: isTrue,
      },
    },
  }),
  Video: list({
    fields: {
      title: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
      description: text({ validation: { isRequired: true } }),
      datePublished: calendarDay({ validation: { isRequired: true } }),
      channel: relationship({ ref: 'Channel', many: false }),
      speaker: relationship({ ref: 'Speaker', many: false }),
      language: relationship({ ref: 'Language', many: false }),
      videoType: relationship({ ref: 'VideoType', many: false }),
    },
    ui: {
      searchFields: ['title', 'description'],
    },
    hooks: {
      validateInput(args) {
        const { channel, speaker, language, videoType } = args.resolvedData;
        // We call addValidationError to indicate an invalid value.
        if (channel === undefined || channel === '') {
          args.addValidationError('The channel field of a video cannot be empty');
        }
        if (speaker === undefined || speaker === '') {
          args.addValidationError('The speaker field of a video cannot be empty');
        }
        if (language === undefined || language === '') {
          args.addValidationError('The language field of a video cannot be empty');
        }
        if (videoType === undefined || videoType === '') {
          args.addValidationError('The video type field of a video cannot be empty');
        }
      },
    },
    access: {
      operation: {
        query: isTrue,
        create: isTrue,
        update: isTrue,
        delete: isTrue,
      },
    },
  }),
};

export default config({
  db: {
    provider: 'postgresql',
    url: '{replace-here}',
  },
  lists,
});