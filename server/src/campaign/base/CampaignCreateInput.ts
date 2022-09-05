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
import { UserCreateNestedManyWithoutCampaignsInput } from "./UserCreateNestedManyWithoutCampaignsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { TreeCreateNestedManyWithoutCampaignsInput } from "./TreeCreateNestedManyWithoutCampaignsInput";
@InputType()
class CampaignCreateInput {
  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutCampaignsInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutCampaignsInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutCampaignsInput, {
    nullable: true,
  })
  adapter?: UserCreateNestedManyWithoutCampaignsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  cost?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => TreeCreateNestedManyWithoutCampaignsInput,
  })
  @ValidateNested()
  @Type(() => TreeCreateNestedManyWithoutCampaignsInput)
  @IsOptional()
  @Field(() => TreeCreateNestedManyWithoutCampaignsInput, {
    nullable: true,
  })
  trees?: TreeCreateNestedManyWithoutCampaignsInput;
}
export { CampaignCreateInput };
