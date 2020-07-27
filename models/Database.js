// Database prototype
function Database(strategy) {
    this.database = strategy || "";
};

Database.prototype = {
    setDatabase: function (database) {
        this.database = database;
    },

    connect: function (connectionString) {
        return this.database.connect(connectionString);
    },

    getAll: function () {

    },

    findOne: function (document) {
        return this.database.findOne(document);
    },

    update: function (document) {
        return this.database.update(document);
    },

    delete: function (document) {
        return this.database.delete(document);
    }

};

module.exports = Database;