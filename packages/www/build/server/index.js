import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { RemixServer, Outlet, Meta, Links, ScrollRestoration, Scripts, Link, useLoaderData } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToReadableStream } from "react-dom/server";
import { createContext, useContext, useRef, useState, cloneElement, useEffect } from "react";
import { GraphQLClient } from "graphql-request";
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const body2 = await renderToReadableStream(
    /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url }),
    {
      signal: request.signal,
      onError(error) {
        console.error(error);
        responseStatusCode = 500;
      }
    }
  );
  if (isbot(request.headers.get("user-agent") || "")) {
    await body2.allReady;
  }
  responseHeaders.set("Content-Type", "text/html");
  return new Response(body2, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
var body = "qwt30f1 qwt30f0 _1y8zk7q6x _1y8zk7q6u _1y8zk7q6j _1y8zk7q6k _1y8zk7q13";
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { className: body, children: [
      children,
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  default: App
}, Symbol.toStringTag, { value: "Module" }));
var root$e = "_143e03v1 _143e03v0 _1y8zk7q28 _1y8zk7q2i _1y8zk7q2g";
function Container({ children }) {
  return /* @__PURE__ */ jsx("div", { className: root$e, children });
}
var root$d = "o2pufp0 _1y8zk7q16 _1y8zk7q2x _1y8zk7q3c";
var dot = "o2pufp1 _1y8zk7q6o";
var a$1 = "o2pufp2";
function Logo() {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { to: "/", className: a$1, children: /* @__PURE__ */ jsxs("h1", { className: root$d, children: [
    "Will Hackett",
    /* @__PURE__ */ jsx("span", { className: dot, children: "." })
  ] }) }) });
}
var root$c = "z2pfff0";
var links = "z2pfff1";
function Header() {
  return /* @__PURE__ */ jsxs("div", { className: root$c, children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Logo, {}) }),
    /* @__PURE__ */ jsx("div", { className: links })
  ] });
}
function ContactView() {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Header, {}) });
}
function Contact() {
  return /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx(ContactView, {}) });
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Contact
}, Symbol.toStringTag, { value: "Module" }));
const initialState = {
  metrics: [],
  textContent: [],
  notes: []
};
const HomeContext = createContext(initialState);
const HomeContextProvider = HomeContext.Provider;
function useHomeContext() {
  return useContext(HomeContext);
}
var MetricName = /* @__PURE__ */ ((MetricName2) => {
  MetricName2["CaloriesBurned"] = "CALORIES_BURNED";
  MetricName2["CurrentCity"] = "CURRENT_CITY";
  MetricName2["FavouriteSong"] = "FAVOURITE_SONG";
  MetricName2["GitCommits"] = "GIT_COMMITS";
  MetricName2["MilesCycled"] = "MILES_CYCLED";
  return MetricName2;
})(MetricName || {});
const HomeViewQueryDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "HomeViewQuery" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "metrics" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "InlineFragment", "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "FloatMetric" } }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "__typename" } }, { "kind": "Field", "name": { "kind": "Name", "value": "float" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }] } }, { "kind": "InlineFragment", "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "MediaMetric" } }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "__typename" } }, { "kind": "Field", "name": { "kind": "Name", "value": "artist" } }, { "kind": "Field", "name": { "kind": "Name", "value": "title" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }] } }, { "kind": "InlineFragment", "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "TextMetric" } }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "__typename" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "text" } }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "textContent" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "location" }, "value": { "kind": "StringValue", "value": "HOMEPAGE", "block": false } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "text" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "notes" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "date" } }, { "kind": "Field", "name": { "kind": "Name", "value": "permalink" } }, { "kind": "Field", "name": { "kind": "Name", "value": "section" } }, { "kind": "Field", "name": { "kind": "Name", "value": "summary" } }, { "kind": "Field", "name": { "kind": "Name", "value": "title" } }] } }] } }] };
var MetricName = /* @__PURE__ */ ((MetricName2) => {
  MetricName2["CaloriesBurned"] = "CALORIES_BURNED";
  MetricName2["CurrentCity"] = "CURRENT_CITY";
  MetricName2["FavouriteSong"] = "FAVOURITE_SONG";
  MetricName2["GitCommits"] = "GIT_COMMITS";
  MetricName2["MilesCycled"] = "MILES_CYCLED";
  return MetricName2;
})(MetricName || {});
class GraphQLService {
  constructor(fetcher) {
    this.fetcher = fetcher;
  }
  get client() {
    return new GraphQLClient("https://api.willhackett.com/", {
      fetcher: this.fetcher
    });
  }
}
var container = "f43q810";
var root$b = "_1hw8f2a0";
var icon = "_1hw8f2a1";
var metric = "_1hw8f2a2";
var root$a = "_6mgr3u1 _6mgr3u0 _1y8zk7q78 _1y8zk7q77";
const baseIconProps = {
  width: 2,
  height: 2,
  className: root$a
};
function getIconProps(props) {
  const { width, height, fill, className } = { ...baseIconProps, ...props };
  return {
    width: `${width}rem`,
    height: `${height}rem`,
    fill,
    className
  };
}
function BicycleIcon(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      ...getIconProps(props),
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx("title", { children: "Bicycle icon" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M16 6C17.1046 6 18 5.10457 18 4C18 2.89543 17.1046 2 16 2C14.8954 2 14 2.89543 14 4C14 5.10457 14.8954 6 16 6ZM13.2428 5.52993C13.5738 5.61279 13.8397 5.85869 13.9482 6.18222C14.13 6.72461 14.3843 7.20048 14.697 7.59998C15.5586 8.70094 16.9495 9.32795 18.8356 9.01361C19.3804 8.92281 19.8956 9.29083 19.9864 9.8356C20.0772 10.3804 19.7092 10.8956 19.1644 10.9864C17.0282 11.3424 15.1791 10.7992 13.8435 9.60462L11.1291 11.9869L12.7524 13.8413C12.912 14.0236 13 14.2577 13 14.5V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V14.8759L8.9689 12.5556L8.92455 12.5059C8.68548 12.2386 8.28531 11.7911 8.11145 11.2626C8.00463 10.9379 7.97131 10.5628 8.08578 10.1667C8.1967 9.78279 8.42374 9.45733 8.7058 9.18044L8.71971 9.16705L12.3134 5.77299C12.5614 5.53871 12.9118 5.44708 13.2428 5.52993ZM2 17C2 15.3431 3.34315 14 5 14C6.65685 14 8 15.3431 8 17C8 18.6569 6.65685 20 5 20C3.34315 20 2 18.6569 2 17ZM5 12C2.23858 12 0 14.2386 0 17C0 19.7614 2.23858 22 5 22C7.76142 22 10 19.7614 10 17C10 14.2386 7.76142 12 5 12ZM16 17C16 15.3431 17.3431 14 19 14C20.6569 14 22 15.3431 22 17C22 18.6569 20.6569 20 19 20C17.3431 20 16 18.6569 16 17ZM19 12C16.2386 12 14 14.2386 14 17C14 19.7614 16.2386 22 19 22C21.7614 22 24 19.7614 24 17C24 14.2386 21.7614 12 19 12Z"
          }
        )
      ]
    }
  );
}
function GitCommitIcon(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      ...getIconProps(props),
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx("title", { children: "Git commit icon" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3 5C3 6.30622 3.83481 7.41746 5 7.82929V16.1707C3.83481 16.5825 3 17.6938 3 19C3 20.6569 4.34315 22 6 22C7.65685 22 9 20.6569 9 19C9 17.6938 8.16519 16.5825 7 16.1707V11.3987C8.89299 14.0198 11.8676 15.7195 15.1597 15.9683C15.5625 17.15 16.682 18 18 18C19.6569 18 21 16.6569 21 15C21 13.3431 19.6569 12 18 12C16.7075 12 15.6058 12.8174 15.1839 13.9635C11.726 13.6534 8.7142 11.3899 7.47847 8.09457L7.3272 7.6912C8.31833 7.20148 9 6.18034 9 5C9 3.34315 7.65685 2 6 2C4.34315 2 3 3.34315 3 5ZM6 18C5.44772 18 5 18.4477 5 19C5 19.5523 5.44772 20 6 20C6.55228 20 7 19.5523 7 19C7 18.4477 6.55228 18 6 18ZM17 15C17 14.4477 17.4477 14 18 14C18.5523 14 19 14.4477 19 15C19 15.5523 18.5523 16 18 16C17.4477 16 17 15.5523 17 15ZM5 5C5 4.44772 5.44772 4 6 4C6.55228 4 7 4.44772 7 5C7 5.55228 6.55228 6 6 6C5.44772 6 5 5.55228 5 5Z"
          }
        )
      ]
    }
  );
}
function LocationIcon(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      ...getIconProps(props),
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx("title", { children: "Location icon" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.3572 3.23397C3.66645 2.97447 4.1014 2.92638 4.45988 3.11204L20.7851 11.567C21.1426 11.7522 21.3542 12.1337 21.322 12.5351C21.2898 12.9364 21.02 13.2793 20.6375 13.405L13.7827 15.6586L10.373 22.0179C10.1828 22.3728 9.79826 22.5789 9.39743 22.541C8.9966 22.503 8.65762 22.2284 8.53735 21.8441L3.04564 4.29872C2.92505 3.91345 3.04794 3.49346 3.3572 3.23397ZM5.67123 5.99173L9.73507 18.9752L12.2091 14.361C12.3304 14.1347 12.5341 13.9637 12.7781 13.8835L17.7518 12.2484L5.67123 5.99173Z"
          }
        )
      ]
    }
  );
}
function MusicIcon(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      ...getIconProps(props),
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx("title", { children: "Music icon" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M20 4.00001C20 3.70348 19.8684 3.42225 19.6407 3.23226C19.4131 3.04226 19.1129 2.96309 18.8211 3.01614L7.82111 5.01614C7.34562 5.10259 7 5.51672 7 6.00001V10V16.1707C6.68722 16.0602 6.35064 16 6 16C4.34315 16 3 17.3432 3 19C3 20.6569 4.34315 22 6 22C7.65685 22 9 20.6569 9 19V10.8346L18 9.19822V14.1707C17.6872 14.0602 17.3506 14 17 14C15.3431 14 14 15.3432 14 17C14 18.6569 15.3431 20 17 20C18.6569 20 20 18.6569 20 17V8.00001V4.00001ZM18 17C18 16.4477 17.5523 16 17 16C16.4477 16 16 16.4477 16 17C16 17.5523 16.4477 18 17 18C17.5523 18 18 17.5523 18 17ZM7 19C7 18.4477 6.55228 18 6 18C5.44772 18 5 18.4477 5 19C5 19.5523 5.44772 20 6 20C6.55228 20 7 19.5523 7 19ZM18 7.16543L9 8.8018V6.83458L18 5.19822V7.16543Z"
          }
        )
      ]
    }
  );
}
function CalorieIcon(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      ...getIconProps(props),
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx("title", { children: "Calories burned icon" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M11.8202 1.17444L12.7809 2.37532C13.9186 3.7975 14.3379 5.20075 14.299 6.54704C14.2612 7.85605 13.7915 9.02304 13.3225 9.98619C13.1649 10.3098 12.9946 10.6349 12.8386 10.9327C12.7663 11.0708 12.697 11.203 12.6335 11.3265C12.4214 11.739 12.2593 12.0804 12.1563 12.3799C12.0528 12.6806 12.0336 12.8708 12.0468 12.991C12.0567 13.0817 12.0872 13.173 12.2071 13.2929C12.4054 13.4912 12.5517 13.5469 12.6404 13.5639C12.731 13.5814 12.8515 13.5757 13.0239 13.5049C13.4095 13.3463 13.8803 12.9334 14.3743 12.314C14.8488 11.719 15.2631 11.0384 15.5634 10.4938C15.712 10.2242 15.8295 9.99387 15.9091 9.83234C15.9488 9.75168 15.979 9.6885 15.9988 9.64651L16.0205 9.59999L16.0252 9.58959L16.0259 9.58824L16.026 9.5879L16.0261 9.58776L16.0261 9.58771L16.6117 8.29169L17.6332 9.28206C19.946 11.5244 20.6617 14.7623 19.1415 17.7019C17.8195 20.2583 15.1123 22 12 22C7.60499 22 4 18.5172 4 14.1697C4 11.8793 5.26687 10.2404 6.64671 8.62914C6.82673 8.41894 7.0107 8.20711 7.19757 7.99194C8.47882 6.5167 9.89649 4.88437 11.1122 2.5397L11.8202 1.17444ZM17.1269 11.7924C16.8148 12.3321 16.4089 12.9705 15.9379 13.561C15.3851 14.2542 14.6528 14.9975 13.7846 15.3546C13.33 15.5415 12.8109 15.6335 12.2624 15.5279C11.7119 15.4219 11.2196 15.1338 10.7929 14.7071C10.3617 14.2759 10.1196 13.7664 10.0586 13.2082C10.0008 12.6794 10.1126 12.1723 10.2651 11.729C10.4181 11.2846 10.6372 10.8353 10.8549 10.412C10.9327 10.2606 11.0095 10.114 11.0856 9.96886C11.2338 9.68618 11.3792 9.40866 11.5243 9.11064C11.9559 8.22433 12.2745 7.36712 12.2998 6.48929C12.3134 6.01847 12.2432 5.51449 12.0273 4.9728C10.9109 6.77097 9.71215 8.14915 8.69763 9.31555C8.51377 9.52693 8.33596 9.73135 8.16579 9.93006C6.7748 11.5543 6 12.6877 6 14.1697C6 17.3667 8.66302 20 12 20C14.3543 20 16.3818 18.6846 17.365 16.7832C18.2267 15.1169 18.1049 13.3127 17.1269 11.7924Z"
          }
        )
      ]
    }
  );
}
function exhaustive(x) {
  throw new Error(`${x} was not expected`);
}
function MetricIcon({ name }) {
  switch (name) {
    case MetricName.MilesCycled:
      return /* @__PURE__ */ jsx(BicycleIcon, {});
    case MetricName.GitCommits:
      return /* @__PURE__ */ jsx(GitCommitIcon, {});
    case MetricName.CurrentCity:
      return /* @__PURE__ */ jsx(LocationIcon, {});
    case MetricName.FavouriteSong:
      return /* @__PURE__ */ jsx(MusicIcon, {});
    case MetricName.CaloriesBurned:
      return /* @__PURE__ */ jsx(CalorieIcon, {});
    default:
      return exhaustive(name);
  }
}
var dialog = "wdhgj41 wdhgj40 _1y8zk7q6w _1y8zk7q6v _1y8zk7q6i _1y8zk7q6l";
function Tooltip({ children, content }) {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const clonedChild = cloneElement(children, {
    ref
  });
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const handleMouseEnter = () => {
      setOpen(true);
    };
    const handleMouseLeave = () => {
      setOpen(false);
    };
    ref.current.addEventListener("mouseenter", handleMouseEnter);
    ref.current.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      var _a, _b;
      (_a = ref.current) == null ? void 0 : _a.removeEventListener("mouseenter", handleMouseEnter);
      (_b = ref.current) == null ? void 0 : _b.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    clonedChild,
    /* @__PURE__ */ jsx("dialog", { role: "tooltip", className: dialog, open, children: content })
  ] });
}
var root$9 = "ty8hdt0";
function getMetricNameLabel(name) {
  switch (name) {
    case MetricName.CaloriesBurned:
      return "Average calories burned last 7 days";
    case MetricName.CurrentCity:
      return "Current city";
    case MetricName.FavouriteSong:
      return "Last song saved to favourites";
    case MetricName.MilesCycled:
      return "Cycled miles in the last 7 days";
    case MetricName.GitCommits:
      return "Code commits in the last 7 days";
    default:
      return exhaustive(name);
  }
}
function MetricNameLabel({ name }) {
  return /* @__PURE__ */ jsx("span", { className: root$9, children: getMetricNameLabel(name) });
}
function MetricBlock({ children, name }) {
  return /* @__PURE__ */ jsx(Tooltip, { content: getMetricNameLabel(name), children: /* @__PURE__ */ jsxs("div", { className: root$b, children: [
    /* @__PURE__ */ jsx("div", { className: icon, children: /* @__PURE__ */ jsx(MetricIcon, { name }) }),
    /* @__PURE__ */ jsx("div", { className: metric, children: children() })
  ] }) });
}
var root$8 = "vbjndx0";
function MetricLabel({ name }) {
  return /* @__PURE__ */ jsx("span", { className: root$8, children: (() => {
    switch (name) {
      case MetricName.CaloriesBurned:
        return "calories";
      case MetricName.MilesCycled:
        return "miles";
      case MetricName.GitCommits:
        return "commits";
      case MetricName.CurrentCity:
        return "Current city";
      case MetricName.FavouriteSong:
        return "";
      default:
        return exhaustive(name);
    }
  })() });
}
var root$7 = "_1n05jsc0";
var float = "_1n05jsc2 _1n05jsc1 _1y8zk7q16";
function MetricTypeFloat({
  name,
  float: float$1
}) {
  return /* @__PURE__ */ jsxs("div", { className: root$7, children: [
    /* @__PURE__ */ jsx(MetricNameLabel, { name }),
    /* @__PURE__ */ jsx("span", { className: float, children: Math.round(float$1) }),
    /* @__PURE__ */ jsx(MetricLabel, { name })
  ] });
}
var root$6 = "_1wfrvmm0";
var title$1 = "_1wfrvmm2 _1wfrvmm1 _1y8zk7q16";
var artist = "_1wfrvmm3";
function MetricTypeMedia({
  name,
  title: title2,
  artist: artist$1
}) {
  return /* @__PURE__ */ jsxs("div", { className: root$6, children: [
    /* @__PURE__ */ jsx(MetricNameLabel, { name }),
    /* @__PURE__ */ jsx("span", { className: title$1, children: title2 }),
    /* @__PURE__ */ jsx("span", { className: artist, children: artist$1 })
  ] });
}
var root$5 = "_1grm86n0";
var text = "_1grm86n2 _1grm86n1 _1y8zk7q19";
function MetricTypeText({
  name,
  text: text$1
}) {
  return /* @__PURE__ */ jsxs("div", { className: root$5, children: [
    /* @__PURE__ */ jsx(MetricNameLabel, { name }),
    /* @__PURE__ */ jsx("span", { className: text, children: text$1 }),
    /* @__PURE__ */ jsx(MetricLabel, { name })
  ] });
}
var root$4 = "_19n61uk1 _19n61uk0 _1y8zk7q6c _1y8zk7q6h";
const PREFERRED_ORDER = [MetricName.FavouriteSong, MetricName.CurrentCity];
function sortMetrics(a2, b) {
  const aIndex = PREFERRED_ORDER.indexOf(a2.name);
  const bIndex = PREFERRED_ORDER.indexOf(b.name);
  if (aIndex === -1 && bIndex === -1) {
    return a2.name.localeCompare(b.name);
  }
  if (aIndex === -1) {
    return 1;
  }
  if (bIndex === -1) {
    return -1;
  }
  return aIndex - bIndex;
}
function Metrics() {
  const { metrics } = useHomeContext();
  return /* @__PURE__ */ jsx("div", { className: root$4, children: metrics.sort(sortMetrics).map((metric2) => {
    return /* @__PURE__ */ jsx(MetricBlock, { name: metric2.name, children: () => {
      switch (metric2.__typename) {
        case "FloatMetric":
          return /* @__PURE__ */ jsx(MetricTypeFloat, { ...metric2 });
        case "MediaMetric":
          return /* @__PURE__ */ jsx(MetricTypeMedia, { ...metric2 });
        case "TextMetric":
          return /* @__PURE__ */ jsx(MetricTypeText, { ...metric2 });
        default:
          return /* @__PURE__ */ jsx("div", {});
      }
    } }, metric2.name);
  }) });
}
function getNoteUri(path) {
  return `https://notes.willhackett.com${path}`;
}
var root$3 = "_1lrj2jm0";
var a = "_1lrj2jm1";
var title = "_1lrj2jm3 _1lrj2jm2 _1y8zk7q6j _1y8zk7q6k _1y8zk7q16";
function Note({ note }) {
  return /* @__PURE__ */ jsxs("article", { className: root$3, children: [
    /* @__PURE__ */ jsxs("a", { href: getNoteUri(note.permalink), className: a, children: [
      /* @__PURE__ */ jsx("h3", { className: title, children: note.title }),
      /* @__PURE__ */ jsx("time", { children: note.date })
    ] }),
    /* @__PURE__ */ jsx("p", { children: note.summary })
  ] });
}
var root$2 = "_66f5jz0";
var heading$1 = "_66f5jz1";
function Notes() {
  const { notes } = useHomeContext();
  return /* @__PURE__ */ jsxs("div", { className: root$2, children: [
    /* @__PURE__ */ jsx("h2", { className: heading$1, children: "Notes" }),
    /* @__PURE__ */ jsx("div", { children: notes.map((note) => /* @__PURE__ */ jsx(Note, { note }, note.permalink)) })
  ] });
}
var root$1 = "_1ktj9ki0";
var heading = "_1ktj9ki2 _1ktj9ki1 _1y8zk7q16";
function TextContent() {
  const { textContent } = useHomeContext();
  return /* @__PURE__ */ jsx("div", { children: textContent.map((content) => {
    switch (content.name) {
      case "HOMEPAGE_HEADING": {
        return /* @__PURE__ */ jsx("div", { className: root$1, children: /* @__PURE__ */ jsx("h2", { className: heading, children: content.text }) }, content.name);
      }
    }
  }) });
}
var root = "_1pbyvrf0";
function Footer() {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsx("footer", { className: root, children: /* @__PURE__ */ jsxs("p", { children: [
    "© Will Hackett. ",
    currentYear,
    "."
  ] }) });
}
function HomeView() {
  return /* @__PURE__ */ jsxs("div", { className: container, children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(TextContent, {}),
    /* @__PURE__ */ jsx(Metrics, {}),
    /* @__PURE__ */ jsx(Notes, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const meta = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix on Cloudflare!"
    }
  ];
};
async function loader({
  context
}) {
  const { client } = new GraphQLService(context.cloudflare.env.api);
  return await client.request(HomeViewQueryDocument);
}
function Index() {
  const context = useLoaderData();
  return /* @__PURE__ */ jsx(HomeContextProvider, { value: context, children: /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx(HomeView, {}) }) });
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index,
  loader,
  meta
}, Symbol.toStringTag, { value: "Module" }));
function NowView() {
  return /* @__PURE__ */ jsxs("div", { className: container, children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(TextContent, {}),
    /* @__PURE__ */ jsx(Metrics, {}),
    "NOW",
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function Now() {
  return /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx(NowView, {}) });
}
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Now
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DCV6IBM_.js", "imports": ["/assets/components-UlcBZXwz.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-lhg65S55.js", "imports": ["/assets/components-UlcBZXwz.js"], "css": ["/assets/root-D3gTHZ6C.css", "/assets/index.css.ts-DkaFlfod.css"] }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/contact-D2b5PvPx.js", "imports": ["/assets/components-UlcBZXwz.js", "/assets/Header-QFFj6ITS.js"], "css": ["/assets/Header-BIN18fgB.css", "/assets/index.css.ts-DkaFlfod.css"] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-g-DFnqcB.js", "imports": ["/assets/components-UlcBZXwz.js", "/assets/Footer-CKuHyCif.js", "/assets/Header-QFFj6ITS.js"], "css": ["/assets/Footer-C29AZQKI.css", "/assets/index.css.ts-DkaFlfod.css", "/assets/Header-BIN18fgB.css", "/assets/_index-CwUn9QSs.css"] }, "routes/now": { "id": "routes/now", "parentId": "root", "path": "now", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/now-Duv1ZRoR.js", "imports": ["/assets/components-UlcBZXwz.js", "/assets/Header-QFFj6ITS.js", "/assets/Footer-CKuHyCif.js"], "css": ["/assets/Header-BIN18fgB.css", "/assets/index.css.ts-DkaFlfod.css", "/assets/Footer-C29AZQKI.css"] } }, "url": "/assets/manifest-1bc20a0f.js", "version": "1bc20a0f" };
const mode = "production";
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v3_fetcherPersist": true, "v3_relativeSplatPath": true, "v3_throwAbortReason": true, "unstable_singleFetch": false, "unstable_lazyRouteDiscovery": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route2
  },
  "routes/now": {
    id: "routes/now",
    parentId: "root",
    path: "now",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
