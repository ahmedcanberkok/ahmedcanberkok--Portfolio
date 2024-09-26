module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3' // veya veritabanı dosyanızın yolu
    },
    useNullAsDefault: true // Bu satırı ekleyin
  }
};
