import api from './api';

const usersPrefix = '/users'

export default {
    getAll() {
        return api().get(`${usersPrefix}`);
    },
    /**
     * @param {String} id
     */
    getById(id) {
        return api().get(`${usersPrefix}/${id}`);
    },
    /**
     * @param {Object} data
     */
    create(data) {
        return api().post(`${usersPrefix}`, data);
    },
    /**
     * @param {String} id
     * @param {Object} data
     */
    update(id, data) {
        return api().put(`${usersPrefix}/${id}`, data);
    },
    /**
     * @param {String} id
     */
    delete(id) {
        return api().delete(`${usersPrefix}/${id}`);
    }
}


