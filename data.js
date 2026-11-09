
// ======================================
// TEMANI - DATABASE SIMULASI
// DATA DUMMY, BUKAN DATA PASIEN SUNGGUHAN
// ======================================

const temaniData = {

  users: [
    {
      userId: "UID-101",
      name: "Pasien A",
      phone: "081234567890",
      role: "pasien",
      patientId: "MH-0001",
      voiceMode: true
    },
    {
      userId: "UID-102",
      name: "Keluarga A",
      phone: "081234567891",
      role: "keluarga",
      patientId: "MH-0001"
    },
    {
      userId: "UID-103",
      name: "Petugas Demo",
      phone: "081234567892",
      role: "petugas",
      patientId: null
    },
    {
      userId: "UID-104",
      name: "Pasien B",
      phone: "081234567893",
      role: "pasien",
      patientId: "MH-0002",
      voiceMode: false
    }
  ],

  patients: [
    {
      patientId: "MH-0001",
      name: "Pasien A",
      verificationCode: "TEMANI001",
      familyCode: "KELUARGA01",
      familyApproved: true
    },
    {
      patientId: "MH-0002",
      name: "Pasien B",
      verificationCode: "TEMANI002",
      familyCode: "KELUARGA02",
      familyApproved: false
    }
  ]

};


// ======================================
// HELPER: MENCARI PENGGUNA
// ======================================

function findUserByPhone(phone) {
  return temaniData.users.find(
    user => user.phone === phone
  );
}


// ======================================
// HELPER: MENCARI PASIEN
// ======================================

function findPatientById(patientId) {
  return temaniData.patients.find(
    patient => patient.patientId === patientId
  );
}


// ======================================
// HELPER: MENCARI DATA PASIEN MILIK AKUN
// ======================================

function getPatientForUser(userId) {
  const user = temaniData.users.find(
    item => item.userId === userId
  );

  if (!user || !user.patientId) {
    return null;
  }

  return findPatientById(user.patientId);
}
