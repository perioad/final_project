import { POPUP_CLOSE } from "../constants";

export function popupClose() {
  return {
      type: POPUP_CLOSE,
      isSuccess: false,
      isError: false
    }
}
