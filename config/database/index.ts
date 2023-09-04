const { MONGODB_URI } = process.env;
export const dbConfig = {
  mongodb: {
    URI:
      MONGODB_URI ||
      'mongodb+srv://himel:himel@cluster0.6uvuj.mongodb.net/portfolio',
  },
  db: 'MONGO',
};
