const tokenUtil = require('../utils/token');

const authMiddleware = (req, res, next) => {
  const url = req.originalUrl;
  const method = req.method;
  console.log(`URL : ${url} | METHOD: ${method}`);

  // Rotas que não precisam de autenticação
  const publicRoutes = [    
    { url: '/' },
    { url: '/admin' },
    { url: '/privacy' },
    { url: '/terms' },
    { url: '/careers' },
  ];

  const isPublicRoute = publicRoutes.some(
    (route) => url === route.url && (!route.method || route.method === method)
  );

  if (isPublicRoute) {
    return next();
  }

  // Verificação do Authorization Header
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ error: true, message: 'Access token not found' });
  }

  const [scheme, token] = authHeader.split(' ');

  if (scheme !== 'Bearer' || !token) {
    return res.status(401).json({ error: true, message: 'Access token format invalid' });
  }

  try {
    const decoded = tokenUtil.verifyToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: true, message: 'Access token invalid' });
  }
};

module.exports = authMiddleware;
