// import 'bootstrap/dist/css/bootstrap.css';
// import buildClient from '../api/build-client';
// import Header from '../components/header';

// const AppComponent = ({ Component, pageProps, currentUser }) => {
//   return (
//     <div>
//       <Header currentUser={currentUser} />
//       <div className="container">
//         <Component currentUser={currentUser} {...pageProps} />
//       </div>
//     </div>
//   );
// };

// AppComponent.getInitialProps = async (appContext) => {
//   const client = buildClient(appContext.ctx);
//   const { data } = await client.get('/api/users/currentuser');

//   let pageProps = {};
//   if (appContext.Component.getInitialProps) {
//     pageProps = await appContext.Component.getInitialProps(
//       appContext.ctx,
//       client,
//       data.currentUser
//     );
//   }

//   return {
//     pageProps,
//     ...data,
//   };
// };

// export default AppComponent;

import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';
import Header from '../components/header';

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser || null} />
      <div className="container">
        <Component currentUser={currentUser} {...pageProps} />
      </div>
    </div>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  let pageProps = {};
  let currentUser = null;

  try {
    const { data } = await client.get('/api/users/currentuser');
    currentUser = data.currentUser;

    if (appContext.Component.getInitialProps) {
      pageProps = await appContext.Component.getInitialProps(
        appContext.ctx,
        client,
        currentUser
      );
    }
  } catch (err) {
    console.error('Error fetching current user:', err.message);
  }

  return {
    pageProps,
    currentUser,
  };
};

export default AppComponent;
