import { connect as connectToMongoDB } from './mongodb/connect';
export async function connectToDatabase() {
  try {
    console.log('>>>>>');

    await connectToMongoDB();
  } catch (err) {
    console.error('Error connecting to database');
  }
}
