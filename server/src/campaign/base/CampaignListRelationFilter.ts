/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CampaignWhereInput } from "./CampaignWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CampaignListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CampaignWhereInput,
  })
  @ValidateNested()
  @Type(() => CampaignWhereInput)
  @IsOptional()
  @Field(() => CampaignWhereInput, {
    nullable: true,
  })
  every?: CampaignWhereInput;

  @ApiProperty({
    required: false,
    type: () => CampaignWhereInput,
  })
  @ValidateNested()
  @Type(() => CampaignWhereInput)
  @IsOptional()
  @Field(() => CampaignWhereInput, {
    nullable: true,
  })
  some?: CampaignWhereInput;

  @ApiProperty({
    required: false,
    type: () => CampaignWhereInput,
  })
  @ValidateNested()
  @Type(() => CampaignWhereInput)
  @IsOptional()
  @Field(() => CampaignWhereInput, {
    nullable: true,
  })
  none?: CampaignWhereInput;
}
export { CampaignListRelationFilter };
