// Task 2: listUsers()

async function listUsers() {
  try {
    const response = await fetch(`http://localhost:3000/users`);
    if (!response.ok) {
      throw new Error(`Existe un error en la solicitud: ${response.status}`);
    }
    const users = await response.json();
    console.log('Lista de usuarios:', users);
  } catch (error) {
    console.error('No se pudo obtener la lista de usuarios:', error);
  }
}

export { listUsers };