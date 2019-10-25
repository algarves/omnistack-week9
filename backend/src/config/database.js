
const username = '';
const password = '';
const schema = '';

const database = {
  mongoose: `mongodb+srv://${username}:${password}@xxxxxxx-xxxxx.mongodb.net/${schema}?retryWrites=true&w=majority`
}

module.exports = database;