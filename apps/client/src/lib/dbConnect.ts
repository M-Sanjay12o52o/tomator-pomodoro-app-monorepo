import mongoose from "mongoose";
let alreadyDone = false;

export async function ensureDbConnected() {
    if (alreadyDone) {
        return;
    }
    alreadyDone = true;
    await mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });
}