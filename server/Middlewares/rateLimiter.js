import rateLimit from 'express-rate-limit';

export const rateLimiter_10min_10req = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 1000,
  message: 'Too many requests from this IP, please try again later.',
});

export const rateLimiter_10min_100req = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 10000,
  message: 'Too many requests from this IP, please try again later.',
});
