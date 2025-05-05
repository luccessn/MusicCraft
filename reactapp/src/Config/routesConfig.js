/* eslint-disable prettier/prettier */
import { routes } from "../Constants/ConstRouts/routes";
import AuthGuard from "../Guard/AuthGuard";
import CaseImagesDTL from "../Pages/DetailsPageS/CaseImagesDTL";
import CoverImagesDTL from "../Pages/DetailsPageS/CoverImagesDTL";
import HoodImagesDTL from "../Pages/DetailsPageS/HoodImagesDTL";
import TshImagesDTL from "../Pages/DetailsPageS/TshImagesDTL";
import { Home } from "../Pages/Home/Home";
import CasePR from "../Pages/Products/CasePR";
import HoodPR from "../Pages/Products/HoodPR";
import TshirtPR from "../Pages/Products/TshirtPR";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import testpage from "../Pages/testpage";

export const routesConfig = [
  { path: routes.home, Component: Home, Guard: AuthGuard },
  { path: routes.case, Component: CasePR },
  { path: routes.tshirt, Component: TshirtPR },
  { path: routes.hood, Component: HoodPR },
  { path: routes.cvdtl, Component: CoverImagesDTL },
  { path: routes.casedtl, Component: CaseImagesDTL },
  { path: routes.tshdtl, Component: TshImagesDTL },
  { path: routes.hoddtl, Component: HoodImagesDTL },
  { path: routes.signUp, Component: SignUp },
  { path: routes.signIn, Component: SignIn },
  { path: routes.test, Component: testpage },
];
