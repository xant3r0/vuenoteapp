import NoteCreate from '../components/NoteCreate';
import NoteList from '../components/NoteList';
import NoteEditor from '../components/NoteEditor';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path:'/create',
        component:NoteCreate
    },
    {
        path:'/',
        component:NoteList
    },
    {
        path:'/editor',
        component:NoteEditor
    }
    
];

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
});

export default router;