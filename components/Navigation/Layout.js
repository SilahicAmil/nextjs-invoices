import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <div>
      <MainNavigation />

      <main className="m-auto ">{props.children}</main>
    </div>
  );
};

export default Layout;
