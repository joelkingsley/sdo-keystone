import { config, list } from '@keystone-6/core';
import { text } from '@keystone-6/core/fields';
import { channelConfig } from './src/modules/channel';
import { channelTypeConfig } from './src/modules/channelType';
import { languageConfig } from './src/modules/language';
import { speakerConfig } from './src/modules/speaker';
import { videoConfig } from './src/modules/video';
import { videoTypeConfig } from './src/modules/videoType';

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