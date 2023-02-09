from graphene import ObjectType, Schema
from graphql_auth.schema import UserQuery, MeQuery
import users.schema

# from graphene_django import DjangoObjectType
# import graphql_jwt


class Query(UserQuery, MeQuery, ObjectType):
    pass


class Mutation(users.schema.AuthMutation, users.schema.Mutation, ObjectType):
    pass


schema = Schema(query=Query, mutation=Mutation)
