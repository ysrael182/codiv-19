import mongoose from 'mongoose';
/**
 * @author Israel Yasis
 */
const dbName = 'codiv';
const dbPath = 'mongodb://mongo:27017/'+ dbName;
export async function connectDatabase() {
  mongoose.set('useUnifiedTopology', true);
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useFindAndModify', true);
  mongoose.connect(dbPath);
  const db = mongoose.connection;
  db.on("error", () => {
      console.log("> error occurred from the database");
  });
  db.once("open", () => {
      console.log("> successfully opened the database");
  });
}