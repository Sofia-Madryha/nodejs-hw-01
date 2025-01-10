import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
  try {
    const data = await readContacts();
    const contacts = data ? JSON.parse(data) : [];

    const newContacts = Array.from({ length: number }, createFakeContact);

    const updatedContacts = [...contacts, ...newContacts];

    await writeContacts(JSON.stringify(updatedContacts));
  } catch (err) {
    return err;
  }
};

generateContacts(5);
