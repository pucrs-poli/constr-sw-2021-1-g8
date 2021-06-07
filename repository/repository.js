async function insert(Model, body) {
    return await Model.create(body);
}

async function getAll(Model) {
    return await Model.find({});
}

async function getById(Model, id) {
    return await Model.findById(id).exec();
}

async function edit(Model, body, id) {
    var object = await getById(Model, id);
    return await Model.updateOne(object, body);
}

async function remove(Model, id) {
    return await Model.findByIdAndDelete(id)
}

module.exports.insert = insert;
module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.edit = edit;
module.exports.remove = remove;