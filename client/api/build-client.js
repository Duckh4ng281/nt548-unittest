// import axios from 'axios';

// export default ({ req }) => {
//   if (typeof window === 'undefined') {
//     // We are on the server

//     return axios.create({
//       baseURL:
//       //  'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
//       'http://k8s-default-ingresss-af03e77447-688612304.ap-southeast-1.elb.amazonaws.com',
//       headers: {
//         ...req.headers,
//         Host: 'ticketselling-demo.dev', // Explicitly set the Host header
//       },
//     });
//   } else {
//     // We must be on the browser
//     return axios.create({
//       baseURL: '/',
//     });
//   }
// };

import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // Server-side Axios instance
    const { headers } = req;
    const { host, connection, ...safeHeaders } = headers; // Exclude problematic headers

    return axios.create({
      baseURL: 'http://k8s-default-ingresss-af03e77447-688612304.ap-southeast-1.elb.amazonaws.com',
      headers: {
        ...safeHeaders,
        Host: 'ticketselling-demo.dev', // Match the ALB ingress hostname
      },
    });
  } else {
    // Client-side Axios instance
    return axios.create({
      baseURL: '/', // Relative path for client-side requests
    });
  }
};
