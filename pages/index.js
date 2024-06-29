import Suggestions from '@/components/suggestions';

export default function Home() {
    // const postSuggestions = async () => {
    //     const body = {
    //         ...suggestions[1],
    //         ['upvotes']: 100,
    //     };

    //     const header = {
    //         'Content-Type': 'application/json;charset=utf-8',
    //     };

    //     const {data} = await axios.post(
    //         'http://localhost:3001/productRequests',
    //         body,
    //         header
    //     );

    //     const {data} = await axios.put(
    //         'http://localhost:3001/productRequests/3',
    //         body,
    //         header
    //     );
    // };
    return <Suggestions />;
}

// export const getStaticProps = async ({params}) => {
//     // Fetch
//     // const data = await fetch('http://localhost:3001/productRequests');
//     // const Requests = await data.json();
//     // return { props: { Requests }, revalidate: 60 };

//     // Axios
//     const {data} = await axios.get('http://localhost:3001/productRequests');
//     const Requests = data;
//     return {props: {Requests}, revalidate: 60};
// };
