import "./index.css";
import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import ResendVerificationMail from "./Pages/ResendVerificationMail/ResendVerificationMail";
import VerifyEmail from "./Pages/VerifyEmail/VerifyEmail";
import ResetPassword from "./Pages/ResetPassword/Reset";
import UpdatePassword from "./Pages/UpdatePassword/UpdatePassword";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Selections from "./Pages/Selections/Selections";
import { ListingContextProvider } from "./Context/listing-context";
import NeedRoom from "./Pages/NeedRoom/NeedRoom";
import Chat from "./Pages/Chat/Chat";
import ChatMobile from "./Components/ChatMobile/ChatMobile";
import store from "./store/ReduxStore";
import { Provider } from "react-redux";
import Terms from "./Pages/Terms/Terms";
import Privacy from "./Pages/PrivacyPolicy/Privacy";
import Team from "./Pages/Team/Team";
import AboutMFC from "./Pages/AboutMFC/AboutMFC";

import { disableReactDevTools } from "@fvilers/disable-react-devtools";
console.log(
  "%cDear Developer,\n" +
  "Thanks for stopping by the console log. If you've stumbled upon any bugs, please report them at %chttps://sdeysocial.canny.io/issue%c. Together, let's keep this code shipshape for our fellow VITians.\n" +
  "Best Regards,\n" +
  "MFC VIT Team\n\n"+
  "    .---.\n" +
  "   |o_o |\n" +
  "   |:_/ |\n" +
  "  //   \\ \\\n" +
  " (|     | )\n" +
  "/'\_   _/`\\\n" +
  " \___)=(___/",
  "color: yellow; font-weight: bold;",
  "color: yellow; text-decoration: underline;",
  "color: yellow; font-weight: bold;",
);


// console.log(
//   "  __  __ ______ _____  __      _______ _______ \n" +
//   " |  \\/  |  ____/ ____| \\ \\    / /_   _|__   __|\n" +
//   " | \\  / | |__ | |       \\ \\  / /  | |    | |   \n" +
//   " | |\\/| |  __|| |        \\ \\/ /   | |    | |   \n" +
//   " | |  | | |   | |____     \\  /   _| |_   | |   \n" +
//   " |_|  |_|_|    \\_____|     \\/   |_____|  |_|   \n" +
//   "                                               \n" +
//   "                                               "
// );

