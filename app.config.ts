const IS_DEV = process.env.APP_ENVIRONMENT === "development";

const config = {
  name: IS_DEV ? "(project name) Dev" : "(project name)", // TODO: Add project name
  slug: "(project-slug)", // TODO: Add project slug
  scheme: "(project-scheme)", // TODO: Add project scheme
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  jsEngine: "hermes",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },

  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: IS_DEV ? "com.user.project.dev" : "com.user.project", // TODO: Add iOS bundle identifier
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#FFFFFF",
    },
    package: IS_DEV ? "com.user.project.dev" : "com.user.project", // TODO: Add Android package name
  },
  web: {
    favicon: "./assets/favicon.png",
    bundler: "metro",
  },
  extra: {
    eas: {
      projectId: "", // TODO: Add EAS project ID
    },
  },

  plugins: ["expo-build-properties"],
};

module.exports = config;
