from django.contrib.auth import get_user_model


@key("id")
@key("email")
class UserType(CountableDjangoObjectType):
    class Meta:
        description = "User datatype"
        # interfaces = [relay.Node, ObjectWithMetadata]
        model = get_user_model()
        only_fields = [
            "id",
            "created_at",
            "last_visit",
            "email",
            "first_name",
            "last_name",
            "is_staff",
        ]
