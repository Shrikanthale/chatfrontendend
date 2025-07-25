import React from "react"
import {BrowserRouter as Router , Routes ,Route} from "react-router-dom"
import SignUp from "../Registration/SignUp"
import SignIn from "../Registration/signin"
// import ChatPage from "../Pages/ChatPage"
import ChatPage from "../Home/ChatPage"
import CreatePost from "../Pages/Post/CreatePost"
import AllPost from "../Pages/Post/AllPost"

const routes = () => {
    return(
        <Router>
            <Routes>
                <Route path="chat" element={<ChatPage />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="signin" element={<SignIn />} />
                {/* <Route path="chat" element={<ChatPage />} /> */}
                <Route path="createpost" element={<CreatePost />} />
                <Route path="posts" element={<AllPost />} />
            </Routes>
        </Router>
    )
}

export default routes