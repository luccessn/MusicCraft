/* eslint-disable prettier/prettier */
import { routes } from "../Constants/ConstRouts/routes";
import AuthGuard from "../Guard/AuthGuard";
import { Home } from "../Pages/Home/Home";
import { ProductDetail } from "../Pages/Products/ProductDetail";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import testpage from "../Pages/testpage";

export const routesConfig = [
  { path: routes.home, Component: Home, Guard: AuthGuard },
  { path: routes.productdtl, Component: ProductDetail },
  { path: routes.signUp, Component: SignUp },
  { path: routes.signIn, Component: SignIn },
  { path: routes.test, Component: testpage },
];
