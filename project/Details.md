### sample register data:
{
    "id": 1,
    "password": "pbkdf2_sha256$600000$PjL6wQi9JMaH7ECSnfYO8q$op9r8kM51AhS2dw71q4QUjA9X4wh4G2A3csG/nMwQ9E=",
    "last_login": "2023-09-23T00:19:52.644363Z",
    "is_superuser": true,
    "email": "admin@admin.com",
    "first_name": "Admin",
    "last_name": "Admin",
    "is_active": true,
    "is_staff": true,
    "date_joined": "2023-09-23T00:19:14.752654Z",
    "role": "consumer",
    "age": 0,
    "gender": "",
    "phone_number": "",
    "address": "",
    "craft": "none",
    "description": "none",
    "profile_image": null,
    "gstin": "none",
    "groups": [],
    "user_permissions": []
}

#### Register Endpoint: http://127.0.0.1:8000/users/register/
#### Login Endpoint: http://127.0.0.1:8000/users/login/

sample login data:
{
    "email":"test@test.com",
    "password":"tester"
}

#### Image Endpoint: http://127.0.0.1:8000/products/productimage/?search=1 (search=1 is the product id)