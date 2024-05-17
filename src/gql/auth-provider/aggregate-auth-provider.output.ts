import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AuthProviderCountAggregate } from './auth-provider-count-aggregate.output';
import { AuthProviderAvgAggregate } from './auth-provider-avg-aggregate.output';
import { AuthProviderSumAggregate } from './auth-provider-sum-aggregate.output';
import { AuthProviderMinAggregate } from './auth-provider-min-aggregate.output';
import { AuthProviderMaxAggregate } from './auth-provider-max-aggregate.output';

@ObjectType()
export class AggregateAuthProvider {

    @Field(() => AuthProviderCountAggregate, {nullable:true})
    _count?: AuthProviderCountAggregate;

    @Field(() => AuthProviderAvgAggregate, {nullable:true})
    _avg?: AuthProviderAvgAggregate;

    @Field(() => AuthProviderSumAggregate, {nullable:true})
    _sum?: AuthProviderSumAggregate;

    @Field(() => AuthProviderMinAggregate, {nullable:true})
    _min?: AuthProviderMinAggregate;

    @Field(() => AuthProviderMaxAggregate, {nullable:true})
    _max?: AuthProviderMaxAggregate;
}
