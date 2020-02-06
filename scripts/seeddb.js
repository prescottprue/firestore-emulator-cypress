#!/usr/bin/env node
const admin = require('firebase-admin')

process.env.FIRESTORE_EMULATOR_HOST="localhost:8080"

admin.initializeApp({
  projectId: 'redux-firebasev3',
  databaseURL: `http://localhost:9000?ns=redux-firebasev3`,
});


(async () => {
  console.log('Seeding databases with test data...')
  // Add project to Firestore
  try {
    await admin.firestore().collection('projects').add({ name: 'test firestore project' })
    console.log('Seeded Firestore')
  } catch(err) {
    console.log('Error seeding Firestore', err)
  }

  // Add project to RTDB
  try {
    await admin.database().ref('projects').push({ name: 'test rtdb project' })
    console.log('Seeded RTDB')
  } catch(err) {
    console.log('Error seeding RTDB', err)
  }
  process.exit()
})()