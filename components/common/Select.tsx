import React from "react";
import {
  Text,
  Pressable,
  ViewStyle,
  PressableProps,
  View,
  TextStyle,
} from "react-native";
import tw from "../../twrnc";
import BottomSheet, { BottomSheetBackDrop } from "../BottomSheet";
import {
  BottomSheetModal,
  BottomSheetFlatList,
  BottomSheetTextInput,
} from "@gorhom/bottom-sheet";
import { ListRenderItem } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SearchNormal1 } from "iconsax-react-native";
import Typography from "./Typography";

// import {BottomSheetModal} from "@gorhom/bottom-sheet";

export interface SelectType extends PressableProps {
  mode?: "contained" | "outlined" | "text";
  style?: ViewStyle | ViewStyle[];
  disabled?: boolean;
  right?: React.ReactNode;
  left?: React.ReactNode;
  textStyle?: TextStyle | TextStyle[];
  type?: "submit" | "reset" | "select";
  label?: string;
  containerStyle?: ViewStyle | ViewStyle[];
  name?: string;
  error?: boolean;
  helperText?: string;
  value?: string;
  placeholder?: string;
  options?: { label: string; value: string }[];
  renderItem?: any;
  onChange?: (value: any) => void;
  searchable?: boolean;
  snapPoints?: string[];
}

const listRenderItem: ListRenderItem<any> = ({ item }: any): any => (
  <Text>{item.label}</Text>
);

const Select = ({
  style,
  disabled,
  value,
  right,
  left,
  textStyle,
  label,
  containerStyle,
  name,
  error,
  helperText,
  placeholder,
  options: _options = [],
  renderItem = listRenderItem,
  onChange,
  searchable = false,
  snapPoints: _snapPoints = ["25%", "50%", "90%"],
  ...props
}: SelectType) => {
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

  const [search, setSearch] = React.useState("");

  const handleChange = (value: any) => {
    onChange && onChange(value);
    bottomSheetModalRef.current?.dismiss();
  };

  const snapPoints = React.useMemo(() => _snapPoints, [_snapPoints]);

  const _renderItem = React.useCallback(
    ({ item }: any) => (
      <TouchableOpacity onPress={() => handleChange(item)}>
        {renderItem({ item })}
      </TouchableOpacity>
    ),
    []
  );

  const options = React.useMemo(() => {
    if (!search) return _options;
    return _options.filter((option) =>
      option.label.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, _options]);

  return (
    <>
      <View style={[tw.style("w-full")]}>
        {label ? (
          <Text
            style={tw.style(
              `text-sm font-400 ml-1 ${error ? "text-danger" : ""}`
            )}
          >
            {label}
          </Text>
        ) : null}
        <Pressable
          disabled={disabled}
          {...props}
          onPress={() => bottomSheetModalRef.current?.present()}
          style={[
            tw.style(
              `bg-white rounded-xl flex flex-row items-center border-sub-title border ${
                error ? "border-danger border" : ""
              }`
            ),
            style,
          ]}
        >
          {left ? <View style={tw`ml-4`}>{left}</View> : null}

          <Text
            numberOfLines={1}
            style={[
              tw.style("font-500 p-4", {
                "text-sub-title": !value,
                "text-black": !!value,
              }),
            ]}
          >
            {value || placeholder}
          </Text>

          {right ? <View style={tw`ml-4`}>{right}</View> : null}
        </Pressable>
        {helperText && (
          <Typography
            numberOfLines={1}
            mode="sub"
            style={tw.style(`${error ? "text-danger" : ""}`)}
          >
            {helperText}
          </Typography>
        )}
      </View>
      <BottomSheetModal
        backdropComponent={BottomSheetBackDrop}
        snapPoints={snapPoints}
        ref={bottomSheetModalRef}
        android_keyboardInputMode="adjustResize"
      >
        {searchable ? (
          <View
            style={tw` py-2 flex flex-row items-center justify-around w-full`}
          >
            <BottomSheetTextInput
              placeholder="Search"
              value={search}
              onChangeText={setSearch}
              style={tw`p-2 font-500 w-[90%] border-b border-sub-title`}
            />
            <SearchNormal1 size={20} color="#000" />
          </View>
        ) : null}
        <BottomSheetFlatList
          keyExtractor={(item) => item.value}
          data={options}
          renderItem={_renderItem}
        />
      </BottomSheetModal>
    </>
  );
};

export default Select;
