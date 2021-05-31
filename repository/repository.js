async function insert(Model, body) {
    return new Promise((resolve, reject) => {
        Model.save((err, body) => err ? reject(err) : resolve(body)
        );
    });
}

async function getAll(Model) {
    return new Promise((resolve, reject) => {
        Model.find({}).exec((err, data) => err ? reject(err) : resolve(data)
        );
    });
}

async function edit(Model, body) {
    return new Promise((resolve, reject) => {
        Model.update((err, body) => err ? reject(err) : resolve(body)
        );
    });
}

async function remove(Model) {
    return new Promise((resolve, reject) => {
        deleteOne({}, (err) => {
            () => handleError(err);
        });
    });
}

module.exports.insert = insert;
module.exports.getAll = getAll;