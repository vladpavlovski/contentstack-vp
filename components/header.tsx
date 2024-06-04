import Link from "next/link";
import { getHeaderRes } from "../helper";
import Skeleton from "react-loading-skeleton";

async function fetchData() {
  try {
    const headerRes = await getHeaderRes();
    return headerRes;
  } catch (error) {
    console.error(error);
  }
}

export default async function Header() {
  const headerData = await fetchData();

  return (
    <header className="header">
      <div className="max-width header-div">
        <div className="wrapper-logo">
          {headerData ? (
            <Link
              href="/"
              className="logo-tag"
              title="Contentstack"
              
            >
              <img
                className="logo"
                src={headerData.logo.url}
                alt={headerData.title}
                title={headerData.title}
              />
            </Link>
          ) : (
            <Skeleton width={150} />
          )}
        </div>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon" />
        </label>
        <nav className="menu">
          <ul className="nav-ul header-ul">
            {headerData ? (
              headerData.navigation_menu.map((list) => {
                return (
                  <li key={list.label} className="nav-li">
                    <Link href={list.page_reference[0].url}>{list.label}</Link>
                  </li>
                );
              })
            ) : (
              <Skeleton width={300} />
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
