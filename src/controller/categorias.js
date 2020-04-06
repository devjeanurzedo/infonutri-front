import axios from 'axios';

const lista = axios.get('http://localhost:3001/categ');
  
export default {lista};