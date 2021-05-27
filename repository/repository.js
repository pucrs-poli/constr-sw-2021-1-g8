async function insert(Model) {
    return new Promise((resolve, reject) => {
        Model.save((err, user) => err ? reject(err) : resolve(user)
        );
    });
}

async function getAll(Model) {
    return new Promise((resolve, reject) => {
        Model.find({}).exec((err, data) =>  err ? reject(err) : resolve(data) 
        );
    });
}

module.exports.insert = insert;
module.exports.getAll = getAll;