// import {Jost} from '@next/font/google';
// const jost = Jost({weight: ['400', '600', '700'], subsets: ['latin']});
import Head from 'next/head';
import {StateContext} from '../context/StateContext';
import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from '../themes/themes';
import {Layout} from '@/layout';

export default function App({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>Product Feedback - Frontend Mentor</title>
                <meta
                    name="description"
                    content="Frontend Mentor Challenge Product Feedback"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <StateContext>
                {/* <Layout> */}
                <Component {...pageProps} />
                {/* </Layout> */}
            </StateContext>
        </>
        // </>
        // <div className={jost.className}>
        //     {/* <ThemeProvider> */}
        //     <GlobalStyles />
        //     <Component {...pageProps} />
        //     {/* </ThemeProvider> */}
        // </div>
    );
}
