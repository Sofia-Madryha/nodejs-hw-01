import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
  try {
    const data = await readContacts();
    const contacts = data ? JSON.parse(data) : [];
    return contacts.length;
  } catch (err) {
    return err;
  }
};

console.log(await countContacts());