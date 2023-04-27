import {
  View,
  Text,
  ModalProps,
  TouchableOpacity,
  Modal as _Modal,
  ViewStyle,
} from "react-native";
import React from "react";
import tw from "../../twrnc";

const Modal = ({ children, ...props }: ModalProps) => {
  return (
    <_Modal
      transparent={true}
      animationType="fade"
      statusBarTranslucent={true}
      {...props}
      style={tw`flex items-center justify-center h-full`}
    >
      {children}
    </_Modal>
  );
};

const ModalContent = ({
  children,
  style,
  onClose,
}: {
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
  onClose?: () => void;
}) => {
  return (
    <View style={[tw`h-full w-full container-sm relative bg-black/10`, style]}>
      <TouchableOpacity
        onPress={onClose}
        style={tw`absolute top-0 right-0 h-full w-full`}
      />
      {children}
    </View>
  );
};

Modal.Content = ModalContent;

export default Modal;
