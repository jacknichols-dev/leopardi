import '../styles/globals.scss';
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import Image from 'next/legacy/image';
// import { Analytics } from '@vercel/analytics/react';

// function Loading() {
//   const router = useRouter();

//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const handleStart = (url) => url !== router.asPath && setLoading(true);
//     const handleComplete = (url) =>
//       url === router.asPath &&
//       setTimeout(() => {
//         setLoading(false);
//       }, 600);

//     router.events.on('routeChangeStart', handleStart);
//     router.events.on('routeChangeComplete', handleComplete);
//     router.events.on('routeChangeError', handleComplete);

//     return () => {
//       router.events.off('routeChangeStart', handleStart);
//       router.events.off('routeChangeComplete', handleComplete);
//       router.events.off('routeChangeError', handleComplete);
//     };
//   });

//   return (
//     loading && (
//       <div className="spinner-wrapper">
//         <div className="spinner"></div>
//         <Image
//           src="/assets/leopardi-icon.png"
//           alt="icon"
//           width={50}
//           height={27}
//         />
//       </div>
//     )
//   );
// }
function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const loader = document.getElementById('globalLoader');
  //     if (loader) loader.remove();
  //   }
  // }, []);
  return (
    <>
      {/* <Loading /> */}
      <Component {...pageProps} />
      {/* <Analytics /> */}
    </>
  );
}

export default MyApp;
