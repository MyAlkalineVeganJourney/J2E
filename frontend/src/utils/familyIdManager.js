// src/utils/familyIdManager.js

const FAMILY_ID_STORAGE_KEY = 'mavj_family_id';
const FAMILY_MEMBERS_KEY = 'mavj_family_members';

const generateFamilyId = () => {
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `MAVJ-${timestamp}-${random}`;
};

export const getExistingFamilyId = (email) => {
  if (!email) return null;
  const members = JSON.parse(localStorage.getItem(FAMILY_MEMBERS_KEY) || '[]');
  const member = members.find(m => m.email === email);
  if (member) {
    localStorage.setItem(FAMILY_ID_STORAGE_KEY, member.familyId);
    return member.familyId;
  }
  const storedId = localStorage.getItem(FAMILY_ID_STORAGE_KEY);
  return storedId || null;
};

export const issueFamilyId = ({ email, name = '', phone = '', source = 'alignWithUs', discoveries = [] }) => {
  if (!email) return { familyId: null, isNew: false };
  
  const existingId = getExistingFamilyId(email);
  if (existingId) {
    return { familyId: existingId, isNew: false };
  }
  
  const familyId = generateFamilyId();
  
  const newUser = {
    email,
    name: name || email.split('@')[0],
    phone,
    familyId,
    source,
    discoveries,
    dateJoined: new Date().toISOString(),
    lastActive: new Date().toISOString(),
    ipAddress: localStorage.getItem('mavj_user_ip') || 'unknown',
    totalCoins: 0,
    totalWordsFounded: 0
  };
  
  const users = JSON.parse(localStorage.getItem(FAMILY_MEMBERS_KEY) || '[]');
  users.push(newUser);
  localStorage.setItem(FAMILY_MEMBERS_KEY, JSON.stringify(users));
  localStorage.setItem(FAMILY_ID_STORAGE_KEY, familyId);
  
  return { familyId, isNew: true };
};

export const updateUserDiscovery = (email, newWord) => {
  if (!email) return null;
  
  const users = JSON.parse(localStorage.getItem(FAMILY_MEMBERS_KEY) || '[]');
  const userIndex = users.findIndex(u => u.email === email);
  
  if (userIndex !== -1) {
    users[userIndex].discoveries.push({
      word: newWord,
      date: new Date().toISOString()
    });
    users[userIndex].totalWordsFounded += 1;
    users[userIndex].lastActive = new Date().toISOString();
    localStorage.setItem(FAMILY_MEMBERS_KEY, JSON.stringify(users));
    return users[userIndex];
  }
  
  return null;
};

export const getUserProfile = (email) => {
  if (!email) return null;
  const users = JSON.parse(localStorage.getItem(FAMILY_MEMBERS_KEY) || '[]');
  return users.find(u => u.email === email) || null;
};

export const getUserDiscoveries = (email) => {
  if (!email) return [];
  const users = JSON.parse(localStorage.getItem(FAMILY_MEMBERS_KEY) || '[]');
  const user = users.find(u => u.email === email);
  return user ? user.discoveries : [];
};

export const updateUserCoins = (email, coinsEarned) => {
  if (!email) return null;
  
  const users = JSON.parse(localStorage.getItem(FAMILY_MEMBERS_KEY) || '[]');
  const userIndex = users.findIndex(u => u.email === email);
  
  if (userIndex !== -1) {
    users[userIndex].totalCoins = (users[userIndex].totalCoins || 0) + coinsEarned;
    users[userIndex].lastActive = new Date().toISOString();
    localStorage.setItem(FAMILY_MEMBERS_KEY, JSON.stringify(users));
    return users[userIndex];
  }
  
  return null;
};