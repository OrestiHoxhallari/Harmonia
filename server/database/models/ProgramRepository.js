class ProgramRepository {
  constructor(db) {
    this.db = db;
  }

  async readAll() {
    try {
      const query = 'SELECT * FROM programs'; // Remplacez 'programs' par le nom de votre table réelle
      const [rows] = await this.db.execute(query);
      return rows;
    } catch (error) {
      console.error('Error reading programs:', error);
      throw error;
    }
  }
}

module.exports = ProgramRepository;