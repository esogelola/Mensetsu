// Export route components
import LANDING_PAGE_CONTAINER from "../containers/LandingPage";
import APP_PAGE_CONTAINER from "../containers/MainPage";
import VIDEO_CHAT_PAGE_CONTAINER from "../containers/VideoChatPage";
import SETSU_AI_PAGE_CONTAINER from "../containers/SetsuAIPage";
import NOTFOUND_PAGE_CONTAINER from "../containers/NotFoundPage";
// Export route paths
export const LANDING = "/";
export const APP = "/app";

export const SIGN_UP = "/signup";
export const SIGN_IN = "/signin";

export const ACCOUNT = "/account";
export const ADMIN = "/admin";
export const PASSWORD_FORGET = "/pw-forget";

export const SETSU_AI = "/setsu";
export const VIDEO_CHAT = "/prokitten";

export {
  LANDING_PAGE_CONTAINER,
  APP_PAGE_CONTAINER,
  VIDEO_CHAT_PAGE_CONTAINER,
  SETSU_AI_PAGE_CONTAINER,
  NOTFOUND_PAGE_CONTAINER,
};
