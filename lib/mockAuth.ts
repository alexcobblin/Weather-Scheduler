type User = {
  username: string;
  password: string;
};

const users: User[] = [];

export async function loginOrRegister(username: string, password: string): Promise<'success' | 'incorrect' | 'empty'> {
  const user = users.find(u => u.username === username);

  if (user) {
    return user.password === password ? 'success' : 'incorrect';
  }

  if (password.trim() === '') {
    return 'empty';
  }

  users.push({ username, password });
  return 'success';
}
