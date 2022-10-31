import { connect } from 'mongoose';

export const connectToMongoDB = () => {
  const { MONGODB_URI } = process.env;

  if (!MONGODB_URI) {
    throw new Error('Please set MONGODB_URI env variable.');
  }

  connect(MONGODB_URI)
    .then(() => {
      console.log('MongoDB connection established successfully. 🎉');
    })
    .catch((err) => {
      if (err instanceof Error) {
        console.log(`Failed to connect to MongoDB: ${err.message}.`);
      }
    });
};
