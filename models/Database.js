// Database prototype
function Database(strategy) {
    this.database = strategy || "";
};

Database.prototype = {
    setDatabase: function (database) {
        this.database = database;
    },

    connect: function(connectionString){
        return this.database.connect(connectionString);
    },
    
    getResponse: function(intent){
        return this.database.getResponse(intent)
    },

    setResponse: function(intent, response){
        return this.database.setResponse(intent, response);
    }
    
};

module.exports = Database;