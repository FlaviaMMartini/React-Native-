import database from "../../database";

const TABLE = 'Employee'

function Employee(attrs) {
    for (var name in attrs) {
        this[name] = attrs[name];
    }
}

const insert = (item) =>{
    const id = item._id.$id

    const object = new Employee({
        id: id,
        name: item.dados.nome,
        image: item.dados.image,
        matricula: item.dados.matricula
    });
    
    database.insert(object, TABLE)

    return object
};

const all = () => {
    return database.getAll(TABLE)
}

const repository = {
    all,
    insert
}

export default repository