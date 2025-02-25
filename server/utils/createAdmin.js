import mongoose from 'mongoose';
import Admin from '../models/admin.js';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function createAdmin() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/service-bookings');
    console.log('Connected to MongoDB');

    const username = await question('Enter admin username: ');
    const password = await question('Enter admin password: ');

    const admin = new Admin({ username, password });
    await admin.save();

    console.log('Admin account created successfully!');
  } catch (error) {
    console.error('Error creating admin:', error.message);
  } finally {
    rl.close();
    process.exit();
  }
}

createAdmin();