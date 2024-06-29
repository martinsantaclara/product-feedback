import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    useRef,
} from 'react';
import {ThemeProvider} from 'styled-components';
import {GlobalStyles, lightTheme, darkTheme} from '../themes/themes';
import data from '../data.json';

const getGrouped = (Requests) => {
    // const result = Requests.group(({status}) => status);
    // return result;
    // const [username, setUsername] = useLocalStorage('name', '');

    const result = Requests.reduce((acc, req) => {
        let qtyComments = 0;

        if (req.hasOwnProperty('comments')) {
            qtyComments += req.comments.length;
            req.comments.map((comment) => {
                if (comment.hasOwnProperty('replies'))
                    qtyComments += comment.replies.length;
            });
        }
        const newReq = {
            ...req,
            ['qtyComments']: qtyComments,
            ['active']: false,
        };
        if (acc.hasOwnProperty(req.status)) {
            acc[req.status] = [...acc[req.status], newReq];
        } else {
            acc[req.status] = [newReq];
        }
        return acc;
    }, {});

    // console.log(username);

    return result;
};

const fetchRequests = (requests) => {
    // let maxCommentId = 0;
    // let maxRequestId = 0;
    const result = requests.map((req) => {
        // maxRequestId = maxRequestId > req.id ? maxRequestId : req.id;
        let qtyComments = 0;
        if (req.hasOwnProperty('comments')) {
            qtyComments += req.comments.length;
            req.comments.map((comment) => {
                // maxCommentId =
                //     comment.id > maxCommentId ? comment.id : maxCommentId;

                if (comment.hasOwnProperty('replies'))
                    qtyComments += comment.replies.length;
            });
        }
        return {
            ...req,
            ['qtyComments']: qtyComments,
            ['active']: false,
        };
    });
    const orderedRequests = result.sort((r1, r2) => r2.upvotes - r1.upvotes);
    // setMaxRequestId(maxRequestId);
    // setMaxCommentId(maxCommentId);
    return orderedRequests;
};

const useWidth = () => {
    const [width, setWidth] = useState(0);
    const handleResize = () => setWidth(window.innerWidth);
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return width;
};

const getRequestsQty = (requests) => {
    const result = requests.reduce(
        (acc, req) => {
            switch (req.status) {
                case 'planned':
                    acc[0] += 1;
                    break;
                case 'in-progress':
                    acc[1] += 1;
                    break;
                case 'live':
                    acc[2] += 1;
                    break;
                default:
                    break;
            }
            return acc;
        },
        [0, 0, 0]
    );
    return result;
};

const getMaxValues = (requests) => {
    //with map
    let maxCommentId = 0;
    let maxRequestId = 0;
    requests.map((req) => {
        maxRequestId = maxRequestId > req.id ? maxRequestId : req.id;
        if (req.hasOwnProperty('comments')) {
            req.comments.map((comment) => {
                maxCommentId =
                    comment.id > maxCommentId ? comment.id : maxCommentId;
            });
        }
    });
    return {maxCommentId: maxCommentId, maxRequestId: maxRequestId};

    // with reduce
    // const result = requests.reduce(
    //     (acc, curr) => {
    //         acc.maxRequestId =
    //             acc.maxRequestId > curr.id ? acc.maxRequestId : curr.id;
    //         if (curr.hasOwnProperty('comments')) {
    //             curr.comments.map((comment) => {
    //                 acc.maxCommentId =
    //                     comment.id > acc.maxCommentId
    //                         ? comment.id
    //                         : acc.maxCommentId;
    //             });
    //         }
    //         return acc;
    //     },
    //     {maxCommentId: 0, maxRequestId: 0}
    // );
    // console.log(Date.now());
    // return result;
};

const Context = createContext();
const DeviceContext = createContext();
const RequestContext = createContext();

