
import { BrowserRouter ,Route,Router,Routes ,useParams} from "react-router-dom";
import { About } from "./about";
import { Contact } from "./contact";
import { Home } from "./home";
import { Login } from "./login";
import { Header } from "./header";
import { User } from "./user";
import {Orders} from './order';
import {Profile} from './profile';
import {UserDyanamicParams} from './route-params';
import { ErrorPage } from "./error-page";

export function RouterMain(){

    return (
       <>
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/about" element={<About></About>}></Route>
                    <Route path="/contact" element={<Contact></Contact>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>

                    {/* nested router examples */}
                    <Route path="/user" element={<User></User>}>
                        <Route path="order" element={<Orders></Orders>}></Route>
                        <Route path="profile" element={<Profile></Profile>}></Route>
                        {/* if we use / go & search for absolute path & relatve path concept */}
                    </Route>

                    {/*  Dynamic routes */}
                    <Route path="dynamic-route-parames/:id/:code" element={<UserDyanamicParams></UserDyanamicParams>}></Route>


                    {/* Error handle  */}
                    <Route path="*" element={<ErrorPage></ErrorPage>}></Route>

                </Routes>
            </BrowserRouter>
       </> 
    )
}
