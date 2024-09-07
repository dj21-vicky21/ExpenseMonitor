const { PrismaClient } = require('@prisma/client');

let prisma;

if (process.env.NODE_ENV === 'production') {
  // In production, we create a new instance of PrismaClient for each request
  prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  });
} else {
  // In development, we use a global variable to reuse the PrismaClient instance
  if (!global.prisma) {
    global.prisma = new PrismaClient({
      log: ['query', 'info', 'warn', 'error'],
    });
  }
  prisma = global.prisma;
}

module.exports = prisma;