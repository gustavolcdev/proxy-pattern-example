import  AppSetup  from './app-setup.ts'

class Server {
    static start(): void {
        const application = AppSetup;
        application.init();
        application.start();
    }
}

export default Server