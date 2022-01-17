import http from '../utils/http-common';

class PropertyDataService {
    getAll(){
        return http.get("/user"); //user is an example of endpoint 
    }

    get(id) {
        return http.get(`/user/${id}`);
    }
    
    create(data) {
        return http.post("/user", data);
    }
    
    update(id, data) {
        return http.put(`/user/${id}`, data);
    }
    
    delete(id) {
        return http.delete(`/user/${id}`);
    }
    
    deleteAll() {
        return http.delete(`/user`);
    }
    
    findByTitle(title) {
        return http.get(`/user?title=${title}`);
    }
}
    
export default new PropertyDataService();