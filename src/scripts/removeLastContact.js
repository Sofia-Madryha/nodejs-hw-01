import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {  try {
    const data = await readContacts();
    const contacts = data ? JSON.parse(data) : [];


    contacts.pop();

    await writeContacts(JSON.stringify(contacts));
  } catch (err) {
    return err;
  }};

removeLastContact();
