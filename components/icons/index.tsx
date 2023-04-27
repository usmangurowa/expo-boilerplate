import { ViewStyle } from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
  Octicons,
} from "@expo/vector-icons";
import { IconProps } from "iconsax-react-native";
import tw from "../../twrnc";

interface ExpoIconProps {
  size?: number;
  color?: string;
  style?: ViewStyle | ViewStyle[];
  onPress?: () => void;
}

export const ChevronDown = ({
  size = 25,
  color = tw.color("sub-title"),
  ...props
}: ExpoIconProps) => (
  <Entypo size={Number(size)} name="chevron-down" color={color} {...props} />
);
export const ChevronUp = ({
  size = 25,
  color = tw.color("sub-title"),
  ...props
}: ExpoIconProps) => (
  <Entypo size={Number(size)} name="chevron-up" color={color} {...props} />
);

export const ChevronRight = ({
  size = 25,
  color = tw.color("sub-title"),
  ...props
}: ExpoIconProps) => (
  <Entypo size={Number(size)} name="chevron-right" color={color} {...props} />
);
export const ChevronLeft = ({
  size = 25,
  color = tw.color("sub-title"),
  ...props
}: ExpoIconProps) => (
  <Entypo size={size} name="chevron-left" color={color} {...props} />
);

export const AlarmIcon = ({
  size = 25,
  color = tw.color("sub-title"),
  ...props
}: ExpoIconProps) => (
  <MaterialIcons name="access-alarm" size={size} color={color} {...props} />
);

export const StackIcon = ({
  size = 25,
  color = tw.color("sub-title"),
  ...props
}: ExpoIconProps) => (
  <Octicons name="stack" size={size} color={color} {...props} />
);

export const Thermometer = ({
  size = 25,
  color = tw.color("sub-title"),
  ...props
}: ExpoIconProps) => (
  <MaterialCommunityIcons
    name="thermometer-low"
    size={size}
    color={color}
    {...props}
  />
);
