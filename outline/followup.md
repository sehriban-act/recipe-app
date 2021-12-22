styled component, axios,and  ? installed
src folder created like src.pdf
styled.js pages are ready for each pages used styled components

navbar compoonent :   {<Logo to="/">} style .js Logo=styled(Link) to is used for link
    menu links hamburger menu are created 

appRouter js: navbar componenet and pages are imported,routes used for navigation. link and pages connected with route

app.js :approuter imported

header.js: header and searching form for searchin and selection API den veri cekmeli data has to call from home.js

home.js: selectbox options defined as an array (edemam website SIGNUP API KEY AND ID ) to not to get all data from the site need to filter some words searching query with state, url defined and axious.get used , useEffect gets data, header takes props for form.js to use data, input onchange event will take what is written to input and wil put in query, same thing for select menu, for button onclick will bring data

details.js: take props from cardComp.js. details navigated then should use useLocate in detail to take info