import React from "react";

import {
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
  BottomSheetModal,
  BottomSheetModalProps,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";

export interface BottomSheetType extends BottomSheetModalProps {
  bottomSheetModalRef: React.Ref<BottomSheetModal>;
  children: React.ReactNode;
}

const BottomSheet = ({
  bottomSheetModalRef,
  children,
  snapPoints = [],
  // style,
  ...props
}: BottomSheetType) => {
  const initialSnapPoints = React.useMemo(() => ["CONTENT_HEIGHT"], []);

  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);
  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={0}
      backdropComponent={BottomSheetBackDrop}
      handleHeight={animatedHandleHeight}
      contentHeight={animatedContentHeight}
      snapPoints={animatedSnapPoints}
      enablePanDownToClose
      {...props}
    >
      <BottomSheetView onLayout={handleContentLayout}>
        {children}
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export default BottomSheet;

export const BottomSheetBackDrop = (props: BottomSheetBackdropProps) => {
  return (
    <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />
  );
};
