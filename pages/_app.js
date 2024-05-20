import "../styles/globals.css";
import localFont from 'next/font/local';
import { Cantarell, Encode_Sans, Poppins, Sora } from 'next/font/google';

const cantarell = Cantarell({
    variable: '--cantarell',
    weight: ['400', '700'],
    subsets: ['latin-ext']
})

const encodeSans = Encode_Sans({
    variable: '--encode-sans',
    weight: ['400', '700'],
    subsets: ['latin-ext']
})

const poppins = Poppins({
    variable: '--poppins',
    weight: ['400', '700'],
    subsets: ['latin-ext']
})

const sora = Sora({
    variable: '--sora',
    weight: ['400', '700'],
    subsets: ['latin-ext']
})

export default function MyApp({ Component, pageProps }) {
    return (
        <main className={sora.className} >
          <Component {...pageProps} />
        </main>
    );
}