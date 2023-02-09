from .base import *

DEBUG = True

CORS_ORIGIN_ALLOW_ALL = True

INSTALLED_APPS += [
    'debug_toolbar',
]

MIDDLEWARE += ['debug_toolbar.middleware.DebugToolbarMiddleware', ]

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

ACCOUNT_EMAIL_VERIFICATION = 'none'

DEBUG_TOOLBAR_CONFIG = {
    'JQUERY_URL': '',
}
