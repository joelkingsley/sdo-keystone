import { config, list } from '@keystone-6/core';
import { text } from '@keystone-6/core/fields';
import { channelConfig } from './modules/channel';
import { channelTypeConfig } from './modules/channelType';
import { languageConfig } from './modules/language';
import { speakerConfig } from './modules/speaker';
import { videoConfig } from './modules/video';
import { videoTypeConfig } from './modules/videoType';

const isTrue = () => true;

const lists = {
  Speaker: speakerConfig,
  Language: languageConfig,
  ChannelType: channelTypeConfig,
  Channel: channelConfig,
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
  VideoType: videoTypeConfig,
  Video: videoConfig,
};

export default config({
  db: {
    provider: 'postgresql',
    url: '',
  },
  lists,
});