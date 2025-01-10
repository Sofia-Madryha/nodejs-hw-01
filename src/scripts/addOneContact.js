import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

export const addOneContact = async () => {
  try {
    const data = await readContacts();
    const contacts = data ? JSON.parse(data) : [];

    const newContact = createFakeContact();

    contacts.push(newContact);

    await writeContacts(JSON.stringify(contacts));
  } catch (err) {
    return err;
  }
};

addOneContact();
