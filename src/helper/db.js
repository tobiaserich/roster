import Dexie from "dexie";

export const db = new Dexie("roster");
db.version(1).stores({
  files: "++id, month, year",
  data: `++id,month,year,data`,
});
