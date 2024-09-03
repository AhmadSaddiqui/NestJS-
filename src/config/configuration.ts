export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/playersdb',
    },
    jwtSecret: process.env.JWT_SECRET || 'd2fP6X5sF7J!4kL#9rT@uQwE8yH$0zZ',
  });
  