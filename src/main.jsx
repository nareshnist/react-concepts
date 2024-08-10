import  ReactDom from 'react-dom/client';

// event handling
// import { BaseComponnet } from './eventHadlers/parent-component';

// state 
import { StateHandle } from './states/TheState';
import {BackGroundColorChange} from './states/TheStatePractice';
import {CounterExample} from './states/TheCounter';
import {StateWithObject} from './states/TheStateWithObject';


// componnet
 import { ProductList } from './components/product-list';


 // todo app
import { Todo } from './todoapp/todoapp';

// calculator app

// import {Calculator} from './calculator/user-input';

// virtual dom
import {VirtualDom} from './virtual-dom/virtual-dom';

// conditinal rendering
import {ConditinalRendering} from './conditinal/conditional-rendering';

//Hooks 
import { UseEffectHook } from './hooks/use-effect';

//LocalFiles 
import {LocalFiles} from './local-files/local-file';

//Router

import {RouterMain} from './react-router/router-main';

const root =  ReactDom.createRoot(document.getElementById("root"))

root.render(
    // <BaseComponnet />
    // <StateHandle />
    // <BackGroundColorChange />
    // <CounterExample />
    // <StateWithObject />
    // <ProductList />
    // <Todo></Todo>
    // <Calculator></Calculator>
    // <VirtualDom></VirtualDom>
    //<ConditinalRendering></ConditinalRendering>
    // <LocalFiles></LocalFiles>

    // hooks
        // <UseEffectHook></UseEffectHook>

    // router
        <RouterMain></RouterMain>

);

