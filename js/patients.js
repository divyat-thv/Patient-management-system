// ================================================
//  AYUSHMAN PATIENT MGMT — patients.js
// ================================================

const PT_KEY = 'ayushman_patients';

function getPatients() {
  return JSON.parse(localStorage.getItem(PT_KEY) || '[]');
}
function savePatients(list) {
  localStorage.setItem(PT_KEY, JSON.stringify(list));
}

// Generate patient ID: AYU-YYYYMMDD-XXXX
function generatePatientId() {
  const d  = new Date();
  const dt = `${d.getFullYear()}${String(d.getMonth()+1).padStart(2,'0')}${String(d.getDate()).padStart(2,'0')}`;
  const rnd = Math.floor(1000 + Math.random() * 9000);
  return `AYU-${dt}-${rnd}`;
}

function addPatient(data) {
  const list = getPatients();
  const patient = {
    id: generatePatientId(),
    ...data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    visits: []
  };
  list.unshift(patient);
  savePatients(list);
  return patient;
}

function updatePatient(id, data) {
  const list = getPatients();
  const idx  = list.findIndex(p => p.id === id);
  if (idx === -1) return null;
  list[idx] = { ...list[idx], ...data, updatedAt: new Date().toISOString() };
  savePatients(list);
  return list[idx];
}

function deletePatient(id) {
  const list = getPatients().filter(p => p.id !== id);
  savePatients(list);
}

function getPatient(id) {
  return getPatients().find(p => p.id === id) || null;
}

function searchPatients(q) {
  const term = q.toLowerCase().trim();
  return getPatients().filter(p =>
    p.name?.toLowerCase().includes(term)  ||
    p.mobile?.includes(term)              ||
    p.id?.toLowerCase().includes(term)    ||
    p.village?.toLowerCase().includes(term)
  );
}

// Stats
function getStats() {
  const all   = getPatients();
  const today = new Date().toDateString();
  const todayCount = all.filter(p => new Date(p.createdAt).toDateString() === today).length;
  const maleCount  = all.filter(p => p.gender === 'Male').length;
  const femaleCount= all.filter(p => p.gender === 'Female').length;
  return { total: all.length, today: todayCount, male: maleCount, female: femaleCount };
}

window.Patients = {
  getPatients, addPatient, updatePatient,
  deletePatient, getPatient, searchPatients, getStats
};
