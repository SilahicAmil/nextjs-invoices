import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <div>
      <MainNavigation />

      <main className=" w-11/12">{props.children}</main>
    </div>
  );
};

export default Layout;
