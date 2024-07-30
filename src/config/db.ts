import { connect, connection } from "mongoose";

async function connectDB(DB_CONNECTION: string): Promise<any> {
  try {
    if (connection.readyState !== 1) {
      await connect(DB_CONNECTION);
    }
    console.log("Connected to mongodb");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

async function disconnectDB() {
  await connection.close();
}

export { connectDB, disconnectDB };
