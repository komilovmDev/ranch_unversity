import axios from 'axios';

const getCategors = async () => {
    try {
        const response = await axios.get('https://utu-ranch.uz/api/categories/');
        return response.data;
    } catch (error) {
        console.error('Category:', error);
        throw error;
    }
}

export { getCategors };
