import graphene
from graphene_django import DjangoObjectType
import graphql_jwt
from graphql_auth.schema import UserQuery, MeQuery
import users.schema


class Query(UserQuery, MeQuery, graphene.ObjectType):
    pass


class Mutation(users.schema.AuthMutation, users.schema.Mutation, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
