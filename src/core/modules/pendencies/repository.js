import database from "../../database";
import moment from 'moment';

const TABLE = 'Pendency'

function Pendency(attrs) {
    for (var name in attrs) {
        this[name] = attrs[name];
    }
}

const insert = (item) =>{
    const object = new Pendency({
        id: item.id,
        type: item.type,
        employeeName: item.employee.name,
        employeeId: item.employee.id.$id,
        date: moment(item.punchDate).format('DD/MM/YYYY'),
        punch: item.punch ? item.punch.punch : '',
        reason: item.text,
        createdAt: moment(item.createdAt.sec * 1000).format('DD/MM/YYYY [às] HH:mm')
    });

    database.insert(object, TABLE)

    return object
}

const all = () => {
    return database.getAll(TABLE)
}

const empId = (id) => {
    return database.getWhere(TABLE, "employeeid", id)
}

const remove = (item) => {
    return database.remove(item, TABLE)
}

const repository = {
    all,
    empId,
    insert,
    remove
}

export default repository
