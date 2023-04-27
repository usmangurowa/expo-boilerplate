import * as Burnt from "burnt";
export const showAlert = (
  title: string,
  msg: string,
  preset: "heart" | "done" | "error" | "spinner" = "done"
) => {
  Burnt.alert({
    title: title,
    message: msg,
    preset: preset as any,
  });
};

export const showToast = (
  title: string,
  msg: string,
  preset: "done" | "error"
) => {
  Burnt.toast({
    title: title,
    message: msg,
    preset: preset,
    duration: 4,
  });
};
