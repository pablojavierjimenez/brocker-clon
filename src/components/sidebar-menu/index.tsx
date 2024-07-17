import Link from "next/link";
import "./sidebar-menu.css";

const menuItem = {
  avatar: {
    text: "market",
    href: "/cval/BYMA/client",
    icon: "../../assets/market.svg",
  },
  logo: {
    text: "market",
    href: "/cval/BYMA/client",
    icon: "../../assets/logo.svg",
  },
  portfolio: {
    text: "market",
    href: "/cval/BYMA/client",
    icon: "../../assets/market.svg",
  },
  client: {
    text: "client",
    href: "/cval/BYMA/client",
    icon: "../../assets/client.svg",
  },
  market: {
    text: "market",
    href: "/cval/BYMA/market",
    icon: "../../assets/market.svg",
  },
};

export default function SidebarMenu() {
  const sidebarButtonIcon = {
    width: "var(--size-50)",
    height: "var(--size-50)",
    color: "var(--color-primary)",
  };
  const sidebarButton = {
    width: "var(--size-50)",
    height: "var(--size-50)",
  };

  return (
    <aside className="asideStyle">
      {
        <>
          <Link
            href={menuItem.logo.href}
            className="sidebar-button"
            style={sidebarButton}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9247 9.08243C11.3202 13.7924 7.28905 17 3 17V8H21C21 13.215 16.6328 17 11.9936 17V9.08476C11.9936 9.0381 11.9306 9.03577 11.9247 9.08243Z"
                fill={sidebarButtonIcon.color}
              ></path>
            </svg>
          </Link>

          <button
            className="sidebar-button"
            style={sidebarButton}
          >
            <span>{"PJ"}</span>
          </button>
          <Link
            href={menuItem.client.href}
            className="sidebar-button square-button"
            style={sidebarButton}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.9883 9.94714C21.0565 10.4952 20.6023 10.9452 20.05 10.9452H14.0501C13.4978 10.9452 13.0501 10.4974 13.0501 9.94516L13.05 3.94516C13.05 3.39288 13.5 2.9386 14.048 3.0068C17.6683 3.45733 20.5378 6.32683 20.9883 9.94714ZM14.55 4.6188C16.9344 5.18183 18.8133 7.06076 19.3763 9.44515H14.5501L14.55 4.6188Z"
                fill={sidebarButtonIcon.color}
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.9384 13.998C19.0066 13.4499 18.5523 13 18 13H11V5.99996C11 5.44768 10.55 4.99341 10.002 5.06161C6.05471 5.55283 3 8.91966 3 13C3 17.4182 6.58172 21 11 21C15.0803 21 18.4471 17.9453 18.9384 13.998ZM9.5 13C9.5 13.8284 10.1716 14.5 11 14.5H17.3264C16.6498 17.3662 14.0731 19.5 11 19.5C7.41015 19.5 4.5 16.5898 4.5 13C4.5 9.92687 6.63378 7.35017 9.5 6.67358V13Z"
                fill={sidebarButtonIcon.color}
              ></path>
            </svg>
          </Link>
          <Link
            href={menuItem.market.href}
            className="sidebar-button square-button"
            style={sidebarButton}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.5 6H6.75V3H5.25V6H4.5C4.08579 6 3.75 6.33579 3.75 6.75V17.25C3.75 17.6642 4.08579 18 4.5 18H5.25L5.25 21H6.75V18H7.5C7.91421 18 8.25 17.6642 8.25 17.25V6.75C8.25 6.33579 7.91421 6 7.5 6ZM5.25 7.5V16.5H6.75V7.5H5.25ZM17.25 8.25V15H18.75V8.25H17.25ZM16.5 6.75C16.0858 6.75 15.75 7.08579 15.75 7.5V15.75C15.75 16.1642 16.0858 16.5 16.5 16.5H17.25V18.75H18.75V16.5H19.5C19.9142 16.5 20.25 16.1642 20.25 15.75V7.5C20.25 7.08579 19.9142 6.75 19.5 6.75H18.75V4.5L17.25 4.5V6.75H16.5ZM11.25 15V11.25H12.75V15H11.25ZM9.75 10.5C9.75 10.0858 10.0858 9.75 10.5 9.75H11.25V7.5H12.75V9.75H13.5C13.9142 9.75 14.25 10.0858 14.25 10.5V15.75C14.25 16.1642 13.9142 16.5 13.5 16.5H12.75V18H11.25V16.5H10.5C10.0858 16.5 9.75 16.1642 9.75 15.75V10.5Z"
                fill={sidebarButtonIcon.color}
              ></path>
            </svg>
          </Link>
        </>
      }
    </aside>
  );
}
