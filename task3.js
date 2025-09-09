// Task 3: addUser(first_name, last_name, email)
async function addUser(firstName, lastName, email) {
  try {
    const response = await fetch(`http://localhost:3000/users`);
    const users = await response.json();
    const nuevoId = users.length+ 1;

    const newUser = {
      id: nuevoId,
      firstname: firstName,
      lastname: lastName,
      emailusuario: email,
    };

    const postResponse = await fetch(`http://localhost:3000/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    if (!postResponse.ok) {
      throw new Error(`Error al agregar usuario: ${postResponse.statusText}`);
    }

    const addUsuario = await postResponse.json();
    console.log('Usuario agregado exitosamente:', addUsuario);

  } catch (error) {
    console.error('No se pudo agregar el usuario:', error);
  }
}

export { addUser };


