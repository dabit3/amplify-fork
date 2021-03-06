export default class Amplify {
    private static _components;
    private static _config;
    static Auth: any;
    static Analytics: any;
    static API: any;
    static Storage: any;
    static I18n: any;
    static Cache: any;
    static PubSub: any;
    static Logger: any;
    static ServiceWorker: any;
    static register(comp: any): void;
    static configure(config: any): {};
    static addPluggable(pluggable: any): void;
}
