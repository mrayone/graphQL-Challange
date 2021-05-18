import db from '../../mocks/users.json';


export default {
  save({ name, email}) {
    const id = db.length + 1;
    db.push({
      id,
      name,
      email
    });

    return {
      id,
      name,
      email
    }
  },
  getAll() {
    return db;
  },
  getById( id ) {
    return db.find(( user ) => user.id === id);
  }
}