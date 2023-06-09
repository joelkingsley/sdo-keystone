import { config } from '@keystone-6/core';
import { createAuth } from '@keystone-6/auth';
import { statelessSessions } from '@keystone-6/core/session';
import { channelConfig } from './src/modules/channel';
import { channelTypeConfig } from './src/modules/channelType';
import { languageConfig } from './src/modules/language';
import { speakerConfig } from './src/modules/speaker';
import { userConfig } from './src/modules/user';
import { videoConfig } from './src/modules/video';
import { videoTypeConfig } from './src/modules/videoType';
import { adminConfig } from './src/modules/admin';

const lists = {
  Speaker: speakerConfig,
  Language: languageConfig,
  ChannelType: channelTypeConfig,
  Channel: channelConfig,
  User: userConfig,
  VideoType: videoTypeConfig,
  Video: videoConfig,
  Admin: adminConfig,
};

const { withAuth } = createAuth({
  listKey: 'Admin',
  identityField: 'email',
  secretField: 'password',
  sessionData: 'type',
});

const session = statelessSessions({
  secret: process.env.KEYSTONE_SESSION_SECRET ?? '',
});

export default withAuth(
  config({
    db: {
      provider: 'postgresql',
      url: process.env.KEYSTONE_DB_URL ?? '',
    },
    lists,
    session,
  })
);