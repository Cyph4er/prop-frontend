import http from '../utils/http-common';

class PropertyDataService {
    getAll(){
        return http.get("/property"); //property is an example of endpoint 
    }

    get(id) {
        return http.get(`/property/${id}`);
    }
    
    create(data) {
        return http.post("/property", data);
    }
    
    update(id, data) {
        return http.put(`/property/${id}`, data);
    }
    
    delete(id) {
        return http.delete(`/property/${id}`);
    }
    
    deleteAll() {
        return http.delete(`/property`);
    }
    
    findByTitle(title) {
        return http.get(`/property?title=${title}`);
    }
}
    
export default new PropertyDataService();