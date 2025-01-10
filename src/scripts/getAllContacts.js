import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
  try {
    const data = await readContacts();
    return data;
  } catch (err) {
    return err;
  }
};

console.log(await getAllContacts());
