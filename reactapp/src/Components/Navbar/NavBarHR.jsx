/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { Menu, X, Search, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Drawer, Button } from "rsuite";
// import "rsuite/dist/rsuite.css";
import "rsuite/dist/rsuite-no-reset.min.css";
import { useAppContext } from "../../Context/AppContextReducer";
import { clearCart } from "../../Context/AppActionsCreator";
import { NavLink } from "react-router-dom";
import { routes } from "../../Constants/ConstRouts/routes";
const NavBarHR = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openWithHeader, setOpenWithHeader] = React.useState(false);
  const { state, dispatch } = useAppContext();
  const smMenu = [
    { title: "Home", path: routes.home },
    { title: "Tshirts", path: routes.tshirt },
    { title: "Hood", path: routes.hood },
    { title: "Case`s", path: routes.case },
  ];
  return (
    <div className="relative z-50">
      {/* Top Banner */}

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 ">
        {/* Menu Icon */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="transition-transform duration-200"
          initial={false}
          animate={{ rotate: isOpen ? 90 : 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </motion.button>

        {/* Logo */}
        <NavLink
          to="/"
          className=" flex items-center  text-sm font-normal text-black"
        >
          <h1 className="text-3xl relative left-10 font-bold whitespace-pre text-white hover:text-purple-700 transition-colors duration-300    ">
            𝓜𝓾𝓼𝓲𝓬 𝓒𝓻𝓪𝓯𝓽𝓮𝓻𝓼
          </h1>
        </NavLink>
        {/* Icons */}
        <div className="flex gap-4">
          <Search className="text-white w-5 h-5 hover:scale-110 transition-transform duration-150" />
          <button onClick={() => setOpenWithHeader(true)}>
            <ShoppingCart className="text-white w-5 h-5 hover:scale-110 transition-transform duration-150" />
          </button>
          <Drawer
            open={openWithHeader}
            onClose={() => setOpenWithHeader(false)}
            size="xs"
          >
            <div className="h-full flex flex-col bg-zinc-900">
              <Drawer.Header>
                <Drawer.Title>Drawer Title</Drawer.Title>

                <Button
                  onClick={() => dispatch(clearCart())}
                  color="red"
                  appearance="primary"
                >
                  Clear All
                </Button>
              </Drawer.Header>
              <Drawer.Body>
                <div className="flex flex-col gap-2">
                  {state.cartItems.map((item, index) => (
                    <h1 key={item.id || index} className="text-4xl">
                      {item.name}
                    </h1>
                  ))}
                </div>
              </Drawer.Body>
            </div>
          </Drawer>
        </div>
      </nav>

      {/* AnimatePresence for sidebar + overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.aside
              className="fixed left-0 top-0 h-full w-64  p-6 z-50 shadow-lg"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex justify-end">
                <button onClick={() => setIsOpen(false)}>
                  <X className="text-white w-6 h-6" />
                </button>
              </div>
              <nav className="mt-8 flex flex-col gap-6 text-lg text-gray-300 font-mono">
                {smMenu.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-purple-700 hover:text-white transition-colors duration-200 "
                        : "text-white hover:text-purple-500 transition-colors duration-250 "
                    }
                  >
                    {item.title}
                  </NavLink>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
      {/* <div className="bg-black text-white text-center py-2 text-sm">
        FREE SHIPPING FOR ORDERS OVER $65
      </div> */}
    </div>
  );
};

export default NavBarHR;
