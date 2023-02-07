import { config, list } from '@keystone-6/core';
import { calendarDay, relationship, text } from '@keystone-6/core/fields';

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
      channel: relationship({
        ref: 'Channel',
        many: false,
        hooks: {
          validateInput: ({ item, operation, addValidationError, resolvedData, fieldKey }) => {
            const { channel } = resolvedData;
            if (operation == "create") {
              // We call addValidationError to indicate an invalid value.
              if (channel === undefined || channel === '') {
                addValidationError('The channel field of a video cannot be empty');
              }
            } else if (operation == "update") {
              // We call addValidationError to indicate an invalid value.
              if (channel?.disconnect === true) {
                addValidationError('The channel field of a video cannot be empty');
              }
            }
          },
        }
      }),
      speaker: relationship({
        ref: 'Speaker',
        many: false,
        hooks: {
          validateInput: ({ item, operation, addValidationError, resolvedData, fieldKey }) => {
            const { speaker } = resolvedData;
            if (operation == "create") {
              // We call addValidationError to indicate an invalid value.
              if (speaker === undefined || speaker === '') {
                addValidationError('The speaker field of a video cannot be empty');
              }
            } else if (operation == "update") {
              // We call addValidationError to indicate an invalid value.
              if (speaker?.disconnect === true) {
                addValidationError('The speaker field of a video cannot be empty');
              }
            }
          },
        }
      }),
      language: relationship({
        ref: 'Language',
        many: false,
        hooks: {
          validateInput: ({ item, operation, addValidationError, resolvedData, fieldKey }) => {
            const { language } = resolvedData;
            if (operation == "create") {
              // We call addValidationError to indicate an invalid value.
              if (language === undefined || language === '') {
                addValidationError('The language field of a video cannot be empty');
              }
            } else if (operation == "update") {
              // We call addValidationError to indicate an invalid value.
              if (language?.disconnect === true) {
                addValidationError(`The language field of a video cannot be empty: ${JSON.stringify(resolvedData)}`);
              }
            }
          },
        }
      }),
      videoType: relationship({
        ref: 'VideoType',
        many: false,
        hooks: {
          validateInput: ({ item, operation, addValidationError, resolvedData, fieldKey }) => {
            const { videoType } = resolvedData;
            if (operation == "create") {
              // We call addValidationError to indicate an invalid value.
              if (videoType === undefined || videoType === '') {
                addValidationError('The videoType field of a video cannot be empty');
              }
            } else if (operation == "update") {
              // We call addValidationError to indicate an invalid value.
              if (videoType?.disconnect === true) {
                addValidationError('The videoType field of a video cannot be empty');
              }
            }
          },
        }
      }),
    },
    ui: {
      searchFields: ['title', 'description'],
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
    url: '',
  },
  lists,
});