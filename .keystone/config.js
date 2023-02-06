var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_core = require("@keystone-6/core");
var import_fields = require("@keystone-6/core/fields");
var isTrue = () => true;
var lists = {
  Speaker: (0, import_core.list)({
    fields: {
      speakerName: (0, import_fields.text)({ validation: { isRequired: true }, isIndexed: "unique" })
    },
    ui: {
      labelField: "speakerName",
      searchFields: ["speakerName"]
    },
    access: {
      operation: {
        query: isTrue,
        create: isTrue,
        update: isTrue,
        delete: isTrue
      }
    }
  }),
  Language: (0, import_core.list)({
    fields: {
      languageCode: (0, import_fields.text)({ validation: { isRequired: true }, isIndexed: "unique" }),
      sourceCountryFlag: (0, import_fields.text)({ validation: { isRequired: true } })
    },
    access: {
      operation: {
        query: isTrue,
        create: isTrue,
        update: isTrue,
        delete: isTrue
      }
    }
  }),
  ChannelType: (0, import_core.list)({
    fields: {
      channelTypeCode: (0, import_fields.text)({ validation: { isRequired: true }, isIndexed: "unique" })
    },
    ui: {
      labelField: "channelTypeCode",
      searchFields: ["channelTypeCode"]
    },
    access: {
      operation: {
        query: isTrue,
        create: isTrue,
        update: isTrue,
        delete: isTrue
      }
    }
  }),
  Channel: (0, import_core.list)({
    fields: {
      channelName: (0, import_fields.text)({ validation: { isRequired: true }, isIndexed: "unique" }),
      channelType: (0, import_fields.relationship)({ ref: "ChannelType" }),
      locationLat: (0, import_fields.text)({ validation: { isRequired: true } }),
      locationLong: (0, import_fields.text)({ validation: { isRequired: true } }),
      regionCode: (0, import_fields.text)({ validation: { isRequired: true } }),
      shortIdentifier: (0, import_fields.text)({ validation: { isRequired: true }, isIndexed: "unique" }),
      websiteUrl: (0, import_fields.text)({ validation: { isRequired: true } }),
      addressText: (0, import_fields.text)({ validation: { isRequired: true } })
    },
    ui: {
      labelField: "channelName",
      searchFields: ["channelName"]
    },
    access: {
      operation: {
        query: isTrue,
        create: isTrue,
        update: isTrue,
        delete: isTrue
      }
    }
  }),
  User: (0, import_core.list)({
    fields: {
      userUuid: (0, import_fields.text)({ validation: { isRequired: true }, isIndexed: "unique" }),
      userEmail: (0, import_fields.text)({ validation: { isRequired: true } })
    },
    ui: {
      labelField: "userEmail",
      searchFields: ["userUuid", "userEmail"]
    },
    access: {
      operation: {
        query: isTrue,
        create: isTrue,
        update: isTrue,
        delete: isTrue
      }
    }
  }),
  VideoType: (0, import_core.list)({
    fields: {
      videoTypeName: (0, import_fields.text)({ validation: { isRequired: true }, isIndexed: "unique" })
    },
    ui: {
      labelField: "videoTypeName",
      searchFields: ["videoTypeName"]
    },
    access: {
      operation: {
        query: isTrue,
        create: isTrue,
        update: isTrue,
        delete: isTrue
      }
    }
  }),
  Video: (0, import_core.list)({
    fields: {
      title: (0, import_fields.text)({ validation: { isRequired: true }, isIndexed: "unique" }),
      description: (0, import_fields.text)({ validation: { isRequired: true } }),
      datePublished: (0, import_fields.calendarDay)({ validation: { isRequired: true } }),
      channel: (0, import_fields.relationship)({ ref: "Channel", many: false }),
      speaker: (0, import_fields.relationship)({ ref: "Speaker", many: false }),
      language: (0, import_fields.relationship)({ ref: "Language", many: false }),
      videoType: (0, import_fields.relationship)({ ref: "VideoType", many: false })
    },
    ui: {
      searchFields: ["title", "description"]
    },
    hooks: {
      validateInput(args) {
        const { channel, speaker, language, videoType } = args.resolvedData;
        if (channel === void 0 || channel === "") {
          args.addValidationError("The channel field of a video cannot be empty");
        }
        if (speaker === void 0 || speaker === "") {
          args.addValidationError("The speaker field of a video cannot be empty");
        }
        if (language === void 0 || language === "") {
          args.addValidationError("The language field of a video cannot be empty");
        }
        if (videoType === void 0 || videoType === "") {
          args.addValidationError("The video type field of a video cannot be empty");
        }
      }
    },
    access: {
      operation: {
        query: isTrue,
        create: isTrue,
        update: isTrue,
        delete: isTrue
      }
    }
  })
};
var keystone_default = (0, import_core.config)({
  db: {
    provider: "postgresql",
    url: "postgres://keystone:U8Y2KIGpltxj@ep-sweet-math-809560.cloud.neon.tech/test"
  },
  lists
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
