import { World } from './World.js'; 
import stateConfig from './setUp/states.js';



const app = new World();
app.init(stateConfig);


console.log(app);
app.execute();