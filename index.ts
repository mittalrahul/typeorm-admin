import app from "./middleware/typeorm-admin";
import adminWebapp from "./middleware/webapp";
export default function(authCheck: Function, login: Function, logout: Function, routePrefix="/admin") {
    app.post(`${routePrefix}/login`, login);
    
    app.use(authCheck);
    
    app.get(`${routePrefix}/logout`, logout);

    app.use(routePrefix, adminWebapp(routePrefix));
    
    return app;
};

export {EntityAdmin} from "./decorators/EntityAdmin";
export {ColumnAdmin} from "./decorators/ColumnAdmin";
