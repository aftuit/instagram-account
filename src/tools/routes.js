import Main from "../pages/Main";
import Gallery from "../pages/Gallery";
import Tagged from "../pages/Tagged";
export const routes = [
    {
        path: '/',
        component: {Main}        
    },    
    {
        path: '/gallery',
        component: {Gallery}        
    },    
    {
        path: '/tagged',
        component: {Tagged}        
    },    
]