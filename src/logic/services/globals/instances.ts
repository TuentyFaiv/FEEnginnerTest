import { Http } from "@tuentyfaiv/http";

import config from "@config";

export const api = Http.create(config.api, {
  secure: false,
  secureParams: false,
});
