// Task 4: delUser(number)
async function delUser(id) {
  try {
    const response = await fetch(`http://localhost:3000/users/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Error al eliminar usuario: ${response.statusText}`);
    }

    console.log(`Usuario con ID ${id} eliminado exitosamente.`);
  } catch (error) {
    console.error('No se pudo eliminar el usuario:', error);
  }
}
export {delUser};