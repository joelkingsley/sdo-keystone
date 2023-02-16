import { config } from '@keystone-6/core';
import { channelConfig } from './src/modules/channel';
import { channelTypeConfig } from './src/modules/channelType';
import { languageConfig } from './src/modules/language';
import { speakerConfig } from './src/modules/speaker';
import { userConfig } from './src/modules/user';
import { videoConfig } from './src/modules/video';
import { videoTypeConfig } from './src/modules/videoType';

const lists = {
  Speaker: speakerConfig,
  Language: languageConfig,
  ChannelType: channelTypeConfig,
  Channel: channelConfig,
  User: userConfig,
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