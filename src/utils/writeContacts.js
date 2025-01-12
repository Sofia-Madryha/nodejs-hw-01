import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = await fs.writeFile(PATH_DB, updatedContacts, 'utf-8');
    return data;
  } catch (err) {
    return err;
  }
};
