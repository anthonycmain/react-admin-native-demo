import { Permission } from '../types';
import { getPermissionsFromCache } from './getPermissions';

// FIXME: This should be exported from the ra-core package
type CanAccessParams<
    RecordType extends Record<string, any> = Record<string, any>,
> = {
    action: string;
    resource: string;
    record?: RecordType;
};

export const canAccess = async <
    RecordType extends Record<string, any> = Record<string, any>,
>(
    role: string,
    params: CanAccessParams<RecordType>
) => {
    const permissions = await getPermissionsFromCache(role);

    if (role === 'admin') {
        return true;
    }

    // Check if there's a matching permission row
    const hasPermission = permissions.some((permission: Permission) => {
        // Check if the resource matches
        if (
            permission.resource.toLowerCase() !== params.resource.toLowerCase()
        ) {
            return false;
        }

        // Return if permission is explicitly denied
        if (permission.type?.toLowerCase() === 'deny') return false;

        // Split the actions string and check if it includes the requested action
        const allowedActions = permission.action
            .split(',')
            .map((a: string) => a.trim().toLowerCase());
        return allowedActions.includes(params.action.toLowerCase());
    });

    return hasPermission;
};
