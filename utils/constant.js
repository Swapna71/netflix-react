import SECRET_KEY, {Authorization} from "../Secret"

export const LOGO="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR= "https://i.pinimg.com/474x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg";
export const API_OPTIONS= {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:  Authorization
    }
  };
  export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500";
  export const BG_URL="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg";
  export const SUPPORTED_LANGUAGE=[{identifier: "en", lang:"ENGLISH"},{identifier: "hindi", lang:"हिंदी"},{identifier: "bengali", lang:"বাংলা"},];
  export const OPENAI_KEY=SECRET_KEY
  console.log(OPENAI_KEY)