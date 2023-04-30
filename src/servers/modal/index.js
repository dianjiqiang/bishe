import { keyieRequestModal } from "..";

export function getScoreNotFractionQue(params) {
  return keyieRequestModal.getRequest("/test/" + params);
}
