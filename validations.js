import {body} from 'express-validator';


export const loginValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Пароль должен быть минимум 6 символов').isLength({min: 6}),
];


export const registerValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Пароль должен быть минимум 6 символов').isLength({min: 6}),
    body('nickName', 'Неверное указан ник').isLength({min: 3}),
    body('avatarUrl', 'Неверная ссылка на аватарку').optional().isURL(),
];

export const postCreateValidation = [
    body('title', 'Введите заголовок статьи').isLength({ min: 5 }).isString(),
    body('rating', 'Пароль должен быть минимум 6 символов').isInt(),
    body('tag', 'Пароль должен быть минимум 6 символов').isLength({ min: 1, max: 15}).isString(),
    body('text', 'Введите заголовок статьи').isLength({min: 6}).isString(),
    body('imageUrl', 'Неверная ссылка на изображение').optional().isString(),
];