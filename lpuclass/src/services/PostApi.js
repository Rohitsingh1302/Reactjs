// Mock API service for user operations
let users = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "1234567890" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "0987654321" }
];

let nextId = 3;

export const getAllUsers = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: users });
    }, 500);
  });
};

export const createUser = async (userData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newUser = { ...userData, id: nextId++ };
      users.push(newUser);
      resolve({ data: newUser });
    }, 500);
  });
};

export const updateUser = async (id, userData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = users.findIndex(user => user.id === id);
      if (index !== -1) {
        users[index] = { ...users[index], ...userData };
        resolve({ data: users[index] });
      }
    }, 500);
  });
};

export const deleteUser = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      users = users.filter(user => user.id !== id);
      resolve({ data: { message: "User deleted successfully" } });
    }, 500);
  });
};