export const StateContext = ({children}) => {
    const [darkMode, setDarkmode] = useState(null);
    const [maxCommentId, setMaxCommentId] = useState(0);
    const [maxRequestId, setMaxRequestId] = useState(0);

    const [grouped, setGrouped] = useState(() =>
        getGrouped(data['productRequests'])
    );

    const currentUser = data['currentUser'];

    const [requests, setRequests] = useState(() =>
        fetchRequests(data['productRequests'])
    );
    const [suggestions, setSuggestions] = useState([]);
    const [requestsQty, setRequestsQty] = useState(() =>
        getRequestsQty(requests)
    );

    const [planned, setPlanned] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [live, setLive] = useState([]);

    const [selectedOrder, setSelectedOrder] = useState('Most Upvotes');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedStatus, setSelectedStatus] = useState('in-progress');

    const [mobile, setMobile] = useState(true);
    const [tablet, setTablet] = useState(false);
    const [desktop, setDesktop] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);
    const windowWidth = useWidth();

    useEffect(() => {
        let result;
        if (!localStorage.getItem('requests')) {
            console.log('no local storage');

            // result = [
            //     grouped['suggestion'],
            //     grouped['planned'],
            //     grouped['in-progress'],
            //     grouped['live'],
            // ];
            localStorage.setItem('requests', JSON.stringify(requests));

            // localStorage.setItem('suggestions', JSON.stringify(result[0]));
            // localStorage.setItem('planned', JSON.stringify(result[1]));
            // localStorage.setItem('inProgress', JSON.stringify(result[2]));
            // localStorage.setItem('live', JSON.stringify(result[3]));
        } else {
            console.log('si local storage');
            const requests = JSON.parse(localStorage.getItem('requests'));
            const maxValues = getMaxValues(requests);
            console.log(maxValues);
            setMaxCommentId(maxValues.maxCommentId);
            setMaxRequestId(maxValues.maxRequestId);
            setRequests(requests);
            // result = [
            //     JSON.parse(localStorage.getItem('suggestions')),
            //     JSON.parse(localStorage.getItem('planned')),
            //     JSON.parse(localStorage.getItem('inProgress')),
            //     JSON.parse(localStorage.getItem('live')),
            // ];
        }
        // setSuggestions(result[0]);
        // setPlanned(result[1]);
        // setInProgress(result[2]);
        // setLive(result[3]);
    }, []);

    useEffect(() => {
        const themeLocalStorage = window.localStorage.getItem('theme');
        if (themeLocalStorage !== null) {
            setDarkmode(themeLocalStorage === 'dark');
        } else {
            setDarkmode(
                window.matchMedia &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches
            );
        }

        const modeMe = (e) => {
            const dark = !!e.matches;
            setDarkmode(dark);
            window.localStorage.setItem('theme', dark ? 'dark' : 'light');
        };
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', modeMe);
        return window
            .matchMedia('(prefers-color-scheme: dark)')
            .removeEventListener('change', modeMe);
    }, []);

    useEffect(() => {
        const sWidth = window.innerWidth;
        const wWidth = windowWidth === 0 ? sWidth : windowWidth;
        setMobile(wWidth < 768);
        setTablet(wWidth >= 768 && wWidth < 1440);
        setDesktop(wWidth >= 1440);
        setScreenWidth(wWidth);
        // console.log('menor a 500 - 90%');
        // setWidth('90%');
        // console.log('mayor a 500 - 36.6rem');
        // setWidth('36.6rem');
    }, [windowWidth]);

    const setThemeLocalStorage = () => {
        const dark = !darkMode;
        window.localStorage.setItem('theme', dark ? 'dark' : 'light');
        setDarkmode(dark);
    };
    return (
        <div>
            {darkMode !== null && (
                <Context.Provider
                    value={{darkMode, setDarkmode, setThemeLocalStorage}}
                >
                    <ThemeProvider theme={lightTheme}>
                        <DeviceContext.Provider
                            value={{
                                mobile,
                                tablet,
                                desktop,
                                screenWidth,
                            }}
                        >
                            <RequestContext.Provider
                                value={{
                                    grouped,
                                    setGrouped,
                                    currentUser,
                                    requests,
                                    setRequests,
                                    requestsQty,
                                    suggestions,
                                    setSuggestions,
                                    planned,
                                    setPlanned,
                                    inProgress,
                                    setInProgress,
                                    live,
                                    setLive,
                                    selectedOrder,
                                    setSelectedOrder,
                                    selectedCategory,
                                    setSelectedCategory,
                                    selectedStatus,
                                    setSelectedStatus,
                                    maxCommentId,
                                    setMaxCommentId,
                                    maxRequestId,
                                    setMaxRequestId,
                                }}
                            >
                                <GlobalStyles />
                                {children}
                            </RequestContext.Provider>
                        </DeviceContext.Provider>
                    </ThemeProvider>
                </Context.Provider>
            )}
        </div>
    );
};

export const useStateContext = () => useContext(Context);
export const useDeviceContext = () => useContext(DeviceContext);
export const useRequestContext = () => useContext(RequestContext);
