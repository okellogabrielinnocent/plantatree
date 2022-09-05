/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { UserService } from "../user.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserCreateInput } from "./UserCreateInput";
import { UserWhereInput } from "./UserWhereInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserUpdateInput } from "./UserUpdateInput";
import { User } from "./User";
import { CampaignFindManyArgs } from "../../campaign/base/CampaignFindManyArgs";
import { Campaign } from "../../campaign/base/Campaign";
import { CampaignWhereUniqueInput } from "../../campaign/base/CampaignWhereUniqueInput";
import { OrganizationFindManyArgs } from "../../organization/base/OrganizationFindManyArgs";
import { Organization } from "../../organization/base/Organization";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { TreeFindManyArgs } from "../../tree/base/TreeFindManyArgs";
import { Tree } from "../../tree/base/Tree";
import { TreeWhereUniqueInput } from "../../tree/base/TreeWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserControllerBase {
  constructor(
    protected readonly service: UserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: User })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: UserCreateInput): Promise<User> {
    return await this.service.create({
      data: {
        ...data,

        treePlantedBy: data.treePlantedBy
          ? {
              connect: data.treePlantedBy,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        phoneNumber: true,
        picture: true,
        roles: true,

        treePlantedBy: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        username: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [User] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(UserFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<User[]> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        phoneNumber: true,
        picture: true,
        roles: true,

        treePlantedBy: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        username: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        phoneNumber: true,
        picture: true,
        roles: true,

        treePlantedBy: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        username: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          treePlantedBy: data.treePlantedBy
            ? {
                connect: data.treePlantedBy,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          phoneNumber: true,
          picture: true,
          roles: true,

          treePlantedBy: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "User",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          phoneNumber: true,
          picture: true,
          roles: true,

          treePlantedBy: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Campaign",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/campaignAdapters")
  @ApiNestedQuery(CampaignFindManyArgs)
  async findManyCampaignAdapters(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Campaign[]> {
    const query = plainToClass(CampaignFindManyArgs, request.query);
    const results = await this.service.findCampaignAdapters(params.id, {
      ...query,
      select: {
        cost: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/campaignAdapters")
  async connectCampaignAdapters(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: CampaignWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      campaignAdapters: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/campaignAdapters")
  async updateCampaignAdapters(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: CampaignWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      campaignAdapters: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/campaignAdapters")
  async disconnectCampaignAdapters(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: CampaignWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      campaignAdapters: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/organizationsCreatedBy")
  @ApiNestedQuery(OrganizationFindManyArgs)
  async findManyOrganizationsCreatedBy(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Organization[]> {
    const query = plainToClass(OrganizationFindManyArgs, request.query);
    const results = await this.service.findOrganizationsCreatedBy(params.id, {
      ...query,
      select: {
        createdAt: true,

        createdBy: {
          select: {
            id: true,
          },
        },

        id: true,
        location: true,
        name: true,
        organizationEmail: true,
        organizationPhoneNumber: true,
        types: true,
        updatedAt: true,
        webSite: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/organizationsCreatedBy")
  async connectOrganizationsCreatedBy(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      organizationsCreatedBy: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/organizationsCreatedBy")
  async updateOrganizationsCreatedBy(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      organizationsCreatedBy: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/organizationsCreatedBy")
  async disconnectOrganizationsCreatedBy(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      organizationsCreatedBy: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/organizationsUser")
  @ApiNestedQuery(OrganizationFindManyArgs)
  async findManyOrganizationsUser(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Organization[]> {
    const query = plainToClass(OrganizationFindManyArgs, request.query);
    const results = await this.service.findOrganizationsUser(params.id, {
      ...query,
      select: {
        createdAt: true,

        createdBy: {
          select: {
            id: true,
          },
        },

        id: true,
        location: true,
        name: true,
        organizationEmail: true,
        organizationPhoneNumber: true,
        types: true,
        updatedAt: true,
        webSite: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/organizationsUser")
  async connectOrganizationsUser(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      organizationsUser: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/organizationsUser")
  async updateOrganizationsUser(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      organizationsUser: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/organizationsUser")
  async disconnectOrganizationsUser(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      organizationsUser: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Tree",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/treeAdapters")
  @ApiNestedQuery(TreeFindManyArgs)
  async findManyTreeAdapters(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Tree[]> {
    const query = plainToClass(TreeFindManyArgs, request.query);
    const results = await this.service.findTreeAdapters(params.id, {
      ...query,
      select: {
        campaign: {
          select: {
            id: true,
          },
        },

        condition: {
          select: {
            id: true,
          },
        },

        cost: true,
        createdAt: true,
        id: true,
        name: true,

        treeType: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/treeAdapters")
  async connectTreeAdapters(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: TreeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      treeAdapters: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/treeAdapters")
  async updateTreeAdapters(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: TreeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      treeAdapters: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/treeAdapters")
  async disconnectTreeAdapters(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: TreeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      treeAdapters: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
