import axios from 'axios';

export default class PostService {
    static async getAll(limit = 10, page = 1) {
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _limit: limit,
                    _page: page,
                }
            });
            return response;
        }
        catch(exception) {
            console.log('Error: ' + exception.message);
        }
    }

    static async getByID(id) {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            return response;
        }
        catch(exception) {
            console.log('Error: ' + exception.message);
        }
    }

    static async getCommentsByPostID(id) {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
            return response;
        }
        catch(exception) {
            console.log('Error: ' + exception.message);
        }
    }
}