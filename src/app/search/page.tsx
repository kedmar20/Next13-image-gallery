//"use client"
//good old way to fetching data -> html,js and by clientside fetching data; not optimal but without reload page

import SearchPageCC from "./SearchPage";

export const metadata = {
   //metadata can be export from ServerComponent; not working with ClientComponent but "use client" must be at the top of the ClientComponent and make it then a ClientComponent; so we must create separate a file with CC and this we leave as SC
   title: "Search Page",
};

export default function SearchPageSC() {
   return <SearchPageCC></SearchPageCC>;
}
