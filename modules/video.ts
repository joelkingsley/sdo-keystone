import { list, ListConfig } from "@keystone-6/core";
import { BaseListTypeInfo } from "@keystone-6/core/dist/declarations/src/types";
import { calendarDay, relationship, text } from "@keystone-6/core/fields";

const isTrue = () => true;

export let videoConfig: ListConfig<BaseListTypeInfo, any> = list({
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
});