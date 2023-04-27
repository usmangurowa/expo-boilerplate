const IS_DEV = process.env.APP_ENVIRONMENT === "development";

const config = {
  name: IS_DEV ? "project Dev" : "project", // TODO: Add project name
  slug: "project", // TODO: Add project slug
  scheme: "project", // TODO: Add project scheme
  version: "1.0.0",
  owner: "user", // TODO: Add your username
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
      projectId: "", // TODO: Add EAS project ID or run `eas init` to create a new one (https://docs.expo.dev/build/eas-json/)
    },
  },

  plugins: ["expo-build-properties"],
};

module.exports = config;
