import * as ctrl from './controller';
// import * as filter from './filter';
import Router from 'koa-router';

let router = Router({ prefix: '/message' });

router.use(function (ctx, next) {
    let token = ctx.header.authorization;

    console.log(token);

    return next();
});

// router.get('/login', filter.login, ctrl.login);
// router.post('/login', ctrl.login);
// router.post('/create', ctrl.create);
// router.get('/info', ctrl.info);

router.post('/send', ctrl.send);
router.post('/pullReceive', ctrl.pullReceive);
router.post('/readed', ctrl.readed);

router.post('/removeAll', ctrl.removeAll);

export default router;