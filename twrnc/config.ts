import Constants from "expo-constants";
import { Dimensions, Platform } from "react-native";

const { plugin } = require("twrnc");

const { height, width } = Dimensions.get("window");

import colors from "../tailwind.config";

module.exports = {
  theme: {
    extend: {
      colors: {
        ...colors.theme.extend.colors,
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }: { addUtilities: (value: object) => void }) => {
      addUtilities({
        "safe-top": {
          paddingTop: Constants.statusBarHeight, // Top safe area
        },
        "safe-bottom": {
          paddingBottom: Constants.statusBarHeight, // Bottom safe area
        },
        "safe-both": {
          paddingVertical: Constants.statusBarHeight, // Top and bottom safe area
        },
        "h-screen": {
          // Full screen height
          height,
        },
        "w-screen": {
          // Full screen width
          width,
        },
        "min-h-screen": {
          // min full screen height
          minHeight: height,
        },
        "min-w-screen": {
          // min full screen width
          minWidth: width,
        },

        "h-90vh": {
          // just like VH in CSS
          height: height * 0.9,
        },
        "h-80vh": {
          height: height * 0.8,
        },
        "h-70vh": {
          height: height * 0.7,
        },
        "h-60vh": {
          height: height * 0.6,
        },
        "h-50vh": {
          height: height * 0.5,
        },
        "h-40vh": {
          height: height * 0.4,
        },
        "h-30vh": {
          height: height * 0.3,
        },
        "h-20vh": {
          height: height * 0.2,
        },
        "h-10vh": {
          height: height * 0.1,
        },
        container: `px-7 lg:p-10 tablet:p-12`, // Container
        "container-sm": `px-5 lg:p-8 tablet:p-10`, // Container small
        "caption-regular": {
          fontFamily: "PTSansCaption_400Regular", // Light caption
        },
        "caption-bold": {
          fontFamily: "PTSansCaption_700Bold", // Bold caption
        },
        "resize-image": {
          resizeMode: Platform.OS === "ios" ? "contain" : "center", // Image resize mode
        },
      });
    }),
  ],
};
