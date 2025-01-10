import fs from "node:fs/promises";

import { PATH_DB } from "../constants/contacts.js";

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, "utf-8");
    console.log(data);

    return data;
  } catch (err) {
    console.error(err);
  }
};
