import  ReactDom from 'react-dom/client';


import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

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
import {UseRefHook} from './hooks/use-ref';
// import {CustomeHook} from './hooks/custom-hook';
// import {TestCustomeHook} from './hooks/custom-hook-exaple';

import {UseMemo} from './hooks/use-memo';

//LocalFiles 
import {LocalFiles} from './local-files/local-file';

//Router
import {RouterMain} from './react-router/router-main';

// list 
import {List} from './list/list';


// Props-drill down 

import { ProspDrill } from './props-drill-down/props-dril';

// Props & events
import { Parent } from './propsEvents/props';

 
// how to add bootstrap
import {Bootstrap} from './bootstap/bootyrap';

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
    // <List></List>
    

    // hooks
        // <UseEffectHook></UseEffectHook>
        // <UseRefHook></UseRefHook>
        // <CustomeHook></CustomeHook>
        // <TestCustomeHook></TestCustomeHook>
        // <UseMemo></UseMemo>

    // router
        // <RouterMain></RouterMain>


    // Propds drill with USEcONTEXT
        // <ProspDrill></ProspDrill>

    // Props & event
        // <Parent></Parent>

    //Bootstrap 
        <Bootstrap></Bootstrap>

    
);

