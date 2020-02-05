import { ADD_ARTICLE } from "./action-types";
import prodImg1 from './images/FFJ00_Viewer.jpg';
import prodImg2 from './images/FGG46_Viewer.jpg';
import prodImg3 from './images/DYW48_Viewer.jpg';
import prodImg4 from './images/FPH21_Viewer.jpg';
import prodImg5 from './images/FXT05_Viewer.jpg';
import prodImg6 from './images/FGH79_Viewer.jpg';

const initialState = {
      items: [
        {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:prodImg1},
        {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: prodImg2},
        {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: prodImg3},
        {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:prodImg4},
        {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img:prodImg5},
        {id:6,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: prodImg6}
    ],
    addedItems:[],
    total: 0,
    articles: []
  };
  function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
      return Object.assign({}, state, {
        items: state.items.concat(action.payload)
      });
    }
/*if (action.type === DELETE_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.filter(item => item.id !== action.id)
          });
         
    }*/
    return state;
  }
  export default rootReducer;