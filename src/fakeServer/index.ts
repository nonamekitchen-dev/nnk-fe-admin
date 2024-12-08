// only install the mocks once
// this is necessary with react@18 in StrictMode
let fakeServer: any;

export default () => {
    if (!fakeServer) {
        fakeServer = import('./rest').then(factory =>
            factory.default()
        );
    }
    return fakeServer;
}