console.log(
  "                                                                                           \n" +
  "                                  .:==+*###%%%%%##**+=-:.                                  \n" +
  "                            .=+#%@@@@@@@@@@%%%%%@@@@@@@@@@@#+-.                            \n" +
  "                        :=#@@@@@@#+=-:.             .:+#%@@@@@@@#+:                        \n" +
  "         .+#+        -*@@@@@*=:                      #@@@@@@@@@@@@@@*-.                    \n" +
  "        -@@@@*    -#@@@@#=:         .:.               -=+*#@@@@@@@@@@@@#=.                 \n" +
  "       :@@@@@@. -@@@@@+.        :*%@@@@%                   -%@@@@%-+%@@@@@#:               \n" +
  "       #@@%@@@*#@@@#=.      .=#@@@@@@@%=                 +@@@@@@@@=  .:+%@@@#= ::          \n" +
  "      =@@% +@@@@@#=-=====-=#@@@@@@@@%-                    =*%@@@@@*-     :*@@@@@@%-        \n" +
  "     .@@@+  =%@@@@@@@@@@@@@@@*-%@@@=                         .-+%@@@@#+.   .#@@@@@@+       \n" +
  "     *@@@:    -*#*+-:::::-=-  #@@@:                               -*@@@@#-   :%@@@@@%.     \n" +
  "     %@@@.                    @@@%=                                  -*@@@%:  :@@@@@@*     \n" +
  "     @@@@                     :@@@@%:                                  .@@@@.  =@@@@@@.    \n" +
  "    -@@@%                       -#@@@%%##*+.                            .#@@@:  :::@@@%    \n" +
  "   +@@@#                          :+#%@@@@@@.                          %@@@@@%     *@@@:   \n" +
  "  *@@@+                              :+#@@@=                           *@@@@@@     .@@@+   \n" +
  " #@@%.                             =%@@@@+.                            :@@@%*-      *@@@%:  \n" +
  "*@@@%*:                          -@@@%+:                                %@@*        -@@@@*  \n" +
  "@@@@@@+                          -@@@=                                  #@@*        .@@@@%  \n" +
  "=@@@@%                            *@@%                                . #@@*         %@@@@% \n" +
  " .@@@:                     :*%%%#**@@@                              =@@%%@@+          -@@@   \n" +
  " +@@#                     =@@@%@@@@@@%                              =@@@@@@=          =@@%   \n" +
  " %@@*                     #@@%.   .:-.                              -@@@@@@.          %@@*   \n" +
  " @@@+                     .#@@@*-           .::::.                  -@@@@@*          :@@@-  \n" +
  " %@@*                       :#@@@%+:    :+#@@@@@@@@#=               -@@@=.           *@@%   \n" +
  " *@@#                         -%@@@@@@@@@@@@@#**#@@@@@:             +@@@.            @@@-   \n" +
  " :@@@                           .=#@@@@@%*=.    .=%@@@%             #@@%            #@@%   \n" +
  "  %@@+                                       :=#@@@@@@*         =%@%@@+           #@@@-   \n" +
  "  =@@@=                                  :=*@@@@@+:::.        :#@@@@@@@.          =@@@+    \n" +
  "   #@@@:                       -*####%%@@@@@@#+:            .*@@@@@@@#.          -@@@*     \n" +
  "    %@@%                       +@@@@@@%#*+-.              :*@@@@@@@@*           -@@@%      \n" +
  "    :@@@@.                       =%@@@%*=:            .-*@@@@*::%@#:           -@@@+       \n" +
  "     :@@@%                         :#@@@@@@%*=--::-=*%@@@@@*.                 -@@@*        \n" +
  "      .%@@%:                         .-+#@@@@@@@@@@@@@@%*-.                  -@@@*         \n" +
  "        *@@@=                              :-===++==-:                     :%@@@=          \n" +
  "         -@@@@=                                                           +@@@%.           \n" +
  "           *@@@%-                                                       =%@@%+             \n" +
  "            .+@@@%=                                                  .=%@@@=               \n" +
  "              .#@@@@*.                                              +@@@@#                 \n" +
  "                :*@@@@#=.                                       .:*@@@@#:                  \n" +
  "                   =*@@@@@*=.                                :+%@@@@#-.                    \n" +
  "                      :+%@@@@@%*+-:.                  .:-+*%@@@@%*-                        \n" +
  "                          :=*%@@@@@@@@%##***++***##%%@@@@@@@#+-.                           \n" +
  "                               .:=+*#%%@@@@@@@@@@@@@%#*+=:.                                \n" +
  "                                             .                                            \n"
);


if(process.env.NODE_ENV === "production") {
  disableReactDevTools();
  console.log = () => {}
  console.error = () => {}
  console.debug = () => {}
  console.warn = () => {}
  console.info = () => {}
  console.trace = () => {}
  console.group = () => {}
  console.groupEnd = () => {}
  console.groupCollapsed = () => {}
  console.time = () => {}
  console.timeEnd = () => {}
  console.timeLog = () => {}
  console.count = () => {}
  console.countReset = () => {}
  console.clear = () => {}
  console.table = () => {}
  console.assert = () => {}
  console.profile = () => {}
  console.profileEnd = () => {}
  console.dir = () => {}
  console.dirxml = () => {}
  console.timeStamp = () => {}
  console.context = () => {}
  console.memory = () => {}
  console.exception = () => {}
  console.trace = () => {}
  console.fatal = () => {}
  console.markTimeline = () => {}
  console.timeline = () => {}
  console.timelineEnd = () => {}
  console.count = () => {}
  console.countReset = () => {}
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/updatePassword",
    element: <UpdatePassword />,
  },
  {
    path: "/resetPassword",
    element: <ResetPassword />,
  },
  {
    path: "/resendVerificationMail",
    element: <ResendVerificationMail />,
  },
  {
    path: "/verifyEmail",
    element: <VerifyEmail />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/selections",
    element: <Selections />,
  },
  {
    path: "/need",
    element: <NeedRoom />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/chatMobile",
    element: <ChatMobile />,
  },
  {
    path: "/TermsAndConditions",
    element: <Terms />,
  },
  {
    path: "/PrivacyPolicy",
    element: <Privacy />,
  },
  {
    path: "/Team",
    element: <Team />,
  },
  {
    path: "/AboutMFC",
    element: <AboutMFC />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <Fragment>
        <ListingContextProvider>
          <RouterProvider router={router} />
        </ListingContextProvider>
        <ToastContainer />
      </Fragment>
    </Provider>
  </>
);

reportWebVitals();
